/* 
5kyu - Build a pile of cubes [Code-golf]
https://www.codewars.com/kata/5b88f8535ed7d4eec00000f3/train/javascript

Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n^3, 
the cube above will have volume of (n-1)^3 and so on 
until the top which will have a volume of 1^3.

You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build?

The parameter of the function f will be an integer m 
and you have to return the integer n such as 
n^3. + (n-1)^3. + ... + 1^3. = m 
if such a n exists or 0 if there is no such n.

Your task is to do the same thing, except in less than 35 chars.
*/
/* 
f=(m,n=1)=>m?f(m-n**3,n+1):(m?0:n)-1;
*/
//f = (m, n = 1) => m > 0 ? f(m - n ** 3, n + 1) : (m ? 0 : n);
//f = (m, n = 1) => m > 0 ? f(m - n ** 3, n + 1) : n;
// console.log(f(1071225));
// console.log(f(91716553919377));

/* 
 let n = (Math.sqrt(8*Math.sqrt(m)+1)-1)/2;
    return Number.isInteger(n)?n:-1
*/

//f=m=>(.25+2*Math.sqrt(m))**.5-.5
//f=(m,n=(.25+2*m**.5)**.5-.5)=>n&1||0 // L=25
//f=m=>(.25+2*m**.5)**.5-.5
//f = m => (.25 + 2 * m ** .5) ** .5 - .5
//f=(m,z=.5,n=(z/2+2*m**z)**z-z) => n;
//f = (m, n = (.25 + 2 * m ** .5) ** .5 - .5) => n % 1 ? 0 : n;
f = (m, n = ((8 * m ** .5 + 1) ** .5 - 1) / 2) => n % 1 ? 0 : n;
//f=(m,n=((8*m**.5+1)**.5-1)/2)=>n%1?0:n; // L=39

/* 
function findNb(m) {
  let n = Math.sqrt( Math.sqrt(m)*2 + 0.25 ) - 0.5
    return Number.isInteger(n) ? n : -1
}
//f=(m,n=Math.sqrt( Math.sqrt(m)*2 + 0.25 ) - 0.5=>n%1?0:n;
*/
f = (m, n = (2 * m ** .5 + 0.25) ** .5 - 0.5) => n % 1 ? 0 : n;
//f=(m,n=(2*m**.5+0.25)**.5-0.5)=>n%1?0:n // L=39. Много!

//f=(m,z=.5,n=(z/2+2*m**z)**z-z)=>n%1?0:n; // TOO LONG! (40)
//f=(m,n=(.25+2*m**.5)**.5-.5)=>n%1?0:n; // TOO LONG(38) min 34

console.log(f(1071225));
console.log(f(91716553919377));

// recursion?
