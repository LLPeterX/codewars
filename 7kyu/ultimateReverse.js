/* 
7kyu - Ultimate Array Reverser
https://www.codewars.com/kata/5c3433a4d828182e420f4197/train/javascript

Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

const ultimateReverse = s => {
  let r = [...s.join``].reverse(), x = s.map(v => v.length);
  let result = [];
  for (let i = 0, k = 0; i < x.length; i++) {
    result.push(r.slice(k, k += x[i]).join(''));
    //k += x[i];
  }
  return result;
};

console.log(
  ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
  ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
);

console.log(
  ultimateReverse(
    ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer",
      "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]
  ),
  ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
    "before", "your", "skin", "starts", "to", "turn", "pink?"]
);

// best

/* 
function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
}
*/