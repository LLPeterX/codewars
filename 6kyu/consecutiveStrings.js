/* 
https://www.codewars.com/kata/56a5d994ac971f1ac500003e
Дан массив строк и число k.
Вернуть первую конкатенацию наибольшей длины K последовательных строк
*/

function longestConsec(strarr, k) {
  let maxLength=-1, res="";
  if(k<0) { return "";}
  for(let i=0; i<strarr.length-k+1; i++) {
    let s = strarr.slice(i,i+k).join('');
    if(s.length > maxLength) {
      maxLength = s.length;
      res = s;
    }
  }
  return res;

}

let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k=2;
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // abigailtheta
console.log(longestConsec([], 3), ""); // ""
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), ""); // ""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
console.log(longestConsec([ 'zone', 'abigail', 'theta', 'form', 'libe', 'zas' ], -2), "");

// best
/* 
function longestConsec(a, k) {
    return (a.length == 0 || k > a.length || k < 1) ? '' : a.reduce(function(s, c, i) {
      return i+k > a.length || s.length >= a.slice(i,i+k).join('').length ? s : a.slice(i,i+k).join('');
    }, '');
}
*/