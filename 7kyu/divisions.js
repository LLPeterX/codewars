/* 
7kyu - Number of Divisions
https://www.codewars.com/kata/5913152be0b295cf99000001/train/javascript

Calculate how many times a number can be divided by a given number.
*/

const divisions = (n, divisor) => {
  let count = 0;
  while (n >= divisor) {
    //n = ~~(n / divisor);
    n /= divisor;
    count++;
  }
  return count;
};

console.log(divisions(6, 2), 2);
console.log(divisions(100, 2), 6);
console.log(divisions(2450, 5), 4);
console.log(divisions(9999, 3), 8);
console.log(divisions(2, 3), 0);
console.log(divisions(5, 5), 1);
console.log(divisions(205422408594710, 2), 47);

//best
/* 
const divisions = (n, divisor) => {
  return Math.floor(Math.log(n)/Math.log(divisor))
};
*/