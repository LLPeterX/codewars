/* 
6kyu - I guess this is a 6kyu kata #5: Whac-A-Mole
https://www.codewars.com/kata/57d250e55dc38e288c000081

Играем в игру "Енот в норе"
Дан 3D-массив, к котором время, на которое енот высовывется из норки (0-нет енота). 
Каждую секунду можно убить 2 енотов.
Посчитать максимальное количество убитых ентов (у.е. :-).
*/

function whacAMole(arr) {
  let flatArray = arr
    .reduce((arr, v) => { arr = arr.concat(v); return arr; }, [])
    .filter(v => v > 0)
    .sort((a, b) => a - b);
  let count = 0, remainings;
  do {
    let removeCount = 0, isCounting = true;
    remainings = 0;
    for (let i = 0; i < flatArray.length; i++) {
      if (flatArray[i] > 0) {
        remainings++;
        if (isCounting) {
          flatArray[i] = 0;
          removeCount++;
          if (removeCount === 2) {
            count += 2;
            isCounting = false;
          }
        } else {
          --flatArray[i];
        }
      }
    }
  } while (remainings > 1);
  return count + remainings;
}

// best
/* 
const whacAMole = arr =>
  []
    .concat(...arr)
    .sort((a, b) => a - b)
    .reduce((hits, time) => hits + (time > hits / 2), 0)
*/

/* 
function whacAMole(arr) {
  let ks = [];
  for (let r of arr)
    for (let x of r)
      ks[x] = (ks[x] || 0) + 1;
  let res = 0, readyFor = 0;
  for (let i = 0; i < ks.length; i++) {
    let d = Math.min(readyFor, ks[i] || 0);
    res += d;
    readyFor = readyFor - d + 2;
  }
  return res;
}
*/

/* 
whacAMole=a=>[].concat(...a).sort((x,y)=>x-y).reduce((s,x)=>s+=2*x>s)
*/