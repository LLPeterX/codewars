/* 
7kyu - Cyclops numbers
https://www.codewars.com/kata/56b0bc0826814364a800005a/train/javascript

cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. 
That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111

You must take an input, n, that will be in decimal format (base 10), 
then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
*/

function cyclops(n) {
  let bin = n.toString(2);
  return bin.length % 2 === 0 ? false : bin.match(/(^1*?)0\1$/) != null;
}


// best

/* 
cyclops=n=>/^(1+)0\1$/.test(n.toString(2))
*/