class Node:
    def __init__(self, item, link=None):
        self.data = item
        self.link = link

class LinkedStack:
    def __init__(self):
        self.top = None

    
    def isEmpty(self):
        return self.top == None
    

    def clear(self):
        self.top = None
    

    def push(self, item):
        n = Node(item, self.top)
        self.top = n

    
    def pop(self):
        if not self.isEmpty():
            n = self.top
            self.top = n.link
            return n.data

        
    def size(self):
        node = self.top
        count = 0

        while not node == None:
            node = node.link
            count += 1

        return count

    
    def display(self,str):
        print(str)
        node = self.top
        
        while not node == None:
            print(node.data)
            node = node.link
    

odd = LinkedStack()
even = LinkedStack()

for i in range(10):
    if i % 2 ==0: even.push(i)
    else: odd.push(i)

even.display('even stack') # 8 6 4 2 0
odd.display('odd stack') # 9 7 5 3 1

for _ in range(2): even.pop()
for _ in range(3): odd.pop()

even.display('even stack') # 4 2 0
odd.display('odd stack') # 3 1
