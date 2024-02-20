/* 
6kyu - Clever split
https://www.codewars.com/kata/5992e11d6ca73b38d50000f0/train/javascript

You have a string. The string consists of words. 
Before words can be an exclamation mark !. 
Also some words are marked as one set with square brackets []. 
You task is to split the string into separate words and sets.
The set can't be contained in another set.
*/

/* 
// functional
function cleverSplit(s) {
  let result = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ') {
      result.push(word);
      word = "";
    } else if (c === '[') {
      word = ""
      while (s[i] !== ']') word += s[i++];
      --i;
    } else word += c;
  }
  if (word) result.push(word);
  return result;
}
 */

// with regexp
function cleverSplit(s) {
  return s.match(/(\w|!.|\[.+?\])+/g);
}

// --------------- TESTS ----------------
[
  { s: 'Buy a !car [!red green !white] [cheap or !new]', ans: ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]'] },
  { s: '!Learning !javascript is [a joy]', ans: ['!Learning', '!javascript', 'is', '[a joy]'] },
  { s: '[Cats and dogs] are !beautiful and [cute]', ans: ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]'] }
].forEach(t =>
  console.log(cleverSplit(t.s), t.ans)
);


// cool
/* 
function cleverSplit(s){
 return s.split(/ (?![^[]*])/)
}
*/