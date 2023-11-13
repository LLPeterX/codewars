/* 
7kyu - Smooth numbers
https://www.codewars.com/kata/5b2f6ad842b27ea689000082/train/javascript

The concept of "smooth number" is applied to all those numbers 
whose prime factors are lesser than or equal to 7: 
60 is a smooth number (2 * 2 * 3 * 5), 111 is not (3 * 37).

More specifically, smooth numbers are classified 
by their highest prime factor and your are tasked 
with writing a isSmooth/is_smooth function 
that returns a string with this classification as it follows:

* 2-smooth numbers should be all defined as a "power of 2", as they are merely that;
* 3-smooth numbers are to return a result of "3-smooth";
* 5-smooth numbers will be labelled as "Hamming number"s 
  (incidentally, you might appreciate this nice kata on them);
* 7-smooth numbers are classified as "humble number"s;
* for all the other numbers, just return non-smooth.
*/
const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;
  return n > 1;
}

function isSmooth(n) {
  let factors = [], j = 2;
  while (j <= n) {
    if (isPrime(j)) {
      while (n % j === 0) {
        factors.push(j);
        n = n / j;
      }
    }
    j++;
  }
  if (factors.some(x => x > 7)) return "non-smooth";
  return ['', '', "power of 2", "3-smooth", '', "Hamming number", '', "humble number"][Math.max(...factors)];
}

// --------------- TEST -------------------
const tests = [
  [16, 'power of 2'],
  [36, '3-smooth'],
  [60, 'Hamming number'],
  [98, 'humble number'],
  [111, 'non-smooth'],
  [4096, 'power of 2'],
  [729, '3-smooth'],
  [3125, 'Hamming number'],
  [7, 'humble number'],
  [17, 'non-smooth'],
];

for (const [input, expected] of tests) {
  console.log(input, isSmooth(input), expected);
}

// best

/* 
function isSmooth(n){
  var primes = {2: "power of 2", 3: "3-smooth", 5: "Hamming number", 7: "humble number"};
  
  for(var key in primes)
    while(n%key == 0)
      if((n/=key) == 1) return primes[key];
  
  return "non-smooth";
}
*/

/* 
function isSmooth(n){
  let prime
  for (prime of [2, 3, 5, 7, null]) {
    while (n % prime == 0) n /= prime
    if (n == 1) break
  }
  
  return [
    null,
    null,
    'power of 2',
    '3-smooth',
    null,
    'Hamming number',
    null,
    'humble number'
  ] [prime] || 'non-smooth'
}
*/