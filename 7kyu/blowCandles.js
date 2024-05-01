/* 
7kyu - Blowing Birthday Candles
https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript


*/

function blowCandles(str) {
  let candles = [...str].map(Number);
  let blows = 0,
    count;
  do {
    let i = 0;
    count = 0;
    while (i < candles.length && candles[i] === 0) i++;
    for (; i < candles.length && count < 3; i++, count++) {
      if (candles[i] > 0) candles[i]--;
    }
    if (count) blows++;
  } while (count);
  return blows;
}

console.log(blowCandles("1321"), 3);
console.log(blowCandles("0323456"), 9);
console.log(blowCandles("2113"), 5); // 1003, 0003, 0002, 0001, 0000

// best
/* 
blowCandles=(a,s=0,u=0,v=0)=>[...a].map(d=>([u,v]=[v,Math.max(d-v-u,0)],s+=v))|s
*/
