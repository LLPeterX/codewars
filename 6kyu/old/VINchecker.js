/* 
6kyu - VIN Checker
https://www.codewars.com/kata/60a54750138eac0031eb98e1/train/javascript

Написать функцию  проверки VIN
 */

const checkVin = (vin) => {
  const vinDigits = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 0, 7, 0, 9, 2, 3, 4, 5, 6, 7, 8, 9];
  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  const sym2digit = (char) => (+char >= 0 && +char <= 9) ? +char : vinDigits[char.charCodeAt(0) - 65];

  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
    return false;
  }
  let mod11 = "" + [...vin].map((char, i) => sym2digit(char) * weights[i]).reduce((sum, v) => sum + v) % 11;
  if (mod11 === '10') {
    mod11 = 'X';
  }
  return vin[8] === mod11;;

};

console.log(checkVin("5YJ3E1EA7HF000337"), true);
console.log(checkVin("5YJ3E1EAXHF000347"), true);
console.log(checkVin("5VGYMVUX7JV764512"), true);
console.log(checkVin("7WDMMTDV9TG739741"), false);
console.log(checkVin("7JTRH08L5EJ234829"), false);
console.log(checkVin("8WXSY7WGXBM122383"), false);
console.log(checkVin("8BZJJZTPXRN730355"), true);


//console.log(/^[A-HJ-NPR-Z0-9]{17}$/.test('5YJ3E1EA7HF00033Q'));

// best
/*
const ALPHABET = 'ABCDEFGHIJKLMNOPQR_STUVWXYZ123456789';
const WEIGHTS =  [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];

const checkVin = vin =>
  /[A-HJ-NPR-Z\d]{17}/.test(vin) &&
  [...vin].reduce((acc, symb, idx) => acc + (ALPHABET.indexOf(symb) % 9 + 1) * WEIGHTS[idx], 0) % 11
     ===
  (vin[8] === 'X' ? 10 : +vin[8]);
*/