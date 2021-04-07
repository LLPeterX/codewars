/* 
5kyu Hidden "Cubic" numbers
https://www.codewars.com/kata/55031bba8cba40ada90011c4

Дана строка. Найти в ней целые числа, сумма кубов цифр в которых = самому числу
Длина числа не более 3 цифр

Вернуть строку, состоящую из таких чисел, их сумму, и "Lucky" или "Unlucky"
 */
function isSumOfCubes(str) {

  const isLucky = (strNum) => +strNum === [...strNum].map(Number).reduce((sum,v) => sum + v*v*v,0);

  let luckyNumbers = str.match(/(\d{1,3})/g).filter(isLucky).map(Number);
  return luckyNumbers.length ? luckyNumbers.join(' ')+' '+luckyNumbers.reduce((sum,v)=>sum+v,0) + ' Lucky' : 'Unlucky';
}

console.log(isSumOfCubes("aqdf& 0 1 xyz 153 777.777")); // 0 1 153 154 lucky
console.log(isSumOfCubes("QK29 45[&erui")); // unlucky
console.log(isSumOfCubes("0 9026315 -827&()")); // 0 0 lucky
console.log(isSumOfCubes("9026315 -827&()")); // unlucky
console.log(isSumOfCubes("Once 1000upon a midnight 110dreary, while100 I pondered, 9026315weak and weary -827&()")); // 0 0 lucky

// best
/* 
function isSumOfCubes(s){
  let s1 = s.match(/\d\d\d|\d\d|\d/g);
   s1 = s1.filter(function(a){
    if (a.split('').reduce((ac,n)=>ac+n*n*n,0) == Number(a)){
      return a
    }
  })
   return s1.length != 0 ? `${s1.map(a=> a ==='000' ? '0' : a).join(' ')} ${s1.reduce((a,c) => a + Number(c), 0)} Lucky` : "Unlucky"
}
*/
/* 
isSumOfCubes=(a,b=a=>a==a.split``.map(a=>a**3).reduce((a,b)=>a+b))=>(a=>`${a.length?a.join` `+' '+a.reduce((a,b)=>a+b)+' L':'Unl'}ucky`)(a.match(/\d{1,3}/g).filter(a=>b(a)).map(Number));
*/
/* 
 */