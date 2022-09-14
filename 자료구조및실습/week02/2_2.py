import random


def game():
    answer = random.randint(0, 99)
    min = 0
    max = 99
    for i in range(0, 10):
        guess = int(input("숫자를 입력하세요(범위: {}~{})".format(min, max)))
        if guess == answer:
            print("정답입니다. {}번 만에 맞추셨습니다.".format(i + 1))
            break
        else:
            if guess < answer:
                print(" 아닙니다. 더 큰 숫자입니다!")
                min = guess
            else:
                print(" 아닙니다. 더 작은 숫자입니다!")
                max = guess
    print(" 게임이 끝났습니다.")


game()
