/* 
7kyu - Simple Fun #17: Rounders
https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript
*/

function rounders(value) {
  for (let i = 1; i < Math.ceil(Math.log10(value)); i++) {
    value = Math.round(value / 10 ** i) * 10 ** i;
  }
  return value;
}

console.log(rounders(15), 20)

console.log(rounders(1234), 1000)

console.log(rounders(1445), 2000)

console.log(rounders(14), 10)

console.log(rounders(99), 100)

console.log(rounders(10), 10)

