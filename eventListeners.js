let x=function(e){
    alert("hello world1")
}
let y=function(e){
    alert("hello world2")
}
  
  
btn.addEventListener('click',x)
btn.addEventListener('click',y)
let a= prompt("enter the number")
if(a==2){
    btn.removeEventListener('click', x)
}