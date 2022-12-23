/* 
7kyu - The Culling of Stratholme
https://www.codewars.com/kata/634913db7611b9003dff49ad

You will receive a string s as input: Each "word" represents a house, 
and each letter represents a citizen. 
All infected citizens are represented as "i" or "I" in s. 
You must eradicate them, and their neighbors. 
If an infected citizen appears after or before a space, you should not delete the space, 
but keep in mind that the distance from "house" to "house" (word to word) has to have only one whitespace.
*/

function purifyTheStratholme(s) {
  return s.split(' ').map(house => house.replace(/[^i]?i[^i]?/gi, '')).filter(Boolean).join(' ');
}

console.log(purifyTheStratholme("1i2 33 i4i5 i555ii5"));
console.log(purifyTheStratholme("It is a bit chilly"));
console.log(purifyTheStratholme("Pineapple pizza is delicious"));