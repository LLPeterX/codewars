/* 
6kyu - Reverse or Rotate
https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

Дана строка цифр
Разбить строку на подстроки по sz цифр. Если длина последней подстроки != sz игнорировать её
Если строка представляет число, у которого сумма кубов цифр делится на 2, то reverse
иначе - повернуть влево на одну позицию.
Склеить куски и вернуть строкой.
*/

function revrot(str, sz) {
  return (sz <= 0 || !str || sz > str.length) ? ""
    : str.match(new RegExp(`.{${sz}}`, 'g'))
      .filter(v => v.length === sz)
      .map(chunk => chunk.split('').map(Number).reduce((s, v) => s + (v * v * v), 0) % 2 === 0 ? chunk.split('').reverse().join('') : chunk.slice(1) + chunk[0])
      .join("");
}

console.log(revrot("", 8)); // ""
console.log(revrot("123456987654", 6), '234561876549'); // 234561876549
console.log(revrot("123456987653", 6), '234561356789'); // 234561356789
console.log(revrot("66443875", 4), '44668753'); // 44668753
console.log(revrot("66443875", 8), '64438756'); // 64438756
console.log(revrot("664438769", 8), '67834466'); // 67834466
console.log(revrot("563000655734469485", 4), '0365065073456944'); // 0365065073456944

//best (my best!)
/* 
function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
*/

/* 
function revrot(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v){
     if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}
*/

/* 
const revrot = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);
*/