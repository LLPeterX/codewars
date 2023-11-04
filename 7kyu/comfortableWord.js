/* 
7kyu - Comfortable words
https://www.codewars.com/kata/56684677dc75e3de2500002b/train/javascript
*/

const comfortableWord = word => {
  const left = "qwertasdfgzxcvb", right = "yuiophjklnm";
  let isLeft = left.includes(word[0]);
  for (let i = 1; i < word.length; i++) {
    if ((isLeft && left.includes(word[i])) || (!isLeft && right.includes(word[i]))) return false;
    isLeft = !isLeft;
  }
  return true;
};

console.log(comfortableWord("yams"), true);
console.log(comfortableWord("test"), false);
console.log(comfortableWord("their"), true);
console.log(comfortableWord("leisure"), false);

// best
/* 
const comfortable_word = word => {
  const LEFT = '[qwertasdfgzxcvb]';
  const RIGHT = '[yuiophjklnm]';
  
  var alternating = `^${LEFT}?(${RIGHT}${LEFT})*${RIGHT}?$`;
  
  return RegExp(alternating).test(word);
};
*/

/* 
const comfortable_word = word => /^[a-gq-tvwxz]?([h-puy][a-gq-tvwxz])*[h-puy]?$/.test(word);
*/

/* 
const comfortableWord = word => {
  return !/[yuiophjklnm]{2}/.test(word)&&!/[^yuiophjklnm]{2}/.test(word);
};
*/