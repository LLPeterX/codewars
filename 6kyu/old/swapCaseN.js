/* 
6kyu - Swap case using N
https://www.codewars.com/kata/5f3afc40b24f090028233490
Дана строка и число N
Если бит в N=1, то привести букву в uppercase
 */

function swap(s, n) {
  const isLowerCase = (ch) => ch.charCodeAt()>=97 && ch.charCodeAt()<=122;
  const isUpperCase = (ch) => ch.charCodeAt()>=65 && ch.charCodeAt()<=90;
  let binStr="", res="";
  while(binStr.length<s.length) {
    binStr += n.toString(2);
  }
  for(let i=0,j=0; i<s.length; i++) {
    if(isLowerCase(s[i]) || isUpperCase(s[i])) {
      if(binStr[j++] === '1') {
        res += isUpperCase(s[i]) ? s[i].toLowerCase() : s[i].toUpperCase();
      } else res += s[i];
    } else res += s[i];
  }
  return res;
}

console.log(swap("Hello world!", 11), 'heLLO wORLd!');

console.log('Z'.charCodeAt());