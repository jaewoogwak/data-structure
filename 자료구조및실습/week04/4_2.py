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
    isQuote = False
    isRemark = False
    stack = Stack()
    for line in statement:
        lineCount +=1
        # print()
        for ch in line:
            # 개행 문자 발견 시 해당 라인이 주석처리된 라인인지 확인
            if ch == '\n' and isRemark == True:
                isRemark = False
                continue
                
            # 주석 발견 시 해당 라인의 괄호는 무시
            if ch == '#':
                isRemark = True
            if isRemark:
                continue
            
            else:
                # 문자열을 만나면 괄호 무시
                if ch in ('\'', '\"'):
                    # isQuote == True이면 이미 따옴표 한 짝이 나옴
                    if isQuote:
                        isQuote =  False
                        continue
                    else: isQuote = True

                if ch in ('{', '[', '(') and isQuote == False:
                    stack.push(ch)
                    charCount += 1
                elif ch in ('}', ']', ')') and isQuote == False:
                    charCount += 1
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
                else:
                    if isQuote == False:
                        charCount += 1

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

