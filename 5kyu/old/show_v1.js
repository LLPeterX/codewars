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
  const fig = [
    [ // 0
      ' - ',
      '| |',
      '   ', // ?
      '| |',
      ' - '
    ],
    [ // 1
      '   ',
      '  |',
      '   ',
      '  |',
      '   '
    ],
    [ // 2
      ' - ',
      '  |',
      ' - ',
      '|  ',
      ' - '
    ],
    [ // 3
      ' - ',
      '  |',
      ' - ',
      '  |',
      ' - '
    ],
    [ // 4
      '   ',
      '| |',
      ' - ',
      '  |',
      '   '
    ],
    [ // 5
      ' - ',
      '|  ',
      ' - ',
      '  |',
      ' - '
    ],
    [ // 6
      ' - ',
      '|  ',
      ' - ',
      '| |',
      ' - '
    ],
    [ // 7
      ' - ',
      '  |',
      '   ',
      '  |',
      '   '
    ],
    [ // 8
      ' - ',
      '| |',
      ' - ',
      '| |',
      ' - '
    ],
    [ // 9
      ' - ',
      '| |',
      ' - ',
      '  |',
      ' - '
    ]
  ];

  const H1 = size * 2 + 3; // height of one sym
  const W1 = size + 2;
  const display = Array.from({ length: H1 }, () => Array(W1 * digits.length).fill(' '));


  const scaleShape = (shape) => {
    let r = [], v;
    const addMany = (v, count) => {
      for (let i = 0; i < count; i++) r.push(v);
    }

    for (let i = 0; i < 5; i++) {
      switch (shape[i]) {
        case '   ':
          r.push(' '.repeat(size + 2));
          break;
        case '| |':
          v = '|' + ' '.repeat(size) + '|';
          addMany(v, size);
          break;
        case '  |':
          v = ' '.repeat(size + 1) + '|';
          addMany(v, size);
          break;
        case '|  ':
          v = '|' + ' '.repeat(size + 1);
          addMany(v, size);
          break;
        case ' - ':
          r.push(' ' + '-'.repeat(size) + ' ');
          break;
      }
    }
    return r;
  }


  for (let i = 0, offsetX = 0; i < digits.length; i++, offsetX += W1) {
    let shape = scaleShape(fig[digits[i]]);
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[0].length; col++) {
        // if (row >= display.length || offsetX + col >= display[0].length) {
        //   console.log(`ERR: d=${digits[i]} row=${row} ox=${offsetX} col=${col} `);
        //   console.log('fig: ', shape);

        //   return;
        // }
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