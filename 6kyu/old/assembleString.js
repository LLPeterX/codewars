/* 
6kyu - Assemble string
https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6


*/

function assembleString(array) {
  let res = array[0].split('');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '*') {
        for (let k = 0; k < array.length; k++) {
          if (k != i && array[k][j] !== '*') {
            res[j] = array[k][j];
            break;
          }
        }
      }
    }
  }
  return res.join('').replace(/\*/g, '#');
}

console.log(assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]), "Hello, World!");
console.log(assembleString([".** . .' .'' ! ! .", ". . . .' **' ! * .", "* . .*.* .'' * ! .", ". . .*.' .**** ! .", "**. * .* .*' ! ! ."]), ". . . .' .'' ! ! .");
console.log(assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."]), ". . . .");
console.log(assembleString(["12***6789", "**3456789", "12345**8*", "***456**9", "1*3*5*7*9", "*2*456789"]), "123456789");
console.log(assembleString(["******", "******", "******", "******"]), "######");
console.log(assembleString(["*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*"]), "###############");

// best
/* 
function assembleString(array){  
  return !array.length ? "" : [...array[0]].map((x, i) => {
    let s = array.find(y => y[i] != "*")
    return !s ? "#" : s[i]
  }).join``
}
*/