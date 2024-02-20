/* 
6kyu - Coding Meetup #10 - Higher-Order Functions Series - Create usernames
https://www.codewars.com/kata/582a53ed261c2af9d200018c

Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

write a function that adds the username property to each object in the input array:
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]

The value of the username property is composed by concatenating:

* firstName in lower-case;
* first letter of the lastName in lower-case; and
* the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.

*/

function addUsername(list) {
  return list.map(o => ({ ...o, ['username']: (o.firstName + o.lastName[0]).toLowerCase() + (new Date().getFullYear() - o.age) }));
}

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(list1));