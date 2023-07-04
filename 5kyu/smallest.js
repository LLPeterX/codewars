/* 
5kyu - Find the smallest
https://www.codewars.com/kata/573992c724fc289553000e95

Дано число. Надо переставить одну цифру так, чтобы получилось наименьшее число
Вернуть массив: [нименьшее_число, индекс_откуда, индекс_куда]
идекс_откуда должен быть наименьшим
*/


function smallest(n) {
  let s = [...String(n)].map(Number);
  let r = { min: Infinity, i: Infinity, j: 0 };
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let sn = [...s];
      let x = sn.splice(i, 1);
      sn.splice(j, 0, x);
      let v = Number(sn.join``);
      if (v < r.min) {
        r.min = v;
        r.i = i;
        r.j = j;
      }
    }
  }
  return [r.min, r.i, r.j];
}


console.log(smallest(261235), [126235, 2, 0]);
console.log(smallest(209917), [[29917, 0, 1]]);
console.log(smallest(296837), [[239687, 4, 1]]);
console.log(smallest(269045), [[26945, 3, 0]]);
console.log(smallest(1000000), [[1, 0, 6]]);