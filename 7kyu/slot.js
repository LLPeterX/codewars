/* 
6kyu - Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks
https://www.codewars.com/kata/57fb4b289610ce39f70000de/train/javascript
*/

function slot(s) {
  console.log('  check ', s);
  if (/!{5}/.test(s) || /\?{5}/.test(s)) return 1000;
  if (/!{4}/.test(s) || /\?{4}/.test(s)) return 800;
  if (/\!{3}\?{2}/.test(s) || /\?{3}\!{2}/.test(s) || /\?{2}\!{3}/.test(s) || /\!{2}\?{3}/.test(s)) return 500;
  if (/!{3}/.test(s) || /\?{3}/.test(s)) return 300;
  if (/\.*?!{2}.*?\!{2}.*?/.test(s) || /.*?\?{2}.*?\?{2}.*?/.test(s) || /.*?\?{2}.*?\!{2}.*?/.test(s) || /.*?\!{2}.*?\?{2}.*?/.test(s)) return 200;
  if (/\!{2}/.test(s) || /\?{2}/.test(s)) return 100;
  return 0;
}

console.log(slot("!!!!!"), 1000)
console.log(slot("!!!!?"), 800)
console.log(slot("!!!??"), 500)
console.log(slot("!!!?!"), 300)
console.log(slot("!!?!!"), 200)
console.log(slot("!!?!?"), 100)
console.log(slot("!?!?!"), 0)

console.log(slot("?!!??"), 200)
console.log(slot("!!???"), 500)

// best
/* 
function slot(s){
  var c = s.match(/([?!])\1*/g).map(e => e.length).sort((a, b) => b - a);
switch (c.length) {
  case 1: return 1000;
  case 2: return c[0] === 4 ? 800 : 500;
  case 3: return c[0] === 3 ? 300 : 200;
  case 4: return 100;
  case 5: return 0;
}
}
* /

/* 
function slot(s) {
  return [
    [/(.)\1{4}/, 1000],
    [/(.)\1{3}/, 800],
    [/(.)\1.(?!\1)(.)\2/, 500],
    [/(.)\1\1/, 300],
    [/(.)\1.?(.)\2/, 200],
    [/(.)\1/, 100]
  ].reduce((result, [regex, value]) => {
    if (result) return result
    if (regex.test(s)) return value
    return 0
  }, 0)
*/