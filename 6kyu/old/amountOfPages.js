/* 
6kyu - How many pages in a book?
https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

Every book has n pages with page numbers 1 to n. 
The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17:
The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617
*/

function amountOfPages(summary) {
  //if (summary < 10) return summary;
  let count = 0;
  for (let i = 1, s = ""; s.length < summary; i++, count++) {
    s += i;
  }
  return count;
}

console.log(amountOfPages(5), 5)
console.log(amountOfPages(25), 17)
console.log(amountOfPages(1095), 401)
console.log(amountOfPages(185), 97)
console.log(amountOfPages(660), 256)