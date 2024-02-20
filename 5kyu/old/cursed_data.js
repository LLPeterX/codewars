/* 
5kyu - Convert cursed data from parallel universe into an object
https://www.codewars.com/kata/6524c2aa3256e887321d634e/train/javascript
*/


const getName = (str) => str.replace(/^\(+/, '');
const getValue = (str) => isNaN(+str) ? str : +str;
const isPropValue = (str) => typeof str === 'string' && !/^\(/.test(str);

function solve(cursed) {
  const tokens = cursed.match(/\(*[^) ]+|\)/g);
  const stack = [];
  for (let token of tokens) {
    if (token !== ')') {
      stack.push(token);
    } else {
      let item = stack.pop();
      if (isPropValue(item)) {
        let propName = getName(stack.pop());
        stack.push({ [propName]: getValue(item) });
      } else if (typeof item === 'object') {
        let obj = {};
        while (typeof item === 'object') {
          obj = { ...obj, ...item };
          item = stack.pop();
        }
        stack.push({ [getName(item)]: obj });
      }
    }
  }
  return stack[0];
}


console.log(solve('(monster (age 2))'), { monster: { age: 2 } });
console.log(solve("(monster (name Dragon) (age 2))"), { "monster": { "name": "Dragon", "age": 2 } });
console.log(solve('(monster (name Dragon) (age 2) (power (str 99) (dex 33)))'), { "monster": { "name": "Dragon", "age": 2, "power": { "str": 99, "dex": 33 } } });

// best
/* 
function solve(cursed) {
  return JSON.parse(cursed
    .replaceAll(/\) *\(/g, ',')
    .replaceAll('(', '{')
    .replaceAll(')', '}')
    .replaceAll(' ', ':')
    .replaceAll(/\w+/g, '"$&"')
    .replaceAll(/"(\d+)"/g, '$1')
  );
}
*/