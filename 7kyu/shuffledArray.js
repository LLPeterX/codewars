/* 
7kyu - Simple Fun #87: Shuffled Array
https://www.codewars.com/kata/589573e3f0902e8919000109/train/javascript

Дан массив. Среди элементов лежит сумма его основных членов.
Выделить основной массив и вернуть его отсортированным


Сумма комбинаций может быть равна элементам в перетасованном массиве, 
но это не обязательно пропущенный элемент.  - ???
*/

/*
function shuffledArray(shuffled) {
  const totalSum = shuffled.reduce((s, v) => s + v, 0);
  for (let i = 0; i < shuffled.length; i++) {
    let potentialSum = shuffled[i];
    let restArray = [...shuffled];
    restArray.splice(i, 1);
    let sumRest = restArray.reduce((s, v) => s + v, 0);
    if (totalSum - sumRest === potentialSum && potentialSum >= sumRest) {
      console.log(`total=${totalSum} sumRest=${sumRest} pot=${potentialSum}`);
      return restArray.sort((a, b) => a - b);
    }

  }
}
*/

function shuffledArray(shuffled) {
  for (let i = 0; i < shuffled.length; i++) {
    let arr = [...shuffled];
    let potentialSum = arr[i];
    arr.splice(i, 1);
    if (arr.reduce((s, v) => s + v, 0) === potentialSum) {
      return arr.sort((a, b) => a - b);
    }
  }
}


console.log(shuffledArray([1, 12, 3, 6, 2]), [1, 2, 3, 6])
console.log(shuffledArray([1, -3, -5, 7, 2]), [-5, -3, 2, 7])
console.log(shuffledArray([2, -1, 2, 2, -1]), [-1, -1, 2, 2])
console.log(shuffledArray([-3, -3]), [-3])

// best
/* 
function shuffledArray(shuffled) {
  var target=shuffled.reduce((a,b)=>a+b,0)/2,r=shuffled.slice(),
      idx=r.indexOf(target)
  r.splice(idx,1)
  return r.sort((a,b)=>a-b)
}
*/

/* 
function shuffledArray(shuffled) {
  shuffled.splice(shuffled.indexOf(shuffled.reduce((sum, e) => sum + e) / 2), 1);
  return shuffled.sort((a, b) => a - b);
}
*/