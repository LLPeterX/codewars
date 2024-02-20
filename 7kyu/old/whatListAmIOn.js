/* 
7kyu - Naughty or Nice?
https://www.codewars.com/kata/585eaef9851516fcae00004d/train/javascript

In this kata, you will write a function that receives an array of string 
and returns a string that is either 'naughty' or 'nice'. 

* Strings that start with the letters b, f, or k are naughty. 
* Strings that start with the letters g, s, or n are nice. 
* Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'
*/

function whatListAmIOn(actions) {
  let nices = actions.filter(str => /^[gsn]/i.test(str)).length;
  let naughties = actions.filter(str => /^[bfk]/i.test(str)).length;
  return nices > naughties ? 'nice' : 'naughty';
}

