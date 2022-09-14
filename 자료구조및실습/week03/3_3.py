# 보너스 문제

from operator import indexOf


class Polynomial:
    def __init__(self):
        self.coef = []


    def read(self):
        deg = list(map(float, input('최고차항부터 차수를 순서대로 입력하시오 : ').split()))
        self.coef = list(reversed(deg))


    def degree(self):
        return len(self.coef) - 1


    def display(self, msg = "f(x) = "):
        print("   ", msg, end = '')
        for i in reversed(self.coef):
            if i != 0:
                if indexOf(self.coef, i) != 0:
                    if indexOf(self.coef, i) == len(self.coef)-1:
                        print("{}x^{} ".format(i, indexOf(self.coef, i)) , end = ' ')
                    else:
                        if i > 0:
                            print(" + {}x^{} ".format(i, indexOf(self.coef, i)) , end = ' ')
                        else:
                            print("- {}x^{}".format(-i, indexOf(self.coef, i)) , end = ' ')
                else:
                    if i > 0:
                        print(" + {}".format(i))
                    else:
                        print(" - {}".format(-i))


    def add(self, rhs):
        p = Polynomial()
    
        for i in range(0, min(len(self.coef), len(rhs.coef))):
            p.coef.append(self.coef[i] + rhs.coef[i])

        if len(self.coef) > len(rhs.coef):
            for i in range(len(self.coef)-1 , len(self.coef) - len(rhs.coef) + 1, -1):
                p.coef.append(self.coef[i])

        else:
            for i in range(len(rhs.coef)-1, len(rhs.coef) -len(self.coef) + 1, -1):
                p.coef.append(rhs.coef[i])

        return p


    def sub(self, rhs):
        p = Polynomial()
    
        for i in range(0, min(len(self.coef), len(rhs.coef))):
            p.coef.append(self.coef[i] - rhs.coef[i])

        if len(self.coef) > len(rhs.coef):
            for i in range(len(self.coef)-1 , len(self.coef) - len(rhs.coef) + 1, -1):
                p.coef.append(self.coef[i])

        else:
            for i in range(len(rhs.coef)-1, len(rhs.coef) -len(self.coef) + 1, -1):
                p.coef.append(-rhs.coef[i])

        return p        


    def multiply(self, rhs):
        answer = Polynomial()
        terms = []
        subs = []
        cnt = 0

        for i in self.coef:
            for j in range(0, cnt):
                subs.append(0)
            cnt += 1    
            for j in rhs.coef:
                subs.append(i * j); 
            for j in range(0, (self.degree() + rhs.degree() + 1) - len(subs)):
                subs.append(0)

            terms.append(subs)
            subs = []
        
        for i in range(0, len(terms[0])):
            answer.coef.append(terms[0][i] + terms[1][i] + terms[2][i])

        return answer

    
    def negation(self):
        p = Polynomial()
        for i in self.coef:
            p.coef.append(i * -1)
        return p
    

    def eval(self, x):
        answer = 0
        degree = self.degree()
        for i in reversed(self.coef):
            answer += i * (x ** degree)
            degree -= 1
        return answer


    # 연산자 오버로딩 

    def __sub__(self, rhs):
        p = Polynomial()
    
        for i in range(0, min(len(self.coef), len(rhs.coef))):
            p.coef.append(self.coef[i] - rhs.coef[i])

        if len(self.coef) > len(rhs.coef):
            for i in range(len(self.coef)-1 , len(self.coef) - len(rhs.coef) + 1, -1):
                p.coef.append(self.coef[i])

        else:
            for i in range(len(rhs.coef)-1, len(rhs.coef) -len(self.coef) + 1, -1):
                p.coef.append(-rhs.coef[i])

        return p        
a = Polynomial()
b = Polynomial()
a.read()
b.read()
c = a.add(b)
d = a.sub(b)
e = a.multiply(b)
f = a - b
a.display("A(x) = ")
b.display("B(x) = ")
c.display("A+B = ")
d.display("A-B = ")
e.display("A*B = ")
f.display("A-B = ")
print("    B(2) = ", b.eval(2))

