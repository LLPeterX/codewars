/* 
6kyu - String Breakers
https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript

I will give you an integer (N) and a string. 
Break the string up into as many substrings of N as you can without spaces.
 If there are leftover characters, include those as well.
*/

function stringBreakers(n, string) {
  let m = string.replace(/\s/g, '').match(new RegExp(`.{1,${n}}`, 'g')).join("\n");
  return m;
}

console.log(stringBreakers(5, 'This is an example string'), 'Thisi' + '\n' + 'sanex' + '\n' + 'ample' + '\n' + 'strin' + '\n' + 'g'); 