# Calc Square Root
print("Calculating square root...")
ans = 0
neg_flag = False
#x = int(input("Enter an integer: "))
x = 9
if x < 0:
    neg_flag = True
while ans**2 < x:
    ans = ans + 1
if ans**2 == x:
    print("The square root of", x, "is", ans, ".")
else:
    print(x, "is not a perfect square.")
    if neg_flag:
        print("Did you mean", -x, "?")
