/* 
6kyu - Number of anagrams in an array of words
https://www.codewars.com/kata/587e18b97a25e865530000d8

An anagram is a word, a phrase, or a sentence formed from 
another by rearranging its letters. 
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, 
and returns the total number of _distinct pairs_ of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

 */


/* 
1->0
2->1
3->3
4->7
5->10
*/
// function anagramCounter(wordsArray) {

//   // let m = {};
//   // for (let w of wordsArray) {
//   //   let sorted = [...w].sort().join``;
//   //   m[sorted] = (m[sorted] || 0) + 1;
//   // }
//   let m = wordsArray.reduce((obj, w) => {
//     let sorted = [...w].sort().join``;
//     obj[sorted] = (obj[sorted] || 0) + 1;
//     return obj;
//   }, {});
//   return Object.values(m).map(e => (e ** 2 - e) / 2)
//     .reduce((sum, v) => sum + v, 0);

// }

//final (stupid):
const anagramCounter = (wordsArray) => Object.values(wordsArray
  .reduce((obj, w) => { let key = [...w].sort().join``; obj[key] = (obj[key] || 0) + 1; return obj; }, {})
).reduce((sum, e) => sum + (e ** 2 - e) / 2, 0);



//console.log(typeof (anagramCounter([])), "number", "Is not returning a number");
console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba']), 2);
console.log(anagramCounter(['dell', 'ledl', 'lled', 'cba']), 3);
console.log(anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"]), 7);
console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']), 11);

// best

/* 
function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}
*/

/* 
const anagramCounter = w => Object.values(w.map(w => [...w].sort().join``).reduce((a, v) => (a[v] = ++a[v] || 0, a), {})).reduce((a, v) => a + (v * (v + 1) / 2), 0)
*/