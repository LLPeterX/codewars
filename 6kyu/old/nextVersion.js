/* 
6kyu - Next Version
https://www.codewars.com/kata/56c0ca8c6d88fdb61b000f06

Create a function nextVersion, that will take a string in parameter, 
and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"
*/

function nextVersion(version) {
  let chunks = version.split('.').map(Number), x = 0;
  ++chunks[chunks.length - 1];
  for (let i = chunks.length - 1; i > 0; i--) {
    chunks[i] += x;
    if (chunks[i] >= 10) {
      x = 1;
      chunks[i] -= 10;
    }
  }
  chunks[0] += x;
  return chunks.join('.');
}

console.log(nextVersion("1.2.3"), "1.2.4");
console.log(nextVersion("0.9.9"), "1.0.0");
console.log(nextVersion("1"), "2");
console.log(nextVersion("1.2.3.4.5.6.7.8"), "1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9"), "10.0");

// cool

/* 
const nextVersion = v =>
  v.replace(/(\d+)((\.9)*)$/, (_, $1, $2) => ++$1 + `.0`.repeat($2.length / 2));
*/