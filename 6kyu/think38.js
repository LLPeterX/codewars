/* 
6kyu - Thinking & Testing #38: What's the "?"
https://www.codewars.com/kata/57946a671ace7f940a000031/train/javascript
*/

function testIt(arr) {
  const getKeyWithMinCount = (obj) => Object.keys(obj).sort((a, b) => obj[a] - obj[b])[0];

  const colors = {},
    shapes = {};

  for (let e of arr) {
    const [color, shape] = e.split(' ');
    if (color !== '?') {
      colors[color] = (colors[color] || 0) + 1;
      shapes[shape] = (shapes[shape] || 0) + 1;
    }
  }

  return `${getKeyWithMinCount(colors)} ${getKeyWithMinCount(shapes)}`;
}
