const prompt = require('prompt-sync')();
//q1-codewith-harry-vid-29
let age=prompt("enter the age:")
age=Number.parseInt
if(age>=18){
  alert("you can drive")
}else{
  alert("you can not drive")
}

//q2-codewith-harry-vid-29

let agee=prompt("enter the age:")
agee=Number.parseInt
let runAgain=true
while(
  if(agee >=18){
    alert("you can drive")
  }else{
    alert("you can not drive")
  }
  runAgain=confirm("do you want to run again")
)