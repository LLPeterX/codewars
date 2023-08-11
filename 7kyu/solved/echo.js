/* 
7kyu - Echo
https://www.codewars.com/kata/5c6dc504abcd1628cd174bea/train/javascript

Write an echoProgram function (or echo_program depend on language) that returns your solution source code as a string.

Note:
Function.prototype.toString has been disabled.
*/

function echoProgram() {
  return require("fs").readFileSync("solution.txt", "utf-8");
}


//echoProgram = () => String(echoProgram);

console.log(echoProgram());

// best
/* 
const echoProgram = () => fs.readFileSync('./solution.txt').toString();
*/

/* 
$="_='$='+JSON.stringify($),echoProgram=Q=>_+','+$",_='$='+JSON.stringify($),echoProgram=Q=>_+','+$
*/