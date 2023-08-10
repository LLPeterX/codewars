/* 
7kyu - Turkish Numbers, 0-99
https://www.codewars.com/kata/5ebd53ea50d0680031190b96/train/javascript
*/

const getTurkishNumber = (num) => {
  const t = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', //0-9
    'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan']; // 10-90
  return `${num > 9 ? t[Math.floor(num / 10) + 9] : ""} ${num > 0 && num % 10 === 0 ? "" : t[num % 10]}`.trim();
}

console.log(getTurkishNumber(0), "sıfır");
console.log(getTurkishNumber(4), 'dört');
console.log(getTurkishNumber(10), 'on');
console.log(getTurkishNumber(16), "on altı");
console.log(getTurkishNumber(26), "yirmi altı");
console.log(getTurkishNumber(70), 'yetmiş');