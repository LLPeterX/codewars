/* 
7kyu - Simple Fun #334: Two Beggars And Gold
https://www.codewars.com/kata/59547688d8e005759e000092/train/javascript
*/

function distributionOf(golds) {
  let result = [0, 0];
  for (let i = 0; golds.length; i++) {
    if (golds[0] >= golds.at(-1)) {
      result[i % 2] += golds[0];
      golds = golds.slice(1);
    } else {
      result[i % 2] += golds.at(-1);
      golds = golds.slice(0, -1);
    }
  }
  return result;
}


console.log(distributionOf([4, 2, 9, 5, 2, 7]), [14, 15]) // [7,2,5] [4,9,2]
console.log(distributionOf([4, 7, 2, 9, 5, 2]), [11, 18])
console.log(distributionOf([10, 1000, 2, 1]), [12, 1001])

// best
/* 
function distributionOf(a) {
  var beggars = [0, 0];
  while (a.length > 0) {
    if (a.length > 0) beggars[0] += a[0] >= a[a.length - 1] ? a.shift() : a.pop();
    if (a.length > 0) beggars[1] += a[0] >= a[a.length - 1] ? a.shift() : a.pop();
  }
  return beggars;
}

*/
