/* 
7kyu - Split The Bill
https://www.codewars.com/kata/5641275f07335295f10000d0
*/

function splitTheBill(x) {
  let spents = Object.values(x);
  let avg = Object.values(x).reduce((sum, v) => sum + v, 0) / spents.length;
  return Object.entries(x).reduce((o, [n]) => { o[n] = +(o[n] - avg).toFixed(2); return o; }, x);
}

console.log(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }), { A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 });
