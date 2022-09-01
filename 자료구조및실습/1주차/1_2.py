import time
import math;

start1 = 0
start2 = 0
end1 = 0
end2 = 0
# O(2^n)
def fib(n):
    if n==1:
        return 1
    elif n==0:
        return 0
    else:
        return fib(n-1) + fib(n-2)

# O(n)
def fib_iter(n):
    if n<2: return n
    last = 0
    current = 1
    for i in range(2 ,n+1):
        tmp = current
        current += last
        last = tmp
    return current
fibResult = fib(5)
fibIterResult = fib_iter(5)
print("Fib({}) 반복 결과 : {}".format(5, fibIterResult))
print("Fib({}) 순환 결과 : {}".format(5, fibResult))

for i in range(1,40):
    time1 = time.time()
    fib_iter(i)
    time2 = time.time()
    fib(i)
    time3=time.time()
    print("n = {} Fib 반복 : {:.1f}, Fib 순환 : {:.8f}".format(i, time2-time1, time3-time2))
