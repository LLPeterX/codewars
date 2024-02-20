/* 
7kyu - Password validator
https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

* There needs to be at least 1 uppercase letter.
* There needs to be at least 1 lowercase letter.
* There needs to be at least 1 number.
* The password needs to be at least 8 characters long.
*/

function password(str) {
  //return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*]{8,}$/.test(str);
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}

console.log(password("Abcd1234"), true);
console.log(password("Abcd123"), false);
console.log(password("abcd1234"), false);
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
console.log(password("ABCD1234"), false);
console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"), true);
console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"), false);