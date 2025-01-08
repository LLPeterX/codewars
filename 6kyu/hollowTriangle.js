/* 
6kyu - Hollow Triangle
https://www.codewars.com/kata/57819b700a8eb2d6b00002ab/train/javascript

Create a function that takes a positive integer n and returns a hollow triangle of the correct height.

The height n is passed through to the function and the function should return a list containing each line of the hollow triangle.
*/

function hollowTriangle(n) {
  const W = n * 2 - 1;
  const C = Math.ceil(W / 2) - 1;
  let i = (j = C);
  const result = [];
  for (let k = 0; k < n - 1; k++, i--, j++) {
    let row = Array(W).fill('_');
    row[i] = '#';
    row[j] = '#';
    result.push(row.join``);
  }
  result.push('#'.repeat(W));
  return result;
}

console.log(hollowTriangle(4));

//console.log('_____#_____'.indexOf('#')); // 5 = 11/2?
//console.log('________#________'.indexOf('#')); // 8 = 18/2?

// n=6 W=11
// n=9 W=17

// best

/* 
// mattc
const hollowTriangle = n => Array.from({length:n},(a,i)=>Array.from({length:n+n-1},(a,x)=>i==n-1?'#':x==n-i-1?'#':x==(n+n-1)-(n-i-1)-1?'#':'_').join(''));
*/

/* 
// Bubbler
function hollowTriangle(n) {
  let top = '_'.repeat(n-1) + '#' + '_'.repeat(n-1)
  let bot = '#'.repeat(2*n-1)
  let mid = i => '_'.repeat(n-i-1) + '#' + '_'.repeat(2*i-1) + '#' + '_'.repeat(n-i-1)
  return [...Array(n)].map((_,i) => {
    if (i == 0) return top
    if (i == n - 1) return bot
    return mid(i)
  })
}
*/
