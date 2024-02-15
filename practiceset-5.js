const prompt = require('prompt-sync')();
//q1-codewith-harry-vid-21
let num=[1,2,3,4]
let a=prompt("enter the number to be inputed in the array")
a=Number.parseInt(a)
num.push(a)
console.log(num)

//q2-codewith-harry-vid-21
arr2=[21,5,46,78,1,100,20,65,80,200]
let b;
do{
  
  b=prompt("enter the number to be inserted")
  b=Number.parseInt(b)
  arr2.push(b)
  
}while(b!=0);
console.log(arr2)

//q3-codewith-harry-vid-21
let m=arr2.filter((value)=>{
  return value%10==0
})
console.log(m)

//q4-codewith-harry-vid-21
let d= arr2.map((value)=>{
  return value*value
})
console.log(d)

//q5-codewith-harry-vid-21
arr3=[1,2,3,4,5,6,7,8,9,10]
let n=arr3.reduce((o,p)=>{
  return o*p
})
console.log(n)