/* 
7kyu - Basic Scheme Math Interpreter
https://www.codewars.com/kata/5c1ecee170fee65c8f00049b/train/javascript

Your challenge: create a function that interprets simple scheme-like math commands and returns the value resulting from the operation. We will only be working with the four main math operators (+ - * /). The main difference between these commands and actual scheme commands is that scheme commands only accept two arguments while these commands accept infinitely many arguments so as to avoid having to nest functions with like operators.

Input: string, such as '(+ 4 3)'
Output: number
Constraints: 0-15 arguments, numbers from -15 to 15 (when dividing, those will never be 0)
Edge Cases: don't forget that no arguments results in either 0 or 1 for +/- and * respectively
 */

function scheme(cmd) {
  let arguments = cmd.slice(1, cmd.length - 1).split(' '),
    operator = arguments[0],
    i = 1,
    value = operator[0] === '*' ? 1 : 0;
  if (arguments.length > 1) {
    value = +arguments[1];
    i = 2;
  }
  for (; i < arguments.length; i++) {
    let num = +arguments[i];
    if (operator === '+') value += num;
    else if (operator === '-') value -= num;
    else if (operator === '*') value *= num;
    else if (operator === '/') value /= num;
  }
  return value;
}

console.log(scheme('(+)'), 0);
console.log(scheme('(+ 3 4)'), 7);
console.log(scheme('(-)'), 0);
console.log(scheme('(- 3 4)'), -1);
console.log(scheme('(*)'), 1);
console.log(scheme('(* 3 4)'), 12);
console.log(scheme('(/ 3 4)'), 0.75);
