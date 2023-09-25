/* 
6kyu - Arrh, grabscrab!
https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript
*/

function grabscrab(anagram, dictionary) {
  return dictionary.filter(word => [...word].sort().join`` === [...anagram].sort().join``);
}

