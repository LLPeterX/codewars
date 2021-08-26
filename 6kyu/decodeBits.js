/* 
6kyu Infinite Length Binary Code
https://www.codewars.com/kata/60c8bfa19547e80045184000/train/javascript
*/

function decodeBits2(bits) {
  if (!bits) return 0;
  let sign = -1, value = 0;
  for (let i = 0; i < bits.length; i++) {
    value += bits[i] * sign;
    sign = -1 * sign;
  }
  return value;
}

const decodeBits = (bits) => [...bits].reduce((o, v) => ({ ...o, sum: o.sum + v * o.sign, sign: -o.sign }), { sum: 0, sign: -1 }).sum;

console.log(decodeBits(''), 0)
console.log(decodeBits('0'), 0)
console.log(decodeBits('1'), -1)
console.log(decodeBits('00'), 0)
console.log(decodeBits('01'), 1)
console.log(decodeBits('10'), -1)
console.log(decodeBits('11'), 0)

console.log(decodeBits('0000'), 0)
console.log(decodeBits('0001'), 1)
console.log(decodeBits('0010'), -1)
console.log(decodeBits('0011'), 0)
console.log(decodeBits('0100'), 1)
console.log(decodeBits('0101'), 2)
console.log(decodeBits('0110'), 0)
console.log(decodeBits('0111'), 1)
console.log(decodeBits('1000'), -1)
console.log(decodeBits('1001'), 0)
console.log(decodeBits('1010'), -2)
console.log(decodeBits('1011'), -1)
console.log(decodeBits('1100'), 0)
console.log(decodeBits('1101'), 1)
console.log(decodeBits('1110'), -1)
console.log(decodeBits('1111'), 0)

// best
/*
const decodeBits = (bits) => bits.split('').reduce((acc, num, index) =>
                                                  (index + 1) % 2 ? acc - num : acc + +num, 0);
*/

/*
with(require('ramda')){
  const mapFn = ifElse(
    pipe(Array, prop(1), modulo(__, 2)),
    Number,
    negate
  )
  var decodeBits = pipe(addIndex(map)(mapFn), sum)
}
*/

/*
const decodeBits = bits => bits
  .split``.map((i, ind) => ind % 2 ? i : -i)
  .reduce((a,b)=>+a + +b, 0)
*/