/* 
7kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript
*/

function isSameLanguage(list) {
  return new Set(list.map(item => item.language)).size === 1;
}

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

var list2 = [
  { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
  { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

console.log(isSameLanguage(list1), true);
console.log(isSameLanguage(list2), false);

// best (my best)
/* 
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}
*/
