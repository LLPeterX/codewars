/* 
7kyu - Noonerize Me
https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript

You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
*/

function noonerize(numbers) {
  if (!numbers || numbers.length != 2 || typeof numbers[0] != 'number' || typeof numbers[1] != 'number') {
    return "invalid array";
  }
  let arr = numbers.map(String).join(' ').replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4').split(' ');
  return Math.abs(arr[0] - arr[1]);
}

console.log(noonerize([12, 34]), 18);
console.log(noonerize([55, 63]), 12);
console.log(noonerize([357, 579]), 178);
console.log(noonerize([1000000, 9999999]), 7000001);

//best

/* 
const noonerize = numbers =>
  numbers.some(isNaN) ? `invalid array` :
    Math.abs(numbers.map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1)).reduce((pre, val) => pre - val));
*/

/* 
const noonerize = (numbers) => {
  let x, y;
  
  [x, y] = numbers.map(String);
  [x, y] = [y[0] + x.slice(1), x[0] + y.slice(1)].map(Number);
  
  return x && y ? Math.abs(x - y) : 'invalid array';
}
*/

/* 
function noonerize([a, b]) {
  if (typeof a != "number" || typeof b != "number") return "invalid array";
  [a, b] = [~~((''+b)[0] + (''+a).slice(1)), ~~((''+a)[0] + (''+b).slice(1))];
  return Math.abs(a - b);
}
*/

/* 
const noonerize=n=>typeof n[0]!="number" || typeof n[1]!="number" ? "invalid array" : ((a,b)=>Math.abs(+(a[0]+b.slice(1))- +(b[0]+a.slice(1))))(""+n[0], ""+n[1]);
*/