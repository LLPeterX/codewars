/* 
7kyu - Complete The Pattern #2
https://www.codewars.com/kata/55733d3ef7c43f8b0700007c


*/

function pattern(n) {
  return Array.from({ length: n }, (_) => Array.from({ length: n - i }, (_, i) => n - i).join('')).join("\n");
}

console.log(pattern(5), "54321\n5432\n543\n54\n5");