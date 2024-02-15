/* 
6kyu - Array Product (Sans n)
https://www.codewars.com/kata/5b3e609cd58499284100007a/train/javascript

Given an array of numbers, your task is to return a new array 
where each index (new_array[i]) is equal to the product of the original array, 
except for the number at that index (array[i]).

Two things to keep in mind:
* Zeroes will be making their way into some of the arrays you are given
* O(n²) solutions will not pass.

All input arrays will be valid arrays of nonzero length.
*/

function productSansN(numbers) {
  let count0 = 0, prodAll = 1n;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) prodAll *= BigInt(numbers[i]); else count0++;
  }
  if (count0 > 1) return Array(numbers.length).fill(0n);
  else if (count0 === 1) return numbers.map(n => n ? 0n : prodAll);
  return numbers.map(n => prodAll / BigInt(n));
}


// best

/* 
function productSansN(n) {
    n=n.map(BigInt)
    const out=[]
    // calc prefixes
    for(let i=0;i<n.length;i++){
      out[i]=i>0 ? out[i-1]*n[i-1] : 1n
    }
    // calc postfixes and final results
    let postfix=1n
    for(let i=n.length-1;i>=0;i--){
      out[i] *= (i==n.length-1 ? postfix : postfix*=n[i+1])
      out[i]=out[i].toString()
    }
    return out
}
*/