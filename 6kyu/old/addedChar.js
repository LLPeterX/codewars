/* 
6kyu - Three added Characters
https://www.codewars.com/kata/5971b219d5db74843a000052/train/javascript

Даны 2 строки - s1 и s2.
s2 = s1 со случайно добавленными 3 одинаковыми символами (в любом месте)
Определить эти символы.
Добавленный символ может уже существовать в s1.


*/

function addedChar(s1, s2) {
  let c1 = [...s1].reduce((o, v) => { o[v] = (o[v] ?? 0) + 1; return o; }, {})
  let c2 = [...s2].reduce((o, v) => { o[v] = (o[v] ?? 0) + 1; return o; }, {});
  for (let c of Object.keys(c2)) {
    if (!c1[c] || c2[c] > c1[c]) return c;
  }
}

let str1 = "hello";
let str2 = "checlclo";

console.log(addedChar(str1, str2), 'c');

// best

/* 
// Average runtime: 0.135ms
// O(n)

function addedChar(s1, s2) {
    let code = 0;

    for (let i = 0; i < s2.length; i += 1)
        code += s2.charCodeAt(i) - ~~s1.charCodeAt(i);

    return String.fromCharCode(code / 3);
}
*/

/* 
function addedChar(s1, s2){
 let s11 = [...s1].sort()
 let s22 = [...s2].sort()
 return s22.find((el, i) => el !== s11[i])
}
*/