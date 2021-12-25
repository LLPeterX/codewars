/* 
7kyu - Bits Battle
https://www.codewars.com/kata/58856a06760b85c4e6000055/train/javascript

he odd and even numbers are fighting against each other!

You are given a list of positive integers. 
The odd numbers from the list will fight using their 1 bits from their binary representation, 
while the even numbers will fight using their 0 bits.
If present in the list, number 0 will be neutral, hence not fight for either side.
*/

function bitsBattle(numbers) {
  let odds = numbers.filter(n => n % 2).map(d => d.toString(2).replace(/0/g, '')).reduce((s, v) => s + v, "").length,
    evens = numbers.filter(n => n % 2 === 0).map(d => d.toString(2).replace(/1/g, '')).reduce((s, v) => s + v, "").length;
  return odds > evens ? "odds win" : evens > odds ? "evens win" : "tie";
}

console.log(bitsBattle([5, 3, 14]), 'odds win');
console.log(bitsBattle([3, 8, 22, 15, 78]), 'evens win');
console.log(bitsBattle([]), 'tie');
console.log(bitsBattle([1, 13, 16]), 'tie');

// best
/* 
function bitsBattle(numbers) {
  var r=[0,0]
  for(var n of numbers) r[n%2]+=n.toString(2).split(n%2).length-1
  return r[0]>r[1]?"evens win":r[1]>r[0]?"odds win":"tie"
}
*/