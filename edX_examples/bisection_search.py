# Bisection Search - Square Root
print("Running Bisection Search - Square Root...")
x = 25
epsilon = 0.01
num_guesses = 0
low = 0.0
high = x
ans = (high + low) / 2.0
while abs(ans**2 - x) >= epsilon:
    print("low = ", str(low) + " high = " + str(high) + " ans = " + str(ans))
    num_guesses += 1
    if ans**2 < x:
        low = ans
    else:
        high = ans
    ans = (high + low) / 2.0
print("num_guesses = " + str(num_guesses))
print(str(ans) + " is close to the square root of " + str(x))
print("\n")


# Bisection Search - Cube Root
print("Running Bisection Search - Cube Root...")
cube = 27
epsilon = 0.01
num_guesses = 0
low = 0.0
high = cube
guess = (high + low) / 2.0
while abs(guess**3 - cube) >= epsilon:
    num_guesses += 1
    if guess**3 < cube:
        low = guess
    else:
        high = guess
    guess = (high + low) / 2.0
print("num_guesses = " + str(num_guesses))
print(str(guess) + " is close to the cube root of " + str(guess))
