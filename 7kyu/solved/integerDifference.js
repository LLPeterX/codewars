/* 
7kyu - Integer Difference
https://www.codewars.com/kata/57741d8f10a0a66915000001/train/javascript
*/

const intDiff = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[j] - num) === n) {
        count++;
      }
    }
  }
  return count;
}

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
console.log(intDiff([1, 1, 3, 3], 2), 4);