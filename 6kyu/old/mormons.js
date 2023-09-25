/* 
6kyu - The Book of Mormon
https://www.codewars.com/kata/58373ba351e3b615de0001c3
*/

function Mormons(startingNumber, reach, target) {
  let count = 0;
  while (startingNumber < target) {
    startingNumber += startingNumber * reach;
    count++;
  }
  return count;
}

console.log(Mormons(40, 2, 120), 1);
console.log(Mormons(20000, 2, 7000000000), 12);