/* 
7kyu - Rithm Series: Frame a Phrase Simple
https://www.codewars.com/kata/5867d76b36959fa4a400034e/train/javascript
*/

function frame(phrase, ch = "*", l = phrase.length) {
  return ch.repeat(l + 4) + "\n" +
    ch + ' '.repeat(l + 2) + ch + "\n" +
    (l ? ch + ' ' + phrase + ' ' + ch + "\n" : "") +
    ch + ' '.repeat(l + 2) + ch + "\n" +
    ch.repeat(l + 4);
}

console.log(frame("Yolo"));
console.log(frame(""));

// best
/*
function frame(phrase, ch = '*') {
  const width = phrase.length + 2
  const empltySpace = ch + ' '.repeat(width) + ch
  const border = ch.repeat(width + 2)
  if (!phrase) return [border, empltySpace, empltySpace, border].join`\n`
  return [border, empltySpace, ch + ' ' + phrase + ' ' + ch,  empltySpace, border].join`\n`
}
*/