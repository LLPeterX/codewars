/* 
6kyu - Simple decrypt algo
https://www.codewars.com/kata/58693136b98de0e4910001ab/train/javascript
*/

// faster
// function decrypt(encryption) {
//   let result = Array(26).fill(0);
//   for (let c of encryption) {
//     let n = c.charCodeAt();
//     if (n >= 97 && n <= 122) result[n - 97]++;
//   }
//   return result.join``;
// }

// slow but fun
const decrypt = encryption => [...encryption].filter(c => /[a-z]/.test(c)).reduce((a, c) => { a[c.charCodeAt() - 97]++; return a; }, Array(26).fill(0)).join``;

//console.log('a'.charCodeAt(), 'z'.charCodeAt());

console.log(decrypt('$aaaa#bbb*ccfff!z'), '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee123456789'), '30303000000000000000000001');