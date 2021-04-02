/* 
6kyu https://www.codewars.com/kata/55b4d87a3766d9873a0000d4
У Джона есть несолько золотых M (от m до n, m<=n)
Если он купит 9 машин стоимостью C, то отанется 1 золотой
Если он купит 7 лодок стоимостью B каждая, то останется 2 золотых.

Решить задачу:
1) Сколько золотых у Джона (M)
2) Стоимость одной машины - B
3) Стоимость одной лодки - C
Все числа - положительные целые

Дан диапазон (m,n)

M-9*C = 1 => -9*C = 1-M => 9*C = M-1 => C=(M-1)/9
M-7*B = 2 => B = (M-2)/7



*/

function howmuch(m, n) {
  let res = [];
  for (let money = Math.min(m,n); money <= Math.max(m,n); money++) {
    let c = (money - 1) / 9, b = (money - 2) / 7;
    if (c === ~~c && b === ~~b) {
      res.push([`M: ${money}`, `B: ${b}`, `C: ${c}`]);
    }
    // let c = (i-1)/9;
    // if(c === ~~c) {
    //   let b = (i-2)/7;
    //   if(b===~~b) {
    //     res.push([`M: ${i}`, `B: ${b}`, `C: ${c}`]);
    //   }
    // }
  }
  return res;
}

console.log(howmuch(1, 100));// [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
console.log(howmuch(1000, 1100));// [["M: 1045", "B: 149", "C: 116"]]
console.log(howmuch(10000, 9950));// [["M: 9991", "B: 1427", "C: 1110"]]

// other solutions

/* 
const howmuch = (m, n) =>
  [...Array(Math.abs(m - n) + 1)].map((_, idx) => Math.min(m, n) + idx).filter(val => !(--val % 9) && !(--val % 7)).map(val => [`M: ${val}`, `B: ${(val - 2) / 7}`, `C: ${(val - 1) / 9}`]);
*/

/*
function howmuch(m, n) {
  let out = [], h = Math.max(m, n);
  for(let i = Math.max(Math.min(m, n), 37); i <= h; i++) {
    if((i - 1) % 9 == 0 && (i - 2) % 7 == 0) out.push([`M: ${i}`, `B: ${(i - 2) / 7}`, `C: ${(i - 1) / 9}`]);
  }
  return out;
}
*/