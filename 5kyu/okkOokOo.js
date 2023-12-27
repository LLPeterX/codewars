/* 
5kyu - Ookkk, Ok, O? Ook, Ok, Ooo!
https://www.codewars.com/kata/55035eb47451fb61c0000288/train/javascript
*/


function okkOokOo(okkOookk) {
  const charMap = { o: 0, O: 0, k: 1, K: 1, '?': '?' };
  return String.fromCodePoint(...okkOookk
    .replace(/./g, (c) => c in charMap ? charMap[c] : '')
    .split('?')
    .map(code => parseInt(code, 2))
  );
}

console.log(okkOokOo('Ok, Ook, Ooo?  Okk, Ook, Ok?  Okk, Okk, Oo?  Okk, Okk, Oo?  Okk, Okkkk!'));