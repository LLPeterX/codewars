/* 
7kyu - Absent vowel
https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript
*/

function absentVowel(x) {
  let w = "aeiou";
  for (let i = 0; i < w.length; i++) {
    if (!new RegExp(w[i], 'ig').test(x)) return i;
  }

}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);