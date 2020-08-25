t = int(input())

while t > 0:
    q = int(input())
    A = []
    for i in range(0, q):
        c, v = input().split(' ')
        x = int(v)
        if c == 'A':
            A.append(x)
            A.sort()
        if c == 'I':
            for j in range(0, len(A)):
                A[j] += x
        if c == 'D':
            for j in range(0, len(A)):
                A[j] -= x
        if c == 'P':
            if x <= len(A):
                print(A[len(A)-x])
            else:
                print(-1)
    t -= 1
