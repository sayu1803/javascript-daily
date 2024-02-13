//array-methods
arr=[1,2,3,4,5,6]
//converting arr to strimng
b=arr.toString()
console.log(typeof(b))

//join
c=arr.join("-")
console.log(c)

//pop
console.log(arr.pop())
console.log(arr)

//push add element at last
arr.push(7)
console.log(arr)

//shift $ unshift delets and add at 1st place
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)

//delete

delete(arr[2])
console.log(arr)

//concat merges 2 or more arrays
arr2=[8,9,10]
console.log(arr.concat(arr2))