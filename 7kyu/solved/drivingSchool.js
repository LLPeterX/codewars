/* 
7kyu - Driving School Series #2
https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

За уроки берут :
- за 1-й час $30
- за каждые следующие полчаса $10. Округляются до полных 30 минут.
Также 5 минут бесплатного периода
*/

function cost(mins) {
  return (mins + 5 <= 60) ? 30 : 30 + Math.ceil((mins - 65) / 30) * 10;
}
console.log(cost(45), 30);
console.log(cost(63), 30);
console.log(cost(84), 40);
console.log(cost(102), 50);
console.log(cost(273), 100);

// best
/* 
function cost (mins) { 
  return 30 + ( mins>65 ?  Math.ceil((mins-65)/30) : 0 )*10
} 
*/

/* 
function cost (mins) { 
  return Math.ceil(Math.max(0,mins-65)/30+3)*10;
} 
*/