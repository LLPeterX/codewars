/* 
6kyu - Adjacent repeated words in a string
https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript


*/

function countAdjacentPairs(searchString) {
  //if (!searchString) return 0;
  let words = searchString.toLowerCase().split(' ')
  let count = 0, w = false;
  for (let i = 1; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      if (!w) count++;
      w = true;
    } else {
      w = false;
    }
  }
  return count;
}

console.log(countAdjacentPairs(''), 0, 'An empty string should return 0.')
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple'), 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
console.log(countAdjacentPairs('banana banana banana'), 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
console.log(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!'), 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
console.log(countAdjacentPairs('pineapple apple'), 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")

// best

/* 
const countAdjacentPairs=(s)=>(s.match(/(\b\w+\s*\b)\1+/gi)||[]).length
*/

/* 
function countAdjacentPairs(searchString) {
  const words = searchString.toLowerCase().split(/\s+/);
  return words.reduce((repeatedWords, currentWord, i) =>
    currentWord === words[i + 1] && currentWord !== words[i - 1] ? [...repeatedWords, currentWord] : repeatedWords, []).length;
}
*/