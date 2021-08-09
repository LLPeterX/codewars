/* 
7kyu - Strings: swap vowels' case
https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript
 */

const swapVowelCase = (str) => str.replace(/([aeoui])/gi, (m) => m >= 'a' ? m.toUpperCase() : m.toLowerCase());


console.log(swapVowelCase(" "), " ");
console.log(swapVowelCase("C Is AlIvE!"), "C is alive!");
console.log(swapVowelCase("to"), "tO");
console.log(swapVowelCase("The"), "ThE");

// best
/*
swapVowelCase=s=>s.replace(/[aeiou]/gi,v=>''+Buffer.from(v).map(v=>v^32))
*/

/*
const swapVowelCase = str => str.replace(/[aeoui]/gi, i => i > 'Z' ? i.toUpperCase`` : i.toLowerCase``)
*/