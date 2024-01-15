/* 
7kyu - All or Nothing
https://www.codewars.com/kata/65112af7056ad6004b5672f8/train/javascript
*/

function possiblyPerfect(key, answers) {
  let correct = 0, incorrect = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] === '_') {
      correct++;
      incorrect++;
    } else if (key[i] == answers[i]) {
      correct++;
    } else {
      incorrect++;
    }
  }
  return correct == key.length || incorrect == key.length
}

console.log(possiblyPerfect([..."A_C_B"], [..."ADCEB"]), true);
console.log(possiblyPerfect([..."B_B"], [..."BDC"]), false);
console.log(possiblyPerfect([..."T_FFF"], [..."FFTTT"]), true);
console.log(possiblyPerfect([..."BA__"], [..."BACC"]), true);
console.log(possiblyPerfect([..."ABA_"], [..."BACC"]), true);
console.log(possiblyPerfect([..."ABC_"], [..."BACC"]), false);
console.log(possiblyPerfect([..."B_"], [..."CA"]), true);
console.log(possiblyPerfect([..."BA"], [..."CA"]), false);
console.log(possiblyPerfect([..."B"], [..."B"]), true);
console.log(possiblyPerfect([..."_T__"], [..."TFFF"]), true);
console.log(possiblyPerfect([..."_T__"], [..."TTFT"]), true);
console.log(possiblyPerfect([..."_TTT"], [..."TTFT"]), false);
console.log(possiblyPerfect([..."_TTT"], [..."TTTT"]), true);
console.log(possiblyPerfect([..."_TTT"], [..."FFFF"]), true);
console.log(possiblyPerfect([..."____"], [..."FFFF"]), true);

// best
/* 
function possiblyPerfect(key,answers) {
  return key.every((k, i) => k === '_' || k === answers[i]) || key.every((k, i) => k !== answers[i]);
}
*/