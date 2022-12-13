/* 
6kyu - Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

Найти все числа в диапазоне [a,b] у которых сумма цифр, возведенных в степень, соответствующую их порядку,
равна самому числу
*/

function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    if ([..."" + i].reduce((s, v, i) => s + v ** (i + 1), 0) === i) {
      result.push(i);
    }
  }
  return result;
}

//console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100), [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])

// best

/* 
const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );
*/