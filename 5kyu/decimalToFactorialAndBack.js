/* 
5kyu - Decimal to Factorial and Back
https://www.codewars.com/kata/54e320dcebe1e583250008fd
*/

function dec2FactString(nb) {
  let res = [], f = 1;
  while (nb > 0) {
    let k = nb % f;
    res.push(k > 9 ? String.fromCharCode(55 + k) : k)
    nb = Math.floor(nb / f++);
  }
  return res.reverse().join('');
}

function factString2Dec(str) {
  const factorial = n => n < 2 ? 1 : n * factorial(n - 1)
  return [...str].reduce((sum, v, i) => sum + (v >= 'A' ? v.charCodeAt() - 55 : +v) * factorial(str.length - i - 1), 0);
}

console.log(dec2FactString(463)); // 341010
console.log(dec2FactString(2982)); // 4041000
console.log(dec2FactString(36288000)); // A0000000000
console.log(dec2FactString(3628800054)); // 76A0000021000

console.log(' --- factString2Dec -- ');
console.log(factString2Dec("341010")); // 463
console.log(factString2Dec("76A0000021000")); // 3628800054

