/* 
5kyu - Typoglycemia Generator
https://www.codewars.com/kata/55953e906851cf2441000032/train/javascript

Return a string where:

- the first and last characters remain in original place for each word
- characters between the first and last characters must be sorted alphabetically
- punctuation should remain at the same place as it started, for example: shan't -> sahn't


Assumptions:
- words are seperated by single spaces
- only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
- special characters do not take the position of the non special characters, for example: -dcba -> -dbca
- for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalisation
*/

function ScrambleWords(str) {
  const specRe = new RegExp("[\\-',.]");
  return str.split(' ').map(w => {
    let l = 0, r = w.length - 1, first = "", last = "";
    if (r < 3) return w;
    while (specRe.test(w[l]) && l < r) first += w[l++];
    first += w[l++];
    while (specRe.test(w[r]) && r > l) last = w[r--] + last;
    last = w[r] + last;
    let middle = [...w.slice(l, r)];
    let sortedLetters = middle.filter(l => !specRe.test(l)).sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < middle.length; i++) {
      if (!specRe.test(middle[i])) middle[i] = sortedLetters.shift();
    }
    return first + middle.join('') + last;
  }).join(' ');
};

// best

/* 
function ScrambleWords(str) {
  let s = str.replace(/[^a-z ]/g, '').replace(/([a-z])([a-z]+)([a-z])/g, (_,a,b,c)=>a+[...b].sort().join``+c)
  for (let i = 0; i < str.length; ++i) {
    if (/[^a-z ]/.test(str[i])) s = s.slice(0,i) + str[i] + s.slice(i)
  }
  return s
}
*/

/* 
const ScrambleWords = str => str.split(' ').map(word=>{
  let w=word.match(/[a-z]/ig)
  w=[w[0],...w.slice(1,-1).sort(),w[w.length-1]]
  return word.replace(/[a-z]/ig,c=>w.shift())
}).join(' ')
*/