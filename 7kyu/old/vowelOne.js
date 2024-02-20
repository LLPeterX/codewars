/* 
7kyu - Vowel one
https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.
*/

/* 
function vowelOne(s) {
  // const vowels = 'aeiouy';
  // let res = "";
  // for (let i = 0; i < s.length; i++) {
  //   res += vowels.includes(s[i]) ? '1' : '0';
  // }
  // return res;
  return [...s.toLowerCase()].reduce((x, v) => x + Number('aeiouy'.includes(v)), "");
}
 */
const vowelOne = s => [...s.toLowerCase()].reduce((x, v) => x + Number('aeiou'.includes(v)), "");


console.log(vowelOne("vowelOne"), "01010101");
console.log(vowelOne("123, arou"), "000001011");

// best

/* 
function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}
 */

/* 
const vowelOne = s =>
  s.replace(/./g, val => +/[aeiou]/gi.test(val)); 
*/