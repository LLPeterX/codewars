/* 
7kyu - Dot Calculator
https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

You have to write a calculator that receives strings for input. 
The dots will represent the number in the equation. 
There will be dots on one side, an operator, and dots again after the oparator. 
The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division

Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. 
If the result is 0, return the empty string. 
When it comes to subtraction, the first number will always be greater than or equal to the second number.
*/

function dotCalculator(equation) {
  const [left, op, right] = equation.split(' ');
  let l = left.length, r = right.length, res = 0;
  if (op === '+') res = l + r;
  else if (op === '-') res = l - r;
  else if (op === '*') res = l * r;
  else res = Math.floor(l / r);
  return '.'.repeat(res);
}

function doTest(a1, a2) {
  console.log(`res=${dotCalculator(a1)} exp=${a2}`);
}

doTest("..... + ...............", "....................");
doTest("..... - ...", "..");
doTest("..... - .", "....");
doTest("..... * ...", "...............");
doTest("..... * ..", "..........");
doTest("..... // ..", "..");
doTest("..... // .", ".....");
doTest(". // ..", "");
doTest(". - .", "");