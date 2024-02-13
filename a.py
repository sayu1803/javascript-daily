a=[1,12,46,46,2,334,45,45,46,46,46,5]
n=len(a)
a.sort()
print(a)
count=0
for i in range(n):
    for j in range(1,n):
        if a[i]==a[j]:
            count+=1
print(count)