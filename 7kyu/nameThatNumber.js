/* 
7kyu - Name That Number!
https://www.codewars.com/kata/579ba41ce298a73aaa000255/train/javascript

In this kata, you'll be given an integer of range 0 <= x <= 99 
and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. 
No need to validate parameters, they will always be in the range [0, 99]. 
Make sure that the returned String has no leading of trailing spaces. Good luck!
*/

// see solution from 5kyu/number2words.js
function nameThatNumber(num) {
  // const n1_19 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  // const n20_99 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (num < 20) {
    return words[num];
  }
  return words[Math.floor(num / 10) + 20 - 2] + (num % 10 === 0 ? '' : ' ' + words[num % 10])
}

//final:
/* 
function nameThatNumber(num) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  return num < 20 ? words[num] : words[Math.floor(num / 10) + 20 - 2] + (num % 10 === 0 ? '' : ' ' + words[num % 10]);
}
*/

console.log(nameThatNumber(21), 'twenty one');
console.log(nameThatNumber(53), 'fifty three');
console.log(nameThatNumber(76), 'seventy six');
