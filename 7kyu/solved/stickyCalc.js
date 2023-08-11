/* 
7kyu - Frank's Sticky Calculator
https://www.codewars.com/kata/5900750cb7c6172207000054/train/javascript

Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024

tickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101
 */

function stickyCalc(operation, val1, val2) {
  const ops = {
    '+': (a1, a2) => (+("" + a1 + a2)) + a2,
    '-': (a1, a2) => (+("" + a1 + a2)) - a2,
    '*': (a1, a2) => (+("" + a1 + a2)) * a2,
    '/': (a1, a2) => (+("" + a1 + a2)) / a2
  };
  return Math.round(ops[operation](Math.round(val1), Math.round(val2)));
}

console.log(stickyCalc('+', 4, 7), 54);
console.log(stickyCalc('-', 15, 10), 1500);
console.log(stickyCalc('*', 5, 5), 275);
console.log(stickyCalc('/', 10, 7), 15);

// Note How numbers are rounded
console.log(stickyCalc('+', 4.2, 7), 54); //Output : (47) + 7 = 54 
console.log(stickyCalc('+', 4.7, 7), 64); //Output : (57) + 7 = 54

// Note that non-integer outputs are rounded
console.log(stickyCalc('/', 10, 7), 15);  //Output : (107) / 7 = 15  Not 15.2857... 
// Added to prevent flooring result to pass    
console.log(stickyCalc('/', 433, 930), 467);  