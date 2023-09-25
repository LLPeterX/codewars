/* 
6kyu - Pure odd digits primes
https://www.codewars.com/kata/55e0a2af50adf50699000126

Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

[number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]
*/


function isPurePrime(num) {
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return !String(num).split('').map(Number).some(x => x % 2 === 0);
}

function onlyOddDigPrimes(n) {
  let result = [0, 3, 0];
  for (let i = 3; i < n; i++) {
    if (isPurePrime(i)) {
      result[0]++;
      result[1] = i;
    }
  }
  while (!isPurePrime(++n));
  result[2] = n;
  return result;
}

console.log(onlyOddDigPrimes(40));

//best

/* 
function onlyOddDigPrimes(n) {
  let [c, p, next] = [0,0,n]; let i = 3;
  while(i<n){
    if(isPurePrime(i)){p = i;c++;}
    i++
  }
  while(!isPurePrime(++next)){};
     return [c, p, next]
}
function isPurePrime(n){
  if([...n+''].some(v=>v%2===0)) return false;
  for(let d=2; d**2<=n; d++)
       if(n%d===0) return false;
  return

//--------------------
function onlyOddDigPrimes(n) {
   for (var r=[],i=3;;i++) if (isPrime(i)&&(b=i+"").split('').filter(a=>((a.charCodeAt(0)-48)&1)==1).length==b.length) {r.push(i); if (i>n) break}
   return [a=r.length-1,r[a-1],r[a]]
}

isPrime=n=>{for (var i=2;i<(Math.pow(n,0.5)+1)|0;i++) if (n%i==0) return false; return true}  
*/