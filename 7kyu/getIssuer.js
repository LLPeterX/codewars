/* 
7kyu - Credit card issuer checking
https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript

Complete the function getIssuer() that will use the values shown below 
to determine the card issuer for a given card number. 
If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
*/

function getIssuer(number) {
  let s = "" + number; // лишне!
  if (/^3[47]/.test(s) && s.length === 15) return 'AMEX';
  if (/^6011/.test(s) && s.length === 16) return 'Discover';
  if (/^5[12345]/.test(s) && s.length === 16) return 'Mastercard';
  if (/^4/.test(s) && (s.length === 16 || s.length === 13)) return 'VISA'
  return "Unknown";
}

console.log(getIssuer(4111111111111111), 'VISA');
console.log(getIssuer(378282246310005), 'AMEX');
console.log(getIssuer(9111111111111111), 'Unknown');

// best
/* 
function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
*/

/* 
unction getIssuer(number) {
  var cardTypes = [
    { type: "AMEX",       prefix: ["34", "37"],                   length: [15]     },
    { type: "Discover",   prefix: ["6011"],                       length: [16]     },
    { type: "Mastercard", prefix: ["51", "52", "53", "54", "55"], length: [16]     },
    { type: "VISA",       prefix: ["4"],                          length: [13, 16] },
  ]
  number += ""
  for (var i in cardTypes)
    if ( cardTypes[i].prefix.some(v=>{return number.startsWith(v)}) &&
         cardTypes[i].length.some(v=>{return number.length == v}) )
      return cardTypes[i].type
  return "Unknown"
}
*/