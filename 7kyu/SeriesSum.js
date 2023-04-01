/* 
7kyu - Sum of the first nth term of Series
https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
*/

function SeriesSum(n) {
  if (n < 1) return "0.00";
  let num = 1;
  for (let i = 1, div = 4; i < n; i++, div += 3) {
    num += 1 / div;
  }
  return num.toFixed(2);
}

console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
console.log(SeriesSum(5), "1.57");
