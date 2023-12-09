/* 
7kyu - Distance from the average
https://www.codewars.com/kata/568ff914fc7a40a18500005c/train/javascript
*/

function distancesFromAverage(arr) {
  console.log(arr);
  let avg = arr.reduce((sum, v) => sum + v) / arr.length;
  return arr.map(e => +(avg - e).toFixed(2));
}


console.log(distancesFromAverage([55, 95, 62, 36, 48]), [4.2, -35.8, -2.8, 23.2, 11.2])
console.log(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0])
console.log(distancesFromAverage([1, -1, 1, -1, 1, -1]), [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0])
console.log(distancesFromAverage([1, -1, 1, -1, 1]), [-0.8, 1.2, -0.8, 1.2, -0.8])
console.log(distancesFromAverage([2, -2]), [-2.0, 2.0])
console.log(distancesFromAverage([1]), [0])
console.log(distancesFromAverage([123, -65, 32432, -353, -534]), [6197.6, 6385.6, -26111.4, 6673.6, 6854.6])

