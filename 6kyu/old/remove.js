/* 
6kyu - Exclamation marks series #12: Remove odd number continuous exclamation marks and question marks
https://www.codewars.com/kata/57fb0f3f9610ced69000023c/train/javascript
*/

function remove(s) {
  let s1 = "";
  while (s) {
    s1 = s.replace(/([?!])\1+/g, (c) => c.length > 2 && c.length % 2 ? "" : c);
    if (s1 == s) break;
    s = s1;
  }
  return s1;
}

console.log(remove(""), '=>', "")
console.log(remove("!"), '=>', "!")
console.log(remove("!!"), '=>', "!!")
console.log(remove("!!!"), '=>', "")
console.log(remove("!??"), '=>', "!??")
console.log(remove("!???"), '=>', "!")
console.log(remove("!!!??"), '=>', "??")
console.log(remove("!!!???"), '=>', "")
console.log(remove("!??"), '=>', "!??")
console.log(remove("!???!!"), '=>', "")
console.log(remove("!????!!!?"), '=>', "!")

// best
/* 
function remove(s){
  let tmp = s.replace(/(!{3,}|\?{3,})/g, (_,x) => x.length%2 != 0 ? '' : x );
  return s == tmp ? s : remove(tmp);
}
*/