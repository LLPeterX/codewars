/* 
6kyu - Modulus 11 - Check Digit
https://www.codewars.com/kata/568d1ee43ee6afb3ad00001d/train/javascript

Рассчитать контрольное число

Each digit in the product number is assigned a multiplication factor.
The factors are assigned from right to left, starting at 2 and counting up.
For numbers longer than six digits, the factors restart at 2 after 7 is reached.
The product of each digit and its factor is calculated, and the products summed.
 For example:
 digit     :  1    6    7    7    0    3    6    2    5
 factor    :  4    3    2    7    6    5    4    3    2
            ---  ---  ---  ---  ---  ---  ---  ---  ---
              4 + 18 + 14 + 49 +  0 + 15 + 24 +  6 + 10 = 140

Then the sum of the products is divided by the prime number 11.
- if the remainder is 0, the check digit is also 0
- if the remainder is 1, the check digit is replaced by an uppercase X
- for all others, the remainder is subtracted from 11
- The result is the check digit.              
*/

function addCheckDigit(number) {
  let rem = [...number].reverse().reduce((s, d, i) => s + d * "234567"[i % 6], 0) % 11;
  return number + (rem === 0 ? '0' : rem === 1 ? 'X' : 11 - rem);
}

console.log(addCheckDigit("167703625"))
console.log(addCheckDigit("036532"), "0365327");
console.log(addCheckDigit("12388878"), "123888782");
console.log(addCheckDigit("111111111"), "1111111118");
console.log(addCheckDigit("111111111"), "1111111118");
console.log(addCheckDigit("6789"), "6789X");

// best

/* 
function addCheckDigit(number) {
  let digits = [...''+number].reverse().map(x => +x)
  let checksum = (11 - digits.reduce((s, v, i) => s + v * (i % 6 + 2), 0) % 11) % 11
  if (checksum == 10) return number + 'X'
  return number + checksum
}
*/