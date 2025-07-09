import gradio as gr
from llm_helper import load_documents, find_relevant_docs, ask_ollama

docs = load_documents()

def chat_fn(message, history):
    context = '\n\n'.join(find_relevant_docs(message, docs))
    answer = ask_ollama(message, context)
    return answer

iface = gr.ChatInterface(
    fn=chat_fn,
    title="Waste Hawk Manufacturing Chatbot",
    description="Ask questions about your parts, e.g. what parts to we have?",
    theme="default"
)

if __name__ == '__main__':
    iface.launch() 