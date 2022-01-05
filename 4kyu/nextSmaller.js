/* 
4kyu - Next smaller number with the same digits
https://www.codewars.com/kata/5659c6d896bc135c4c00021e

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

*/

/* function nextSmaller(n) {
  let arr = [...String(n)].reverse().map(Number);
  console.log(' arr=', JSON.stringify(arr));
  let x = arr.findIndex((e, i, a) => e < a[i - 1]);
  if (x < 0) return -1;
  let y = arr.findIndex((e, i) => i > x && e > arr[x]);
  if (y < 0) return -1;
  console.log(` x=${x} a[i]=${arr[x]};  y=${y} a[j]=${arr[y]}`);
  [arr[x], arr[y]] = [arr[y], arr[x]];
  console.log(' arr2=', JSON.stringify(arr));
  let res = [...arr.slice(0, y)].sort((a, b) => a - b).concat(arr.slice(y)).reverse();
  console.log(' arr3=', JSON.stringify(res));
  return +res.join('');
}
 */

function nextSmaller(n) {
  let arr = [...String(n)].map(Number);
  let x = -1, y = -1;
  // 1. Начиная справа, найдите первую цифру, которая имеет по крайней мере одну меньшую цифру справа. Мы назовем эту цифру X.
  let i = arr.length - 1;
  while (i >= 0) {
    if (arr[i] > 0 && arr[i] > arr[i + 1]) {
      x = i;
      break;
    }
    i--;
  }
  if (x < 0) return -1;
  //console.log(` x=${x} a[x]=${arr[x]}`);
  // 2. Затем найдите самую большую цифру, которая находится справа от X и меньше X. Мы назовем эту цифру Y.
  let max = -1;
  i++;
  while (arr[i] < arr[x] && i < arr.length) {
    max = Math.max(arr[i], max);
    i++;
  }
  if (i > arr.length) return -1;
  y = i - 1;
  [arr[x], arr[y]] = [arr[y], arr[x]];
  let res = arr.slice(0, x + 1).concat(arr.slice(x + 1).sort((a, b) => b - a)).join``;
  // let left = arr.slice(0, x + 1);
  // let right = arr.slice(x + 1);
  // right.sort((a, b) => b - a);
  // let res = left.concat(right).join('');

  return res.startsWith('0') ? -1 : +res;
}
console.log(nextSmaller(1262347), 1247632);
console.log(nextSmaller(135), -1);

console.log(nextSmaller(21), 12)
console.log(nextSmaller(907), 790)
console.log(nextSmaller(531), 513)
console.log(nextSmaller(135), -1)
console.log(nextSmaller(2071), 2017)
console.log(nextSmaller(1027), -1) // HUNG HERE!
console.log(nextSmaller(414), 144)

console.log('--- complex ---');
console.log(nextSmaller(123456798), 123456789)
console.log(nextSmaller(123456789), -1)
console.log(nextSmaller(1234567908), 1234567890)

//best

/* 
const nextSmaller = n => {
  let min = minify(n);
  while (--n >= min) if (minify(n) === min) return n;
  return -1;
};

const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');
*/

/* 
function nextSmaller(n) {
  var digits = ('' + n).split('');
  for (var ix = digits.length - 1; ix-- > 0;) {
    if (digits[ix + 1] < digits[ix]) {
      var tail = digits.slice(ix).sort((a, b) => b - a);
      var head = tail.splice(tail.findIndex(x => x < digits[ix]), 1);
      if (!ix && '0' == head[0]) {
        return -1;
      }
      return +digits.slice(0, ix).concat(head, tail).join('');
    }
  }
  return -1;
}
*/

/* 
const nextSmaller = (n, a = [...String(n)].map(Number)) => {
  for (let j = a.length, i = j - 1; i >= 0; i--, j--) {
    // if digit is greater than prev digit
    if (a[i] > a[j]) {
      // swap digit with next smaller digit to the right
      a[i] = a.splice(a.indexOf(Math.max(...a.slice(j).filter(n => n < a[i])), j), 1, a[i])[0];
      // concatenate left side up to same index (inclusive) + right side sorted descending
      const r = Number([...a.slice(0, j), ...a.slice(j).sort().reverse()].join(''));
      // cover leading zero case; if result is not the same # of digits as the input, return -1
      return Math.ceil(Math.log(r + 1) / Math.LN10) === a.length ? r : -1;
    }
  }
  return -1;
};
*/


/* 

const nextSmaller = n => {
  let num = Array.from(String(n), Number);
  //Prev lexicographical permutation algorithm
  let pivot = num.reduce((max,_,i) => num[i - 1] > num[i] ? i : max, 0);
  let swap  = num.reduce((max,_,i) => num[i] < num[pivot - 1] ? i : max, 0);
  [num[swap], num[pivot - 1]] = [num[pivot - 1], num[swap]];
  return pivot && num[0] ? Number(num.concat(num.splice(pivot).reverse()).join('')) : -1;
};
*/