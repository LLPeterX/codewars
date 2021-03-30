/* 
https://www.codewars.com/kata/542c0f198e077084c0000c2e
Подсчитать количество целых делителей числа
 */

function getDivisorsCnt(n){
  if(n===1) return 1;
  let max = ~~Math.sqrt(n), count=2;
  for(let i = 2 ; i <= max ; i++)
  {
      if(n % i == 0)
      {
          count++;
          if(n / i != i)
          {
              count++;
          }
      }
  }
  return count;
}

console.log(getDivisorsCnt(54)); // 8
console.log(getDivisorsCnt(11)); // 2

//best
/* 
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}
*/