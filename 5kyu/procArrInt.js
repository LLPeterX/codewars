/* 
5kyu - Numbers with The Highest Amount of Divisors
https://www.codewars.com/kata/55ef57064cb8418a3f000061/train/javascript

An array of different positive integers is given. 
We should create a code that gives us the number (or the numbers) 
that has (or have) the highest number of divisors among other data.

The function procArrInt() will receive an array of unsorted integers 
and should output a list with the following results:

[(1), (2), (3)]

(1) - Total amount of numbers received
(2) - Total prime numbers received
(3) - a list [(a), (b)]
      (a)- The highest amount of divisors that a certain number (or numbers) of the given  
           array have
      (b)- A sorted list with the numbers that have the largest amount of divisors. The list may  
           have only one number

           Examples:
arr1 = [66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
       20, 85, 22, 24, 68, 26, 59, 92, 93, 30]

proc_arrInt(arr1) ------> [21, 2, [9, [36]]           
*/

function isPrime(num) {
  if (num < 3) return num === 2;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return false;
  return true;
}


function procArrInt(listNum) {
  const divisors = {};
  let primesCount = 0;
  for (let n of listNum) {
    if (isPrime(n)) primesCount++;
    let divCount = 0;
    for (let i = 1; i <= n / 2; i++) if (n % i == 0) divCount++;
    if (!divisors[divCount]) divisors[divCount] = [];
    divisors[divCount].push(n);
  }
  let o = Object.entries(divisors).at(-1);
  return [listNum.length, primesCount, [+o[0] + 1, o[1].sort((a, b) => a - b)]];
}



console.log(procArrInt([66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
  20, 85, 22, 24, 68, 26, 59, 92, 93, 30]), [21, 2, [9, [36]]]);


let list1 = [386, 5, 149, 278, 160, 91, 424, 429, 305, 436,
  52, 58, 188, 190, 288, 72, 458, 460, 461, 462, 207, 211, 214,
  335, 356, 381];
let result1 = [26, 4, [18, [288]]];
console.log(procArrInt(list1), result1);

var list2 = [258, 402, 279, 153, 423, 424, 430,
  49, 51, 58, 193, 199, 330, 369, 465, 468, 469,
  86, 352, 97, 99, 358, 364, 113, 499, 372];
var result2 = [26, 5, [18, [468]]];
console.log(procArrInt(list2), result2);

var list3 = [5, 396, 397, 145, 274, 286, 159,
  422, 169, 44, 303, 433, 310, 450, 324, 326, 91,
  226, 229, 233, 106, 237, 499, 126];
var result3 = [24, 6, [18, [396, 450]]];
console.log(procArrInt(list3), result3);

var list4 = [641, 976, 517, 263, 136, 270, 941,
  400, 915, 790, 539, 414, 816, 546, 675, 548, 299,
  812, 45, 432, 392, 178, 310, 439, 956, 319, 450,
  566, 72, 74, 715, 336, 723, 854, 472, 996, 604,
  861, 182, 609, 117, 484, 358, 1000, 363, 237,
  111, 629, 759, 505, 510];
var result4 = [51, 4, [20, [336, 432, 816]]];
console.log(procArrInt(list4), result4);

// best

/* 
function isPrime(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i < n ** 0.5 + 1; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function divs(n) {
  let r = new Set();
  for (let i = 0; i < n ** 0.5 + 1; i++) {
    if (n % i === 0) {
      r.add(i);
      r.add(n / i);
    }
  }
  return r.size;
}

function procArrInt(a) {
  let x = a.map((e) => [e, divs(e)]).sort((a, b) => b[1] - a[1]);
  return [
    a.length,
    a.filter(isPrime).length,
    [
      x[0][1],
      x
        .filter((e) => e[1] === x[0][1])
        .map((e) => e[0])
        .sort((a, b) => a - b),
    ],
  ];
}

*/

/* 
const procArrInt = listNum => {
  const countDivisors = num => {
    for (let i = 1, count = 0, sqRoot = num ** .5; ; num % i++ || count++)
      if (i >= sqRoot) return count * 2 + (i === sqRoot);
  }
  
  const listDivs = listNum.map(countDivisors);
  
  const ttlNums          = listNum.length;
  const ttlPrimes        = listDivs.filter(val => val === 2).length;
  const highestDivCount  = Math.max(...listDivs);
  const highestDivNums   = listNum.filter((_, idx) => listDivs[idx] === highestDivCount).sort((a, b) => a - b);
  
  return [ttlNums, ttlPrimes, [highestDivCount, highestDivNums]];
}
*/