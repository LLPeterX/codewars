/* 
5kyu - Simple Fun #357: Show The Digits
https://www.codewars.com/kata/59cc4c5aaeb284b9a1000089/train/javascript

You are given a string digits and an integer size(1-9). 
Your task is to generate a result like this:
show("888",1) ===
 -  -  -
| || || |
 -  -  -
| || || |
 -  -  -

 As you can see:

* Use '-' represents the horizontal line; Use '|' represents the vertical line.
* size determines the length of the horizontal line  and the height of the vertical line. 
  i.e. If size is 1, the horizontal line is -; If size is 2, the horizontal line is --. and so on..
* Each row is separated by "\n".

To keep shapes, other places are filled with spaces. Except for the end of each line.
*/

/* 
height1: 1=>5, 2=>7, 3=>9
width1: 1=>3, 2=>4, 3=>5

*/


function show(digits, size) {
  const shapes = [' - | |   | | - ', '     |     |   ', ' -   | - |   - ', ' -   | -   | - ', '   | | -   |   ',
    ' - |   -   | - ', ' - |   - | | - ', ' -   |     |   ', ' - | | - | | - ', ' - | | -   | - '
  ];

  const display = Array.from({ length: size * 2 + 3 }, () => Array(digits.length * (size + 2)).fill(' '));

  const scaleShape = (str) => {
    let newShape = [], v;
    const down = () => { for (let i = 0; i < size; i++) newShape.push(v); }
    for (let i = 0; i < str.length; i += 3) {
      switch (str.slice(i, i + 3)) {
        case '   ':
          newShape.push(' '.repeat(size + 2));
          break;
        case '| |':
          v = '|' + ' '.repeat(size) + '|';
          down();
          break;
        case '  |':
          v = ' '.repeat(size + 1) + '|';
          down();
          break;
        case '|  ':
          v = '|' + ' '.repeat(size + 1);
          down();
          break;
        case ' - ':
          newShape.push(' ' + '-'.repeat(size) + ' ');
          break;
      }
    }
    return newShape;
  }

  for (let i = 0, offsetX = 0; i < digits.length; i++, offsetX += size + 2) {
    let shape = scaleShape(shapes[digits[i]]);
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[0].length; col++) {
        display[row][offsetX + col] = shape[row][col];
      }
    }
  }
  return display.map(row => row.join('').trimEnd()).join("\n");
}

// console.log(show("888", 1), "\n->\n",
//   ` -  -  -
// | || || |
//  -  -  -
// | || || |
//  -  -  -`);
/*
expected ' -  -  -\n|  ||  |||\n -  -  -\n|  ||  |||\n -  -  -'
to equal ' -  -  -\n| || || |\n -  -  -\n| || || |\n -  -  -'
*/

// console.log(show("888", 2), "\n->\n",
//   ` --  --  --
// |  ||  ||  |
// |  ||  ||  |
//  --  --  --
// |  ||  ||  |
// |  ||  ||  |
//  --  --  --`)

console.log(show("1234567890", 3), "\n->\n",
  `      ---  ---       ---  ---  ---  ---  ---  ---
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
      ---  ---  ---  ---  ---       ---  ---
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
      ---  ---       ---  ---       ---  ---  ---`)

/* let a =
  `      ---  ---       ---  ---  ---  ---  ---  ---
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
      ---  ---  ---  ---  ---       ---  ---
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
      ---  ---       ---  ---       ---  ---  ---`;
console.log(a); */

// best

/* 
function show(digits, size) {
  return reshape(digits.split('').map(digit => scale(display(digit), size)));
}

function display(n) {

  // Given a string digit, return a seven-segment array.
  const segments = {
    '0': '-||-|| ',
    '1': ' ||    ',
    '2': '-| -| -',
    '3': '-||-  -',
    '4': ' ||  |-',
    '5': '- |- |-',
    '6': '- |-||-',
    '7': '-||    ',
    '8': '-||-||-',
    '9': '-||- |-'
  };
  
  const r1 = ` ${segments[n][0]} `;
  const r2 = `${segments[n][5]} ${segments[n][1]}`;
  const r3 = ` ${segments[n][6]} `;
  const r4 = `${segments[n][4]} ${segments[n][2]}`;
  const r5 = ` ${segments[n][3]} `;
  return [r1, r2, r3, r4, r5];
}

function scale(digit, n) {

  // Scale a seven-segment digit vertically, then horizontally.
  return [digit[0]].concat(Array(n).fill(digit[1]))
                   .concat(digit[2])
                   .concat(Array(n).fill(digit[3]))
                   .concat(digit[4])
                   .map(str => str[0] + str[1].repeat(n) + str[2]);
}

function reshape(segments) {

  // Reduce an array of seven-segment digits to a well-formatted string.
  return segments[0].map((_, i) => {
    return segments.reduce((res, digit) => {
      return res + digit[i];
    }, '').trimRight();
  }).join('\n');
}
*/

/* 
const litSegments = [
  '-|| ||-',
  '  |  | ',
  '- |-| -',
  '- |- |-',
  ' ||- | ',
  '-| - |-',
  '-| -||-',
  '- |  | ',
  '-||-||-',
  '-||- |-'
]

function makeDigit(digit, size) {
  const d = litSegments[digit]
  return [` ${d[0].repeat(size)} `]
    .concat(Array(size).fill(`${d[1]}${' '.repeat(size)}${d[2]}`))
    .concat(` ${d[3].repeat(size)} `)
    .concat(Array(size).fill(`${d[4]}${' '.repeat(size)}${d[5]}`))
    .concat(` ${d[6].repeat(size)} `)
}

function show(digits, size) {
  return [...digits]
    .map(d => makeDigit(d, size))
    .reduce((a, b) => a.map((x, i) => x + b[i]))
    .map(line => line.trimRight())
    .join('\n')
}
*/