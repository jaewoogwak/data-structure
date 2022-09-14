import random

list = []
for i in range(0, 10):
    rand_num = random.randint(1, 100)
    list.append(rand_num)

print("생성된 리스트 : {}".format(list))
print("리스트 모든 값들의 합 : {}".format(sum(list)))
