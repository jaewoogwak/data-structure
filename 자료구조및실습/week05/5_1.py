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
            out = self.items[self.front:MAX_SIZE] + self.items[0:self.rear+1]

        print("[f=%s, r=%d] ==> "%(self.front, self.rear), out)

q = CircularQueue()
for i in range(8): q.enqueue(i)
q.display()
for i in range(5): q.dequeue()
q.display()
for i in range(8,14): q.enqueue(i)
q.display()
