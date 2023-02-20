/* 
7kyu - Help Suzuki count his vegetables....
https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/javascript

*/
const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
const countVegetables = (string) => Object.entries(string
  .split(' ')
  .filter(f => vegetables.includes(f))
  .reduce((obj, v) => {
    obj[v] = obj[v] ? obj[v] + 1 : 1;
    return obj;
  }, {}))
  .sort((a, b) => a[1] === b[1] ? b[0].localeCompare(a[0]) : b[1] - a[1])
  .map(row => [row[1], row[0]]);


let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
console.log(countVegetables(s1), lst1);

// cool

/* 
const countVegetables = string =>
  (arr => [...new Set(arr)].map(val => [arr.filter(v => v === val).length, val]).sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1])))
  (string.match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g));
*/