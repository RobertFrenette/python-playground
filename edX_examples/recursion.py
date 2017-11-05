# Recuresive Mult
print("Running Recursive Multiplication...")
def mult(a, b):
    if b == 1:
        return a
    else:
        return a + mult(a, b-1)
print(mult(2, 5))
print("\n")


# Recuresive Factorial
print("Running Recursive Factorial...")
def fact(n):
    if n == 1:
        return 1
    else:
        return n*fact(n-1)
print(fact(4))
