def swap(a, b):
    return b, a

a = 5
b = 10
print(f'Before swapping: a = {a}, b = {b}')
a, b = swap(a, b)
print(f'After swapping: a = {a}, b = {b}')