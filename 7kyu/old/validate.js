/* 
7kyu - UVB-76 Message Validator
https://www.codewars.com/kata/56445cc2e5747d513c000033/train/javascript

Transmitted messages have always the same format like this:

MDZHB 01 213 SKIF 38 87 23 95
or:
MDZHB 80 516 GANOMATIT 21 23 86 25

Message format consists of following parts:

-Initial keyword "MDZHB";
-Two groups of digits, 2 digits in first and 3 in second ones;
-Some keyword of arbitrary length consisting only of uppercase letters;
-Final 4 groups of digits with 2 digits in each group.
*/

function validate(message) {
  return /^MDZHB \d{2} \d{3} [A-Z]+ \d{2} \d{2} \d{2} \d{2}$/.test(message);
}

console.log(validate("Is this a right message?"), false)
console.log(validate("MDZHB 85 596 KLASA 81 00 02 91"), true)
console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32"), true)
console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54"), false)

// best
/* 
const validate = msg => /^MDZHB [\d]{2} [\d]{3} [A-Z]+( [\d]{2}){4}$/.test(msg);
*/