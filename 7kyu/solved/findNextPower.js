/* 
7kyu - Find the smallest power higher than a given a value
https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript

We need a function findNextPower, that receives two arguments, a value val, 
and the exponent of the power, pow_, and outputs the value that we want to find.
*/

function findNextPower(val, pow_) {
  const num = Math.floor(Math.pow(val, 1 / pow_)) + 1;
  const nextPow = Math.pow(num, pow_);
  // console.log(val, pow_, num);
  //return [val, pow_, num, Math.pow(num + 1, pow_)];
  return val === nextPow ? Math.pow(num + 1, pow_) : nextPow;
}

console.log(findNextPower(8, 3), 27)
console.log(findNextPower(12385, 3), 13824)
console.log(findNextPower(1245678, 5), 1419857)
console.log(findNextPower(1245678, 6), 1771561)
console.log(findNextPower(4782969, 7), 10000000)

//console.log(Math.log(10000000));
//console.log(Math.pow(4782969, 1 / 7));

// best

/* 
const findNextPower = (val, pow_) => Math.pow(Math.ceil(Math.pow(val+1, 1/pow_)),pow_)
*/