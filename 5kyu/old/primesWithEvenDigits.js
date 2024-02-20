/* 
5kyu - Primes with Even Digits
https://www.codewars.com/kata/582dcda401f9ccb4f0000025

Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.
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
function f(n) {
  let max = -Infinity;
  let maxValue = 0;
  --n;
  while (n > 2) {
    if (isPrime(n)) {
      let evCount = [..."" + n].filter(n => !(n % 2)).length;
      if (evCount > max) {
        max = evCount;
        maxValue = n;
      }
    }
    n--;
  }
  return maxValue;
}

console.log(f(1000), 887);
console.log(f(10000), 8887);
console.log(f(500), 487);
console.log(f(487), 467);

//best

/*
function f(n) {
    var prime,c;
    var maxCount = 0;
    var superMax = (n-1).toString().length -1;
    for(i=n-1;i>1;i--){
      if(isPrime(i)){
        c = countEven(i);
        if(c >maxCount){
          maxCount = c;
          prime = i;
        }
      }
      if(maxCount == superMax ){
         return  prime;
      }
    }
   return prime;
}

function isPrime(k){
  for(j=2;j<=Math.sqrt(k);j++){
    if(k%j==0){
      return false;
    }
  }
  return true;
}

function countEven(n){
  return (n.toString().match(/[02468]/g)||[]).length;
}
*/

//omg
/* 
const f=(n)=>{for(var a,m=0,d,j,i=2;i<n;i++)
if(p(i)){for(j=i,d=0;j;j=j/10|0)d+=((j%10)&1
)^1;if(d>=m)m=d,a=i};return+a},p=((n,a=[],b=
1,c)=>{while(++b<n)if(!a[b])for(c=b+b;c<n;c=
c+b)a[c]=1;return(n)=>n>=2&&!a[n]})(5000000)
*/