/* 
6kyu - Valid Phone Number
https://www.codewars.com/kata/525f47c79f2f25a4db000025
*/

function validPhoneNumber(phoneNumber) {
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890")); // true;
console.log(validPhoneNumber("(1111)555 2345")); // false

// my best