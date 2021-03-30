/* 
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
Разбить строку на слова - так, чтобы перед заглавной буквой стоял пробел
*/

const solution = (string) => string.replace(/([A-Z])/g,' $1');

console.log(solution('camelCasingTest')); // 'camel Casing Test'