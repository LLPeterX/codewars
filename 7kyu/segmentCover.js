/* 
7kyu - Simple Fun #109: Segment Cover
https://www.codewars.com/kata/589ac16a0cccbff11d000115

Given some points(array A) on the same line, determine the minimum number 
of line segments with length L needed to cover all of the given points. 
A point is covered if it is located inside some segment or on its bounds.
*/

function segmentCover(A, L) {
  let arr = A.sort((a, b) => a - b);
  let count = 0;
  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] - a <= L) i++;
    count++;
    a = arr[i];
    if (i >= arr.length) count--;
  }
  return count + 1;
}

console.log(segmentCover([1, 3, 4, 5, 8], 3), 2);
console.log(segmentCover([1, 5, 2, 4, 3], 1), 3);
console.log(segmentCover([1, 10, 100, 1000], 1), 4);