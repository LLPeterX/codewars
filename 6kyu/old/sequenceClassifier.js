/* 
6kyu - Sequence classifier
https://www.codewars.com/kata/5921c0bc6b8f072e840000c0/train/javascript

Классифицировать последовательность
Code	Type	Example
0	unordered	[3,5,8,1,14,3]
1	strictly increasing	[3,5,8,9,14,23]
2	not decreasing	[3,5,8,8,14,14]
3	strictly decreasing	[14,9,8,5,3,1]
4	not increasing	[14,14,8,8,5,3]
5	constant	[8,8,8,8,8,8]
*/

function sequenceClassifier(arr) {
  let len = arr.length;
  if (len < 2) return 0;
  let doubles = decreased = increased = 0;
  for (let i = 1; i < len; i++) {
    if (arr[i] === arr[i - 1]) doubles++;
    if (arr[i] > arr[i - 1]) increased++;
    else if (arr[i] < arr[i - 1]) decreased++;
  }
  //console.log(`dbl ${doubles} inc ${increased} dec ${decreased}`);
  if (doubles === len - 1) return 5;
  if (increased + doubles === len - 1) {
    return doubles ? 2 : 1
  }
  if (decreased + doubles === len - 1) {
    return doubles ? 4 : 3;
  }
  return 0;
}

// best 

/* 
const sequenceClassifier = (M => xs => M[xs.slice(1).reduce((b, x, i) => b|(1 << Math.sign(x - xs[i]) + 1), 0)])({
  0b101: 0,
  0b111: 0,
  0b100: 1,
  0b110: 2,
  0b001: 3,
  0b011: 4,
  0b010: 5,
});
*/

/* 
var sequenceClassifier=arr=>[0,1,5,2,3,0,4,0][arr.slice(0,-1).reduce((f,a,i)=>f|(a<arr[i+1]?1:a==arr[i+1]?2:4),0)]
*/

console.log(sequenceClassifier([3, 5, 8, 1, 14, 3]), 0);
console.log(sequenceClassifier([3, 5, 8, 9, 14, 23]), 1);
console.log(sequenceClassifier([3, 5, 8, 8, 14, 14]), 2);
console.log(sequenceClassifier([14, 9, 8, 5, 3, 1]), 3);
console.log(sequenceClassifier([14, 14, 8, 8, 5, 3]), 4);
console.log(sequenceClassifier([8, 8, 8, 8, 8, 8]), 5);
console.log(sequenceClassifier([8, 9]), 1);
console.log(sequenceClassifier([8, 8, 8, 8, 8, 9]), 2);
console.log(sequenceClassifier([9, 8]), 3);
console.log(sequenceClassifier([9, 9, 9, 8, 8, 8]), 4)