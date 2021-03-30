/* 
4kyu
https://www.codewars.com/kata/51e056fe544cf36c410000fb

Дан текст.
Вернуть массив 3 самых часто встречающихся слов (в нижнем регистре)

Дополнительно бонусом:
 - не создавать массив из исходного текста
 - не использовать сортировку массива уникальных слов
*/

// вариант с массивом (рабочий код)
function topThreeWords2(text) {
  let top = [];
  let arr = text.toLowerCase().match(/([a-z\']+)/mg);
  if (!arr) return [];
  arr.forEach(w => {
    if (w != "'") {
      let obj = top.find(e => e.word === w);
      if (!obj) {
        top.push({ word: w, count: 1 });
      } else {
        obj.count++;
      }
    }
  });
  top.sort((a, b) => b.count - a.count);
  return top.slice(0, 3).map(e => e.word);
}

// вариант без массива (не работает)
function topThreeWords(str) {
  let top = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] == "'" && word.length > 0)) {
      word += str[i];
    } else {
      if (word.length > 0 && word[0]!="'") {
        let obj = top.find(o => o.word === word);
        if (obj) {
          obj.count++;
        } else {
          top.push({ word, count: 1 });
        }
      }
      word = "";
    }
  }
  if(word.length && word[0]!="'") {
    let obj = top.find(o => o.word === word);
    if (obj) {
      obj.count++;
    } else {
      top.push({ word, count: 1 });
    }
  }
  return top.sort((a,b)=>b.count-a.count).slice(0, 3).map(e => e.word)
}

let s = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

// s="  //wont won't won't";
// let m = s.match(/([a-z\']+)/mg);
// console.log(m);


console.log(topThreeWords(s)); // ["a", "of", "on"]
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't won't")); // ["won't", "wont"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []

// best
/* 
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};
*/

/* 
function topThreeWords(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
          .keys(words)
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}
*/