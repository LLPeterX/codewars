/* 
5kyu - Simple Fun #89: Boxes Packing
https://www.codewars.com/kata/58957c5041c979cf9e00002f/train/javascript

You are given n rectangular boxes, the ith box has the length lengthi, 
the width widthi and the height heighti.

Your task is to check if it is possible to pack all boxes into one 
so that inside each box there is no more than one another box 
(which, in turn, can contain at most one another box, and so on).

More formally, your task is to check whether there is such sequence of n 
different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n 
the box number pi can be put into the box number pi+1.

A box can be put into another box if all sides of the first one are 
less than the respective ones of the second one. 
You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

*/


/* 
1) create array of boxes [l,w,h]
2) "rotate" each box by sorting [l,w,h] descending
3) sort boxes by descreasing their sizes
3) check array of boxes: any dimension of current box must be < same dimension of prevoous box
*/
function boxesPacking(length, width, height) {
  const boxes = length.map((l, i) => [l || 0, width[i] || 0, height[i] || 0].sort((a, b) => b - a))
    .sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] !== b[1] ? b[1] - a[1] : b[2] - a[2]);
  console.log(boxes);
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i][0] >= boxes[i - 1][0] || boxes[i][1] >= boxes[i - 1][1] || boxes[i][2] >= boxes[i - 1][2]) {
      return false;
    }
  }
  return true;
}

console.log(boxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2]), true)
console.log(boxesPacking([1, 1], [1, 1], [1, 1]), false)
console.log(boxesPacking([3, 1, 2], [3, 1, 2], [3, 2, 1]), false)
console.log(boxesPacking([2], [3], [4]), true)
console.log(boxesPacking([5, 7, 4, 1, 2], [4, 10, 3, 1, 4], [6, 5, 5, 1, 2]), true)
console.log(boxesPacking([6, 4], [5, 3], [4, 5]), true)
console.log(boxesPacking([6, 3], [5, 4], [4, 5]), true)
console.log(boxesPacking([6, 3], [5, 5], [4, 4]), true)
console.log(boxesPacking([883, 807], [772, 887], [950, 957]), true)
console.log(boxesPacking([6, 5], [5, 3], [4, 4]), true)
console.log(boxesPacking([4, 10, 3, 1, 4], [5, 7, 4, 1, 2], [6, 5, 5, 1, 2]), true)
console.log(boxesPacking([10, 8, 6, 4, 1], [7, 7, 6, 3, 2], [9, 6, 3, 2, 1]), true)

// best
/* 
function boxesPacking(length, width, height) {
  var boxes = length.map((_,i)=>[length[i],width[i],height[i]].sort((a,b)=>a-b)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]||a[2]-b[2]);
  return boxes.every((b,i)=>i<1||(boxes[i-1][0]<b[0]&&boxes[i-1][1]<b[1]&&boxes[i-1][2]<b[2]));
}
*/

/* 
const boxesPacking = (length, width, height) =>
  (arr => arr.every((val, idx) => !idx || val.every((v, i) => v > arr[idx - 1][i])))
  (length.map((_, idx) => [length[idx], width[idx], height[idx]].sort((a, b) => a - b)).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]));
*/
