/* 
6kyu - Alex & snooker: scores.
https://www.codewars.com/kata/58b28e5830473070e5000007/train/javascript
*/

function frame(score) {
  let parts = score.split('; ');
  const rules = [
    {
      reg: new RegExp(/^(\d+)-(\d+)\((\d+)\)$/),
      i1: 1,
      i2: 2
    },
    {
      reg: new RegExp(/^(\d+)\((\d+)\)-(\d+)$/),
      i1: 1,
      i2: 3
    },
    {
      reg: new RegExp(/^(\d+)-(\d+)$/),
      i1: 1,
      i2: 2
    },
    {
      reg: new RegExp(/^(\d+)\((\d+),(\d+)\)-(\d+)$/),
      i1: 1,
      i2: 4
    },
    {
      reg: new RegExp(/^(\d+)\((\d+)\)-(\d+)\((\d+)\)$/),
      i1: 1,
      i2: 3
    }
  ];
  let count = 0;
  for (let i = 0; i < parts.length; i++) {
    let str = parts[i];
    for (let { reg, i1, i2 } of rules) {
      let m = str.match(reg);
      if (m) {
        if (+m[i1] > +m[i2]) count++;
        break;
      }
    }
  }
  return [count, parts.length - count];
}

// best
/* 
// omiceron, Decimo
const frame = s => s.replace(/\(.*?\)/g, '').split('; ').map(s => s.split('-')).reduce((res, c) => (res[+!(+c[0] > +c[1])]++, res), [0, 0]);
*/
