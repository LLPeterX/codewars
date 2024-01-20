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

console.log(isPrime(76));

// const isPrime = num => {
//   for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
//   return true;
// }

function procArrInt(listNum) {
  const divisors = {};
  let primes = 0;
  for (let n of listNum) {
    if (isPrime(n)) {
      console.log(`  -- prime ${n}`);
      primes++; // попробовать сократить в низлежащем цикле
    }
    let divCount = 0;
    //let isPrime = true;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i == 0) divCount++;
      //if (!isPrime && n > 2 && n % i == 0) isPrime = false;
    }
    if (!divisors[divCount]) {
      divisors[divCount] = [];
    }
    divisors[divCount].push(n);
    //primes += isPrime;
  }
  //console.log(divisors);
  return [listNum.length, primes]

}
console.log(procArrInt([66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
  20, 85, 22, 24, 68, 26, 59, 92, 93, 30]), [21, 2, [9, [36]]]);


// let list1 = [386, 5, 149, 278, 160, 91, 424, 429, 305, 436,
//   52, 58, 188, 190, 288, 72, 458, 460, 461, 462, 207, 211, 214,
//   335, 356, 381];
// let result1 = [26, 4, [18, [288]]];
// console.log(procArrInt(list1), result1);