from copy import deepcopy

class Node:
    def __init__(self, el, link=None):
        self.data = el
        self.link = link


class LinkedList:
    def __init__(self):
        self.head = None

    
    def getNode(self, pos):
        if pos < 0: return None
        node = self.head

        while pos > 0 and node != None:
            node = node.link
            pos -= 1

        return node


    def getEntry(self, pos):
        node = self.getNode(pos)
        
        if node == None:
            return None

        else: return node.data


    def insert(self, pos, el):
        if(pos > self.size()): pos = self.size()
        before = self.getNode(pos-1)
        
        # head == none이면 (맨 앞 삽입)
        if before == None:
            self.head = Node(el, self.head)

        else:
            node = Node(el, before.link)
            before.link = node
    

    def delete(self, pos):
        before = self.getNode(pos-1)

        if before == None: 
            if self.head is not None:
                self.head = self.head.link
            
        elif before.link != None:
            before.link = before.link.link


    def isEmpty(self):
        return self.head == None


    def clear(self):
        self.head = None

    
    def size(self):
        node = self.head
        count = 0

        while not node == None:
            node = node.link
            count +=1

        return count
            
    
    def display(self, str=""):
        if self.head == None:
            print(str, self.head)
    
        else:
            print(str, end = ' ')
            node = self.head
        
            while node != None:
                print(node.data, '-> ', end='')
                node = node.link
            print(None) 

class Term(Node):
    def __init__(self, coef, expo):
        self.coef = coef # 계수
        self.expo = expo # 지수(차수)
    

class SparsePoly(LinkedList):
    
    def __init__(self):
        super().__init__()
    
    
    def read(self):
        
        ip = input("계수 차수 입력(종료:-1) :").split(' ')
        # print(ip)
        for i in range(0, len(ip), 2):
            coef = int(ip[i])
            expo = int(ip[i+1])
            term = Term(coef, expo)
            self.insert(self.size(), term)


    def display(self, str=""):
        if self.head == None:
            print(str, self.head)
    
        else:
            print(str, end = '')
            node = self.head
        
            count = 0
            while node != None:
                if count != 0:
                    if node.data.expo == 0:
                        print("+ {:0.1f}".format(node.data.coef), end=' ')
                    else:
                        if node.data.coef > 0:
                            print("+ {:0.1f} x^{}".format(node.data.coef, node.data.expo), end=' ')
                        else:
                            print("{:0.1f} x^{}".format(node.data.coef, node.data.expo), end=' ')
                else:
                    if node.data.expo == 0:
                        print("+{:0.1f}".format(node.data.coef), end=' ')
                    else:
                        if node.data.coef > 0:
                            print("{:0.1f} x^{}".format(node.data.coef, node.data.expo), end=' ')
                        else:
                            print("{:0.1f} x^{}".format(node.data.coef, node.data.expo), end=' ')
                count +=1
                node = node.link
            print()


    def getPolyList(self):
        
        poly = []
        for i in range(0, self.size()):
            poly.append((self.getNode(i).data.coef,self.getNode(i).data.expo))
            
        return poly



    def add(self, polyB):
        
        # 먼저 리스트 하나로 만들기
        sp = []
        result = [] # 더한 결과 다항식
        sp.append(self.getPolyList())
        sp.append(polyB.getPolyList())
        res = sum(sp, [])
        # 리스트를 지수(차수)에 따라 정렬하기
        terms = sorted(res, key=lambda term: term[1], reverse=True)

        # 리스트 순회하면서 n, n+1의 차수가 같다면 계수끼리 더해서 새로운 항을 만들고 추가
        # n, n+1의 차수가 다르다면 그대로 두 개의 항 추가
        isContinue = False
        for i in range(0, len(terms)):
            if isContinue:
                isContinue = False
                continue
            
            # 만약 n, n+1번째 항의 차수가 같다면
            if i == len(terms) -1 and terms[i] not in result:
                result.append((terms[i][0], terms[i][1]))
                break

            if terms[i][1] == terms[i+1][1]:
                coef = terms[i][0] + terms[i+1][0]
                expo = terms[i][1]
                if (coef, expo) not in result:
                    result.append((coef, expo))
                    isContinue = True
                    
            else: # 다르면, 그냥 추가
                if terms[i] not in result:
                    result.append((terms[i][0], terms[i][1]))
                if terms[i] not in result:
                    result.append((terms[i+1][0], terms[i+1][1]))
                
            # print('terms', result)
            if i+1 == len(terms): break

        result = sorted(result, key=lambda term: term[1], reverse=True)
        addResult = SparsePoly()
        
        for term in result:
            coef = int(term[0])
            expo = int(term[1])
            term = Term(coef, expo)
            addResult.insert(addResult.size(), term)

        return addResult


    def neg(self):
        node = self.head
    
        while node != None:
            node.data.coef = -node.data.coef
            node = node.link


    def sub(self, polyB):
        polyB.neg()
        return self.add(polyB)

    
    def mult(self, polyB):
        # 2중 for문으로 항 만들기
        subTerms = SparsePoly()
        for selfTerm in self.getPolyList():
            for polyBTerm in polyB.getPolyList():
                coef = selfTerm[0] * polyBTerm[0]
                expo = selfTerm[1] + polyBTerm[1]
                newTerm = Term(coef, expo)
                subTerms.insert(subTerms.size(), newTerm)
        tmp = SparsePoly()
        result = tmp.add(subTerms)
        return result

sparsePoly = SparsePoly()
sparsePoly.read()
polyB = SparsePoly()
polyB.read()

sparsePoly.display("    A = ")
polyB.display("    B = ")

addResult = sparsePoly.add(polyB)
addResult.display("  A+B = ")

subResult = sparsePoly.sub(polyB)
subResult.display("  A-B = ")
polyB.neg()


multResult =  sparsePoly.mult(polyB)
multResult.display("  A*B = ")

# 5 2 -3 1 12 0
# 2 3 -6 2 -4 0
