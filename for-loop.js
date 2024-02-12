const prompt = require('prompt-sync')();
for (let i=1;i<5;i++){
  console.log("hehe")
}
//program to ad 1st n natural numbers
let sum=0
n=prompt("enter n")
for(let j=1;j<=n;j++){
  sum+=j
}
console.log(sum)

//for-in-loop

let obj={
  sayu:100,
  shreya:90,
  meghna:98,
  rahul:48,
};

for (let a in obj){
  console.log("marks of "  + a + "is" + obj[a])
}
//for-of
for (let b of "SAYU"){
  console.log(b)
}