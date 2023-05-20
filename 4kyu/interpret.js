/* 
4kyu - Befunge Interpreter
https://www.codewars.com/kata/526c7b931666d07889000a3c

see 
https://en.wikipedia.org/wiki/Befunge
https://amicloud.github.io/fungide/
https://github.com/amicloud/befunge93/blob/master/lib/befunge93.js
*/


function interpret(code) {
  const stack = [], output = [];
  let x = 0, y = 0, direction = "right", stringMode = false;
  let a, b, c, v;
  const map = code.split("\n").map(row => [...row]);
  const height = map.length;


  function move() {
    switch (direction) {
      case 'right':
        x = (x + 1) % map[y].length;
        break;
      case 'left':
        x = (x - 1) % map[y].length;
        break;
      case 'up':
        y = (y - 1) % height;
        break;
      case 'down':
        y = (y + 1) % height;
        break;
    }
  }

  while ((c = map[y][x]) !== '@') {
    if (stringMode && c !== '"') {
      stack.push(c.charCodeAt());
    } else if (/\d/.test(c)) {
      stack.push(+c);
    } else {
      switch (c) {
        case '>':
          direction = 'right';
          break;
        case '<':
          direction = 'left';
          break;
        case 'v':
          direction = 'down';
          break;
        case '^':
          direction = 'up';
          break;
        case '?':
          direction = ['left', 'right', 'up', 'down'][Math.floor(Math.random() * 4)];
          break;
        case '"':
          stringMode = !stringMode;
          break;
        case '+':
          a = stack.pop();
          b = stack.pop();
          stack.push(a + b);
          break;
        case '-':
          a = stack.pop();
          b = stack.pop();
          stack.push(b - a);
          break;
        case '*':
          a = stack.pop();
          b = stack.pop();
          stack.push(a * b);
          break;
        case '/':
          a = stack.pop();
          b = stack.pop();
          stack.push(b === 0 ? 0 : Math.floor(a / b));
          break;
        case '%':
          a = stack.pop();
          b = stack.pop();
          stack.push(a === 0 ? 0 : b % a);
          break;
        case '!':
          a = stack.pop();
          stack.push(a === 0 ? 1 : 0);
          break;
        case '`':
          a = stack.pop();
          b = stack.pop();
          stack.push(b > a ? 1 : 0);
          break;
        case '_':
          a = stack.pop();
          direction = a === 0 ? 'right' : 'left';
          break;
        case '|':
          a = stack.pop();
          direction = a === 0 ? 'down' : 'up';
          break;
        case ':':
          if (stack.length > 0) {
            a = stack.pop();
            stack.push(a, a);
          } else {
            stack.push(0);
          }
          break;
        case '\\':
          b = stack.pop();
          a = stack.length > 0 ? stack.pop() : 0;
          stack.push(b, a);
          break;
        case '$':
          stack.pop();
          break;
        case '.':
          output.push("" + stack.pop());
          break;
        case ',':
          output.push(String.fromCharCode(stack.pop()));
          break;
        case '#': // skip next cell
          move();
          break;
        case 'p':
          a = stack.pop();
          b = stack.pop();
          v = stack.pop();
          map[a][b] = String.fromCharCode(v);
          break;
        case 'g':
          a = stack.pop();
          b = stack.pop();
          v = map[a][b];
          stack.push(v.charCodeAt());
          break;
      }
    }
    move();
  }
  return output.join``;
}



let a = ">987v>.v\nv456<  :\n>321 ^ _@";
//console.log(interpret(a));

let b = ">987v>.v\nv456<  :\n>321 ^ _@";
/* 
[
 [ 'v', '@', '.', '<' ],
 [ ' ', '>', '1', '^' ],
 [ '>', '?', '<', '^' ],
 [ ' ', '>', '2', '^' ]
]
*/
//console.log(interpret(b));

// let h1 = `>25*"!dlroW olleH":v
//                 v:,_@
//                 >  ^`;
let h = ">25*\"!dlroW olleH\":v\n                v:,_@\n                >  ^";
/*
[
  ['2', '5', '*', '"', '!', 'd', 'l', 'r', 'o', 'W', ' ', 'o', 'l', 'l', 'e', 'H', '"', ':', 'v'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'v', ':', ',', '_', '@'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '>', ' ', ' ', '^']
*/
console.log(interpret(h), 'Hello World!\n');

let g = "08>:1-:v v *_$.@ \n  ^    _$>\\:^";
console.log(interpret(g), '40320');


let quine = "01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@";
/*
[
  [
    '0', '1', '-', '>', '1', '#', ' ', '+', '#', ' ', ':', '#', ' ', '0',
    '#', ' ', 'g', '#', ' ', ',', '#', ' ', ':', '#', ' ', '5', '#', ' ',
    '8', '#', ' ', '*',   '#', ' ', '4', '#', ' ', '+', '#', ' ', '-', '#', ' ', '_', '@'
  ]
]
надо вернуть текст самой программы
*/
console.log(interpret(quine), "01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@");


let r = "2>:3g\" \"-!v\\  g30          <\n |!`\"&\":+1_:.:03p>03g+:\"&\"`|\n @               ^  p3\\\" \":<\n2 2345678901234567890123456789012345678";
console.log(interpret(r)); // timeout

// best

/* 
var UP = [-1, 0], DOWN = [1, 0], LEFT = [0, -1], RIGHT = [0, 1];

function interpret(code) {
  var grid = extractGrid(code),
      row = 0,
      col = 0,
      direction = RIGHT,
      stringMode = false,
      stack = [],
      output = '';

  while (true) {
    var instr = grid[row][col];
    
    if (stringMode && instr !== '"') {
      stack.pushNumber(instr.charCodeAt(0));
    } else if (/[0-9]/.test(instr)) {
      stack.pushNumber(instr);
    } else {
      switch (instr) {
        case '+': stack.pushNumber(stack.pop() + stack.pop()); break;
        case '-': stack.pushNumber(stack.skipPop() - stack.pop()); break;
        case '*': stack.pushNumber(stack.pop() * stack.pop()); break;
        case '/': stack.pushNumber(stack.skipPop() / stack.pop()); break;
        case '%': stack.pushNumber(stack.skipPop() % stack.pop()); break;
        case '!': stack.pushNumber(stack.pop() ? 0 : 1); break;
        case '`': stack.pushNumber(stack.skipPop() > stack.pop() ? 1 : 0); break;
        case '>': direction = [0, 1]; break;
        case '<': direction = [0, -1]; break;
        case '^': direction = [-1, 0]; break;
        case 'v': direction = [1, 0]; break;
        case '?': direction = [UP, DOWN, LEFT, RIGHT][Math.floor(Math.random() * 4)]; break;
        case '_': direction = stack.pop() ? LEFT : RIGHT; break;
        case '|': direction = stack.pop() ? UP : DOWN; break;
        case '"': stringMode = !stringMode; break;
        case ':': stack.pushNumber(stack.peek() ? stack.peek() : 0); break;
        case '\\': stack.pushNumber(stack.skipPop()); break;
        case '$': stack.pop(); break;
        case '.': output += stack.pop(); break;
        case ',': output += String.fromCharCode(stack.pop()); break;
        case '#': advance(); break;
        case 'p': grid[stack.pop()][stack.pop()] = String.fromCharCode(stack.pop()); break;
        case 'g': stack.pushNumber(grid[stack.pop()][stack.pop()].charCodeAt(0)); break;
        case '@': return output;
        case ' ': break;
        default: throw new Error('Unknown instruction: ' + instr.charCodeAt(0) + ' ("' + instr + '")');
      }
    }

    advance();
  }
  
  function advance() {
    row += direction[0];
    col += direction[1];
    
    if (row < 0) {
      row = grid.length - 1;
    } else if (row >= grid.length) {
      row = 0;
    }
    
    if (col < 0) {
      col = grid[row].length - 1;
    } else if (col >= grid[row].length) {
      col = 0;
    }
  }
}

Array.prototype.pushNumber = function(n) {
  if (typeof n === 'string') n = parseInt(n, 10);
  if (!Number.isFinite(n)) n = 0;
  this.push(Math.floor(n));
};

Array.prototype.skipPop = function() {
  return this.length > 1 && this.splice(this.length - 2, 1)[0];
};

Array.prototype.peek = function() {
  return this[this.length - 1];
};

function extractGrid(codeString) {
  return codeString.split('\n').map(function(line) {
    return line.split('');
  });
}
*/

/* 
function interpret(input) {
  let code = input.split('\n').map(row=>row.split(''));
  let string = false;
  let stack = [];
  let out = [];
  let x = 0;
  let y = 0;
  let next;
  
  const insts = {
    '+': () => stack.push(stack.pop() + stack.pop()),
    '-': () => stack.push(-stack.pop() + stack.pop()),
    '*': () => stack.push(stack.pop() * stack.pop()),
    '/': () => stack.push(~~(1 / (stack.pop() / stack.pop()))),
    '%': () => stack.push(stack.splice(-2, 1) % stack.pop() || 0),
    '!': () => stack.push(stack.pop() ? 0 : 1),
    '`': () => stack.push(stack.pop() > stack.pop() ? 0 : 1),
    '>': () => next = () => x = ++x % code[y].length,
    '<': () => next = () => x = (x || code[y].length) - 1,
    '^': () => next = () => y = (y || code.length) - 1,
    'v': () => next = () => y = ++y % code.length,
    '?': () => insts['><^v'[~~(Math.random()*4)]](),
    '_': () => insts[stack.pop() ? '<' : '>'](),
    '|': () => insts[stack.pop() ? '^' : 'v'](),
    '"': () => string = !string,
    ':': () => stack.push(stack[stack.length - 1] || 0),
    '\\': () => stack.push(stack.pop(), stack.pop() || 0),
    '$': () => stack.pop(),
    '.': () => out.push(stack.pop()),
    ',': () => out.push(String.fromCharCode(stack.pop())),
    '#': () => next(),
    'p': () => code[stack.pop()][stack.pop()] = String.fromCharCode(stack.pop()),
    'g': () => stack.push(code[stack.pop()][stack.pop()].charCodeAt(0)),
    ' ': () => {},
  }
  
  for (let i = 0; i <= 9; i++) {
    insts[i] = () => stack.push(i);
  }
  
  insts['>']();
  
  while (true) {
    let inst = code[y][x];
    
    if (string && inst != '"') {
      stack.push(inst.charCodeAt(0));
    } else if (inst == '@') {
      return out.join('');
    } else {
      insts[inst]();
    }
    
    next();
  }
}
*/