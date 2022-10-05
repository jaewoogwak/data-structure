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


def checkBrackets(statement):
    lineCount = 0
    charCount = 0
    stack = Stack()
    for line in statement:
        lineCount +=1
        for ch in line:
            charCount += 1
            if ch in ('{', '[', '('):
                stack.push(ch)
            elif ch in ('}', ']', ')'):
                if stack.isEmpty():
                    # 조건 2 위반
                    return 2, lineCount, charCount
                else:
                    left = stack.pop()
                    if (ch == "}" and left != "{") or \
                        (ch == "]" and left != "[") or \
                        (ch == ")" and left != "("):
                        # 조건 3 위반
                        return 3, lineCount, charCount

    if stack.isEmpty() == True:
        return 0, lineCount, charCount
    else:
        return 1, lineCount, charCount



# filename = "ArrayStack.h"
filename = "brackettest.cpp"
infile = open(filename, "r", encoding='utf-8')
lines = infile.readlines()

infile.close()
eCode, Lcnt, ccnt = checkBrackets(lines)
print(filename, "---->", eCode)
print(" 라인 수 = ", Lcnt)
print(" 문자 수 = ", ccnt)

