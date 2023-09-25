/* 
6kyu - Block Letter Printer
https://www.codewars.com/kata/6375587af84854823ccd0e90/train/javascript

Write a function that accepts a string consisting only of ASCII letters and space(s) 
and returns that string in block letters of 5 characters width and 7 characters height, 
with one space between characters.

* The block letters should consist of corresponding capital letters.
* It's irrelevant whether input consists of lower or upper case letters.
* Any leading and/or trailing spaces in input should be ignored.
* Empty strings or such containing only spaces should return an empty string.
* The remaining spaces (between letters and/or words) are to be treated as any other character. This means that there will be six spaces in output for a space in input, or a multiple of six, if there were more spaces - plus the one from preceding character!
* Trailing spaces should be removed in the resulting string.
* The string should be formatted in a way that when passed to Javascripts' console.log() 
function shows the desired output (see below for example).
*/

const letter_blocks = [
  [
    ' ',
    [
      '     ', '     ',
      '     ', '     ',
      '     ', '     ',
      '     '
    ]
  ],
  [
    'a',
    [
      ' AAA ', 'A   A',
      'A   A', 'AAAAA',
      'A   A', 'A   A',
      'A   A'
    ]
  ],
  [
    'b',
    [
      'BBBB ', 'B   B',
      'B   B', 'BBBB ',
      'B   B', 'B   B',
      'BBBB '
    ]
  ],
  [
    'c',
    [
      ' CCC ', 'C   C',
      'C    ', 'C    ',
      'C    ', 'C   C',
      ' CCC '
    ]
  ],
  [
    'd',
    [
      'DDDD ', 'D   D',
      'D   D', 'D   D',
      'D   D', 'D   D',
      'DDDD '
    ]
  ],
  [
    'e',
    [
      'EEEEE', 'E    ',
      'E    ', 'EEEEE',
      'E    ', 'E    ',
      'EEEEE'
    ]
  ],
  [
    'f',
    [
      'FFFFF', 'F    ',
      'F    ', 'FFFFF',
      'F    ', 'F    ',
      'F    '
    ]
  ],
  [
    'g',
    [
      ' GGG ', 'G   G',
      'G    ', 'G GGG',
      'G   G', 'G   G',
      ' GGG '
    ]
  ],
  [
    'h',
    [
      'H   H', 'H   H',
      'H   H', 'HHHHH',
      'H   H', 'H   H',
      'H   H'
    ]
  ],
  [
    'i',
    [
      'IIIII', '  I  ',
      '  I  ', '  I  ',
      '  I  ', '  I  ',
      'IIIII'
    ]
  ],
  [
    'j',
    [
      'JJJJJ', '    J',
      '    J', '    J',
      '    J', '    J',
      'JJJJ '
    ]
  ],
  [
    'k',
    [
      'K   K', 'K  K ',
      'K K  ', 'KK   ',
      'K K  ', 'K  K ',
      'K   K'
    ]
  ],
  [
    'l',
    [
      'L    ', 'L    ',
      'L    ', 'L    ',
      'L    ', 'L    ',
      'LLLLL'
    ]
  ],
  [
    'm',
    [
      'M   M', 'MM MM',
      'M M M', 'M   M',
      'M   M', 'M   M',
      'M   M'
    ]
  ],
  [
    'n',
    [
      'N   N', 'NN  N',
      'N   N', 'N N N',
      'N   N', 'N  NN',
      'N   N'
    ]
  ],
  [
    'o',
    [
      ' OOO ', 'O   O',
      'O   O', 'O   O',
      'O   O', 'O   O',
      ' OOO '
    ]
  ],
  [
    'p',
    [
      'PPPP ', 'P   P',
      'P   P', 'PPPP ',
      'P    ', 'P    ',
      'P    '
    ]
  ],
  [
    'q',
    [
      ' QQQ ', 'Q   Q',
      'Q   Q', 'Q   Q',
      'Q Q Q', 'Q  QQ',
      ' QQQQ'
    ]
  ],
  [
    'r',
    [
      'RRRR ', 'R   R',
      'R   R', 'RRRR ',
      'R R  ', 'R  R ',
      'R   R'
    ]
  ],
  [
    's',
    [
      ' SSS ', 'S   S',
      'S    ', ' SSS ',
      '    S', 'S   S',
      ' SSS '
    ]
  ],
  [
    't',
    [
      'TTTTT', '  T  ',
      '  T  ', '  T  ',
      '  T  ', '  T  ',
      '  T  '
    ]
  ],
  [
    'u',
    [
      'U   U', 'U   U',
      'U   U', 'U   U',
      'U   U', 'U   U',
      ' UUU '
    ]
  ],
  [
    'v',
    [
      'V   V', 'V   V',
      'V   V', 'V   V',
      'V   V', ' V V ',
      '  V  '
    ]
  ],
  [
    'w',
    [
      'W   W', 'W   W',
      'W   W', 'W W W',
      'W W W', 'W W W',
      ' W W '
    ]
  ],
  [
    'x',
    [
      'X   X', 'X   X',
      ' X X ', '  X  ',
      ' X X ', 'X   X',
      'X   X'
    ]
  ],
  [
    'y',
    [
      'Y   Y', 'Y   Y',
      ' Y Y ', '  Y  ',
      '  Y  ', '  Y  ',
      '  Y  '
    ]
  ],
  [
    'z',
    [
      'ZZZZZ', '    Z',
      '   Z ', '  Z  ',
      ' Z   ', 'Z    ',
      'ZZZZZ'
    ]
  ]
];

const alpha = new Map();
function prepareMap() {
  for (let c of letter_blocks) {
    alpha.set(c[0], c[1]);
  }
  //console.log(alpha);
}

function blockPrint(input) {
  let str = input.trim().toLowerCase();
  if (!str) return "";
  let L = str.length;
  let matrix = Array.from({ length: 7 }, () => Array(L * 5 + L - 1).fill(' '));
  let offset = 0;
  for (let c of str) {
    let shape = alpha.get(c);
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 5; j++) {
        matrix[i][j + offset] = shape[i][j];
      }
    }
    offset += 6;
  }
  return matrix.map(row => row.join('').trimEnd()).join("\n");

}

// best
/* 
function blockPrint(input){
 
  input = input.trim().toLowerCase().split("")
  let x=""
  
  for(let i=0;i<7;i++){
    input.forEach(m=> x+= alpha.get(m)[i]+" ")
    x= x.trimEnd()+"\n"
  }
 
  return x.trimEnd();
}
*/

/* 
function blockPrint(input) {

  let height = alpha.get(' ').length;
  let letters = input.trim().toLowerCase().split('').map(c => alpha.get(c));
  let lines = [];
  
  if (!letters.length)
    return '';
  
  for (let i = 0; i < height; i++)
    lines[i] = letters.map(c => c[i]).join(' ').trimEnd();

  return lines.join("\n");
  
}
*/