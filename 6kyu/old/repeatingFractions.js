/* 
6kyu - Group Repeating Fractions
https://www.codewars.com/kata/5613475e4778aab4d600004f

Write function repeatingFractions(numerator, denominator)
that given two numbers representing the numerator and denominator 
of a fraction, return the fraction in string format. 
If the fractional part has repeated digits, replace those digits 
with a single digit in parentheses.

For example:

repeatingFractions(1,1) === '1'
repeatingFractions(1,3) === '0.(3)'
repeatingFractions(2,888) === '0.(0)(2)5(2)5(2)5(2)5(2)5(2)'
*/

function repeatingFractions(numerator, denominator) {
  let [n, fr] = String(numerator / denominator).split('.');
  if (!fr) return n;
  const groups = [{ letter: fr[0], count: 1 }];
  for (let i = 1, j = 0; i < fr.length; i++) {
    if (fr[i] === groups[j].letter) {
      groups[j].count++;
    } else {
      groups.push({ letter: fr[i], count: 1 });
      j++;
    }
  }
  return n + '.' + groups.map(g => g.count > 1 ? `(${g.letter})` : g.letter).join``;
}


// best
/* 
function repeatingFractions(n, d) {
  return String(n/d).replace(/(?<=\..*)(\d)\1+/g,"($1)");
}
*/

/* 
function repeatingFractions(numerator, denominator) {
   var parts = (numerator / denominator).toString().split('.');
   if (parts.length == 2) {
     parts[1] = parts[1].replace(/([0-9])\1+/g, '($1)');
   }
   return parts.join('.');
}
*/