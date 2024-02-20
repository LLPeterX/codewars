/* 
7kyu - Simple Fun #238: Tennis Game Points
https://www.codewars.com/kata/590942d4efde93886900185a/train/javascript
*/

function tennisGamePoints(score) {
  let points = { "40": 3, "30": 2, "15": 1, "love": 0 };
  let [p1, p2] = score.split('-');
  return (p2 === 'all') ? points[p1] * 2 : points[p1] + points[p2];

}

console.log(tennisGamePoints("15-40"), 4)

console.log(tennisGamePoints("30-all"), 4)

console.log(tennisGamePoints("love-15"), 1)

console.log(tennisGamePoints("love-30"), 2)

console.log(tennisGamePoints("love-40"), 3)

console.log(tennisGamePoints("15-love"), 1)

console.log(tennisGamePoints("15-30"), 3)