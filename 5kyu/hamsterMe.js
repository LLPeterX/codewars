/* 
5kyu - Hamster me
https://www.codewars.com/kata/595ddfe2fc339d8a7d000089/train/javascript
*/

// first option
// function hamsterMe(code, message) {
//   const matrix = Array(26).fill().map(_ => Array(code.length).fill(' '));
//   const encoder = {};
//   let codeArray = [...code].sort();
//   let k, i;
//   for (k = 0; k < codeArray.length; k++) {
//     let charCode = codeArray[k].charCodeAt();
//     let nextChar = k < codeArray.length - 1 ? codeArray[k + 1] : '{';
//     let nextCharCode = nextChar.charCodeAt();
//     for (i = 0; i < nextCharCode - charCode; i++) {
//       let c = String.fromCharCode(charCode + i)
//       matrix[i][k] = c;
//       encoder[c] = `${codeArray[k]}${i + 1}`;
//     }
//   }
//   if (codeArray[0] > 'a') {
//     for (let j = 97; j < codeArray[0].charCodeAt(); j++) {
//       encoder[String.fromCharCode(j)] = `${codeArray[codeArray.length - 1]}${i + j - 96}`;
//     }
//   }
//   console.log(encoder);
//   return [...message].map(char => encoder[char]).join``;
// }


function hamsterMe(code, message) {
  const encoder = {};
  let codeChars = [...code].sort();
  let i;
  for (let k = 0; k < codeChars.length; k++) {
    let charAscii = codeChars[k].charCodeAt();
    let nextCharAscii = (k < codeChars.length - 1 ? codeChars[k + 1] : '{').charCodeAt();
    for (i = 0; i < nextCharAscii - charAscii; i++) {
      encoder[String.fromCharCode(charAscii + i)] = `${codeChars[k]}${i + 1}`;
    }
  }
  if (codeChars[0] > 'a') {
    for (let j = 97; j < codeChars[0].charCodeAt(); j++) {
      encoder[String.fromCharCode(j)] = `${codeChars[codeChars.length - 1]}${i + j - 96}`;
    }
  }
  return [...message].map(char => encoder[char]).join``;
}
console.log(hamsterMe("hamster", "hamster"), "h1a1m1s1t1e1r1");
console.log(hamsterMe("hamster", "helpme"), "h1e1h5m4m1e1");
console.log(hamsterMe("hmster", "hamster"), "h1t8m1s1t1e1r1", "Lack of letter in the code?"); // !!
console.log(hamsterMe("hhhhammmstteree", "hamster"), "h1a1m1s1t1e1r1", "Duplication of letters in code?");
console.log(hamsterMe("hamster", "abcdefghijklmnopqrstuvwxyz"), "a1a2a3a4e1e2e3h1h2h3h4h5m1m2m3m4m5r1s1t1t2t3t4t5t6t7");
console.log(hamsterMe("f", "abcdefghijklmnopqrstuvwxyz"), "f22f23f24f25f26f1f2f3f4f5f6f7f8f9f10f11f12f13f14f15f16f17f18f19f20f21", "One letter code ?");

// best

/* 
function hamsterMe(code, message) {
    var map = {}, abc = "abcdefghijklmnopqrstuvwxyz".split('');
    abc.forEach((l, i) => {
      var k = 1;
      while (code.indexOf(abc[i]) == -1) k++, i = i?i-1:25;
      map[l] = abc[i]+k;
    });
    return message.replace(/./g, l => map[l]);
}

*/