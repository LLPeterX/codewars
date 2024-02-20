/* 
6kyu - Special Scores For Words
https://www.codewars.com/kata/563c9f8073ccb1464d0000ae/train/javascript

We define a special score for a word (ssw) as follows: 
We multiply the corresponding 10 - base ascii code for each letter 
of the word by its respective frequency of this letter in the word, 
we collect these addens and we sum them up.

We need a function findWord() that receives two arguments: 
number of letters, numLet, and a maximum special maxSsw for the word. 
The function will output a word from a data base of 2000 words 
that have the highest possible ssw of the given number of letters 
but smaller or equal than the given max_ssw. 
If we have more than one word with the same number of letters, num_let, 
and the same special score, ssw, it will be chosen the last word of the list of words sorted. 

You were provided with a list of 2000 words of the Oxford Dictionary Of English (U.K. English), 
named wordList.
*/

// this kata is broken
// see 
const getSSW = (word) => [...word].reduce((s, c) => s + c.charCodeAt(), 0);

function findWord(numLet, maxSsw) {
  let words = wordList.filter(word => word.length === numLet)
    .map(word => ({ word, ssw: getSSW(word) }))
    .sort((a, b) => b.ssw - a.ssw);
  if (words.length === 0) return null;
  words = words.filter(w => w.ssw <= maxSsw)
    .sort((a, b) => b.ssw === a.ssw ? b.word.localeCompare(a.word) : b.ssw - a.ssw);
  //console.log(numLet, maxSsw, words.slice(0, 10));
  return words.length ? words[0].word : null;
}

/* 
bug here:
for numLet=6, maxSsw=637 possible words are ['relate', 'reject', 'obtain', 'farmer', 'church']
according the description the result must be 'realte' as far in list,
but expected 'obtain'.
*/



