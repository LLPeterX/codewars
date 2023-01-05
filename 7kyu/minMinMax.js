/* 
7kyu - MinMinMax
https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

Given an unsorted array of integers, find the smallest number in the array, 
the largest number in the array, and the smallest number between the two array bounds 
that is not in the array.


*/

function minMinMax(array) {
  let a = [...array].sort((a, b) => a - b);
  let missing = a[0] + 1;
  while (a.includes(missing)) missing++;
  return [
    a[0],
    missing,
    a[a.length - 1]
  ];
}

