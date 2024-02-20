/* 
6kyu - JoJo's Bizarre Kata
https://www.codewars.com/kata/55327e12f5363713200000e4/train/javascript

Now, the drill in this kata is rather easy: either create a regex expression 
or a function to find if a given name is a proper JoJo or not in boolean terms 
(true/True if it is valid, false/False otherwise).

To recap, you have a valid JoJo if:

* both your firstname and your surname start with "Jo-"
* your firstname starts with "Jo-" and your surname ends with "-Jo"
* both your firstname and your surname start with "Gio-"

Notes:

* don't expect the to have a string formed by only two words joined by a space: 
  strings may be of 1 word, 2 words, 3 words or more
* lower- and uppercase will not matter here
* consider the first word as the firstname and the last word as the surname
*/

/*
// first working variant 
const regex = /^jo/i;
function isJojo(name) {
  let [firstname, surname] = name.split(' ');
  if (!surname) surname = "";
  //console.log(`f=${firstname} su=${surname}`);
  return (regex.test(firstname) && regex.test(surname)) ||
    (regex.test(firstname) && /jo$/i.test(surname)) ||
    (/^gio/i.test(firstname) && /^gio/i.test(surname));
}
*/


// final solution:
const regex = /(^jo\S*\sjo)|(^gio\S*\sgio)|(^jo\S*\s.*?jo$)/i;
const isJojo = name => regex.test(name);


console.log(isJojo("Joseph Joestar"), true);
console.log(isJojo("Giorno Giovanna"), true);
console.log(isJojo("Josuke Joestar"), true);
console.log(isJojo("Josuke Joestar"), true);
console.log(isJojo("Dio Brando"), false);
console.log(isJojo("George Joestar II"), false);
console.log(isJojo("Kars"), false);
console.log(isJojo("Josuke Higashikata"), false);