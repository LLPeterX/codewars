/* 
7kyu - Digits Average
https://www.codewars.com/kata/5a32526ae1ce0ec0f10000b2

Given an integer, take the (mean) average of each pair 
of consecutive digits. Repeat this process until you have 
a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up 
(e.g. the average of 8 and 9 will be 9)
*/

/*
// first variant
function digitsAverage(n) {
  let arr = [...String(n)].map(Number);
  while (arr.length > 1) {
    let tmp = [];
    for (let i = 0; i < arr.length - 1; i++) {
      tmp.push(Math.ceil((arr[i] + arr[i + 1]) / 2));
    }
    arr = tmp;
  }
  return arr[0];
}
*/


// second variant (shoter)
function digitsAverage(n) {
  let s = [...`${n}`];
  while (s.length > 1) {
    s = s.slice(0, -1).map((v, i) => Math.ceil((+v + +s[i + 1]) / 2));
  }
  return +s[0];
}

//const digitsAverage = (n, s = [...`${n}`]) => n<10 ? n : digitsAverage(+s.slice(1));


// можно решить в одну строку!
// см. https://www.codewars.com/kata/one-line-task-digits-average



console.log(digitsAverage(246), 4);
console.log(digitsAverage(89), 9);
console.log(digitsAverage(2), 2);

console.log(digitsAverage(245), 4);
console.log(digitsAverage(345), 5);
console.log(digitsAverage(346), 5);

// best
/* 
const digitsAverage = input =>
  input > 9 ? digitsAverage(+[...`${input}`].map((val, idx, arr) => ++val + +arr[--idx] >> 1).join(``)) : input;
*/