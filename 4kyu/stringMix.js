/* 
4kyu - String Mix
https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

Given two strings s1 and s2, we want to visualize how different the two strings are. 
We will only take into account the lowercase letters (a to z). 
First let us count the frequency of each lowercase letters in s1 and s2.
*/
/* 
function mix(s1, s2) {
  function fillArray(str) {
     let a=Array(26).fill().map((_,i)=>[String.fromCharCode(i+97),0]);
     str.split('')
       .filter(letter => letter>='a' && letter<='z')
       .forEach(letter => ++a[letter.charCodeAt(0)-97][1]);
     a = a.filter(v=>v[1]>1);
     a.sort((x,y) => y[1]-x[1]);
     return a;
  }
  let arr1 = fillArray(s1),
      arr2 = fillArray(s2);
  let res="" ,e;
  console.log(arr1,arr2);
  while(arr1.length && arr2.length) {
    if(arr1[0][1]>arr2[0][1]) {
      let [letter, count] = arr1.shift();
      e = arr2.find(v=> v[0]===letter);
      if(e) {
        arr2 = arr2.filter(v => v[0]!=letter);
        res += "1:"+letter.repeat(count);
      }
    } else if (arr2[0][1]>arr1[0][1]) {
      let [letter, count] = arr2.shift();
      e = arr1.find(v=> v[0]===letter);
      if(e) {
        arr1 = arr1.filter(v => v[0]!=letter);
        res += "2:"+letter.repeat(count);
      }
    } else {
      res += "="+arr1[0][0].repeat(arr1[0][1]);
      arr1.shift();
      arr2.shift();
    }
    res += "/";

  }
  
  return res;
}
 */
// stolen & midified from https://github.com/Automedon/Codewars/blob/master/4-kyu/Strings%20Mix.js

function mix(s1, s2) {
  return Array(26).fill().map((_, i) => String.fromCharCode(97 + i))
    .map(letter => {
      let n1 = [...s1].filter(c => c === letter).length;
      let n2 = [...s2].filter(c => c === letter).length;
      let max = Math.max(n1, n2);
      return {
        letter, max,
        src: max > n1 ? "2" : max > n2 ? "1" : "="
      };
    })
    .filter(c => c.max > 1)
    .sort((a, b) => b.max - a.max || (a.src + a.letter > b.src + b.letter ? 1 : -1))
    .map(c => `${c.src}:${c.letter.repeat(c.max)}`)
    .join("/");
}
let s1 = "my&friend&Paul has heavy hats! &";
let s2 = "my friend John has many many friends &"; // "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
console.log(mix(s1, s2));
console.log(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr");

// best

/* 
const mix = (s1, s2) =>
  [...`abcdefghijklmnopqrstuvwxyz`].map(val => [val, s1.split(val).length - 1, s2.split(val).length - 1])
    .filter(([a, b, c]) => b > 1 || c > 1)
    .map(([a, b, c]) => [a, b > c ? `1` : b < c ? `2` : `=`, Math.max(b, c)])
    .sort((a, b) => b[2] - a[2] || a[1].charCodeAt() - b[1].charCodeAt() || a[0].charCodeAt() - b[0].charCodeAt())
    .map(([a, b, c]) => `${b}:${a.repeat(c)}`).join(`/`);
*/