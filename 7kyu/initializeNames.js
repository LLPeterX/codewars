/* 
7kyu - Initialize my name
https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript

You task is to initialize the middle names (if there is any).

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  let words = name.split(' ');
  return (words.length < 3) ? name : words.map((w, i) => (i === 0 || i === words.length - 1) ? w : w[0] + '.').join(' ');
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan', '');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
console.log(initializeNames('Dimitri'), 'Dimitri', '');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis', '');
console.log(initializeNames('Azaria Tyson Ali'), 'Azaria T. Ali');

// best
/* 
const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')
*/