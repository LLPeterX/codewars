/* 
7kyu - Whose bicycle?
https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
*/

function whoseBicycle(diary1, diary2, diary3) {
  let m = [diary1, diary2, diary3].map(o => Object.values(o).reduce((s, v) => s + v, 0));
  let k;
  if (m[0] > m[1] && m[0] > m[2]) k = 0;
  else if (m[1] > m[0] && m[1] > m[2]) k = 1;
  else if ((m[2] > m[0] && m[2] > m[1]) || (m[0] == m[1] && m[1] == m[2])) k = 2;
  else { // sheck pairs
    if (m[0] === m[1]) {
      k = m[2] > m[0] ? 2 : 1
    } else if (m[0] == m[2]) {
      k = m[1] > m[0] ? 1 : 2;
    } else if (m[1] === m[2]) {
      k = m[0] > m[1] ? 0 : 2;
    }
  }
  console.log(m, k);
  return `I need to buy a bicycle for my ${['first', 'second', 'third'][k]} son.`
}


//best
/* 
function whoseBicycle(a, b, c) {
  [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
  let n = Math.max(a, b, c);
  return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
}
*/