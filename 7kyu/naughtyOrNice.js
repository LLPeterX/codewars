/* 
7kyu - Naughty or Nice
https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/train/javascript
*/

function naughtyOrNice(data) {
  let result = 0;
  for (let a of Object.values(data)) {
    for (let b of Object.values(a)) {
      if (b === 'Naughty') result++; else result--;
    }
  }
  console.log('na=', result);
  return result > 0 ? "Naughty!" : "Nice!";
}

