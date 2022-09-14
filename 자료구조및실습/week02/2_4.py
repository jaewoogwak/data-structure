def printNum(n):
    for i in range(1, n+1):
        print(i, end=" ")


def printRevNum(n):
    for i in range(n, 0, -1):
        print(i, end=" ")


printNum(10)
print()
printRevNum(10)
