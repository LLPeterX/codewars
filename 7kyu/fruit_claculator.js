/* 
7kyu - Fruit string calculator
https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

You are given a string of words and numbers. 
Extract the expression including:

- the operator: either addition ("gains") or subtraction ("loses")
- the two numbers that we are operating on
- Return the result of the calculation.

Notes:
 "loses" and "gains" are the only two words describing operators
 No fruit debts nor bitten apples = The numbers are integers and no negatives
*/

function calculate(string) {
  let [, n1, op, n2] = string.match(/(\d+).+?(loses|gains).+?(\d+)/);
  return +n1 + (op == 'loses' ? -1 : 1) * n2;
}

console.log(calculate("Panda has 48 apples and loses 4"), 44);
console.log(calculate("Jerry has 34 apples and gains 6"), 40);
console.log(calculate("Tom has 20 apples and gains 15"), 35);

// best
/* 
 function calculate(string) {
  return eval(string.match(/\d+|lose|gain/g).join("").replace("lose", "-").replace("gain", "+")) 
}

*/

/* 
function calculate(str) {
  // Add your code here:
  let [op1, op2] = str.match(/\d+/gm);    
  return /loses/.test(str) ?
    +op1 - +op2 : +op1 + +op2;
}
*/