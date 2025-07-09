import os
import glob
import requests

OLLAMA_URL = 'http://localhost:11434/api/generate'
OLLAMA_MODEL = 'llama3.2:1b'
DATA_DIR = 'assets/parts'

def load_documents(data_dir=DATA_DIR):
    docs = {}
    for path in glob.glob(os.path.join(data_dir, '*.md')):
        with open(path, 'r', encoding='utf-8') as f:
            docs[os.path.basename(path)] = f.read()
    return docs

def find_relevant_docs(question, docs, top_k=2):
    question_words = set(question.lower().split())
    scored = []
    for fname, content in docs.items():
        content_words = set(content.lower().split())
        score = len(question_words & content_words)
        scored.append((score, fname, content))
    scored.sort(reverse=True)
    return [c for s, f, c in scored[:top_k] if s > 0] or [list(docs.values())[0]]

def ask_ollama(question, context, model=OLLAMA_MODEL):
    prompt = f"""
You are an AI assistant. Use the following context to answer the user's question.

Context:
{context}

Question: {question}
Answer:
"""
    response = requests.post(OLLAMA_URL, json={
        'model': model,
        'prompt': prompt,
        'stream': False
    })
    response.raise_for_status()
    return response.json().get('response', '').strip() 