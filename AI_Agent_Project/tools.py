def math_tool(expression):
    try:
        return str(eval(expression))
    except:
        return "Invalid expression"

def summarizer_tool(text):
    return text[:120] + "..."