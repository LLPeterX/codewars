/* 
7kyu - Convert Improper Fraction to Mixed Numeral
https://www.codewars.com/kata/574e4175ff5b0a554a00000b/train/javascript

Write a function convertToMixedNumeral to convert the improper fraction into a mixed numeral.

The input will be given as a string (e.g. '4/3').

The output should be a string, with a space in between 
the whole number and the fraction (e.g. '1 1/3').
You do not need to reduce the result to its simplest form.

For the purpose of this exercise, there will be no 0, 
empty string or null input value. However, the input can be:
- a negative fraction
- a fraction that does not require conversion
- a fraction that can be converted into a whole number
*/

function convertToMixedNumeral(parm) {
  let [n, f] = parm.split("/").map(Number);
  if (Math.abs(n) < f) return parm;
  else if (n % f === 0) return `${n / f}`;
  else return `${~~(n / f)} ${Math.abs(n) % f}/${f}`
}

console.log(convertToMixedNumeral('6/2'), '3');
console.log(convertToMixedNumeral('74/3'), '24 2/3');
console.log(convertToMixedNumeral('-504/26'), '-19 10/26');
console.log(convertToMixedNumeral('9/18'), '9/18');

// best

/* 
function convertToMixedNumeral(parm){
  const [topStr, bottomStr] = parm.split('/');
  const top = parseInt(topStr, 10);
  const bottom = parseInt(bottomStr, 10);
  const integer = top > 0 ? Math.floor(top/bottom) : Math.ceil(top/bottom);
  const fraction = integer === 0 ? top % bottom : Math.abs(top % bottom);
  return `${integer ? '' + integer : ''} ${fraction ? '' + fraction + '/' + bottom: ''}`.trim();
}
*/

/* 
const convertToMixedNumeral = (parm) => {
  const [a, b] = parm.split("/");

  if (Math.trunc(a / b)) {
    let x = Math.trunc(a / b);
    if (Number.isInteger(a / b)) return `${a / b}`;
    return `${x} ${Math.abs(a - x * b)}/${b}`;
  } else {
    return `${a}/${b}`;
  }
};
*/