/* 
7kyu - Combine objects
https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

Your task is to write a function that takes two or more objects 
and returns a new object which combines all the input objects.

All input object properties will have only numeric values. 
Objects are combined together so that the values of matching keys are added together.
*/

function combine() {
  const res = {};
  for (let o of arguments) {
    for (let k of Object.keys(o)) {
      res[k] = (res[k] || 0) + (o[k] || 0);
    }
  }
  return res;
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

console.log(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })

// best
/* const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
}, {}); */