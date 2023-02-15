/* 
7kyu - Asperand pixel counting
https://www.codewars.com/kata/63d54b5d05992e0046752389/train/javascript

--------------------------------------------------------
                 1     2    3    4    
--------------------------------------------------------
inner square     1     4    8    12    k*2+(k-2)*2
top:             3     4    5    6     k+2
bottom:          1     2    3    4     k
left:            3     4    5    6     k+2
right:           2     3    4    5     k+1
one:             1     1    1    1     1    


*/

function countPixels(k) {
  // let inner = k > 1 ? k * 2 + (k - 2) * 2 : 1;
  // let top = k + 2;
  // let bottom = k;
  // let left = k + 2;
  // let right = k + 1;
  // let sum = inner + top + bottom + left + right + 1;
  // console.log(`sq=${inner} t=${top} b=${bottom} l=${left} r=${right} Y=${sum}`);
  //return sum;

  return (k > 1 ? k * 2 + (k - 2) * 2 : 1) + k * 4 + 6;
}

console.log(countPixels(1), 11);
console.log(countPixels(2), 18);
console.log(countPixels(3), 26);
console.log(countPixels(4), 34);

// best
/* 
function countPixels(k){
  return Math.max(11,8*k+2)
}
*/

/* 
const countPixels = (k) => (k === 1 ? 11 : 8 * k + 2)
*/