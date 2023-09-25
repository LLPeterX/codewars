/* 
6kyu - Fraction to periodic decimal
https://www.codewars.com/kata/63a8e2a89803f2a5c0a813f7

*/

function fractionToPeriodic(numerator, denominator) {
  if (Number.isInteger(numerator / denominator)) return String(numerator / denominator);
  let result = String(~~(numerator / denominator)) + ".";
  const x = new Map();
  let index = 0;
  numerator %= denominator;
  x.set(numerator, index);
  while (true) {
    if (numerator === 0) break;
    let digit = ~~(numerator * 10 / denominator);
    numerator = numerator * 10 - (~~(numerator * 10 / denominator)) * denominator;
    if (x.get(numerator) === undefined) {
      result += String(digit);
      x.set(numerator, ++index);
      t = false;
    } else {
      result += String(digit) + ")";
      let k = result.indexOf('.'), j = x.get(numerator)
      result = result.slice(0, j + k + 1) + "(" + result.slice(j + k + 1);
      break;
    }
  }
  return result;
}

console.log(fractionToPeriodic(8, 4), '2');
console.log(fractionToPeriodic(1, 2), "0.5");
console.log(fractionToPeriodic(1, 3), "0.(3)");
console.log(fractionToPeriodic(5, 7), "0.(714285)");
console.log(fractionToPeriodic(123, 65), "1.8(923076)");

console.log(fractionToPeriodic(10, 3), "3.(3)");


// best

/* 
function fractionToPeriodic(n,d) {
  function go(n) {
    let r = "";
    for ( let seen=new Map; n; seen.set(n,r.length), n*=10, r+=String(n/d|0), n%=d )
      if ( seen.has(n) )
        return r.slice(0,seen.get(n)) + '(' + r.slice(seen.get(n)) + ')' ;
    return r;
  }
  return n%d ?
    `${ n/d|0 }.${ go(n%d) }` :
    `${ n/d|0 }` ;
}
*/

/* 
const gcd=(a,b)=>b?gcd(b,a%b):a;

function fractionToPeriodic(n, d){
  let g = gcd(n,d);
  [n,d] = [n,d].map(x=>BigInt(x/g));
  if (n%d===0n) return `${n/d}`;
  var [a,b,p,q,r] = [0,0,10n,d,1n];
  while (d%2n===0n) {a++; r*=2n; d/=2n;}
  while (d%5n===0n) {b++; r*=5n; d/=5n;}
  let z=Math.max(a,b), s=(((n%q)*10n**BigInt(z))/q).toString();
  if (d===1n) return `${n/q}.${s.padStart(z, '0')}`;
  while ((n*(p-1n))%d) p*=10n;
  return
*/