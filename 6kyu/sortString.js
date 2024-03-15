/* 
6kyu - Simple Fun #318: Sort String
https://www.codewars.com/kata/5936256f2e2a27edc9000047/train/javascript

Your task is to sort the characters in a string according to the following rules:

- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"
*/



function sortString(s) {
  const chars = [];
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) chars.push({ i, char: s[i] });
  }
  chars.sort((a, b) => a.char.toUpperCase() === b.char.toUpperCase() ? a.i - b.i : a.char.localeCompare(b.char));
  let result = "";
  for (let i = 0, k = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) result += chars[k++].char;
    else result += s[i];
  }
  return result;
}


console.log(sortString("cba"), "abc")
console.log(sortString("Cba"), "abC")
console.log(sortString("cCBbAa"), "AaBbcC")
console.log(sortString("c b a"), "a b c")
console.log(sortString("-c--b--a-"), "-a--b--c-")
console.log(sortString("Codewars"), "aCdeorsw")
console.log(sortString("By?e"), "Be?y")
console.log(sortString(
  " MkWD{RB=//k-^ J@,xH Vfi uAz+$ kV _[ }a!}%pSBwn !kKB (b  q PQF +}wS  .kfU r wFNEs#NsR UVMdG"),
  "\n=>\n",
  " AaBB{Bb=//D-^ d@,Ef FfF GHi+$ Jk _[ }k!}%kkKkM !MnN (N  p PqQ +}Rr  .RSS s suUUV#VVW wwwxz");

