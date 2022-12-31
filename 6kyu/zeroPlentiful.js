/* 
6kyu - Zero-plentiful Array
https://www.codewars.com/kata/59e270da7997cba3d3000041
An array is called zero-plentiful if it contains multiple zeros, 
and _every_ sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.
*/

function zeroPlentiful(arr) {
  let groups = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      if (count > 0) {
        groups.push(count);
      }
      count = 0;
    }
  }
  if (count > 0) groups.push(count);
  let gCount = groups.filter(v => v >= 4).length;
  return gCount === groups.length ? gCount : 0;
}


// best

/* 
function zeroPlentiful(arr){
  var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}
*/

/* 
function zeroPlentiful(arr, a=arr.join``){
  return !/(?<!0)0{1,3}(?!0)/.test(a)?(a.match(/0{4,}/g)||'').length:0;
}
*/