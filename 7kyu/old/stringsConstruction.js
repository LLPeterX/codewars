/* 
7kyu - Simple Fun #30: Strings Construction
https://www.codewars.com/kata/58870402c81516bbdb000088/train/javascript

How many strings equal to A can be constructed using letters from the string B? 
Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.
We can construct 2 strings A with letters from B.


*/
/*
function stringsConstruction(A, B) {
  if (B.length < A.length || [...A].some(c => ![...B].includes(c))) return 0;
  let la = [...A].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
  let lb = [...B].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
  let c = 0, cm = Infinity;
  for (let l of Object.keys(la)) {
    c = ~~(lb[l] / la[l]);
    //if (cm === 0) cm = c;
    if (c) {
      cm = Math.min(cm, c);
    }
  }
  return cm;
}
*/
function stringsConstruction(A, B) {
  let ca = [...A].reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
  let cb = [...B].filter(c => ca[c] > 0).reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
  if (Object.keys(ca).length !== Object.keys(cb).length) return 0;
  let cx = Object.keys(cb).map(n => ~~(cb[n] / ca[n]));
  return Math.min(...cx);
}

console.log(stringsConstruction("abc", "abccba"), 2)
console.log(stringsConstruction("hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"), 3)
console.log(stringsConstruction("abc", "def"), 0)
console.log(stringsConstruction("zzz", "zzzzzzzzzzz"), 3)
console.log(stringsConstruction("jfflfhtli", "ifffrfl"), 0)
console.log(stringsConstruction("wwqcl", "melwwb"), 0)
console.log(stringsConstruction("muwmt", "mtwuqtw"), 0)

// best
/* 
function stringsConstruction(str, target) {
  for(let i = 0;; i++) {
    for (let c of str) {
      if (target.includes(c)) target = target.replace(c, '-')
      else return i;
    }
  }
}

*/

/* 
const stringsConstruction = (A, B) =>
  Math.min(...[...A].map(val => ([...B].filter(v => v === val).length / A.match(new RegExp(val, `g`)).length) ^ 0));
*/