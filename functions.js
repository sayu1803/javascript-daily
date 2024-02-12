//functions
const prompt = require("prompt-sync")();
function avg(x, y) {
  return Math.round((x + y) / 2);
}
let a = 12;
let b = 15;
let c = 17;
console.log("avg of a & b is ", avg(a, b));
console.log("avg of c & b is ", avg(c, b));
console.log("avg of a & c is ", avg(a, c));

const hello = () => {
  console.log("i'm gonna crack the super dream offer");
};
hello();
