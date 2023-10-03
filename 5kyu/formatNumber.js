/* 
5kyu - The "AA" Number Notation
https://www.codewars.com/kata/64e4cdd7f2bfcd142a880011

Some idle games use following notation to represent big numbers:

Number	Notation	Description
1	1	1
1 000	1K	Thousand
1 000 000	1M	Million
1 000 000 000	1B	Billion
1 000 000 000 000	1T	Trillion
1 000 000 000 000 000	1aa	Quadrillion
10¹⁸	1ab	Quintillion
10²¹	1ac	Sextillion
10²⁴	1ad	Octillion

And so on, from aa to az, then from ba to bz, etc, until zz. 
The letters before and including trillion should be uppercase, 
letters after quadrillion should be lowercase to easy distinguish 
between the 'common' notation and 'aa' one.


Your task is to write a function that accepts a floating point number 
and formats it using the notation given above.

*The resulting number should include 3 most significant digits 
and be rounded down towards zero 
(for example, 1238 should be 1.23K, and -1238 should be -1.23K). 

*All trailing zeroes after the decimal point should be removed, 
and the decimal point should be excluded if the resulting number 
is whole number of units after the rounding down. 

*If the number is too small and it's rounded down to 0, then 0 should be returned. 

* Beware of the negative zero, which should not appear in the output, 
  insted the regular zero 0 should be returned.

Input limitation
The input is a finite floating point number in range -10³⁰³ < x < 10³⁰³.
*/

const abbr = [[3, 'K'], [6, 'M'], [9, 'B'], [12, 'T']];

function addPowers() {
  if (abbr.length > 1000) return; // no work
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let k = 15;
  for (let a of alphabet) {
    for (let b of alphabet) {
      abbr.push([k, a + b]);
      k += 3;
    }
  }
}

// transform number to 3 most significant digits
function transform(n) {
  if (Math.abs(n) === 0) return '0';
  let str = String(n);
  let [int, fraction] = str.split('.');
  if (!fraction) return int;
  return str.slice(0, n < 0 ? 5 : 4).replace(/0+$/, '').replace(/\.$/, '');
}

function formatNumber(n) {
  if (Math.abs(n) < 1000) return transform(Math.trunc(n * 100) / 100);
  addPowers();
  let p = ~~Math.log10(Math.abs(n));
  let k, x;
  // binary search must be faster, but I'm too lazy...
  for (k = 0; k < abbr.length; k++) if (p <= abbr[k][0]) break;
  do {
    x = ~~(n / (10 ** abbr[k][0]) * 100) / 100;
    --k;
  } while (Math.abs(x) < 1);
  return `${transform(x)}${abbr[k + 1][1]}`;
}


// ----------------------------------- 
function doTest(n, exp) {
  let result = formatNumber(n);
  console.log(`n=${n} res=${result} exp=${exp}  ${result === exp}`);
}


