/* 
6kyu = Alphabet Slices
https://www.codewars.com/kata/64c45287edf1bc69fa8286a3/train/javascript

Дана строка.
В ней могут содержаться последовательности по алфавиту (типа "abc", "pqrstu" и т.п.)
Вернуть исходную строку с подполследовательностями в обратном порядке
*/
function solution(str) {
  let result = "", i = 0;
  while (i < str.length) {
    let k = i;
    while (k < str.length - 1 && (str[k + 1] || "").charCodeAt() - str[k].charCodeAt() == 1) k++;
    if (k > i) {
      result += [...str.slice(i, k + 1)].reverse().join('');
      i = k + 1;
    } else {
      result += str[i++];
    }
  }
  return result;
}

console.log(solution("xabc"), "xcba");
console.log(solution("abcxdef"), "cbaxfed");
console.log(solution("abcxyz"), "cbazyx");
console.log(solution("zahimzmstaz"), "zaihmzmtsaz");
console.log(solution("jjjjjjjjklmnopqrstuv"), "jjjjjjjvutsrqponmlkj");
console.log(solution("zyx"), "zyx");
console.log(solution("ppqqrr"), "pqprqr");
console.log(solution("gjaababbboo"), "gjabababboo");

// best

/* 
const solution = s =>
  s.replace(
    /(?:(?=ab|bc|cd|de|ef|fg|gh|hi|ij|jk|kl|lm|mn|no|op|pq|qr|rs|st|tu|uv|vw|wx|xy|yz).){1,}./g,
    (m) => [...m].reverse().join``
  )
*/

/* 
function solution(str) {
  let consecutives = [];
  for (const c of str) {
    if (consecutives.length != 0 && 
        c.charCodeAt(0) - consecutives[consecutives.length-1][0].charCodeAt(0) == 1)
      consecutives[consecutives.length-1] = c + consecutives[consecutives.length-1]
    else consecutives.push(c);
  }
  return consecutives.join('');
} 
*/

/* 
const solution = s => [...s+' '].reduce(([a,b],x) => b && x.charCodeAt() == 1+b.at(-1).charCodeAt() ? [a,b+x] : [a+[...b].reverse().join``,x], ['',''])[0]
*/