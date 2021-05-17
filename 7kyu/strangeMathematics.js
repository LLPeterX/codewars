/* 
7kyu - Strange Mathematics
https://www.codewars.com/kata/604517d65b464d000d51381f/train/javascript
*/

function strangeMath(n, k) {
  return Array.from({ length: n }).fill().map((_, i) => i+1).sort().indexOf(k)+1;
}

console.log(strangeMath(11, 2), 4);
console.log(strangeMath(15, 5), 11);
console.log(strangeMath(15, 15), 7);
