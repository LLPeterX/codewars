/* 
6kyu - Ciphers #2 - The reversed Cipher
https://www.codewars.com/kata/59474c656ff02b21e20000fc/train/javascript
*/

// function encode(plaintext) {
//   let arr = plaintext.split(' ');
//   let res = [];
//   for (let word of arr) {
//     let w = [...word].reverse().join``;
//     res.push(w.slice(1) + w[0]);
//   }
//   return res.join(' ');
// }

// final:
function encode(plaintext) {
  return plaintext.split(' ').map(word => {
    let w = [...word].reverse().join``;
    return (w.slice(1) || '') + (w[0] || '');
  }).join(' ');
}

console.log(encode("Hello World!"), "lleHo dlroW!")

// best
/* 
const encode = t => t.replace(/(\S+)(\S)/g, (_,w,s) => w.split('').reverse().join('') + s);
*/

/* 
function encode(plaintext){
   return plaintext.split` `.map(v=>[...v].reverse().join``.slice(1)+v.slice(-1)).join` `
}
*/