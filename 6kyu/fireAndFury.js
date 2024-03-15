/* 
6kyu - FIRE and FURY
https://www.codewars.com/kata/59922ce23bfe2c10d7000057/train/javascript

Only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.

Kata Task:
Decipher the tweet by looking for words with known meanings.

  FIRE = "You are fired!"
  FURY = "I am furious."

  If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

Notes
The tweet reads left-to-right.
Any letters not spelling words FIRE or FURY are just ignored
If multiple of the same words are found in a row then plural rules apply -
FIRE x 1 = "You are fired!"
FIRE x 2 = "You and you are fired!"
FIRE x 3 = "You and you and you are fired!"
etc...
FURY x 1 = "I am furious."
FURY x 2 = "I am really furious."
FURY x 3 = "I am really really furious."
*/

function fireAndFury(tweet) {
  let words = tweet.match(/FURY|FIRE/g);
  if (!words || ![...tweet].every(letter => "EFIRUY".includes(letter))) return "Fake tweet.";
  let phrases = [], tmpObj = {}, prevWord = "";
  for (let word of words) {
    if (word !== prevWord) {
      prevWord && phrases.push(tmpObj);
      tmpObj = { word, count: 1 };
      prevWord = word;
    } else {
      tmpObj.count++;
    }
  }
  phrases.push(tmpObj);
  const rules = {
    "FURY": { prefix: "I am", suffix: "furious.", middle: "really " },
    "FIRE": { prefix: "You", suffix: "are fired!", middle: "and you " }
  }
  return phrases.map(({ word, count }) =>
    (count > 1
      ? [rules[word].prefix, rules[word].middle.repeat(count - 1).trimEnd(), rules[word].suffix]
      : [rules[word].prefix, rules[word].suffix])
      .join(' ')
  ).join(' ');
}

console.log(fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!");
console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"), "You are fired! I am really furious. You are fired!");
console.log(fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.");
console.log(fireAndFury("AAFIREBBFURYCC"), 'Fake tweet.');

// best

/* 
// var fireAndFury = function(tweet) {

//   let matches = tweet.match(/(FURY|FIRE)/g);

//   if (/[^EFIRUY]/.test(tweet) || !matches)
//     return 'Fake tweet.';

//   return matches
//     .join('')
//     .match(/(FURY|FIRE)\1*/g)
//     .map(match => {

//       let terms = match.length / 4 - 1;

//       return match[1] === 'I'
//         ? 'You ' + 'and you '.repeat(terms) + 'are fired!'
//         : 'I am ' + 'really '.repeat(terms) + 'furious.';

//     })
//   .join(' ');

// }
* /

/* 
const fireAndFury = (t) => {
  if (t.replace(/[FIREUY]/g,'').length > 0) return "Fake tweet.";
  t = t.replace(/FIRE/g, '-').replace(/FURY/g, '=').replace(/[^-=]/g,'');
  if (!t.length) return "Fake tweet.";
  t = t.split('');
  let last, ans = '';
  for (let i = 0; i < t.length; i++) {
    if (t[i] == '=' && last != '=') ans += 'I am ';
    if (t[i] == '=' && last == '=') ans += 'really ';
    if (t[i] == '=' && t[i+1] != '=') ans += 'furious. ';
    if (t[i] == '-' && last != '-') ans += 'You ';
    if (t[i] == '-' && last == '-') ans += 'and you ';
    if (t[i] == '-' && t[i+1] != '-') ans += 'are fired! ';    
    last = t[i];
  }
  return ans.trim();
}
*/

/* 
function fireAndFury(s) {
  if (!/FIRE|FURY/.test(s) || /[^EFIRUY]/.test(s)) return 'Fake tweet.';
  var result = s.match(/FIRE|FURY/g).join``.match(/(FIRE)+|(FURY)+/g);
  return result.map(s => /FIRE/.test(s) ? `You ${'and you '.repeat(s.length / 4 - 1)}are fired!` : `I am ${'really '.repeat(s.length / 4 - 1)}furious.`).join` `;
}
*/