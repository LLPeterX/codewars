/* 
7kyu - Geometric Progression Sequence
https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript
 */

function geometricSequenceElements(a, r, n) {
  let arr = [a];
  for (let i = 1; i < n; i++) {
    arr.push(a *= r);
  }
  return arr.join(', ');
}

console.log(geometricSequenceElements(2, 3, 5), '2, 6, 18, 54, 162')
console.log(geometricSequenceElements(2, 2, 10), '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024')
console.log(geometricSequenceElements(1, -2, 10), '1, -2, 4, -8, 16, -32, 64, -128, 256, -512')

// best
/* 
function geometricSequenceElements(a, r, n){
  return [...Array(n)].map((_,i)=>a*r**i).join(', ')
}
*/
