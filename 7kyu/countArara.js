/* 
7kyu - Counting in the Amazon
https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/javascript

The Arara are an isolated tribe found in the Amazon who count in pairs.
For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.
*/

// function countArara(n) {
//   let ananes = 'adak '.repeat(~~(n / 2));
//   let adaks = 'anane '.repeat(n % 2);
//   return [ananes, adaks];
// }

const countArara = n => ('adak '.repeat(~~(n / 2)) + 'anane '.repeat(n % 2)).trim();

console.log(countArara(1), "anane");
console.log(countArara(3), "adak anane");
console.log(countArara(8), "adak adak adak adak");