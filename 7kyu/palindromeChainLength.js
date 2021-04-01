/* 
7kyu Palindrome chain length
https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript


*/

var palindromeChainLength = function(n) {
  let count = 0;
  while(true) {
    let numStr = String(n), palStr = String(n).split('').reverse().join('');
    if(palStr === numStr) {
      break;
    }
    n = (+numStr) + (+palStr);
    count ++;
  }
  return count;
};

console.log(palindromeChainLength(87)); // 4
console.log(palindromeChainLength(1)); // 0
console.log(palindromeChainLength(89)); // 24

//best
/* 
var palindromeChainLength = function(n) {
  var r = 1 * n.toString().split('').reverse().join('');
  return n - r && 1 + palindromeChainLength(r + n);
};
*/

// cheater!!! :-)))
/* 
function palindromeChainLength(arg) {
if(arg === 87) {return 4}
if(arg === 1) {return 0}
if(arg === 88) {return 0}
if(arg === 89){return 24}
if(arg === 10) {return 1}

}
*/