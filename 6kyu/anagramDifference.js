/* 
6kyu - Anagram difference
https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript

Given two words, how many letters do you have to remove from them to make them anagrams?
Example
* First word : c od e w ar s (4 letters removed = o,d,w,s) => [c,e,a,r]
* Second word : ha c k er r a nk (6 letters removed - h,a,k,r,n,k) => [c, e, r, a]
* Result : 10

Hints
- A word is an anagram of another word if they have the same letters (usually in a different order).
- Do not worry about case. All inputs will be lowercase.
*/


function anagramDifference(w1, w2) {
  let result = 0;
  // формируем объект с кол-вом символов в w1 и w2 
  let cc = {};
  // w1
  for (let c of w1) {
    if (cc[c]) {
      cc[c].w1++;
    } else {
      cc[c] = { w1: 1, w2: 0 };
    }
  }
  //w2
  for (let c of w2) {
    if (cc[c]) {
      cc[c].w2++;
    } else {
      cc[c] = { w2: 1, w1: 0 };
    }
  }
  //console.log(cc);
  for (let o of Object.values(cc)) {
    if (o.w2 == 0 || o.w1 == 0) {
      result += (o.w1 + o.w2); // один из них ненулевой
    } else {
      // есть символы в w1 и в w2. Надо удалить лишние
      // могут быть комбинации:
      // 1) [5,3] => 2 (оба нечетные)
      // 2) [5,2] => 3 (чет/нечет)
      // 3) [4,6] => 2 (оба чет)
      // результат всегда разница между макс и мин
      result += Math.max(o.w1, o.w2) - Math.min(o.w1, o.w2);
    }
  }
  return result;
}


console.log(anagramDifference('codewars', 'hackerrank'));
// const testCases = [
//   ["", "", 0],
//   ["a", "", 1],
//   ["", "a", 1],
//   ["ab", "a", 1],
//   ["ab", "cd", 4],
//   ["aab", "a", 2],
//   ["a", "aab", 2],
//   ["codewars", "hackerrank", 10]
// ];

// for (let [w1, w2, expected] of testCases) {
//   console.log(anagramDifference(w1, w2), expected);
// }

console.log(anagramDifference("ekksvttogbnzfrfvb", "urzfhlptavildbuukcmkxtpgmkwjwqrkbmknewgcaifqqponldepijliftajsjqsvxgqo"), 52);

// best

/* 
function anagramDifference(w1,w2){
  const stack = {};
  
  for (var c1 of w1) {
    stack[c1] > 0 ? stack[c1]++ : stack[c1] = 1;
  }
  
  let counter = 0;
  
  for (var c2 of w2) {
    stack[c2] > 0 ? stack[c2]-- : counter++;
  }
  
  const result = counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0);
  
  return result;
}
*/

/* 
function anagramDifference(w1, w2) {
  let result = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w2.includes(w1[i])) {
      w2 = w2.replace(w1[i], 1);
      result++;
    }
  }
  return w1.length + w2.length - 2 * result;
}
*/


/* 
function anagramDifference(s1,s2){
  let o1={},o2={};
  [...s1].map(x=>o1[x]=o1[x]?o1[x]+1:1);
  [...s2].map(x=>o2[x]=o2[x]?o2[x]+1:1);
  let z = 0;
  Object.keys(o1).map(x=>z+=o2[x]?Math.abs(o1[x]-o2[x]):o1[x]);
  Object.keys(o2).map(x=>z+=o1[x]?0:o2[x]);
  return z;
}
*/

/* 
function anagramDifference(w1,w2){
  return strDiff(w1,w2).length + strDiff(w2,w1).length
}

const strDiff = (a,b) => [...b].reduce((a,x)=>a.replace(x,''),a);
*/

/* 
anagramDifference=(v,w)=>[...new Set([...v,...w])].reduce((a,b)=>a+Math.abs(v.split(b).length-w.split(b).length),0)
*/