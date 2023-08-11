/* 
7kyu - Simple Fun #253: Cool String
https://www.codewars.com/kata/590fd3220f05b4f1ad00007c/train/javascript

*/
function coolString(s) {
  if(s.match(/[^A-Za-z]/)) {
    return false;
  }
  s = s.replace(/[^A-Za-z]/,'');
  const isUCase = (char) => /[A-Z]/.test(char);
  const isLCase = (char) => /[a-z]/.test(char);
  for(let i=1; i<s.length; i++) {
    if(!((isLCase(s[i]) && isUCase(s[i-1])) || (isUCase(s[i]) && isLCase(s[i-1])))) {
      return false;
    }
  }
  return true;
}

console.log(coolString("aQwFdA"),true);
console.log(coolString("aBC"),false);
console.log(coolString("AaA"),true);
console.log(coolString("q q"),false);
console.log(coolString("wWw1"),false);
console.log(coolString("2"),false);
console.log(coolString("aAaAaAa"),true);
console.log(coolString("    "),false);

//best
/* 
function coolString(s) {
  return !/[a-z]{2,}|[A-Z]{2,}|[^a-zA-Z]/.test(s)
}
*/

/* 
function coolString(s) {
  s = s.replace(/ /g,'')
  if(s.length <= 1) return false 
  s = s.match(/[a-z]{2}|[A-Z]{2}|[0-9]/g)
  return s === null ? true : s.length ? false : true
}
*/