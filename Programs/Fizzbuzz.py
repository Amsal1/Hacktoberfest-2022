print("FizzBuzz")

i = 1
while i <= 100:
    word = ""

    if i % 3 == 0:
        word += "Fizz"

    if i % 5 == 0:
        word += "Buzz"

    if word == "":
        word += str(i)

    print(word)
    i += 1