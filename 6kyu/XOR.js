/* 
6kyu - XOR string reduction
https://www.codewars.com/kata/5ad6e5bdb0e8d46b4500201a/train/javascript

Given a string consisting entirely of binary digits (0 , 1) 
seperated using spaces. 
Find the XOR of all digits and return the answer.

This is code-golf so shortest code is winner. 
The limit of solution is set to 40 chars (exclusive)
*/

const X = x => [...x].reduce((z, v) => z ^ v, 0);
//final:
//X=x=>[...x].reduce((z,v)=>z^v,0)


