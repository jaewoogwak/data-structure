# bag에 e가 존재하는지 검사하는 함수
def contains(bag, e):
    return e in bag

# bag에 e를 넣는 함수
def insert(bag, e):
    bag.append(e)

# bag에서 e를 삭제하는 함수
def remove(bag, e):
    bag.remove(e)

# bag의 전체 항목 수를 계산하는 함수
def count(bag):
    return len(bag)

# bag의 item의 수를 계산하는 함수
def numOf(bag, item):
    return bag.count(item)

myBag = []
tryCount = 1
insert(myBag, '휴대폰')
insert(myBag, '지갑')
insert(myBag, '손수건')
insert(myBag, '빗')
insert(myBag, '자료구조')
insert(myBag, '야구공')
print("가방 속의 물건 {}번째 시도 : {}".format(tryCount, myBag))
tryCount +=1
remove(myBag, "손수건")
insert(myBag, '빗')
print("가방 속의 물건 {}번째 시도 : {}".format(tryCount, myBag))
tryCount +=1
print("가방 속 빗의 개수 : {}".format(numOf(myBag, "빗")))
remove(myBag, "빗")
remove(myBag, "빗")
print("가방 속 {}의 개수 : {}".format("빗", numOf(myBag, "빗")))
print("가방 속 {}의 개수 : {}".format("손수건", numOf(myBag, "손수건")))
print("가방 속 {}의 개수 : {}".format("휴대폰", numOf(myBag, "휴대폰")))
insert(myBag, "휴대폰")
