/* 
7kyu - Help your fellow warrior!
https://www.codewars.com/kata/5660aa6fa60f03856c000045/train/javascript
*/

function getHonorPath(honorScore, targetHonorScore) {
  let d = targetHonorScore - honorScore;
  //if (d <= 0) return {};
  // let k1 = Math.floor(d / 2);
  // result['1kyus'] = k1;
  // result['2kyus'] = d - k1 * 2;
  // return result;
  return d <= 0 ? {} : { '1kyus': d >> 1, '2kyus': d - ((d >> 1) << 1) }
}

console.log(getHonorPath(2, 11));