/* 
5kyu - TV Remote (symbols)
https://www.codewars.com/kata/5b3077019212cbf803000057

Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

* aA# is the SHIFT key. Pressing this key cycles through THREE keypad modes:
 - Mode 1 = alpha-numeric keypad with lowercase alpha (as depicted above)
 - Mode 2 = alpha-numeric keypad with UPPERCASE alpha
 - Mode 3 = symbolic keypad (as depicted above)
*SP is the space character
* The other (solid fill) keys in the bottom row have no function
*/

const keypads = [
  "abcde123fghij456klmno789pqrst.@0uvwxyz_/",
  "ABCDE123FGHIJ456KLMNO789PQRST.@0UVWXYZ_/",
  "^~?!'\"()-:;+&%*=<>€£$¥¤\\[]{},.@§#¿¡   _/"
];


function getMinDistance(x0, y0, x1, y1) {
  let xmin = Math.min(Math.abs(x0 - x1), 8 - Math.abs(x0 - x1));
  let ymin = Math.min(Math.abs(y0 - y1), 6 - Math.abs(y0 - y1));
  return xmin + ymin;
}

function tvRemote(words) {
  let mode = 0;
  let x, y;
  let prevY = 0, prevX = 0;
  let count = 0;
  for (let c of words) {
    if (c === ' ') {
      y = 5;
      x = 1;
    } else {
      let possibleModes = keypads.map((row, i) => ({ row: i, x: row.indexOf(c) }))
        .filter(o => o.x >= 0)
        .map(o => o.row);
      if (!possibleModes.includes(mode)) {
        let newMode = keypads[possibleModes[0]].includes(c) ? possibleModes[0] : possibleModes[1];
        let pressCount = newMode > mode ? newMode - mode : 3 - mode + newMode;
        count += getMinDistance(prevX, prevY, 0, 5) + pressCount;
        prevX = 0;
        prevY = 5;
        mode = newMode;
      }
      let i = keypads[mode].indexOf(c);
      y = Math.floor(i / 8);
      x = i % 8;
    }
    count += getMinDistance(prevX, prevY, x, y) + 1;
    prevX = x;
    prevY = y;
  }
  return count;
}

console.log(tvRemote('..._^_--9__'), 44);

console.log(tvRemote("Too Easy?"), 71);
// console.log(tvRemote("^does^"), 33);
// console.log(tvRemote("$your$"), 53);
// console.log(tvRemote("#solution#"), 49);
// console.log(tvRemote("\u00bfwork\u00bf"), 34);
// console.log(tvRemote("{for}"), 38);
// console.log(tvRemote("\u00a3these\u00a3"), 57);
// console.log(tvRemote("?symbols?"), 54);

// best

/* 
const keypads = [
  'abcde123fghij456klmno789pqrst.@0uvwxyz_/\t ',
  'ABCDE123FGHIJ456KLMNO789PQRST.@0UVWXYZ_/\t ',
  '^~?!\'"()-:;+&%*=<>€£$¥¤\\[]{},.@§#¿¡\t\t\t_/\t '
];

function tvRemote(text) {
  let row = col = currentMode = 0;
  const stepsTo = (targetRow, targetCol) => {
    const [dx, dy] = [Math.abs(targetRow - row), Math.abs(targetCol - col)];
    const steps = Math.min(dx, 6 - dx) + Math.min(dy, 8 - dy);
    [row, col] = [targetRow, targetCol];
    return steps + 1;
  };
  return text.split('')
    .reduce((sum, char) => {
      while (!keypads[currentMode].includes(char)) {
        sum += stepsTo(5, 0);
        currentMode = ++currentMode % 3;
      }
      const index = keypads[currentMode].indexOf(char);
      sum += stepsTo(Math.floor(index / 8), index % 8);
      return sum;
    }, 0);
}
*/