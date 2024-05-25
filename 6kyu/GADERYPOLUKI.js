/* 
6kyu - GA-DE-RY-PO-LU-KI cypher vol 2
https://www.codewars.com/kata/592b7b16281da94068000107/train/javascript
*/

// function createKeyMap(key) {
//   const keyObj = {};
//   for (let pair of key.match(/../g)) {
//     keyObj[pair[0].toLowerCase()] = pair[1].toLowerCase();
//     keyObj[pair[0].toUpperCase()] = pair[1].toUpperCase();
//     keyObj[pair[1].toLowerCase()] = pair[0].toLowerCase();
//     keyObj[pair[1].toUpperCase()] = pair[0].toUpperCase();
//   }
//   return keyObj;
// }

function encode(str, key) {
  const keys = {};
  for (let pair of key.match(/../g)) {
    keys[pair[0].toLowerCase()] = pair[1].toLowerCase();
    keys[pair[0].toUpperCase()] = pair[1].toUpperCase();
    keys[pair[1].toLowerCase()] = pair[0].toLowerCase();
    keys[pair[1].toUpperCase()] = pair[0].toUpperCase();
  }
  return [...str].map((char) => keys[char] || char).join``;
}

//const decode = (str, key) => encode(str, key);
const decode = encode;
