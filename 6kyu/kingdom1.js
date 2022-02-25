/* 
6kyu - Kingdoms Ep1: Jousting
https://www.codewars.com/kata/6138ee916cb50f00227648d9
*/

function joust(listField, vKnightLeft, vKnightRight) {
  if (vKnightLeft + vKnightRight === 0) return listField;
  let len = listField[0].length, leftSpike = 2, rightSpike = len - 3;
  while (leftSpike < rightSpike) {
    leftSpike += vKnightLeft;
    rightSpike -= vKnightRight;
  }
  leftSpike = Math.min(leftSpike, len - 1);
  if (rightSpike < 0) rightSpike = 0;
  return ['$->'.padStart(leftSpike + 1, ' ').padEnd(len, ' '), '<-P'.padEnd(len - rightSpike, ' ').padStart(len, ' ')];
}


//console.log(joust(["$->    ", "    <-P"], 1, 1), [" $->   ", "   <-P "]);
console.log(joust(["$->   ", "   <-P"], 3, 3), ["   $->", "<-P   "]);
console.log(joust(["$->     ", "     <-P"], 0, 2), ["$->     ", " <-P    "]);


// best
/* 
function joust([l,r], vl, vr) {
  var step = Math.max(0, Math.ceil((r.indexOf('<')-l.indexOf('>'))/(vr+vl)));
  return [(' '.repeat(step*vl)+l).slice(0,l.length), (r+' '.repeat(step*vr)).slice(-r.length)];
} 
 */

/* 
function joust([L, R], vL, vR) {
    while((vL || vR) && L.indexOf('>') < R.indexOf('<')) {
        L = L.slice(-vL) + L.slice(0, -vL)
        R = R.slice(vR) + R.slice(0, vR)
    }
    return [L, R]
}
*/

/* 
function joust(listField, left, right) {
  if (left + right === 0) return listField
  const dist = listField[0].length - 6,
        steps = Math.ceil(dist / (left + right)) + !(dist % (left + right))
  return [(' '.repeat(steps * left) + '$->').padEnd(listField[0].length, ' '),
          ('<-P' + ' '.repeat(steps * right)).padStart(listField[0].length, ' ')]
   } 
*/