/* 
6kyu - Most Consecutive Zeros of a Binary Number
https://www.codewars.com/kata/59decdf40863c76ae3000080/train/javascript
*/

const numerals = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen'];
function maxConsecZeros(n) {
  return numerals[((+n).toString(2)).split('1').map(part => part.length).sort((a, b) => b - a)[0]];
}

