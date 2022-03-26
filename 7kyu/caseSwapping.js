/* 
7kyu - Case Swapping
https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

Преобразовать регистр:
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"
*/

const swap = str => str.replace(/(.)/g, char => /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase());

console.log(swap('HelloWorld'), 'hELLOwORLD');
console.log(swap('CodeWars'), 'cODEwARS');