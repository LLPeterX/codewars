/* 
7kyu - All Inclusive?
https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript
 */

function containAllRots(strng, arr) {
  if (!strng) return true;
  const allRots = [strng], len = strng.length;
  let a = [...strng];
  for (let i = 0; i < len - 1; i++) {
    a.unshift(a.pop());
    allRots.push(a.join(''));
  }
  return allRots.filter(r => arr.includes(r)).length === len;
}

console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true);
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)

// best

/*
function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}
*/

/*
function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}
*/