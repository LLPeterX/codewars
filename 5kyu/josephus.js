/* 
5kyu - Josephus Permutation
https://www.codewars.com/kata/5550d638a99ddb113e0000a2

Солдаты стоят по кругу (массив). их N штук. Каждый раз убивают K-го.
Вернуть массив убитых по очереди
*/


/*
// WRONG!!!
function josephus(items,k) {
  let res=[], j=0;
  while(items.length>2) {
    let p = items.splice(j+k-1,1)[0];
    res.push(p);
    j+=k-1;
    if(j+k-1>items.length) {
      j=items.length-j-k+1;
    }
  }
  if(items.length%2) {
    res.push(items[0]);
  } else {
    res.push(...items);
  }
  return res;
}
*/

// from: https://github.com/Automedon/Codewars/blob/master/5-kyu/Josephus%20Permutation.js
function josephus(items, k) {
  let result = [], j = 0
  while (items.length) {
    j = (j + (k - 1)) % items.length;
    result.push(...items.splice(j, 1));
  }
  return result;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), '=>', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), '=>', [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), '=>', ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), '=>', [3, 6, 2, 7, 5, 1, 4])
console.log(josephus([], 3), '=>', [])

//best

/* 
function josephus(items, k){
  var result = [], index = 0;
  while (items.length > 0){
    index = (index + k - 1) % items.length;
    result = result.concat(items.splice(index, 1));
  }
  return result;
}
*/

/* 
const josephus = (items, k) => {
  const res = [];
  let idx = 1;
  while (items.length) items = items.filter(val => idx++ % k || !res.push(val));
  return res;
};
*/