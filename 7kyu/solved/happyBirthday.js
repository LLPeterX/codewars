/* 
7kyu - Happy Birthday, Darling!
https://www.codewars.com/kata/5e96332d18ac870032eb735f/train/javascript

Дано число N.
Найти такую систему счисления, чтобы M=20 или 21

Например, для N=32 система = 16, для 39 = 19 (21).
 */

//***  INCOMPLETE - не работает для оснований > 36
/* 
function womensAge(n) {
  let maxRadix = Math.min(n - 1, 36);
  for (let radix = maxRadix; radix > 1; radix--) {
    if (n.toString(radix) == '20' || n.toString(radix) == '21') {
      return [n.toString(radix), radix];
    }
  }
}
 */

/* 
function womensAge(n) {
  for (let radix = 2; radix < n; radix++) {
    if (radix === 41) {
      console.log('found!');
    }
    if (radix < 36) {
      if (n.toString(radix) == '20' || n.toString(radix) == '21') {
        return `${n}? That's just ${n.toString(radix)}, in base ${radix}!`;
      }
    } else {
      let anum = [...n.toString()].map(Number).reverse();
      let sum = 0;
      for (let i = 0; i < anum.length && i < radix; i++) {
        sum += anum[i] * Math.pow(radix, i);
      }
      if (sum === 20 || sum === 21) {
        return `${n}? That's just ${n.toString(radix)}, in base ${radix}!`;
      }
    }
  }
  return -1;
}
 */

// ниже херня
function womensAge(n) {
  for (let radix = 2; radix < n; radix++) {
    if (2 * radix === n) {
      return `${n}? That's just 20, in base ${radix}!`;
    } else if ((2 * radix) + 1 === n) {
      return `${n}? That's just 21, in base ${radix}!`;
    }
  }

}

console.log(womensAge(32), "32? That's just 20, in base 16!"); // 2*16+0
console.log(womensAge(39), "39? That's just 21, in base 19!"); // 2*19+1
console.log(womensAge(22), "22? That's just 20, in base 11!"); // 2*11+0
console.log(womensAge(65), "65? That's just 21, in base 32!"); // 2*32+1
console.log(womensAge(83), "83? That's just 21, in base 41!");

//best
/* 
function womensAge(n) {
  return `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`
}
*/

/* 
const womensAge = n => `${n}? That's just 2${n % 2}, in base ${n / 2 ^ 0}!`;
*/
