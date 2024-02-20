/* 
7kyu - Simple Fun #175: Same Encryption
https://www.codewars.com/kata/58b6c403a38abaaf6c00006b/train/javascript

John loves encryption. He can encrypt any string by the following algorithm:

- take the first and the last letters of the word;
- replace the letters between them with their number;
- replace this number with the sum of it digits -  until a single digit is obtained.```

Given two strings(`s1` and `s2`), return `true` if their encryption is the same, or `false` otherwise.

# Example

 For `s1 = "EbnhGfjklmjhgz" and s2 = "Eabcz"`, the result should be `true`.
"EbnhGfjklmjhgz" --> "E12z" --> "E3z" "Eabcz" --> "E3z" Their encryption is the same.```
*/

function sameEncryption(s1, s2) {
  function encode(str) {
    let n = str.length - 2;
    while (n > 9) n = [...`${n}`].reduce((sum, x) => sum + +x, 0);
    return `${str[0]}${n}${str[str.length - 1]}`;
  }
  return encode(s1) == encode(s2);
}

console.log(sameEncryption("EbnhGfjklmjhgz", "Eabcz"))

// best

/* 
function sameEncryption(s1, s2) {
  const en=s=>s.replace(/\B.*\B/,x=>(x.length%9)||9)
  return en(s1)==en(s2)
}
*/