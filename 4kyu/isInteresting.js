/* 
4kyu - Catching Car Mileage Numbers
https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

*/

const isZeros = (n) => /^\d0+$/.test(String(n));
const isSameDigits = (n) => new Set([...`${n}`]).size === 1;
const isSequential = (n, direction) => {
  let s = String(n);
  for (let i = 1; i < s.length; i++) {
    let curr = +s[i]; if (curr === 0 && direction > 0) curr = 10;
    let prev = +s[i - 1]; if (prev === 0 && direction > 0) prev = 10;
    if (curr != prev + 1 * direction) return false;
  }
  return true;
}

const isPalindrome = (n) => +[...`${n}`].reverse().join`` === n;
const isAwesome = (n, a) => a.includes(n);

function isInteresting(number, awesomePhrases) {
  for (let i = number; i < number + 3; i++) {
    if (i > 99 && (isZeros(i) || isSameDigits(i) || isSequential(i, 1) || isSequential(i, -1) || isPalindrome(i) || isAwesome(i, awesomePhrases))) {
      //      console.log(`n=${number}: ${i} z=${isZeros(i)} sd=${isSameDigits(i)} s1=${isSequential(i, 1)} s2=${isSequential(i, -1)} pa=${isPalindrome(i)} aw=${isAwesome(i, awesomePhrases)}`)
      return i === number ? 2 : 1;
    }
  }
  return 0;
}

//console.log(isInteresting(3, [1337, 256]), 0);
console.log(isInteresting(1336, [1337, 256]), 1);
console.log(isInteresting(1337, [1337, 256]), 2);
console.log(isInteresting(11208, [1337, 256]), 0);
console.log(isInteresting(11209, [1337, 256]), 1);
console.log(isInteresting(11211, [1337, 256]), 2);
console.log(isInteresting(98, [1337, 256]), 1);

// best
/* 
function isInteresting(number, awesomePhrases) {
  var tests = [
    function(n) { return /^\d00+$/.test(n); },
    function(n) { return /^(\d)\1+$/.test(n); },
    function(n) { return RegExp(n).test(1234567890); },
    function(n) { return RegExp(n).test(9876543210); },
    function(n) { return n + '' == (n + '').split('').reverse().join(''); },
    function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
  ];
  
  var interesting = 0;
  tests.some(function(test) {
    if (number > 99 && test(number))
      return interesting = 2;
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
      interesting = 1;
  });
  return interesting;
}
*/


/* 
function isPalindrome(number){   
  return number.toString().length > 2 && 
          /^(.?)(.?)(.?)(.?)(.?).?\5\4\3\2\1$/.test(number);
}

function isSequentialAsc(number){    
  return number.toString().length > 2 &&
          '1234567890'.indexOf(number) >= 0;  
}

function isSequentialDesc(number){
  return number.toString().length > 2 && 
          '9876543210'.indexOf(number) >= 0;  
}

function isAwesomePhrase(number, awesomePhrases){
  return awesomePhrases.some( function(n){ return n==number; } );
}

function isFollowedByZero(number){ 
  return  number % 100 == 0 || 
          number % 1000 == 0 || 
          number % 10000 == 0;
}

function isSameDigits(number){
  return /^(\d)\1{2,4}$/.test(number);
}

function isInteresting(number, awesomePhrases) {
  
  var isInteresting = 0;  
  
  for(var i=0; i<3 && !isInteresting && number >= 98 ; ++i, number++){             
    isInteresting = isPalindrome(number) ||
                  isSequentialAsc(number) || 
                  isSequentialDesc(number) ||
                  isAwesomePhrase(number, awesomePhrases) ||
                  isFollowedByZero(number) ||
                  isSameDigits(number) ? (i==0?2:1) : 0;
  
  } 
  return isInteresting;  
}
*/