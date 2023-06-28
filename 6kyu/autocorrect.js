/* 
6kyu - Evil Autocorrect Prank
https://www.codewars.com/kata/538ae2eb7a4ba8c99b000439/train/javascript

Write a function called autocorrect that takes a string 
and replaces all instances of "you" or "u" (not case sensitive) 
with "your sister" (always lower case).

Return the resulting string.

Here's the slightly tricky part: These are text messages, so there are different forms of "you" and "u".

For the purposes of this kata, here's what you need to support:

* "youuuuu" with any number of u characters tacked onto the end
* "u" at the beginning, middle, or end of a string, but NOT part of a word
* "you" but NOT as part of another word like youtube or bayou
*/

function autocorrect(input) {
  return input.replace(/(\bu\b|\byou+\b)/gi, "your sister");
}

console.log(autocorrect('i am u boy'));
console.log(autocorrect('i am youuuu'));
console.log(autocorrect('I want to film the bayou with you and put it on youtube'), 'I want to film the bayou with your sister and put it on youtube');

// best
/* 
function autocorrect(input){
  return input.replace(/\b(you+|u)\b/gi, "your sister");

*/