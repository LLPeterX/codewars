/* 
7kyu - Spoonerize Me
https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript

A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"
*/

function spoonerize(words) {
  let arr = words.split(' ');
  return arr[1][0] + arr[0].slice(1) + ' ' + arr[0][0] + arr[1].slice(1);
}

console.log(spoonerize("nit picking"), "pit nicking");
console.log(spoonerize("wedding bells"), "bedding wells");
console.log(spoonerize("jelly beans"), "belly jeans");

// best
/* 
const spoonerize = words => words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');
*/