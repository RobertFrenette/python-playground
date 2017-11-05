# Fibonacci
print("Running Fibonacci...")
def fib(x):
    if x == 0 or x == 1:
        return 1
    else:
        return fib(x-1) + fib(x-2)
for i in range(10):
    print(str(fib(i)))
