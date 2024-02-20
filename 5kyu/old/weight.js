/* 
5kyu https://www.codewars.com/kata/55c6126177c9441a570000cc

Дана строка чисел. 
Разбить на массив и отсортировать по сумме цифр

*/
function orderWeight(strng) {
  return strng
   .trim()
   .replace(/\s{2,}/g,' ')
   .split(' ')
   .sort((a,b) => {
    let aSumD = a.split('').map(Number).reduce((sum,v)=>sum+v,0),
        bSumD = b.split('').map(Number).reduce((sum,v)=>sum+v,0);
    return aSumD === bSumD ? a.localeCompare(b) : aSumD - bSumD;

  })
  .join(' ');
}

console.log(orderWeight(" 103 123  4444 99 2000  ")); // "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"

// best & strange
/* 
function orderWeight(s) {
  return s.split(' ').sort((a,b)=>a.split('').reduce((pv,cv)=>pv+ +cv,0)-b.split('').reduce((pv,cv)=>pv+ +cv,0)||(a>b?1:-1)).join(' ');
}
*/

/* 
function orderWeight(strng) {
  return strng.split(" ").sort(function f(a, b){ 
    return eval(a.split("").join("+")) - eval(b.split("").join("+")) + ([a, b].sort()[1] == a ? 0.1 : -0.1);
  }).join(" ");
}
*/