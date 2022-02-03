/* 
7kyu - Pony Express
https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript

Дан массив расстояний между станциями. 
Сколько потребуется извозчиков, учитывая, что один извозчик может проехать не более 10 км.
*/

function riders(stations) {
  let dist = 0, count = 1;
  for (let i = 0; i < stations.length; i++) {
    dist += stations[i];
    if (dist + stations[i + 1] > 100) {
      count++;
      dist = 0;
    }
  }
  return count;
}

console.log(riders([18, 15]), 1);
console.log(riders([43, 23, 40, 13]), 2);
console.log(riders([33, 8, 16, 47, 30, 30, 46]), 3);
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);


console.log(riders([27, 22, 5, 16, 47, 18, 40, 41, 16, 46, 8, 14]), 4);
//                  -----1-------  -- 2 -  ---- 3 ---  ----- 4 --

// best
/* 
const riders = stations =>
  stations.reduce(([dist, rid], val) => val + dist > 100 ? [val, ++rid] : [dist + val, rid], [0, 1])[1];
*/