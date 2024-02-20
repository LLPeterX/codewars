/* 
7kyu - Sort by bytes
https://www.codewars.com/kata/6076d4edc7bf5d0041b31dcf/train/javascript

Дано число x32. Отсортировать байты так, чтобы получилось макс.число
*/
/* 
function sortBytes(uint32) {
  return parseInt(uint32.toString(16).padStart(8, '0').match(/.{2}/g).sort((a, b) => b.localeCompare(a)).join(''),16);
  //let arr = numStr.match(/.{2}/g);
  //arr.sort((a, b) => b.localeCompare(a));
  //return parseInt(arr.join(''), 16);
//  return parseInt(numStr, 16);
}

 */

const sortBytes = (uint32) => parseInt(uint32.toString(16).padStart(8, '0').match(/.{2}/g).sort((a, b) => b.localeCompare(a)).join(''), 16);

console.log(sortBytes(0xdadb0d)); // 3688500480 (db da 0d 00)
console.log(sortBytes(0xdeadbeef), '0xefdebead'); // 0xefdebead
console.log(sortBytes(3735928559)); // 4024352429

//best

/*
function sortBytes(u_32) {
  return parseInt(u_32.toString(2).padStart(32, "0").match(/[0-1]{8}/g).sort((a, b) => b - a).join(''), 2)
}
*/

/*
function sortBytes(uint32) {
  return parseInt(uint32.toString(2).padStart(32, "0").match(/[0-1]{8}/g).sort((a, b) => b - a).join(''), 2)
}
*/

/*
const sortBytes=(n)=>
  [0,1,2,3]
  .map(e=>(n>>8*e)&255)
  .sort((a,b)=>b-a)
  .reduce((a,b)=>256*a+b,0)
*/

/*
sortBytes=n=>[n&255, n>>>8&255, n>>>16&255, n>>>24&255].sort((a,b) => b-a).reduce((a,b) => 256*a+b)
*/