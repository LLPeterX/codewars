/* 
6kyu - Word Challenges at School
https://www.codewars.com/kata/580be55ca671827cfd000043/solutions/javascript
*/

function wantedWords(n, m, forbid_let) {
  let result = [];
  for (let word of wordList) {
    let vowels = 0, isOk = true;
    if (n + m === word.length) {
      for (let i = 0; i < word.length; i++) {
        if (forbid_let.includes(word[i])) {
          isOk = false;
          break;
        }
        if ("aeiou".includes(word[i])) {
          vowels++
        }
      }
      if (isOk && vowels === n) {
        result.push(word);
      }
    }
  }
  return result;
}

// best
/* 
function wantedWords(n, m, forbid_let){
  return wordList.filter(word => 
                            !word.split('').some(letter => forbid_let.includes(letter))
                          && word.replace(/[^aeiou]/gi, '').length === n 
                          && word.replace(/[aeiou]/gi, '').length === m) || []
}
*/