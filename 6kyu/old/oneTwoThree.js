/* 
6kyu - Begin your day with a challenge, but an easy one.
https://www.codewars.com/kata/5873b2010565844b9100026d/train/javascript

There are no explanations. You have to create the code that gives the following results:
oneTwoThree(0) == ['0', '0']
oneTwoThree(1) == ['1', '1']
oneTwoThree(3) == ['3', '111']
oneTwoThree(19) == ['991', '1111111111111111111']
*/


function oneTwoThree(n) {
  return n ? ['9'.repeat(~~(n / 9)) + (n % 9 || ''), n ? '1'.repeat(n) : '0'] : ['0', '0'];
}

const tests = [
  [0, ['0', '0']],
  [1, ['1', '1']],
  [2, ['2', '11']],
  [3, ['3', '111']],
  [19, ['991', '1111111111111111111']],
];
for (const [input, expected] of tests) {
  console.log(`inp=${input}: res=${oneTwoThree(input)} exp=${expected}`);
}

console.log(oneTwoThree(63), ['9999999', '111111111111111111111111111111111111111111111111111111111111111'])