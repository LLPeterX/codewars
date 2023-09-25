/* 
6kyu - Zeros and Ones
https://www.codewars.com/kata/5a00a8b5ffe75f8888000080

Дан массив из 0 и 1.
Найти индекс нуля такой, что если его преобразовать в 1, то получится самая длинная подпоследовательность из 1.
Если решений несколько, вернуть последний индекс
[1, 1, 0, 1, 1, 0, 1, 1] ==> 5 (хотя можно i=2, но 5>2. Длина подпоследовательности=5)

Решить за 1 проход.
*/

function replaceZero(arr) {
  let result = -1, l, r, len;
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      l = i - 1, r = i + 1;
      while (l >= 0 && arr[l] === 1) --l;
      while (r < arr.length && arr[r] === 1) ++r;
      len = r - l - 1;
      //console.log(` i=${i} r=${r} l=${l} len=${len}`);
      if (len >= maxLen) {
        maxLen = len;
        result = i;
      }
      i = r - 1;
    }

  }
  return result;
}


console.log(replaceZero([1, 1, 0, 1, 1, 0, 1, 1]), 5);
//                    ^^ 0  1  2  3  4  5  6  7 
console.log(replaceZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]), 10); // ???
// // [1]=>5, [5]=>8, [10]=>8, [15]=>4, [16]=>3
console.log(replaceZero([1, 1, 1, 0, 1, 1, 0, 1, 1, 1]), 6);
console.log(replaceZero([0, 1, 1, 1]), 0);
console.log(replaceZero([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1]), 10);
console.log(replaceZero([0, 1, 0, 0, 0, 0]), 2);

// best
/* 
function replaceZero(a){
  a=a.join``.split`0`.map(x=>x.length);
  let b=a.map((x,i,a)=>x+a[i+1]).slice(0,-1);
  return a.slice(0,b.lastIndexOf(Math.max(...b))+1).reduce((a,b)=>a+b+1,-1);    
}
*/

/* 
function replaceZero(arr){
  let index;
  let current = 0;
  let previuos = 0;
  let resultIndex;
  let resultSum = 0;

  for(let i = 0; i <= arr.length; i++) {
    const val = arr[i];
    const sum = current + previuos;

    current += val;

    if (sum >= resultSum) {
      resultSum = sum;
      resultIndex = index;
    }

    if (!val) {
      index = i;
      previuos = current;
      current = 0;
    }
  }

  return resultIndex;
}
*/