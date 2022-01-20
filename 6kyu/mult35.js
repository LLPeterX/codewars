/* 
6kyu - Multiples of 3 and 5 redux
https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/javascript

Вернуть сумму всех чисел, меньше N, которые кратны 3 или 5. Очень большие числа


*** FAIL WITH BIG NUMBERS (TIMEOUT) ***
*/

/* 
// bad solution
function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
*/

/* 
// also fails with timeout
function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      continue;
    } else if (i % 5 === 0) {
      sum += i;
      continue;
    } else continue;
  }
  return sum;
}

 */

// from https://www.youtube.com/watch?v=WLb4q5Q6drU
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (!(i % 3) || !(i % 5)) sum += i;
  }
  return sum;
}

console.log(solution(10), 23);
console.log(solution(20), 78);
console.log(solution(100), 2318);
console.log(solution(200), 9168)
console.log(solution(1000), 233168);
console.log(solution(10000), 23331668);
console.log(solution(1000000), 233333166668)

// solution

/* 
function solution(number) {
  var n3  = (number - 1) / 3 | 0
  var n5  = (number - 1) / 5 | 0
  var n15 = (number - 1) / 15 | 0
  
  return gauss(n3) * 3 + gauss(n5) * 5 - gauss(n15) * 15
}

function gauss(n) {
  return n * (n + 1) / 2
}

*/


/* 

unction solution(number){

  var  sumThree = 0, sumFive = 0;
  
  //Calculate the 3 multiples first, avoiding the common 5 multiples 
  for (var index = 3; index < number; index += 3) {
    if (index % 5 !== 0) {
      sumThree += index;
    }
  }
  
  //Calculate the 5 multiples 
  for (var index = 5; index < number; index += 5) {
    sumFive += index;
  }
  
  //For restriction of MAX_SAFE_INTEGER make float parsing. Nice one here
  return parseFloat(sumThree) + parseFloat(sumFive);
  
}
*/

/* 
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}
*/