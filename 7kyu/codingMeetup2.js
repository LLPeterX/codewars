/* 
7kyu - Coding Meetup #2 - Higher-Order Functions Series - Greet developers
https://www.codewars.com/kata/58279e13c983ca4a2a00002a
*/

function greetDevelopers(list) {
  return list.map(o => ({ ...o, greeting: `Hi ${o.firstName}, what do you like the most about ${o.language}?` }));
}

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(greetDevelopers(list1));