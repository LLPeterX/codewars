/* 
7kyu - GA-DE-RY-PO-LU-KI cypher
https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
*/

const cipher = ['gaderypolukiGADERYPOLUKI', 'agedyropulikAGEDYROPULIK'];
const encode = (str) => str.replace(/./g, (c) => { let k = cipher[0].indexOf(c); return k >= 0 ? cipher[1][k] : c; });
const decode = (str) => str.replace(/./g, (c) => { let k = cipher[1].indexOf(c); return k >= 0 ? cipher[0][k] : c; });


console.log(encode("Ala has a cat"), "Gug hgs g cgt");
console.log(decode("Gug hgs g cgt"), "Ala has a cat");
console.log(encode("ABCD"), "GBCE");
console.log(encode("gaderypoluki"), "agedyropulik");
console.log(decode("agedyropulik"), "gaderypoluki");
console.log(decode("GBCE"), "ABCD");

// best
/* 
const dict = {
  G: "A", A: "G", D: "E", E: "D", 
  R: "Y", Y: "R", P: "O", O: "P", 
  L: "U", U: "L", K: "I", I: "K", 
  g: "a", a: "g", d: "e", e: "d", 
  r: "y", y: "r", p: "o", o: "p", 
  l: "u", u: "l", k: "i", i: "k", 
}

const encode = s => s.replace(/./g, c => dict[c] || c)
const decode = encode
*/