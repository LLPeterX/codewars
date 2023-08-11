/* 
7kyu - Genetic Algorithm Series - #1 Generate
https://www.codewars.com/kata/567d609f1c16d7369c000008/

*/

const generate = length => Array.from({ length }, () => ~~(Math.random() < 0.5)).join``;

