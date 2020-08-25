t = int(input())

while t > 0:
    n = int(input())
    x = input().split(' ')
    s = [0]*n
    d = {}
    for i in range(n):
        s[i] = int(x[i])
    for i in range(n):
        k = 0
        for j in range(i+1, n):
            if s[i] > s[j]:
                k += 1
        print(k, end=' ')
    t -= 1
