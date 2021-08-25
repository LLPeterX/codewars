/* 
7kyu - MiddleMe
https://www.codewars.com/kata/59cd155d1a68b70f8e000117
*/

const middleMe = (N, X, Y) => N % 2 ? X : Y.repeat(N / 2) + X + Y.repeat(N / 2);

console.log(middleMe(18, 'z', '#'), '#########z#########');
console.log(middleMe(19, 'z', '#'), 'z');
