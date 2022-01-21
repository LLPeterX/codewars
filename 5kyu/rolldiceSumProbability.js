/* 
5kyu - Probabilities for Sums in Rolling Cubic Dice
https://www.codewars.com/kata/56f78a42f749ba513b00037f

Какова вероятность, что при броске N кубиков c 
*/


// stolen from https://rustmoe.wordpress.com/2017/10/07/probabilities-for-sums-in-rolling-cubic-dice/
/* 
function rolldiceSumProb(arr, totalSides) {
  if (totalSides < 1) return 1; // !!!!!  вот тут была моя  ошибка! это условие должно быть ниже!!!!! 
  if (arr < totalSides || arr > totalSides * 6) return 0;
  let prob = 0;
  for (let i = 1; i <= 6; i++) {
    prob += rolldiceSumProb(arr - i, totalSides - 1);
  }
  return prob/6;
}

 */


function rolldiceSumProb(arr, totalSides) {
  const combos = (dices, sum) => {
    if (dices < 1 || sum < dices || sum > dices * 6) return 0;
    if (dices === 1) return 1;
    return combos(dices - 1, sum - 1) + combos(dices - 1, sum - 2) + combos(dices - 1, sum - 3) + combos(dices - 1, sum - 4) + combos(dices - 1, sum - 5) + combos(dices - 1, sum - 6);
  }
  return combos(totalSides, arr) / (6 ** totalSides);
}



console.log(rolldiceSumProb(11, 2), 0.055555555555);
console.log(rolldiceSumProb(11, 2), 0.055555555555);
console.log(rolldiceSumProb(8, 2), 0.13888888889);
console.log(rolldiceSumProb(8, 3), 0.0972222222222);

// best
// ниже я 
/* 
function rolldiceSumProb(arr, totalSides){
    if (arr<totalSides || arr>totalSides*6) return 0;
    if (totalSides===0) return 1;
    let p = 0;
    for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1);
    return p/6;
}
*/

/* 
let rolldiceSumProb = (s, ds) =>
  ds ? [1,2,3,4,5,6].map(x => rolldiceSumProb(s-x,ds-1)/6).reduce((a,b)=>a+b) : +!s
*/