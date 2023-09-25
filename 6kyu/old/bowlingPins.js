/* 
6kyu - Bowling Pins
https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript
*/

function bowlingPins(arr) {
  const row = (array, rowIndex) => {
    const slices = [[6, 10], [3, 6], [1, 3], [0, 1]];
    let subArray = array.slice(slices[rowIndex][0], slices[rowIndex][1]).join(' ');
    let pad = ' '.repeat((7 - subArray.length) / 2);
    return pad + subArray + pad;
  }

  let field = new Array(10).fill('I');
  arr.forEach(x => field[x - 1] = ' ');
  let res = "";
  for (let i = 0; i < 4; i++) {
    res += row(field, i) + (i === 3 ? "" : "\n");
  }
  return res;
}

console.log(bowlingPins([2, 3]), "I I I I\n I I I \n       \n   I   ");
//console.log(bowlingPins([1, 2, 10]), "I I I  \n I I I \n    I  \n       ");


// best
/*
var bowlingPins = a => {
  var i = n => a.includes(n) ? ' ' : 'I'
  return `${i(7)} ${i(8)} ${i(9)} ${i(10)}\n ${i(4)} ${i(5)} ${i(6)} \n  ${i(2)} ${i(3)}  \n   ${i(1)}   `
}
*/

/*
function bowlingPins(arr) {
  let count = 0;
  let pins = Array.from({length: 4}, (_, i) => {
    return ' '.repeat(i) + 'I '.repeat(4 - i).trim() + ' '.repeat(i);
  }).reverse().join('\n');

  return [...pins].map(char => {
    if (char === 'I') {
      count++;
      if (arr.includes(count)) return ' ';
    }
    return char;
  }).join('').split('\n').reverse().join('\n');
}
*/

/*
function bowlingPins(arr){

  let map = [ -1, 27, 18, 20, 9, 11, 13, 0, 2, 4, 6]
  ,  pins = "I I I I\n I I I \n  I I  \n   I   ".split('');

  for (let pos of arr)
    pins[map[pos]] = ' ';

  return pins.join('');

}
*/