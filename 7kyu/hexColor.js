/* 
7kyu - Colored Hexes!
https://www.codewars.com/kata/57e17750621bca9e6f00006f/train/javascript
*/

function hexColor(codes) {
  if (!codes) return 'black';
  let colors = codes.split(' ').map(Number);
  let maxColor = Math.max(...colors);
  let code = colors.reduce((s, c) => s + (c === maxColor && maxColor > 0 ? '1' : '0'), '');
  return {
    '000': 'black',
    '100': 'red',
    '010': 'green',
    '001': 'blue',
    '011': 'cyan',
    '110': 'yellow',
    '101': 'magenta',
    '111': 'white'
  }[code];
}

console.log(hexColor(''), 'black')
console.log(hexColor('000 000 000'), 'black')
console.log(hexColor('121 245 255'), 'blue')
console.log(hexColor('027 100 100'), 'cyan')
console.log(hexColor('021 021 021'), 'white')
console.log(hexColor('255 000 000'), 'red')
console.log(hexColor('000 147 000'), 'green')
console.log(hexColor('212 103 212'), 'magenta')
console.log(hexColor('101 101 092'), 'yellow')