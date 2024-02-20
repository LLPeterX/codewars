/* 
7kyu - Sum of Triangular Numbers
https://www.codewars.com/kata/580878d5d27b84b64c000b51

 */
const sumTriangularNumbers = (n) => n<=0 ? 0 : (Math.pow(n+1,3)-n-1)/6;
console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);

// best
/* 
const sumTriangularNumbers = n => n>0|0 && n++*n++*n/6;
*/