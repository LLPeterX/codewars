/* 
5kyu Primes in numbers
https://www.codewars.com/kata/54d512e62a5e54c96200019e

Дано число N.
Разложить его в виде простых множителей и представить в виде "(p1**n1)(p2**n2)...(pk**nk)"

*/

function primeFactors(n) {
  let primes = new Map(), x = n;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    primes.set(i, 0);
    while (x % i === 0) {
      primes.set(i, primes.get(i) + 1);
      x /= i;
    }
    if (x != 1) {
      primes.set(x, primes.get(x) + 1);
    }
  }
  let a = Array.from(primes).filter(x => x[1] > 0);
  if(x!=1) {
    a.push([x,1]);
  }
  return a.map(([num, exp]) => `(${num}${exp > 1 ? '**' : ''}${exp > 1 ? exp : ''})`).join('');
}

console.log(primeFactors(86240)); // "(2**5)(5)(7**2)(11)"
console.log(primeFactors(7775460)); // "(2**2)(3**3)(5)(7)(11**2)(17)")
console.log(primeFactors(933555431)); // '(7537)(123863)'
console.log(primeFactors(35791357)); // '(7)(5113051)'

//best
/* 
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}
*/

/* 
const primeFactors = n => {
  const obj = {}; let i = 2;
  while (n > 1) !(n % i) ? (obj[i] = -~obj[i], n /= i) : i++;
  return Object.keys(obj).reduce((pre, val) => pre + `(${val}${obj[val] > 1 ? `**${obj[val]}` : ``})`, ``)
}
*/