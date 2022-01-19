/* 
7kyu - Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
*/

function remove(string) {

  return string.split(' ').filter(w => [...w].filter(c => c === '!').length !== 1).join(' ');

}

console.log(remove("Hi!"), "");
console.log(remove("Hi! Hi!"), "");
console.log(remove("Hi! Hi! Hi!"), "");
console.log(remove("Hi Hi! Hi!"), "Hi");
console.log(remove("Hi! !Hi Hi!"), "");
console.log(remove("Hi! Hi!! Hi!"), "Hi!!");
console.log(remove("Hi! !Hi! Hi!"), "!Hi!");
//console.log('Hi!'.split('!Hi!').length);

//best

/* 
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
*/
