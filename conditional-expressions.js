let a=prompt("what is your age")
a=Number.parseInt(a)
console.log(a)
console.log(typeof(a))

if(a>=18){
 console.log("a is a vlid age and allowed to vote")
}else{
 console.log("a either not a valid age or not allowed to vote")
}

//ternary operators

age=prompt("age")
console.log("you can",age<18?"not drive":"drive")
