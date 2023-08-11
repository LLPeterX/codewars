/* 
7kyu - Sum of numbers from 0 to N
https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

We want to generate a function that computes the series starting from 0 and ending until the given number.

for n=6 output = "0+1+2+3+4+5+6 = 21"
*/

var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return '0=0';
    const a = Array.from({ length: count + 1 }, (_, i) => i), sum = count * (count + 1) / 2;
    return `${a.join('+')} = ${sum}`;
  };
  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21")

// best
/* 
class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
  }
}
*/