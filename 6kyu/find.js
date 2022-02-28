/* 
6kyu - String searching with wildcard
https://www.codewars.com/kata/546c7f89bed2e12fb300056f/train/javascript

A wildcard in the needle will match any character in the haystack. The method should work on any types of needle and haystack. You can assume the needle is shorter than(or equal to) the haystack.

find("g__d", "That's the good thing about being president"); // return 11
*/

function find(needle, haystack) {
  // let re = new RegExp(needle.replace(/./g, (m) => {
  //   if (/[a-z0-9]/i.test(m[0])) return m[0];
  //   return m[0] === '_' ? '.' : '\\' + m[0];
  // }));
  //  let re = new RegExp(needle.replace(/./g, (m) => (/[a-z0-9]/i.test(m[0])) ? m[0] : m[0] === '_' ? '.' : '\\' + m[0]));
  let res = haystack.match(new RegExp(needle.replace(/./g, (m) => (/[a-z0-9]/i.test(m[0])) ? m[0] : m[0] === '_' ? '.' : '\\' + m[0])));
  //return res != null ? res.index : -1;
  return res ? res.index : -1;
}

var haystack = "Once upon a midnight dreary, while I pondered, weak and weary";
console.log(find("Once", haystack), 0);
console.log(find("midnight", haystack), 12);
console.log(find("codewars", haystack), -1);

console.log(find("_po_", haystack), 5);
console.log(find("___night", haystack), 12);

console.log(find("-..,.44$&%$--,.,", "-..,.44$&%$--,.,"), 0);

//best

/* 
function find(needle, haystack){
  return haystack.search(needle.replace(/_|\W/gi, function(a){return a==='_' ? '.' : '\\'+a}));
}
*/