/* 
7kyu - Character Counter
https://www.codewars.com/kata/56786a687e9a88d1cf00005d

Дана строка. Вернуть true, если все символы повторяются одно и то же количество раз
*/

function validateWord(s) {
  return Object.values([...s.toLowerCase()].reduce((o, v) => ({ ...o, [v]: o[v] + 1 || 1 }), {})).every((v, i, a) => v === a[0]);
  //return Object.values([...s].reduce((o, v) => ({ ...o, [v]: o[v] + 1 || 1 }), {}));

}

console.log(validateWord("abcabc"), true);
console.log(validateWord("Abcabc"), true, "The word was: \"Abcabc\" \n");
console.log(validateWord("abc123"), true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"), false, "The word was: \"abcabcd\" \n");
console.log(validateWord("abc!abc!"), true, "The word was: \"abc!abc!\" \n");
console.log(validateWord("abc:abc"), false, "The word was: \"abc:abc\" \n");

// best
/* 
function validateWord(s, c = s.toLowerCase())
{
  return c.length % new Set(c).size == 0
}
*/