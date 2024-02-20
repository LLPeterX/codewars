/* 
6kyu - Shortest steps to a number
https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

Given a number, num, return the shortest amount of steps 
it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
*/

function shortestStepsToNum(n) {
  let count = 0;
  while (n > 1) {
    if (n % 2) {
      n--;
    } else {
      n /= 2;
    }
    count++;
  }
  return count;
}

console.log(shortestStepsToNum(3));
console.log(shortestStepsToNum(12));
console.log(shortestStepsToNum(71), 9);

// best
/* 
function shortestStepsToNum(num) {

  if (num < 3)
    return num - 1;
    
  let next = num % 2 ? num - 1 : num / 2;

  return 1 + shortestStepsToNum(next);
    
}
*/