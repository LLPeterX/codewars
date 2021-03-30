/* 
5kyu Factorial decomposition
https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript

Разложить факториал на простые множители,

 */
function decomp(n) {
  // generate n prime numbers
  let primes = [2, 3];
  for (let i = 5; i <= n; i += 2) {
    if (primes.every((p) => i % p)) {
      primes.push(i);
    }
  }
  let digits = [];
  for (let i = 0; i < primes.length; i++) {
    let count = 0, sum = 0;
    while (true) {
      let pw = Math.pow(primes[i], ++count);
      if (pw > n) {
        break;
      }
      sum += Math.floor(n / pw);
    }
    digits.push([primes[i], sum]);
  }
  return digits.filter(e => e[1] > 0).map(n => n[1] > 1 ? n[0] + "^" + n[1] : n[0]).join(" * ");
}