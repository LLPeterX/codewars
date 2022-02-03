/* 
6kyu - Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers 
where if you add the ASCII representation of all characters in their first names, the result will be an odd number
*/

const findOddNames = (list) => list.filter(e => ([...e.firstName].map(c => c.charCodeAt()).reduce((sum, v) => sum + v, 0)) % 2);


var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

var answer1 = [
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1));

