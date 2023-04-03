/* 
6kyu - Good vs Evil
https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
*/

function goodVsEvil(good, evil) {
  const getDamage = (scores, str) => str.split(' ').reduce((total, count, i) => total + scores[i] * count, 0);
  let g = getDamage([1, 2, 3, 3, 4, 10], good), e = getDamage([1, 2, 2, 2, 3, 5, 10], evil);
  return `Battle Result: ${g == e ? 'No victor on this battle field' : g > e ? 'Good triumphs over Evil' : 'Evil eradicates all trace of Good'}`;
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');