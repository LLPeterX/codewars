/* 
6kyu - Simple Fun #305: Typist
https://www.codewars.com/kata/592645498270ccd7950000b4
 */

function typist(s) {
  let count = 0, prevCh = null;

  const isCaps = (char) => char ? char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 : false;

  for (let c of s) {
    count++;
    if ((!prevCh && isCaps(c)) || (isCaps(prevCh) !== isCaps(c))) {
      count++;
    }
    prevCh = c;
  }
  return count;

}

console.log(typist("a"), 1)
console.log(typist("aa"), 2)
console.log(typist("A"), 2)

console.log(typist("AA"), 3)

console.log(typist("aA"), 3)

console.log(typist("Aa"), 4)

console.log(typist("BeiJingDaXueDongMen"), 31)

console.log(typist("AAAaaaBBBbbbABAB"), 21)

console.log(typist("AmericanRAILWAY"), 18)

console.log(typist("AaAaAa"), 12)

console.log(typist("DFjfkdaB"), 11)

//best
/*
let typist = s => s.length + s.match(/[A-Z]+|[a-z]+/g).length - (s[0] <= 'Z' ? 0 : 1);
*/

/*
function typist(s) {

  let count = regex => (`a${s}`.match(regex) || []).length;
  return s.length + count(/[a-z][A-Z]/g) + count(/[A-Z][a-z]/g);

}
 */