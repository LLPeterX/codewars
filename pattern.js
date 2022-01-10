/* 
7kyu - Number-Star ladder
https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern

pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3
*/

function pattern(n) {
  let output = "1\n";
  for (let i = 2; i <= n; i++) {
    output += '1' + '*'.repeat(i - 1) + i + "\n";
  }
  return output.trim();
}

console.log(pattern(3) + "\n", "1\n1*2\n1**3");

// best

/* 
const pattern = n => [...Array(n)].map((_, idx) => `${`*`.repeat(idx)}${++idx}`).join(`\n1`);
*/