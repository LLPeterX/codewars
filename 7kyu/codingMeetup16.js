/* 
6kyu - Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
https://www.codewars.com/kata/583d972b8bbc0402cf000121

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

- adds the question property to each object in the input array where the developer has not provided the relevant 
  details (marked with a null value in JavaScript). 
  The value of the question property should be the following string:
"Hi, could you please provide your <property name>"".

- and returns only the developers with missing details:

[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
*/

function askForMissingDetails(list) {
  return list.filter(o => Object.values(o).some(p => !p)).map(o => ({ ...o, ['question']: `Hi, could you please provide your ${Object.entries(o).find(([k, v]) => v === null)[0]}.` }));
  //    o.question = `Hi, could you please provide your ${Object.entries(o).find(([k, v]) => v === null)[0]}.`;
  //return o;
  //);
}

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

var answer1 = [
  {
    firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    question: 'Hi, could you please provide your firstName.'
  },
  {
    firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
    question: 'Hi, could you please provide your language.'
  }
];

console.log(askForMissingDetails(list1), answer1);


var list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

var answer2 = [];

console.log(askForMissingDetails(list2), answer2);

// best
/* 
const askForMissingDetails = list =>
  list.filter(val => Object.keys(val).some(v => !val[v] && (val.question = `Hi, could you please provide your ${v}.`)));
*/