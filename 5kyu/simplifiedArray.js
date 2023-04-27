/* 
5kyu - Simple Fun #220: Simplified Array
https://www.codewars.com/kata/59015f8cc842a3e7f10000a4

Дан массив arr. Применить следующий алгортим:
1) найти интервалы последовательных простых чисел и последовательных непростых чисел;
2) заменить каждый такой интервал суммой чисел в нем;
3) если результирующий массив отличается от исходного, вернуться к шагу 1, иначе вернуть результат.

For arr = [1, 2, 3, 5, 6, 4, 2, 3] the result should be [21, 5]:
[1, 2, 3, 5, 6, 4, 2, 3] --> [(1), (2 + 3 + 5), (6 + 4), (2 + 3)] --> [1, 10, 10, 5]
[1, 10, 10, 5] --> [(1 + 10 + 10), (5)] --> [21, 5]

For arr = [-3, 4, 5, 2, 0, -10] the result should be [1, 7, -10]:
[-3, 4, 5, 2, 0, -10] --> [(-3 + 4), (5 + 2), (0 + -10)] --> [1, 7, -10]


*/


const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function simplifiedArray(arr) {
  let newArray = [];
  let groups = [];
  let prevPrime = false;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      if (prevPrime) {
        groups.push(arr[i]);
      } else {
        if (groups.length > 0) newArray.push(groups);
        groups = [arr[i]];
      }
      prevPrime = true;
    } else {
      if (prevPrime) {
        if (groups.length > 0) newArray.push(groups);
        groups = [arr[i]];
      } else {
        groups.push(arr[i]);
      }
      prevPrime = false;
    }
  }
  if (groups.length > 0) newArray.push(groups);
  console.log(newArray);
  newArray = newArray.map(a => a.reduce((s, v) => s + v, 0));
  return newArray.toString() === arr.toString() ? newArray : simplifiedArray(newArray);
}

// best
/* 
unction isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function simplifiedArray(arr) {
  let changed = false;
  let result = [];

  for (let i = 0; i < arr.length; ) {
    let sum = arr[i];
    let isCurrentPrime = isPrime(arr[i]);
    let j = i + 1;

    while (j < arr.length && isPrime(arr[j]) === isCurrentPrime) {
      sum += arr[j];
      j++;
    }

    if (j > i + 1) changed = true;

    result.push(sum);
    i = j;
  }

  return changed ? simplifiedArray(result) : result;
}
*/

/* 

simplifiedArray=

f=(a,q)    =>(b=[]).   push   (       a.   reduce
((     s   ,x      )    =>    (p =  ( g=   d=>
x>     1   &&      x    <4    |x  %d  ?d   *d
>x||g(d    +1):0)(2)    ,s    =p      -q   ?b.push
(s         )*  0:       c=    s,      q=   p,
s+         x)   ,c     =0))   &&      c?   f(b):b

*/