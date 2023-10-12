/* 
6kyu - Number , number ... wait LETTER !
https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

Your task is to write a function that receives as its single argument a string 
that contains numbers delimited by single spaces. 
Each number has a single alphabet letter somewhere within it.
Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number.
You have to extract the letters and sort the numbers according 
to their corresponding letters.

Here comes the difficult part, now you have to do a series of computations 
on the numbers you have extracted.

* The sequence of computations are + - * /. 
  Basic math rules do NOT apply, you have to do each computation in exactly this order.
* This has to work for any size of numbers sent in 
   (after division, go back to addition, etc).
* In the case of duplicate alphabet letters, 
  you have to arrange them according to the number 
  that appeared first in the input string.
* Remember to also round the final answer to the nearest integer.
*/

// function doMath(string) {
//   const ops = [
//     (a, b) => a + b,
//     (a, b) => a - b,
//     (a, b) => a * b,
//     (a, b) => a / b
//   ];
//   let nums = string.split(' ')
//     .map(e => ({ n: +e.replace(/[^\d]/g, ''), c: e.match(/[^\d]/g)[0][0] }))
//     .sort((a, b) => a.c.localeCompare(b.c))
//     .map(e => e.n);
//   // let result = nums[0].n;
//   // for (let i = 1; i < nums.length; i++) {
//   //   result = ops[(i - 1) % 4](result, nums[i].n);
//   // }
//   let result = nums.reduce((r, v, i) => i > 0 ? ops[(i - 1) % 4](r, v) : v);
//   //return Math.round(result);
//   return result;
// }

// final:
function doMath(string) {
  const ops = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
  ];
  return Math.round(string.split(' ')
    .map(e => ({ n: +e.replace(/[^\d]/g, ''), c: e.match(/[^\d]/g)[0][0] }))
    .sort((a, b) => a.c.localeCompare(b.c))
    .map(e => e.n)
    .reduce((r, v, i) => i > 0 ? ops[(i - 1) % 4](r, v) : v)
  );
}

// ---------------
function doTest(str, expected) {
  console.log(doMath(str), expected);
}
doTest("24z6 1z23 y369 89z 900b", 1414);
doTest("24z6 1x23 y369 89a 900b", 1299);
doTest("10a 90x 14b 78u 45a 7b 34y", 60);
doTest("111a 222c 444y 777u 999a 888p", 1459);
doTest("1z 2t 3q 5x 6u 8a 7b", 8);

