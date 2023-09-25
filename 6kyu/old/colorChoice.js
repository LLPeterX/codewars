/* 
6kyu - Color Choice
https://www.codewars.com/kata/55be10de92aad5ef28000023

knowing m (number of posters to design), knowing n (total number of available colors), 
let us search x (number of colors for each poster so that each poster has a unique combination 
of colors and the number of combinations is exactly the same as the number of posters).
*/

// from https://github.com/ParanoidUser/codewars-handbook/blob/main/kata/6-kyu/color-choice/main/Checkchoose.java

function checkchoose(m, n) {
  let arr = Array.from({ length: n }, (_, i) => i);
  let color = 1;
  let arr2 = arr.filter(i => {
    let x = color * (n - i) / (i + 1);
    color = x;
    return color === m;
  })
  return arr2.length ? arr2[0] + 1 : -1;
}

console.log(checkchoose(6, 4), 2);
console.log(checkchoose(36, 7), -1);
console.log(checkchoose(35, 7), 3);
console.log(checkchoose(4, 2), -1);
console.log(checkchoose(47129212243960, 50), 20);
console.log(checkchoose(184756, 20), 10);

// best
/* 
function checkchoose(m, n) {
   let x = 1,  r = 1;
   for ( let i =1; i<n/2+1; i++ )  {
      x = x * (n-i+1)
      r = r * i;
      if ( x / r == m ) return i;      
   }
   return -1;
}
*/