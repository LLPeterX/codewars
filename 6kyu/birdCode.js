/* 
6kyu - Create Four Letter Birding Codes from Bird Names
https://www.codewars.com/kata/5a580064e6be38fd34000147/train/javascript

In the world of birding there are four-letter codes for the common names of birds. 
These codes are created by some simple rules:

- If the bird's name has only 1 word: the code => first four letters of that word.
- If the name is made up of 2 words: code => first two letters of each word.
- If the name is made up of 3 words: first letters from the first two words + first two letters from the third word.
- If the name is four words long, the code uses the first letter from all the words.
 */

function birdCode(arr) {
  return arr.map(bird => {
    let words = bird.toUpperCase().split(/[^a-z\']/i);
    console.log(`b=${bird} w=${words} L=${words.length}`);
    if (words.length === 1) return words[0].slice(0, 4);
    else if (words.length === 2) return words[0].slice(0, 2) + words[1].slice(0, 2);
    else if (words.length === 3) return words[0][0] + words[1][0] + words[2][0] + words[2][1];
    else return words.map(w => w[0]).join``;
  });
}


  // others:

/*
const birdCode=a=>a.map(s=>s.split(/[- ]/)).map(w=>[[],[4],[2,2],[1,1,2],[1,1,1,1]][w.length].map((x,i)=>w[i].slice(0,x)).join``.toUpperCase())
*/