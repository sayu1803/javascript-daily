//loops-with-array

num=[1,2,3,4,5,6,7,7,8,9]
for(let i=0;i<num.length;i++){
  console.log(num[i])
}

num.forEach((element)=>{
  console.log(element*element)
})

//array.from used to create an array from a object

let arr="sayu"
let arr2=Array.from(arr)
console.log(arr2)

//for-of-loop
for(let i in arr){
  console.log(arr[i])
}