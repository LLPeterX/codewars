/* 
7kyu - Hello World - Without Strings
https://www.codewars.com/kata/584c7b1e2cb5e1a727000047/train/javascript

You need to create a function, helloWorld, that will return 
the String Hello, World! without actually using raw strings. 
This includes quotes, double quotes and template strings. 
You can, however, use the String constructor and any related functions.
*/

//const helloWorld = () => [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33].map(v => String.fromCharCode(v)).join``; // нельзя из-за ``
const helloWorld = () => [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33].reduce((s, v) => s + String.fromCharCode(v), String.fromCharCode(32)).trim();

console.log(helloWorld());

// best

/* 
const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
*/