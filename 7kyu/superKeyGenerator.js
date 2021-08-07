/* 
7kyu - Simple Fun #168: RSA Super Key Generator
https://www.codewars.com/kata/58b3a0d6eea87e6b76000044/train/javascript
n - длина строки. Строка должна состоять из "3" и "5", причем:
 - кол-во "5" (five) должно быть кратно 3, 
 - количество "3" (three) должно быть кратно 5
*/

function superKeyGenerator(n) {
  for (let x5 = n; x5 >= 0; x5--) {
    let x3 = n - x5;
    if (x3 % 5 === 0 && x5 % 3 === 0) {
      return '5'.repeat(x5) + '3'.repeat(x3);
    }
  }
  return '-1';
}

console.log(superKeyGenerator(1), "-1")
console.log(superKeyGenerator(2), "-1")
console.log(superKeyGenerator(3), "555")
console.log(superKeyGenerator(4), "-1")
console.log(superKeyGenerator(5), "33333")
console.log(superKeyGenerator(6), "555555")
console.log(superKeyGenerator(7), "-1")
console.log(superKeyGenerator(8), "55533333")
console.log(superKeyGenerator(15), "555555555555555")
console.log(superKeyGenerator(67), '5555555555555555555555555555555555555555555555555555555553333333333'); // 57x5 + 10x3
console.log(superKeyGenerator(55), '5555555555555555555555555555555555555555555553333333333'); // 45x5 + 10x3
//console.log('555555555555555555555555555555555555555555555'.length);

//best
/*
function superKeyGenerator(n) {
  const k = 5 * ((3 - n % 3) % 3);
  return n < k ? '-1' : '5'.repeat(n - k) + '3'.repeat(k);
}
*/