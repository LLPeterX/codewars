/* 
5kyu - Josephus Survivor
https://www.codewars.com/kata/555624b601231dc7a400017a

Дан массив из N элеиментов. На каждом шаге удаляем K-й элемент.
Найти элемент, который останется последним

*/

// from: https://github.com/Automedon/Codewars/blob/master/5-kyu/Josephus%20Survivor.js
function josephusSurvivor(n, k) {
  return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1
}

console.log(josephusSurvivor(7, 3), 4)
console.log(josephusSurvivor(11, 19), 10)
console.log(josephusSurvivor(1, 300), 1)
console.log(josephusSurvivor(14, 2), 13)
console.log(josephusSurvivor(100, 1), 100)