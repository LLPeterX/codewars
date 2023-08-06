/* 
7kyu - Complete The Pattern #4
https://www.codewars.com/kata/55736129f78b30311300010f/train/javascript

You have to write a function pattern which creates 
the following pattern upto n number of rows. 

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
pattern(4):

1234
234
34
4
*/

function pattern(n) {
  if (n < 1) return "";
  return Array.from({ length: n }, (_, i) => i + 1).map((_, i, a) => a.slice(i).join``).join("\n");
}

console.log(pattern(1), '=>', "1");
console.log(pattern(2), '=>', "12\n2");
console.log(pattern(5), '=>', "12345\n2345\n345\n45\n5")