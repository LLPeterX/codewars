/* 
7kyu - Walking in the hallway
https://www.codewars.com/kata/6368426ec94f16a1e7e137fc/train/javascript

*/

function contact(hallway) {
  let minDistance = hallway.length, hasIntersection = false;
  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      for (let j = i + 1; j < hallway.length; j++) {
        if (hallway[j] === '<') {
          minDistance = Math.min(minDistance, j - i - 1);
          hasIntersection = true;
          break;
        }
      }
    }
  }
  return hasIntersection ? Math.floor(minDistance / 2) + 1 : -1;
}

console.log(contact("---->---<"), 2);
console.log(contact("----<-->---"), -1);
console.log(contact("----><-----"), 1);
console.log(contact(">>>>--<<<<<<<<<<<<<<<<<<<<"), 2);
console.log(contact(">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>"), 5);

// best
/* 
function contact(hallway) {
  let start = null;
  const distances = [];

  for (let i = 0; i < hallway.length; i++) {
    const symbol = hallway[i];

    if (symbol === '>') {
      start = i;
    }

    if (symbol === '<' && start != null) {
      distances.push(i - 1 - start);
      start = null;
    }
  }

  const min = Math.min(...distances);

  return distances.length ? Math.floor(min / 2) + 1 : -1;
}

*/

/* 
function contact(hallway) {
  const gaps = hallway.match(/>-*</g)
  return !gaps ? -1 : Math.min(...gaps.map(s=>s.length)) >> 1
}
*/

/* 
function contact(hallway) {
 let walk = (hallway.match(/>-*</g) || []).sort((a, b) => a.length - b.length)
 return !walk.length ? -1 : Math.floor((walk[0].length - 2) / 2) + 1
}
*/