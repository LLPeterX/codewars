/* 
7kyu - Char Code Calculation
https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
*/

function calc(x) {
  let str1 = [...x].reduce((v, e) => v + e.charCodeAt(), '');
  let str2 = str1.replace(/7/g, '1');
  //let num1 = [...str1].reduce((v, e) => v + (+e), 0);
  //let num2 = [...str2].reduce((v, e) => v + (+e), 0);
  return [...str1].reduce((v, e) => v + (+e), 0) - [...str2].reduce((v, e) => v + (+e), 0);
}

console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6);
console.log(calc('aaaaaddddr'), 30);
console.log(calc('jfmgklf8hglbe'), 6);
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);

// best
/*
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
*/

/*
function calc(x){
  return x
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')
    .split('')
    .map(Number)
    .filter(x => x === 7)
    .length * 6
}
*/