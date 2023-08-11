/* 
6kyu - Throwing Darts
https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), 
and returns a total score using the above specification.

An empty array should return 0.
 */

// function scoreThrows(radii) {
//   return radii.length ? radii.reduce((score, r) => {
//     if (r >= 5 && r <= 10) return score + 5;
//     if (r < 5) return score + 10;
//     return score;
//   }, 0) + (radii.every(r => r > 0 && r < 5) ? 100 : 0) : 0;
// }

function scoreThrows(radii) {
  return radii.length ? radii.reduce((score, r) => score + (r < 5 ? 10 : r >= 5 && r <= 10 ? 5 : 0), 0) + (radii.every(r => r > 0 && r < 5) ? 100 : 0) : 0;
}

console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]), 0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0, 'Empty list');
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
console.log(scoreThrows([0, 5, 10, 10.5, 4.5]), 30);
