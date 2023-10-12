/* 
6kyu - Numerical Palindrome #4
https://www.codewars.com/kata/58df8b4d010a9456140000c7

For a given number num, return its closest numerical palindrome 
which can either be smaller or larger than num. 
If there are 2 possible values, the larger value should be returned. 
If num is a numerical palindrome itself, return it.
*/

// min 8x faster than reverse/join string
function isPalindrome(n) {
  if (n < 10) return false;
  let s = "" + n;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) if (s[i] !== s[j]) return false;
  return true;
}

function findPal(n, step) {
  while (n > 0 && !isPalindrome(n)) n += step;
  return n;
}

function palindrome(n) {
  if (!Number.isInteger(n) || n < 0) return "Not valid";
  if (isPalindrome(n)) return n;
  let lower = findPal(n - 1, -1), upper = findPal(n + 1, 1);
  let d1 = n - lower, d2 = upper - n;
  return d1 == d2 ? upper : d1 < d2 ? lower : upper
  // if (d1 === d2) return upper;
  // return d1 < d2 ? lower : upper;
}

console.log(palindrome(8), 11);
console.log(palindrome(281), 282);
console.log(palindrome(1029), 1001); // FAIL - why? 1029-1111
console.log(palindrome(1221), 1221);
console.log(palindrome("1221"), "Not valid");

// check what is faster
/*
function isPal(n) {
  let s = "" + n;
  return s === [...s].reverse().join``;
}

console.time('cycle');
for (let i = 0; i < 1e7; i++) {
  isPalindrome(i);
}
console.timeEnd('cycle');

console.time('rev');
for (let i = 0; i < 1e7; i++) {
  isPal(i);
}
console.timeEnd('rev');
*/

// best

/* 
function isPalindrome(num){
  return (num>10 && num == num.toString().split("").reverse().join(""))? true : false;
}
function palindrome(num) {
  if(!Number.isInteger(num) || num<0) return 'Not valid';
  for(i=0; 1==1; i++){
    if(isPalindrome(num+i)) return num+i;
    if(isPalindrome(num-i)) return num-i;
  }
}
*/