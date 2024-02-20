/* 
7kyu - Last man standing
https://www.codewars.com/kata/567c26df18e9b1083a000049/train/javascript

Object
Find the last number between 1 and n (inclusive) that survives the elimination process

How It Works
Start with the first number on the left then remove every other number 
moving right until you reach the the end, then from the numbers 
remaining start with the first number on the right and remove every other number 
moving left, repeat the process alternating between left and right 
until only one number remains which you return as the "last man standing"

Example
given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

start by removing from the left    2   4   6   8
                                 1   3   5   7   9


then from the right                2       6
                                       4       8


then the left again                        6
                                   2


until we end with `6` as the last man standing
*/

function lastManStanding(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  while (arr.length > 1) {
    // from left to right
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] = 0;
    }
    arr = arr.filter(n => n > 0);
    // from right to left
    for (let i = arr.length - 1; i >= 0 && arr.length > 1; i -= 2) {
      arr[i] = 0;
    }
    arr = arr.filter(n => n > 0);
  }
  return arr[0];

}

console.log(lastManStanding(9), 6);
console.log(lastManStanding(10), 8);
console.log(lastManStanding(100), 54);
console.log(lastManStanding(1000), 510);

// best

/* 
let r = (n, d) => {
  if (n == 1) return 1;
  return d? r(n >> 1, !d) * 2: n + 1 - r(n, !d);
};

lastManStanding = n => r(n, true);
*/

/* 
function lastManStanding(n){
  let arr = Array.from({length: n}).map((_, idx) => idx + 1);
  
  while(arr.length > 1) {
    arr = arr.filter((e, idx) => idx % 2 !== 0)
    arr.reverse()
  }
  
  return arr[0]
}
*/