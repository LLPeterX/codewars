/* 
7kyu - How many urinals are free?
https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4/train/javascript


*/

function getFreeUrinals(urinals) {
  if (/11/.test(urinals)) return -1;
  urinals = '0' + urinals + '0';
  let count = 0;
  for (let i = 1; i < urinals.length; i++) {
    if (urinals[i] === '0' && urinals[i - 1] === '0' && urinals[i + 1] === '0') {
      count++;
      i++;
    }
  }
  return count;
}

console.log(getFreeUrinals("10001"), 1);
console.log(getFreeUrinals("1001"), 0);
console.log(getFreeUrinals("00000"), 3);
console.log(getFreeUrinals("0000"), 2);
console.log(getFreeUrinals("01000"), 1);
console.log(getFreeUrinals("00010"), 1);
console.log(getFreeUrinals("10000"), 2);
console.log(getFreeUrinals("1"), 0);
console.log(getFreeUrinals("0"), 1);
console.log(getFreeUrinals("10"), 0);

//best
/* 
function getFreeUrinals(urinals) {
  if ( urinals.includes("11") )
    return -1;
  else
    return ( urinals.match( /(^|0)0(?!1)/g ) || [] ).length;
}
*/

/* 
function getFreeUrinals(urinals){
  return /11/g.test(urinals) ? -1 : (`0${urinals}0`.match(/00(?=0)/g) || []).length;
}
*/