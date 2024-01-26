/* 
5kyu - Smallest Multiple of 1 to n
https://www.codewars.com/kata/65ad9094c5a34200245f3a8f
*/
// from https://www.cyberforum.ru/python-tasks/thread2961388.html
// TIMEOUT!
function smallestMultiple(n) {
  let result = 1;
  let a = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 2; i <= n; i++) {
    if (a[i] > 1) {
      for (let j = i << 1; j <= n; j += i)  a[j] = (a[j] / a[i]) | 0;
      //    result *= a[i];
      result = (result * a[i]) % 1_000_000_007;
    }
  }
  //console.log(a);
  return result;
}
// ниже верно
console.log(smallestMultiple(20), 232_792_560)
console.log(smallestMultiple(81), 853_087_536)
console.log(smallestMultiple(243), 309_031_427)
// тайм-аут на больших значениях ~1e6
