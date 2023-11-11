/* 
6kyu - Non-even substrings
https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript

Given a string of integers, return the number 
of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are
 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.
*/

function solve(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let k = i; k < s.length; k++) {
      //if (BigInt(s.slice(i, k)) % 2n) count++;
      if (s[k] % 2) count++;
    }
  }
  return count;
};

console.log(solve("1341"), 7);
console.log(solve("1357"), 10);
console.log(solve("13471"), 12);
console.log(solve("134721"), 13);
console.log(solve("1347231"), 20);
console.log(solve("13472315"), 28);
console.log(solve("8543497881416825242319968958835776499537665629981673146144453736298"), 1221);

// best
/* 
function solve(s){
  return [...s].reduce((t,n,i)=>t+(+n%2?i+1:0),0);
};
*/

/* 
function solve(s){
  var c=0;
  for (var i=0; i<s.length; ++i)
    if (+s[i]%2==1)
      c+=i+1;
return c;
};
*/