/* 
7kyu - What comes after?
https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/javascript

Дана строка из слов и буква. Вернуть строку из букв, следущих за указанной.

 */

//const comes_after = (str, l) => [...str].reduce((s, x, i, a) => s + ((a[i + 1] && x.toLowerCase() === l.toLowerCase() && /[a-z]/i.test(a[i + 1])) ? a[i + 1] : ""), "");
const comes_after = (str, l) => [...str].reduce((s, x, i, a, y = a[i + 1]) => s + ((y && x.toLowerCase() === l.toLowerCase() && /[a-z]/i.test(y)) ? y : ""), "");

console.log(comes_after("Pirates say arrrrrrrrr", 'r'), 'arrrrrrrr');
console.log(comes_after("Pirates say arrrrrrrrr.", 'r'), 'arrrrrrrr');
console.log(comes_after("Free coffee for all office workers!", 'F'), 'rfeofi');
console.log(comes_after("king kUnta is the sickest rap song ever kNown k!", 'k'), 'iUeN');
console.log(comes_after("p8tice makes pottery p0rfect!", 'p'), 'o');
console.log(comes_after("d8u d._ rly 2d1s", 'D'), '');
console.log(comes_after("nothing to be found here", 'z'), '');

// best

/* 
function comes_after(str,l,rex=RegExp(l,"i")) {
  return [...str].filter( (c,i) => i && rex.test(str[i-1]) && /[a-z]/i.test(c) ).join``
}
*/

/* 
function comes_after(str,l) {
  return (str.match(new RegExp(`(?<=${l})[a-z]`,'gi'))||[]).join('');
}
*/

