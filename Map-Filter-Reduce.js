//map creates new array by performing some operations on each array element
let arr=[23,34,123,113]
arr.map((value,index,array)=>{
  console.log(value,index,array)
})

//filter
let arr2=[5,15,21,21,5,21,458,631,5,1,22,41,69]
let a2=arr2.filter((a)=>{
  return a>20
})
console.log(a2)


//reduce basically t=does the arithmetic ops to all elements of the list

let arr3=[21,21,54,1645,32,145]
let arr4= arr3.reduce((s1,s2)=>{
  return s1-s2
})
console.log(arr4)