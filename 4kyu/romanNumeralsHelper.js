/* 
https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 */

class RomanNumerals {
  static toRoman(num) {
    let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, 
          res = '';
    for (let i in lookup) {
      while (num >= lookup[i]) {
        res += i;
        num -= lookup[i];
      }
    }
    return res;
  }

  static fromRoman(str) {
    let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let n = lookup[str[0]], prev, current;
    for (let i = 1; i < str.length; i++) {
      current = lookup[str[i]];
      prev = lookup[str[i - 1]];
      if (current <= prev) {
        n += current;
      } else {
        n = n - prev * 2 + current;
      }
    }
    return n;
  }
}