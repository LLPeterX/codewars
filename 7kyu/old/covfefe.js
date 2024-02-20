/* 
7kyu - Covfefe
https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, 
however, if you don't find the word coverage in the string, you must add covfefe at the end 
of the string with a leading space.
*/

function covfefe(str) {
  let str1 = str.replace(/coverage/g, 'covfefe');
  if (str1 == str) str1 += ' covfefe';
  return str1;
}

console.log(covfefe("coverage"), "covfefe");
console.log(covfefe("coverage coverage"), "covfefe covfefe");
console.log(covfefe("nothing"), "nothing covfefe");
console.log(covfefe("double space "), "double space  covfefe");
console.log(covfefe("covfefe"), "covfefe covfefe");
console.log(covfefe("erag"), "erag covfefe");