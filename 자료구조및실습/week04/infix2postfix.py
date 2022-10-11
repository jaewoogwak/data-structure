class Stack:
    def __init__(self):
        self.top = []

    def display(self):
        print(self.top)
        
    def isEmpty(self):
        return len(self.top) == 0
    
    def size(self):
        return len(self.top)

    def clear(self):
        self.top = []

    def push(self, item):
        self.top.append(item)

    def pop(self):
        if not self.isEmpty():
            return self.top.pop(-1)
    
    def peek(self):
        if not self.isEmpty():
            return self.top[-1]

# A B / C *
# A B C * + D E / -
# X Y + W Z * - V /
# A B / C * D - E +
# A B C + * D E - /

def p(op):
    if op == '(' or op == ')': return 0
    elif op == '+' or op == '-': return 1
    elif op == '*' or op == '/': return 2
    else: return -1

def infix2Postfix(expr):
    s = Stack()
    output = []
    for term in expr:
        if term in "(":
            s.push('(')
        elif term in ')':
            while not s.isEmpty():
                op = s.pop()
                if op == '(': break
                else:
                    output.append(op)
        elif term in "+-*/":
            while not s.isEmpty():
                op = s.peek()
                if p(term) <= p(op):
                    output.append(op)
                    s.pop()
                else: break

            s.push(term)
        else:
            output.append(term)

    while not s.isEmpty():
        output.append(s.pop())
    
    return output

infix1 = ['A', '/', 'B', '*', 'C','-', 'D', '+', 'E']

postfix1 = infix2Postfix(infix1)
print(infix1)
print(postfix1)
