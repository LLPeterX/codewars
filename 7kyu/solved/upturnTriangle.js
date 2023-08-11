/* 
7kyu - Upturn Numeral Triangle
https://www.codewars.com/kata/564f3d49a06556d27c000077

*/

//first realization
/* 
function pattern(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += ' '.repeat(i + 1) + (String(i + 1).slice(-1) + " ").repeat(n - i).trim() + "\n";
  }
  return output.replace(/\n$/,'');
}
 */
function pattern(n) {
  return Array.from({ length: n }).reduce((str, _, i) => str + ' '.repeat(i + 1) + (String(i + 1).slice(-1) + " ").repeat(n - i).trim() + "\n", "").slice(0, -1);

  // let output = "";
  // for (let i = 0; i < n; i++) {
  //   output += ' '.repeat(i + 1) + (String(i + 1).slice(-1) + " ").repeat(n - i).trim() + "\n";
  // }
  // return output.replace(/\n$/,'');
}

console.log(pattern(5));

// best
/* 
const pattern = n => [...Array(n)].map((_, i) => ' '.repeat(i) + ` ${(i + 1) % 10}`.repeat(n - i)).join('\n');
*/

