/* 
6kyu - Warcraft Series I - Mining Gold
https://www.codewars.com/kata/64553d6b1a720c030d9e5285/train/javascript
*/

function simulateMining(path, time) {
  let arr = path.split('');
  let mIndex = arr.indexOf('M');
  let bIndex = arr.indexOf('B');
  let start = Math.min(mIndex, bIndex), end = Math.max(mIndex, bIndex)
  let workers = [];
  for (let j = start + 1; j < end; j++) {
    if (arr[j] === '<') {
      workers.push({ index: j, direction: -1 });
    } else if (arr[j] === '>') {
      workers.push({ index: j, direction: 1 });
    }
  }
  const dChars = ['<', '', '>'];
  if (workers.length === 0) return Array(time).fill(path);
  let result = [path];
  while (time-- > 1) {
    for (let j = start + 1; j < end; j++) {
      arr[j] = '.';
    }
    arr[mIndex] = 'M';
    arr[bIndex] = 'B';
    for (let i = 0; i < workers.length; i++) {
      workers[i].index += workers[i].direction;
      let k = workers[i].index;
      if (k === mIndex || k === bIndex) {
        workers[i].direction = -workers[i].direction;
        arr[k] = '*';
        continue;
      } else {
        if (arr[k] !== '.') arr[k] = '#';
        else arr[k] = dChars[workers[i].direction + 1];
      }

    }
    result.push(arr.join``);
  }
  return result;
}
