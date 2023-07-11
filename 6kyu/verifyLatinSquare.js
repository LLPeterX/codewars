/* 
6kyu - Latin Square Validator
https://www.codewars.com/kata/646254375cee7a000ffaa404/train/javascript

A latin square is an n × n array filled with the integers 1 to n, 
each occurring once in each row and column.

Task:
Write a function that validates if an input array is a latin square. 
It has two parameters, the array and a positive integer m > 1. 
To help the user with debugging, it should return an appropriate message, 
as detailed below. It must not modify the input array.

Details
The input array is guaranteed to be 2D and contain only integers. 
If it is a valid latin square of size m, the function should return 
"Valid latin square of size <m>". 

Otherwise, it should return one of the following messages:
(1) If the input array is not square, the function should return "Array not square".

(2) If the input array is square, but not of size m, 
    the function should return "Array is wrong size". 
    NOTE: When the array is both not square and the wrong size, 
    (1) applies, so "Array not square" should be returned.

(3) If any value between 1 and m in the array occurs more than once 
    in a particular row, the function should identify it and its row 
    by returning "<value> occurs more than once in row <s>". 
    If there are multiple such values, only one should be identified. 
    Row indexes run from 1 to m.

(4) If any value between 1 and m in the array occurs more than once 
    in a particular column, the function should return 
    "<value> occurs more than once in column <t>". 
    If there are multiple such values, only one should be identified. 
    Column indexes run from 1 to m.

(5) If any value in the array is not between 1 and m, 
    the function should identify it and its location by returning 
    "<value> at <row,col> is not between 1 and <m>". 
    If there are multiple such values, only one should be identified.

If more than one of the above conditions occur, 
the function should return one of the appropriate messages.
*/

function verifyLatinSquare(array, m) {
  if (array.some(row => row.length !== array.length)) return "Array not square";
  if (array.length !== m) return "Array is wrong size";
  for (let i = 0; i < m; i++) {
    let visited = new Set();
    for (let j = 0; j < m; j++) {
      if (array[i][j] < 1 || array[i][j] > m) return `${array[i][j]} at ${i + 1},${j + 1} is not between 1 and ${m}`;
      if (visited.has(array[i][j])) return `${array[i][j]} occurs more than once in row ${i + 1}`;
      visited.add(array[i][j]);
    }
  }
  for (let j = 0; j < m; j++) {
    let visited = new Set();
    for (let i = 0; i < m; i++) {
      if (visited.has(array[i][j])) return `${array[i][j]} occurs more than once in column ${j + 1}`;
      visited.add(array[i][j]);
    }
  }
  return `Valid latin square of size ${m}`;
}

console.log('--valid--');
console.log(verifyLatinSquare([[3, 1, 2], [2, 3, 1], [1, 2, 3]], 3), "Valid latin square of size 3");
console.log(verifyLatinSquare([[1, 5, 3, 6, 4, 7, 2], [3, 7, 5, 1, 6, 2, 4], [7, 4, 2, 5, 3, 6, 1], [2, 6, 4, 7, 5, 1, 3], [4, 1, 6, 2, 7, 3, 5], [6, 3, 1, 4, 2, 5, 7], [5, 2, 7, 3, 1, 4, 6]], 7), "Valid latin square of size 7");
console.log(verifyLatinSquare([[11, 12, 10, 6, 2, 3, 9, 8, 5, 1, 4, 7], [1, 2, 12, 8, 4, 5, 11, 10, 7, 3, 6, 9], [12, 1, 11, 7, 3, 4, 10, 9, 6, 2, 5, 8], [4, 5, 3, 11, 7, 8, 2, 1, 10, 6, 9, 12],
[9, 10, 8, 4, 12, 1, 7, 6, 3, 11, 2, 5], [8, 9, 7, 3, 11, 12, 6, 5, 2, 10, 1, 4], [3, 4, 2, 10, 6, 7, 1, 12, 9, 5, 8, 11], [5, 6, 4, 12, 8, 9, 3, 2, 11, 7, 10, 1],
[10, 11, 9, 5, 1, 2, 8, 7, 4, 12, 3, 6], [2, 3, 1, 9, 5, 6, 12, 11, 8, 4, 7, 10], [6, 7, 5, 1, 9, 10, 4, 3, 12, 8, 11, 2], [7, 8, 6, 2, 10, 11, 5, 4, 1, 9, 12, 3]], 12), "Valid latin square of size 12");
console.log('--invalid--');

console.log(verifyLatinSquare([[1, 2], [2, 1]], 3), "Array is wrong size");
console.log(verifyLatinSquare([[1, 2, 1], [2, 1]], 2), "Array not square");
console.log(verifyLatinSquare([[1, 3, 2, 4], [3, 1, 4, 2], [2, 4, 3, 1, 2, 1], [4, 2, 1, 3]], 4), "Array not square");
console.log(verifyLatinSquare([[0, 1], [1, 2]], 2), "0 at 1,1 is not between 1 and 2");
console.log(verifyLatinSquare([[1, 3, 2, 4], [3, 1, 8, 2], [2, 4, 3, 1], [4, 2, 1, 3]], 4), "8 at 2,3 is not between 1 and 4");
console.log("---Repeating Value---");
let square = [[1, 3, 2], [3, 2, 1], [3, 1, 2]];
let messages = ["3 occurs more than once in column 1", "2 occurs more than once in column 3"];
let result = verifyLatinSquare(square, 3);
//assert(messages.includes(result), `Returned value '${result}' was not one of the ${messages.length} valid possibilities`);
console.log(result);
square = [[1, 3, 3], [3, 2, 1], [2, 1, 2]];
messages = ["3 occurs more than once in row 1", "2 occurs more than once in row 3"];
result = verifyLatinSquare(square, 3);
//assert(messages.includes(result), `Returned value ''${result}' was not one of the ${messages.length} valid possibilities`);
console.log(result);

square = [[1, 3, 2, 3], [3, 1, 4, 2], [1, 4, 3, 3], [1, 2, 4, 3]];
messages = ["3 occurs more than once in row 1", "3 occurs more than once in row 3", "3 occurs more than once in column 4", "1 occurs more than once in column 1"];
result = verifyLatinSquare(square, 4);
//assert(messages.includes(result), `Returned value '${result}' was not one of the ${messages.length} valid possibilities`);
console.log(result);

console.log("---Multiple Different Answers---");
square = [[1, 2, 3], [2, 3, 1], [1, 2, 3]];
messages = ["2 occurs more than once in column 1", "4 at 2,3 is not between 1 and 3", "Array not square"];
result = verifyLatinSquare(square, 3);
console.log(result);
