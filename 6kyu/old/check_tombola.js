/* 
6kyu - Tombola - validation
https://www.codewars.com/kata/5898a751b2edc082f60005f4/train/javascript

Check 3D array:
+ check if the sheet is made of 3 x 9 squares;
+ check if there is a total of 15 unique numbers (> 0) over the squares 
  (empty spaces will be represented with zeros);
+ check if each of the 3 rows has 5 of the 15 numbers;
+ check if each column has from 1 to 3 numbers in increasing order 
  from top to bottom row;
+ check if each column is divided in this way 
  (inclusive, from first column to last): 
  1-9, 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-90 
  (<- careful here! 90 is included in the last range!).
*/

function check_tombola(arr) {
  if (!Array.isArray(arr) || !Array.isArray(arr[0]) ||
    arr.length !== 3 ||
    arr.some(row => row.length !== 9 || row.filter(n => n > 0).length !== 5)
  ) return false;

  let nums = new Set();
  for (let j = 0; j < 9; j++) {
    let min = j > 0 ? j * 10 : 1;
    let max = j === 8 ? 90 : min + 9;
    let col = [];
    for (let i = 0; i < 3; i++) {
      let n = arr[i][j];
      if (n > 0) {
        nums.add(n);
        if (n < min || n > max) return false;
        if (col.length && n <= col.at(-1)) return false;
        col.push(n);
      }
    }
    if (col.length === 0) return false;
  }
  if (nums.size !== 15) return false;
  return true;
}

let arr = [
  [0, 11, 20, 0, 44, 0, 60, 76, 0],
  [0, 12, 0, 34, 45, 0, 63, 0, 82],
  [2, 0, 27, 0, 48, 51, 66, 0, 0]
];

console.log("should work with valid ones");
console.log(check_tombola(arr), true);


arr = [
  [0, 16, 0, 37, 0, 54, 0, 75, 81],
  [1, 0, 28, 0, 41, 59, 0, 0, 84],
  [0, 19, 29, 0, 45, 0, 65, 0, 89]
];

console.log("should work with valid ones");
console.log(check_tombola(arr), true);


arr = [
  [0, 0, 0, 35, 0, 55, 60, 72, 86],
  [3, 0, 22, 0, 40, 58, 0, 79, 0],
  [7, 0, 25, 0, 41, 0, 65, 0, 88]
];

console.log("should NOT work with invalid ones");
console.log(check_tombola(arr), false);


arr = [
  [0, 11, 0, 0, 41, 0, 65, 70, 0],
  [0, 16, 24, 32, 48, 0, 67, 0, 90],
  [1, 0, 27, 33, 0, 59, 0, 74, 0]
];

console.log("should NOT work with invalid ones");
console.log(check_tombola(arr), false);
