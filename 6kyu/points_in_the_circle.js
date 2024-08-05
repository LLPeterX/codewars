/* 
6kyu - Points in the circle
https://www.codewars.com/kata/5b55c49d4a317adff500015f
*/

function pointsNumber(radius) {
  let count = 0;
  for (let x = -radius; x <= radius; x++) {
    count += Math.floor(Math.sqrt(radius ** 2 - x ** 2)) * 2 + 1;
  }
  return count;
}

console.log(pointsNumber(2), 13);
console.log(pointsNumber(1000), 3141549);

// best

/* 
function pointsNumber(r) {
  let count = 0;
  for (let x = 0; x <= r; x++)
    count += Math.floor(Math.sqrt(r * r - x * x));
  return 4 * count + 1;
}
*/
