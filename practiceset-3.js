//q1 and q2 -codewith-harry-vid-12
const prompt = require("prompt-sync")();
let obj={
  harry:98,
  rohan:70,
  aakash:75,
};
for(a in obj){
  console.log("marks of " + a + " is " + obj[a])
}

//q3 -codewith-harry-vid-12
let c = 9
let b=prompt("guess the number between 1 and 10")
while(b!=c){
  console.log("try again")
  break
}if(b==c){
  console.log("congratulations")
}

//q4 -codewith-harry-vid-12
function meanofFiveNumbers(d,e,f,g,h){
  return (d+e+f+g+h)/5
}
l=prompt("enter the 1st no")
m=prompt("enter the 2nd no")
n=prompt("enter the 3rd no")
o=prompt("enter the 4th no")
p=prompt("enter the 5th no")
console.log(meanofFiveNumbers(l,m,n,o,p))
