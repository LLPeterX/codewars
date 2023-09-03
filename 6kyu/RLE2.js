/* 
6kyu - Data compression using run-length encoding
https://www.codewars.com/kata/578bf2d8daa01a4ee8000046/train/javascript

// see 6kyu - Run-length encoding (https://www.codewars.com/kata/546dba39fa8da224e8000467)

*/

/*
function encode(input) {
  let prevChar = [0, input[0]];
  const result = [];
  for (let char of input) {
    if (char === prevChar[1]) {
      prevChar[0]++;
    } else {
      result.push(prevChar);
      prevChar = [1, char];
    }
  }
  result.push(prevChar);
  return result.map(v => v.join``).join``;
}
*/

function encode(input) {
  //return (input.match(/(.)\1*/g) || []).map(c => [c.length, c[0]]);
  return (input.match(/(.)\1*/g) || []).map(c => c.length + c[0]).join``;
}


function decode(input) {
  return input.match(/(\d+[a-z]+)/ig).map(s => s.match(/[a-z]+/gi)[0].repeat(s.match(/\d+/g)[0])).join``;
}

console.log(encode('A'), '1A');
console.log(encode('AAA'), '3A');
console.log(encode('AB'), '1A1B');
console.log(encode('AAABBBCCCA'), '3A3B3C1A');

console.log(' -- decode ===');
console.log(decode('1A'), 'A');
console.log(decode('3A'), 'AAA');
console.log(decode('1A1B'), 'AB');
console.log(decode('3A3B3C1A'), 'AAABBBCCCA');

// best
 
// function encode(input) {
// 	return input.replace(/(.)\1*/g, (match, p1) => match.length + p1);
// }

// function decode(input) {
//   return input.replace(/(\d+)(.)+?/g, (_, p1, p2) => p2.repeat(p1));
// }



// encode = i => i.match(/(\w)\1*/g).map(a => a.length + a[0]).join``;
// decode = i => i.split(/(?<!\d)/).map(a => a.match(/\D/)[0].repeat(a.match(/\d+/)[0])).join``;