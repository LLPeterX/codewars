/* 
7kyu - Is There an Odd Bit?
https://www.codewars.com/kata/5d6f49d85e45290016bf4718/train/javascript

Return 1 when any odd bit of x equals 1; 0 otherwise.
*/

function anyOdd(x) {
  return [...x.toString(2)].reverse().find((b, i) => b === '1' && i % 2) ?? 0;
}

console.log(anyOdd(2863311530), 1);
console.log(anyOdd(128), 1);
console.log(anyOdd(131), 1);
console.log(anyOdd(2), 1);
console.log(anyOdd(24082), 1);
console.log(anyOdd(0), 0);
console.log(anyOdd(85), 0);
console.log(anyOdd(1024), 0);
console.log(anyOdd(1), 0);
console.log(anyOdd(1365), 0);

// cool

/* 
var anyOdd=x=>~~!!(x&2863311530)
*/