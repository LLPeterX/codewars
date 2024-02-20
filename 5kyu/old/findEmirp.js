/* 
5kyu - Emirps
https://www.codewars.com/kata/55de8eabd9bef5205e0000ba

If you reverse the word "emirp" you will have the word "prime". 
That idea is related with the purpose of this kata: we should select all the primes 
that when reversed are a different prime (so palindromic primes should be discarded).

For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, 
so 13 and 17 are "emirps". 
But primes 757, 787, 797 are palindromic primes, meaning that the reversed number is the same as the original,
so they are not considered as "emirps" and should be discarded.

The emirps sequence is registered in OEIS as A006567

Your task
Create a function that receives one argument n, as an upper limit, and the return the following array:
[number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

*/
const primes = new Set();
function isPrime(num) {
  if (num % 2 === 0) return false;
  if (primes.has(num)) return num;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
function findEmirp(n) {
  let count = 0, sum = 0, largest = 0;
  for (let i = n - 1; i > 3; i--) {
    if (isPrime(i)) {
      let str = "" + i;
      let rev = [...str].reverse().join``;
      if (str !== rev && isPrime(+rev)) {
        count++;
        sum += i;
        largest = largest || i;
      }
    }
  }
  return [count, largest, sum];
}

console.log(findEmirp(100));

// best
/* 
function isPrime(num){
  if(num % 2 == 0) return false;
  for(var i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i == 0) return false;
  }
  return true;
}
function findEmirp(n){
  var ans = [], st = 13, rev, sm = 0, cnt = 0;
  for(var i = st; i <= n; i += 2) {
    if(isPrime(i)) {
      rev = +i.toString().split("").reverse().join("");
      if(rev !== i && isPrime(rev)) {
        ans.push(i);
        sm += i;
        cnt++;
      }
    }
  }
  return [cnt, ans[cnt-1], sm]
}
*/

/* 
findEmirp=(a,b=(c,d=2)=>d*d>c?!0:c%d?b(c,++d):!1,c=[])=>{ 
  while(a) {if (b(a))c.push(a);--a; }
  return c.filter((a,_,__,c=+(""+a).split``.reverse().join``)=>b(c)&&a-c).reduce(([a,b,c],d,e)=>[e+1,d>b?d:b,c+d],[0,0,0]);
}
*/

/* 
function findEmirp(n){
  let emirps = primeGenerator(n).filter(isEmirp);
  return emirps.length ? [emirps.length, Math.max.apply(null, emirps), emirps.reduce((acc, cur) => acc+cur, 0)] : [0, 0, 0];
}

function primeGenerator(n) {
  let arr = [];
  for (let i=10; i<=n; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
}

function isPrime(num) {
  if (num % 2 === 0 ) return false;
  let max = Math.sqrt(num);
  for (let i=3; i<=max; i+=2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isEmirp(num) {
  let numReversed = +(num+'').split('').reverse().join('');
  if (isPrime(numReversed) && num !== numReversed) return true;
  return false;
}
*/