import os
import glob
import requests
from tqdm import tqdm

from llm_helper import load_documents, find_relevant_docs, ask_ollama

OLLAMA_URL = 'http://localhost:11434/api/generate'  # Default Ollama endpoint
OLLAMA_MODEL = 'llama3.2:1b'  # Change to 'mistral' or your preferred model if needed
DATA_DIR = 'assets/parts'

def main():
    print("Loading documents...")
    docs = load_documents()
    print(f"Loaded {len(docs)} documents.")
    print("Type your question (or 'exit' to quit):")
    while True:
        question = input("\n> ").strip()
        if question.lower() in {'exit', 'quit'}:
            break
        context = '\n\n'.join(find_relevant_docs(question, docs))
        print("\nThinking...")
        try:
            answer = ask_ollama(question, context)
            print(f"\nAnswer: {answer}")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == '__main__':
    main() 