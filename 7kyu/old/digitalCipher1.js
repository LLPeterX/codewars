/* 
7kyu - Digital cypher vol 1
https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript
*/
function encode(str, n) {
  let key = n.toString().split('').map(Number);
  return [...str].map((c, i) => c.charCodeAt(0) - 96 + key[i % key.length]);
}
