/* 
6kyu - Simple Fun #126: Decrypt Number
https://www.codewars.com/kata/58a3cb34623e8c119d0000d5/train/javascript


*/

function decrypt(s) {
  for (let i = 1; i <= 10; i++) {
    let big = BigInt(i + s);
    //console.log(` i=${i} check ${big} divisible=${big % 11n}`)
    if (big % 11n === 0n) return String(big / 11n).replace(/^10/, "");
  }
  return "impossible";
}

console.log(decrypt("353"), "123")

console.log(decrypt("444"), "404")

console.log(decrypt("123456"), "738496")

console.log(decrypt("147"), "377")

console.log(decrypt("4334"), "impossible")

console.log(decrypt("61505857501274347195"), "96500532500115849745");

//console.log(BigInt("96500532500115849745") * 10n + BigInt("96500532500115849745"));

// best
/* 
function decrypt(s) {

  let digits = s.split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i--) {
    digits[i] -= digits[i + 1];

    if (digits[i] < 0) {
      digits[i] += 10;
      digits[i - 1] -= 1;
    }

  }

  return digits[0] ? digits.join('') : 'impossible';

}
*/

/* 
function decrypt(s) {
  let curr = 0, carry = 0, res = "";
  for (let c of [...s].reverse().join('')) {
    curr = Number(c) - curr - carry;
    carry = curr < 0;
    curr = (curr + 10) % 10;
    res += curr;
  }
  return !res.endsWith('0') ? [...res].reverse().join('') : 'impossible';
}
*/