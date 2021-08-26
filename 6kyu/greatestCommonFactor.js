/* 
6kyu - Greatest Common Factor of an Array
https://www.codewars.com/kata/5849169a6512c5964000016e/train/javascript
*/

function greatestCommonFactor(array) {
  let x = array[0];
  for (let i = 1; i < array.length; i++) {
    let y = array[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
};

console.log(greatestCommonFactor([1, 8]), 1, "Should return 1");
console.log(greatestCommonFactor([16, 4, 8]), 4, "Should return 4");
console.log(greatestCommonFactor([46, 14, 20, 88]), 2, "Should return 2");
console.log(greatestCommonFactor([468, 156, 806, 312, 442]), 26, "Should return 26");
console.log(greatestCommonFactor([48, 99, 18]), 3, "Should return 3");
console.log(greatestCommonFactor([32, 96, 120, 80]), 8, "Should return 8");
console.log(greatestCommonFactor([91, 143, 234, 52]), 13, "Should return 13");
console.log(greatestCommonFactor([171, 45, 297, 342]), 9, "Should return 9");

// best
/*
function greatestCommonFactor(ar){
  const gcf = (a,b) => !b ? a : gcf(b, a%b);
  return ar.reduce((a,e) => gcf(a,e));
}
*/