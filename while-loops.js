const prompt = require('prompt-sync')();
let n= prompt("enter the no")
n=Number.parseInt(n)
let i=0
while( i<n){
  console.log("hehe")
  i++
}

//do-while
let j=0
do{
  console.log("not hehe")
  j++
}while(j<=n)