/* 
6kyu - Emotional Sort ( ︶︿︶)
https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript
*/

function sortEmotions(arr, order) {
  const emotions = ['T_T', ':(', ':|', ':)', ':D'];
  return arr.sort((a, b) => (emotions.indexOf(a) - emotions.indexOf(b)) * (order ? -1 : 1));
};


console.log(sortEmotions([':D', 'T_T', ':D', ':('], true), [':D', ':D', ':(', 'T_T'])
console.log(sortEmotions(['T_T', ':D', ':(', ':('], true), [':D', ':(', ':(', 'T_T'])
console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], true), [':D', ':D', ':)', ':)', 'T_T'])
