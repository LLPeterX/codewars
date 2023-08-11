/* 
7kyu - Basic Math
https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

Дана строка типа "1plus2plus3plus4"
Вычислить значение
*/

function calculate(str) {
  let nums = str.split(/plus|minus/g).map(Number),
      ops = str.split(/\d+/g).slice(1),
      res = nums[0];
  for(let i=0; i<ops.length-1; i++) {
   if(ops[i] === 'plus') res += nums[i+1];
   else res-=nums[i+1];
  }
  return res+"";
}

console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');

//best
/* 
function calculate(str) {
  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}
*/

