/* 
7kyu - Number-Star ladder
https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern
*/

function pattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += (i ? "1" + '*'.repeat(i) + (i + 1) : "1") + "\n";
  }
  return output.trim();
}


console.log(pattern(7)) //, "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");

// best
/* const pattern = n =>
  [...Array(n)].map((_, idx) => `${`*`.repeat(idx)}${++idx}`).join(`\n1`); 
*/

/*
function pattern(n){
  if (n < 1) return "";
  var output = "1";
  for (let i = 2; i <= n; ++i) {
    output += "\n1" + Array(i).join("*") + i;
  }
  return output;
}
*/