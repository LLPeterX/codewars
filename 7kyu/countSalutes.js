/* 
7kyu - Count Salutes
https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/train/javascript

There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8
*/

/* 
function countSalutes(hallway) {
  let count = 0;
  for (let i = 0; i < hallway.length; i++) {
    let p = hallway[i];
    if (p === '>') {
      let h1 = hallway.slice(i + 1).replace(/[^>]/g, '').length;
      count += h1;
    } else if (p === '<') {
      let h1 = hallway.slice(0, i - 1).replace(/[^<]/g, '').length;
      count += h1;
    }
    return count;
  }
}
 */

function countSalutes(hallway) {
  return [...hallway].reduce((count, v, i, a) => {
    if (v === '>') {
      return count + a.slice(i + 1).filter(e => e === '<').length;
    } else if (v === '<') {
      return count + a.slice(0, i).filter(e => e === '>').length;
    }
    else return count;
  }, 0);
}


console.log(countSalutes('<---->---<---<-->'), 4);
console.log(countSalutes('------'), 0);
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->'), 42);
console.log(countSalutes('<<----<>---<'), 2);
console.log(countSalutes('>'), 0);
console.log(countSalutes('><<-<->--><-<>--><--<<--<--<<-<<>>>>--><<>->-><'), 164);

//best

/* 
function countSalutes(hallway) {
  let right = 0;
  let salutes = 0;
  for (let p of [...hallway]) {
    if (p === '>') right += 1;
    else if (p === '<') salutes += 2 * right;
  }
  return salutes;
}
*/

/* 
const countSalutes = hallway =>
  (val => val.length && (--val.split(/</).length * 2 + countSalutes(val)))
  (hallway.replace(/.*?>|[^>]+$/, ``));
*/


/* 
function countSalutes(hallway) {
  hallway = hallway.replace("-", "")
  return [...hallway].reduce((x, y, i) => x + (y == ">" ? [...hallway.slice(i + 1)].reduce((acc, vak) => (acc[vak] = acc[vak] + 1 || 1, acc), {})["<"] || 0 : 0), 0) * 2
}
*/

/* 
countSalutes=Q=>[...Q=Q.replace(/-/g,'')].map((V,F)=>[...Q.slice(...'<'<V?[F]:[0,F])].map(B=>R+=B!=V),R=0)|R
*/