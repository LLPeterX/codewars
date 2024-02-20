/* 
6kyu - Password generator
https://www.codewars.com/kata/58ade2233c9736b01d0000b3/train/javascript

You need to write a password generator that meets the following criteria:

* 6 - 20 characters long
* contains at least one lowercase letter
* contains at least one uppercase letter
* contains at least one number
* contains only alphanumeric characters (no special characters)

Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - 
all characters should have less than 50% occurance. 
Based on extensive tests, the normal rate is around 35%.
*/

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomChar = (str) => str[getRandomInt(0, str.length)];

function passwordGen() {
  let chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789"];
  let length = getRandomInt(6, 21);
  let password = "";
  for (let i = 0; i < length - 2; i++) password += getRandomChar(chars[getRandomInt(0, 3)]);
  if (!/[A-Z]/.test(password)) password += getRandomChar(chars[0]);
  if (!/[a-z]/.test(password)) password += getRandomChar(chars[1]);
  if (!/\d]/.test(password)) password += getRandomChar(chars[2]);
  while (password.length < length) password += getRandomChar(chars[getRandomInt(0, 3)])
  return password;
}

console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(passwordGen()));

//best

/* 
function passwordGen(){
  var pass = Array.apply(null, Array(Math.floor(Math.random()*(20-6+1)+6))).map(function(){
    var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return c.charAt(Math.random() * c.length);
  }).join('');
  return /(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)^.{6,20}$/.test(pass) ? pass : passwordGen();
}
*/

/* 
const passwordGen = () => {
  let pass;
  const length = Math.floor((Math.random() * 15 + 6));
  const chars = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  do {
    pass = ``;
    for (let i = 0; i < length; i++) pass += chars[Math.floor(Math.random() * 62)]
  } while (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(pass));
  return pass
};
*/

/* 
const { randomBytes } = require("crypto")

function passwordGen () {
  const [MIN_LENGTH, MAX_LENGTH] = [6, 20]
  const length = randomInt(MIN_LENGTH, MAX_LENGTH)
  
  const password = randomBytes(length + MAX_LENGTH)
    .toString('base64')
    .replace(/[\\+]/g, "")
    .slice(0, length)
  
  return validatePassword(password)
    ? password
    : passwordGen()
}

function randomInt (min, max) {
  return Math.floor(Math.random() * max + min)
}

function validatePassword (password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(password)
}
*/