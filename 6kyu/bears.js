/* 
6kyu - Pairs of Bears
https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript
*/

function bears(x, s) {
  let i = 0;
  let b = "";
  while (i < s.length) {
    if (s[i] === 'B' && s[i + 1] === '8') {
      b += 'B8';
      i += 2;
    } else if (s[i] === '8' && s[i + 1] === 'B') {
      b += '8B';
      i += 2;
    } else {
      i++;
    }
  }
  return [b, b.length / 2 >= x];
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8", false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B", true]);
console.log(bears(8, '8'), ["", false]);

// best
/* 
function bears(x, s){
  var pairs = s.match(/(8B)|(B8)/g) || [];
  return [pairs.join(""), pairs.length >= x];
}
*/

/* 
function bears(x, s){
  let p = s.match(/8B|B8/g)||[]
  return [p.join(''),p.length>=x]
}
*/