/* 
7kyu - Latin Squares
https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/javascript
*/

function makeLatinSquare(n) {
  let row = Array.from({ length: n }, (_, i) => i + 1);
  let result = Array(n).fill().map(() => {
    row.push(row.shift());
    return [...row];
  });
  return result;
}

console.log(makeLatinSquare(4));