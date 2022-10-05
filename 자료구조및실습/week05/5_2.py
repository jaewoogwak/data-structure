MAX_SIZE = 10

class CircularQueue:
    def __init__(self):
        self.front = 0
        self.rear = 0
        self.items = [None] * MAX_SIZE
    
    def isEmpty(self):
        return self.front == self.rear

    def isFull(self):
        return self.front == (self.rear + 1) % MAX_SIZE

    def clear(self):
        self.front = self.rear
    
    def enqueue(self, value):
        if not self.isFull():
            self.rear = (self.rear + 1) % MAX_SIZE
            self.items[self.rear] = value
        
    
    def dequeue(self):
        if not self.isEmpty():
            self.front = (self.front + 1) % MAX_SIZE
            return self.items[self.front]

    
    def peek(self):
        if not self.isEmpty():
            return self.items[(self.front + 1) % MAX_SIZE]

    
    def size(self):
        return (self.rear - self.front + MAX_SIZE) % MAX_SIZE

    def display(self):
        out = []
        if self.front < self.rear:
            out = self.items[self.front+1:self.rear+1]
        
        else:
            out = self.items[self.front + 1:MAX_SIZE] + self.items[0:self.rear+1]

        print("[f=%s, r=%d] ==> "%(self.front, self.rear), out)

class CircularDeque(CircularQueue):
    def __init__(self):
        super().__init__()
    
    def addRear(self, item):
        self.enqueue(item)
    
    def deleteFront(self):
        return self.dequeue()
    
    def getFront(self):
        return self.peek()

    def addFront(self, item):
        if not self.isFull():
            self.items[self.front] = item
            self.front = self.front - 1
            if self.front < 0: self.front = MAX_SIZE - 1
    
    def deleteRear(self):
        if not self.isEmpty():
            item = self.items[self.rear]
            self.rear = self.rear-1
            if self.rear < 0:
                self.rear = MAX_SIZE -1
            return item
    
    def getRear(self):
        return self.items[self.rear]

# f r
# -1 1
dq = CircularDeque()
for i in range(9):
    if i%2==0: dq.addRear(i)
    else: dq.addFront(i)

dq.display()

for i in range(2): dq.deleteFront()
for i in range(3): dq.deleteRear()
dq.display()
for i in range(9,14): dq.addFront(i)
dq.display()
