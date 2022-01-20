/* 
7kyu - Queue Time Counter
https://www.codewars.com/kata/5b538734beb8654d6b00016d

Вам удалось отправить своего друга в очередь за билетами вместо вас, но есть одна загвоздка: 
он попадет туда, только если вы скажете ему, сколько это займет.
Каждый может взять только один билет за раз, затем (если нужно больше билетов) возвращается в конец очереди. 
Выдача каждого билета занимает одну минуту.

Дан массив со всеми людьми в очереди и начальная позиция друга.

*/

// function showQueue(q, k) {
//   return q.map((e, i) => i === k ? `<${e}>` : e).join(',');
// }


function queue(queuers, pos) {
  let time = 1;
  while (queuers[pos] > 0) {
    let t = queuers.shift();
    if (t > 1) {
      queuers.push(t - 1);
    } else if (!pos) break;
    --pos;
    if (pos < 0) pos = queuers.length - 1;
    time++;
  }
  return time;
}

console.log(queue([2, 5, 3, 6, 4], 0), 6);
console.log(queue([2, 5, 3, 6, 4], 1), 18);
console.log(queue([2, 5, 3, 6, 4], 2), 12);
console.log(queue([2, 5, 3, 6, 4], 3), 20);
console.log(queue([2, 5, 3, 6, 4], 4), 17);

//best

/* 
function queue(queuers, pos){
  var wait = 0;
  
  for(var i = 0; i < queuers.length; i++) {
    if(i <= pos) {
      wait += Math.min(queuers[i], queuers[pos]);
    } else {
      wait += Math.min(queuers[pos]-1, queuers[i]);
    }
  }
  
  return wait;
}
*/

/* 
const queue = ($, pos) => $.reduce((time, el, i) => time + Math.min(el, $[pos] - (i > pos)), 0);
*/

/* 
const queue = (queuers, pos) => {
  return queuers.reduce((acc, el, i) => acc + Math.min(el, queuers[pos] - Number(i > pos)), 0);
};
*/