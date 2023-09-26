/* 
6kyu - The Hunger Games - Foxes and Chickens
https://www.codewars.com/kata/591144f42e6009675300001f/train/javascript

Old MacDingle had a farm.

To be more precise, he had a free-range chicken farm.

But Old MacDingle also had a fox problem.

Foxes F eat chickens C

At night the only guaranteed "safe" chickens are in their cages []
(unless a fox has got into the cage with them!)

Kata Task
Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?
*/

function hungryFoxes(farm) {
  let chickenGroups = farm.match(/(\[?[CF\.]*\]?)/g), result = "";
  let isFoxOutside = chickenGroups.some(e => !e.includes('[') && e.includes('F'));
  // for (let i = 0; i < m.length; i++) {
  //   let s = m[i];
  //   if (s.includes('[')) {
  //     result += s.includes('F') ? s.replace(/C/g, '.') : s;
  //   } else {
  //     result += isFoxOutside ? s.replace(/C/g, '.') : s;
  //   }
  // }
  for (let s of chickenGroups) {
    if (s.includes('[')) {
      result += s.includes('F') ? s.replace(/C/g, '.') : s;
    } else {
      result += isFoxOutside ? s.replace(/C/g, '.') : s;
    }
  }
  return result;
}

// best


// const hungryFoxes = farm => {
//   let str = `]${farm}`
//   ,   rgx = /\][CF.]*F/.test(str) ? /[CF.]*F[CF.]*|\][CF.]*/g: /[CF.]*F[CF.]*/g;

// return str.replace(rgx, m => m.replace(/C/g, '.')).slice(1);
// }

/* 
// почти моё решение!
var hungryFoxes = function(farm) {

  const chunks = farm.split(/(\[.*?\])/);
  const isFoxOutside = chunks.filter(v => v[0]!=='[').some(v => v.indexOf('F') > -1);
  const res = [];

  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i][0] === '[' ) {
    const isFoxInside = chunks[i].indexOf('F') > -1;
    res.push(isFoxInside ? chunks[i].replace(/C/g, '.') : chunks[i]);
    } else {
      res.push(isFoxOutside ? chunks[i].replace(/C/g, '.') : chunks[i]);
    }
  }
  return res.join('');
}
*/
