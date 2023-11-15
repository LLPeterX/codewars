/* 
6kyu - Special Subsets of Primes
https://www.codewars.com/kata/55d5f4aae676c3da53000024/train/javascript

Простые числа должны удовлетворяьб условиям:
* Минимум 3 цифры
* Не должно включать 0
* Сумма цифр должна быть кратна квадратному числу. 1 не считать
* Произведение первой и последней цифры != 45
* Цифры должны быть уникальными. Т.е. 113 или 331 не подходят

Числа сгруппировать в 3 диапазона:
1) упругие (не попадающие под п. 2 или 3)
2) возрастающие (цифры идут в возрастающем порядке)
3) убыващие (цифры идут в убывающем порядке)
Вернуть их в виде массива

Функция принимать целое 100 < n < 50000 в качестве верхней границы диапазона,
поэтому все специальные простые числа должны быть <=n.
*/
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return num > 1;
}

function isPerfectMultiple(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % (i * i) === 0) return true;
  return false;
}

function getStats(arr) {
  let min = Infinity, max = -Infinity;
  if (!arr.length) return [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return [min, max, arr.length];
}

function specialPrimes(n) {
  let bouncing = [], inreasing = [], decreasing = [];

  for (let k = 111; k <= n; k++) {
    if (isPrime(k)) {
      let s = [...String(k)].map(Number);
      if (s.includes(0)) continue;
      if (s[0] * s[s.length - 1] === 45) continue;
      if (new Set(s).size !== s.length) continue;
      let sum = s.reduce((x, v) => x + v, 0);
      if (!isPerfectMultiple(sum)) continue;
      if (s.every((v, i) => i === 0 || v >= s[i - 1])) {
        inreasing.push(k);
      } else if (s.every((v, i) => i === 0 || v <= s[i - 1])) {
        decreasing.push(k);
      } else {
        bouncing.push(k);
      }

    }
  }
  return [getStats(bouncing), getStats(inreasing), getStats(decreasing)];
}


//console.log(specialPrimes(457), "\n", [[251, 439, 2], [349, 457, 4], [431, 431, 1]]); // ok
//console.log(specialPrimes(500), "\n", [[251, 439, 2], [349, 479, 5], [431, 431, 1]]); // ok
//console.log(specialPrimes(1000), "\n", [[251, 947, 11], [349, 479, 5], [431, 983, 4]]); // ok
//console.log(specialPrimes(5000), "\n", [[251, 4987, 58], [349, 4789, 13], [431, 983, 4]]);
