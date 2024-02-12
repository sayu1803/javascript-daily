const prompt = require("prompt-sync")();
//q1-codewith-harry-vid-8
let age = prompt("age");
if (age >= 10 && age < 20) {
  console.log("yes");
} else {
  console.log("no");
}

//q2-codewith-harry-vid-8
let age2 = prompt("age");
switch (age2) {
  case "12":
    console.log("haha");
    break;
  case "14":
    console.log("hehe");
    break;
  case "16":
    console.log("hehe");
    break;
  case "18":
    console.log("hehe");
    break;
  default:
    console.log("not hehe");
}

//q3-codewith-harry-vid-8
let num = prompt("enter the number ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("yes");
} else {
  console.log("no");
}
//q4-codewith-harry-vid-8
let num2 = prompt("enter the number ");
num = Number.parseInt(num2);
if (num2 % 2 == 0 || num2 % 3 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
//q5-codewith-harry-vid-8
console.log("you can ", age > 18 ? "drive" : "not drive");
