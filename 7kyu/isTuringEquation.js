/* 
7kyu - Simple Fun #384: Is Turing's Equation?
https://www.codewars.com/kata/5a1e6323ffe75f71ae000026/train/javascript


*/

function isTuringEquation(s) {
  let [a, b, c] = s.split(/\D+/).map(strNum => +[...strNum].reverse().join(''));
  return a + b === c;
}


console.log(isTuringEquation("73+42=16"), true)
console.log(isTuringEquation("5+8=13"), false)
console.log(isTuringEquation("10+20=30"), true)
console.log(isTuringEquation("0001000+000200=00030"), true)
console.log(isTuringEquation("1234+5=1239"), false)
console.log(isTuringEquation("1+0=0"), false)
console.log(isTuringEquation("7000+8000=51"), true)
console.log(isTuringEquation("0+0=0"), true)

// best

/* 
function isTuringEquation(s){
  var [a,b,c]=[...s].reverse().join('').match(/\d+/g);
  return a-c===+b;
}
*/

/* 
const isTuringEquation = s =>
  ![...s].reverse().join(``).split(/\D/).reduce((pre, val) => pre - val);
*/