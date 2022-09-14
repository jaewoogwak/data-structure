tax_range = [1200, 3400, 4200, 6200]
income_tax = [0.06, 0.15, 0.24, 0.35, 0.38]


def get_tax(money):
    tax = 0
    idx = 0
    while money > 0:
        if money >= tax_range[idx]:
            tax += tax_range[idx] * income_tax[idx]
            money -= tax_range[idx]
            idx += 1
        else:
            tax += money * income_tax[idx]
            money -= money
    return tax


money = int(input("연봉을 입력하세요 --> "))
tax = get_tax(money)
income = money - tax
print("전체 세금 =", tax)
print("순수 소득 =", income)
