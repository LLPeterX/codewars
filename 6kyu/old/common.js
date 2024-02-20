/* 
6kyu - Common array elements
https://www.codewars.com/kata/5a6225e5d8e145b540000127

Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
*/

// TIMEOUT!
// function common(a, b, c) {
//   const ce = a.filter(e => b.some(x => x == e) && c.some(x => x == e)).reduce((s, v) => s + v, 0);
//   return ce;
// }

function common(a, b, c) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  c.sort((x, y) => x - y);
  let sum = 0;
  let ia = ib = ic = 0;
  while (ia < a.length && ib < b.length && ic < c.length) {
    let xa = a[ia], xb = b[ib], xc = c[ic];
    if (xa == xb && xb == xc) {
      sum += a[ia];
      ia++;
      ib++;
      ic++;
    } else {
      if (xa < xb || xa < xc) ia++;
      else if (xb < xa || xb < xc) ib++;
      else ic++;
    }
  }
  return sum;
}

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]), 5);
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]), 7);

// best
/* 
function common(a,b,c){
  var [ah,bh,ch]=[a,b,c].map(r=>r.reduce((h,n)=>(h[n]=h[n]+1||1,h),{}));
  return [...new Set(a)].reduce((s,n)=>s+n*(Math.min(ah[n],bh[n],ch[n])||0),0);
}
*/