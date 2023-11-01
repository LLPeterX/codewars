/* 
6kyu - Validate my Password
https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

I will give you a string. 
You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

* Passwords must abide by the following requirements:
* More than 3 characters but less than 20.
* Must contain only alphanumeric characters.
* Must contain letters and numbers.
*/

function validPass(password) {
  return (password.length > 3 && password.length < 20 &&
    /^[a-z0-9]+$/i.test(password) &&
    /\d/.test(password) &&
    /[a-z]/i.test(password)
  ) ? 'VALID' : 'INVALID';
}

console.log(validPass('Username123'), 'VALID'); // ok
console.log(validPass('Username'), 'INVALID'); // ok
console.log(validPass('1Username'), 'VALID'); // ok
console.log(validPass('123'), 'INVALID'); // ok
console.log(validPass('a12'), 'INVALID');
console.log(validPass('1234'), 'INVALID');
console.log(validPass('a123'), 'VALID');
console.log(validPass('Username123!'), 'INVALID');
console.log(validPass('passw0rdIsntTooLong'), 'VALID')
console.log(validPass('passw0rd1CharTooLong'), 'INVALID')

// best

/* 
function validPass(password){
  return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
}
*/