/* 
8kyu - Are they opposite?
https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript


*/

function isOpposite(s1, s2) {
  if ((!s1 && !s2) || s1.length != s2.length) return false;
  return ![...s1].find((c, i) => c.toLowerCase() != s2[i].toLowerCase() || ((/[a-z]/.test(c) !== /[A-Z]/.test(s2[i]) || (/[a-z]/.test(s2[i]) !== /[A-Z]/.test(c)))));
}


console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);
console.log(isOpposite("zHdaUxNxeH", "zHdAuxNxEh"), false);

// best
/* 
function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(var i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  
  return true;
  
}
*/

/* 
function isOpposite(s1,s2){
  return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}
*/

/* 
function isOpposite(s1,s2){
  return s1!=''&&s1==s2.replace(/./g,ch=>ch['to'+(ch<='Z'?'Lower':'Upper')+'Case']())
}
*/