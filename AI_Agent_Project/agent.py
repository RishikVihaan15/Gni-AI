import os
from groq import Groq
from dotenv import load_dotenv
from tools import math_tool, summarizer_tool
from memory import add_memory, get_memory

# Load .env
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

SYSTEM_PROMPT = """
You are an AI Student Assistant Agent.
Provide step-by-step answers.
Use tools when needed.
"""

# Tool selector
def choose_tool(user_input):

    if any(op in user_input for op in ["+", "-", "*", "/"]):
        return "math"

    elif len(user_input.split()) > 40:
        return "summary"

    return "llm"


def agent_response(user_input):

    tool = choose_tool(user_input)

    if tool == "math":
        return math_tool(user_input)

    if tool == "summary":
        return summarizer_tool(user_input)

    add_memory("user", user_input)

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            *get_memory()
        ]
    )

    output = response.choices[0].message.content
    add_memory("assistant", output)

    return output


if __name__ == "__main__":
    while True:
        user = input("You: ")
        print("Agent:", agent_response(user))
