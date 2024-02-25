const prompt = require('prompt-sync')();
//guess the number
const num = Math.floor(Math.random() * 100) + 1;
console.log("guess the num game for every wrong guess 1 point would be deducted from ur total score u would get hints like higher lower close etc ENJOYYYYY")
let point=100

do{
  a= prompt("guess the num between 1-100: ")
  if(a==num){
    console.log("correct guess Points: "+point)
    break
  
  }else if(a>num-3 && a<num+3){
    console.log("close")
  }
  else if(a>num){
    console.log("lower")
  }
  else if(a<num){
    console.log("Higher")
  }
  point-=1
  console.log("current point:"+point)
}while(point>0);