/* 
https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/javascript

Дан массив arr и число newavg.
Солько надо добавить в arr, чтобы среднее по массиву = newavg ?
*/

function newAvg (arr, newavg) {
  let v = Math.round((arr.length+1)*newavg - arr.reduce((sum,v)=>sum+v,0)); 
  if(v<=0) {
    throw new Error('invalid argument');
  }
  return v;
}



console.log(newAvg([14, 30, 5, 7, 9, 11, 15] ,30)); // 149
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); // 645
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2)); // error

// my best!
