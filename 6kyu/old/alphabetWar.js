/* 
6kyu - Alphabet wars - reinforces massacre
https://www.codewars.com/kata/593e2077edf0d3e2d500002d/train/javascript

Write a function that accepts reinforces (array of strings) and airstrikes (array of strings).
The reinforces strings consist of only small letters. 
The size of each string in reinforces array is the same.

The airstrikes strings consists of * and white spaces. 
The size of each airstrike may vary. There may be also no airstrikes at all.

The first row in reinforces array is the current battlefield. 
Whenever some letter is killed by bomb, it's replaced by a letter 
from next string in reinforces array on the same position.

The airstrike always starts from the beginning of the battlefield.

The * means a bomb drop place. The each * bomb kills letter only on the battelfield. 
The bomb kills letter on the same index on battlefield plus the adjacent letters.

The letters on the battlefield are replaced after airstrike is finished.

Return string of letters left on the battlefield after the last airstrike. 
In case there is no any letter left in reinforces on specific position, return _.
*/

function alphabetWar(reinforces, airstrikes) {
  let battlefield = [...reinforces[0]];
  for (let strike of airstrikes) {
    let count = 0;
    for (let i = 0; i < strike.length; i++) {
      count++;
      if (strike[i] === '*')
        for (let j = Math.max(0, i - 1); j < Math.min(i + 2, battlefield.length); j++) battlefield[j] = '_';
    }
    if (count > 0) {
      for (let i = 0; i < battlefield.length; i++) {
        if (battlefield[i] === '_') {
          for (let j = 1; j < reinforces.length; j++) {
            if (reinforces[j][i] !== '_') {
              battlefield[i] = reinforces[j][i];
              reinforces[j] = reinforces[j].slice(0, i) + '_' + reinforces[j].slice(i + 1);
              break;
            }
          }
        }
      }
    }
  }
  return battlefield.join``;
}

var reinforces = ["abcdefg",
  "hijklmn"];
var airstrikes = ["   *   ",
  "*  *   "];
//console.log(alphabetWar(reinforces, airstrikes));

reinforces =
  ["g964xxxxxxxx",
    "myjinxin2015",
    "steffenvogel",
    "smile67xxxxx",
    "giacomosorbi",
    "freywarxxxxx",
    "bkaesxxxxxxx",
    "vadimbxxxxxx",
    "zozofouchtra",
    "colbydauphxx"];
airstrikes =
  ["* *** ** ***",
    " ** * * * **",
    " * *** * ***",
    " **  * * ** ",
    "* ** *   ***",
    "***   ",
    "**",
    "*",
    "*"];

console.log(alphabetWar(reinforces, airstrikes), 'codewarsxxxx'); // FAIL
//console.log(alphabetWar(["abcdefg", "hijklmn"], ["   *   ", "*  *   "]), 'hi___fg'); // OK
console.log(alphabetWar(["aaaaa", "bbbbb", "ccccc", "ddddd"], ["*", " *", "   "]), 'ccbaa'); // FAIL

// best

/* 
function alphabetWar(reinforces, airstrikes) {

  let  len = reinforces[0].length
  , counts = new Array(len).fill(0);

  for (let strike of airstrikes) {

    strike = strike + ' ';
    strike = strike.replace(/.?\*+.?/g, m => '.'.repeat(m.length));
    
    for (let i = 0; i < len && i < strike.length; i++)
      if (strike[i] === '.')
        counts[i]++;
   
  }

  return counts
    .map((n, i) => n < reinforces.length ? reinforces[n][i] : '_')
    .join('');

}

*/