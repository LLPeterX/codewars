/* 
5kyu - How Many Numbers? II
https://www.codewars.com/kata/55f5efd21ad2b48895000040

We want to find the numbers higher or equal than 1000 
that the sum of every four consecutives digits 
cannot be higher than a certain given value.

The function should output the following list with the data detailed bellow:

[(1), (2), (3)]

(1) - the amount of numbers that satisfy the constraint presented above

(2) - the closest number to the mean of the results, if there are more than one, the smallest number should be chosen.

(3) - the total sum of all the found numbers
*/

function maxSumDig(nmax, maxsm) {
  let sum = 0, count = 0, foundNumbers = [];
  for (let n = 1000; n <= nmax; n++) {
    let digits = [...String(n)].map(Number);
    let max = 0;
    for (let k = 0; k <= digits.length - 4; k++) {
      let sumOfDigits = digits[k] + digits[k + 1] + digits[k + 2] + digits[k + 3];
      max = Math.max(max, sumOfDigits);
    }
    if (max <= maxsm) {
      sum += n;
      foundNumbers.push(n);
      count++;
    }
  }
  let mean = sum / count;
  let closest = foundNumbers.reduce((prev, curr) => Math.abs(curr - mean) <= Math.abs(prev - mean) ? curr : prev);
  return [count, closest, sum];
}

console.log(maxSumDig(2000, 3), [11, 1110, 12555])
console.log(maxSumDig(2000, 4), [21, 1120, 23665])
console.log(maxSumDig(2000, 7), [85, 1200, 99986])
console.log(maxSumDig(3000, 7), [141, 1600, 220756])
console.log(maxSumDig(4000, 4), [35, 2000, 58331])
console.log(maxSumDig(38671, 5), [295, 14001, 4213464]) // FAIL
console.log(maxSumDig(85888, 2), [17, 10000, 158340]) // FAIL

console.log(10 ** ~~Math.log10(38671));