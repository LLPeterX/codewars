/* 
7kyu - Rubik's Cube Art
https://www.codewars.com/kata/6387ea2cf418c41d277f3ffa


*/

function cube(n) {

  let res = "";
  for (let i = 0; i < n; i++) {
    res += ' '.repeat(n - i - 1) + "/" + "\\/".repeat(i) + "\\_".repeat(n) + "\\\n";
  }
  for (let i = n; i > 0; i--) {
    res += ' '.repeat(n - i) + "\\/".repeat(i) + "_/".repeat(n) + "\n";
  }
  return res.trimRight();
}

console.log(cube(3));

/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

*/

// best

/* 
function cube(n) {
  let rubik = [];
  for (let i = 1; i <= n; i++) rubik.push(' '.repeat(n-i) + '/\\'.repeat(i) + '_\\'.repeat(n));
  for (let i = n; i >= 1; i--) rubik.push(' '.repeat(n-i) + '\\/'.repeat(i) + '_/'.repeat(n));
  return rubik.join('\n');
}
*/