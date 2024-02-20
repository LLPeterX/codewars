/* 
6kyu - Small Ouroboros: SQL Quine relay
https://www.codewars.com/kata/656e471fbc9c5114759d6377/train/javascript

A quine is a computer program which takes no input and produces 
a copy of its own source code as its only output. 
The quine concept can be extended to multiple levels of recursion,
 giving rise to "ouroboros programs", or quine-relays.

So your goal is to write a JS program that would produce an SQL program 
that would produce your JS program.

To make task more clear we should define what program is. 
As we are Codewarriors, so:

- JS program: A function named solution that returns a string

- SQL program: A query that returns one row with one column solution with value being a string

SQL version: SQLite 3.40.0
*/

// replace single quotes with String.fromCharCode(39)
function solution() {
  return "select " + String.fromCharCode(39) + solution.toString() + String.fromCharCode(39) + " as solution";
}

// best
/* 
const solution = () => `select ${String.fromCharCode(34)}const solution = ${solution.toString()} ${String.fromCharCode(34)} as solution ` 
*/

/* 
solution=f=_=>`SELECT${s="\x27solution"}=f=${f+s}`
*/

/* 
solution=(s=(solution+'').replace(/'/g,"''"))=>`SELECT 'solution=${s}' AS solution`
*/