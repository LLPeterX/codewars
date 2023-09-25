/* 
6kyu - Maximum and minimum
https://www.codewars.com/kata/59c0cd4f46038781010000ac

Написать функции min() и max(), вычисляющие мин. и макс. среди аргументов. Аргумены могут быть массивами 
любой вложенности
*/

function min() {
  if (arguments.length === 0) return 0;
  let minValue = Infinity, value;
  for (let a of arguments) {
    if (Array.isArray(a)) {
      value = a.length > 0 ? min(minValue, ...a) : 0;
    } else value = +a;
    minValue = minValue < value ? minValue : value;
  }
  return minValue;
}
function max() {
  if (arguments.length === 0) return 0;
  let maxValue = -Infinity, value;
  for (let a of arguments) {
    if (Array.isArray(a)) {
      value = a.length > 0 ? max(maxValue, ...a) : 0;
    } else value = +a;
    maxValue = maxValue > value ? maxValue : value;
  }
  return maxValue;
}



console.log(max(1, 2, 3, 4), 4);
console.log(max(1, 2, [3, 4]), 4);
console.log(max(1, 2, [3, [4]]), 4);
console.log(max([5e-324, 3689, 4931]), 4931);

console.log(max(-1, 90, ["-567", [56, 78, [45], ["456"], 4]])); // FAIL !!!!

console.log(max(1, 2, [3, ['4r']]), NaN);
console.log(max([]), 0);
console.log(max(), 0);
console.log('--- min ---');


console.log(min(1, 2, 3, 4), 1);
console.log(min([1, 2], 3, 4), 1);
console.log(min(1, 2, [3, [4, 0]]), 0);

console.log(min(1, 2, [3, ['4r']]), NaN);
console.log(min([]), 0);
console.log(min(), 0);

// best
/* 
function flat(arr) {
    var res = [];
    for (let x of arr) {
        if (Array.isArray(x)) {
            res = res.concat(flat(x))
        } else {
            res.push(x);
        }
    }
    res = res.map(Number);
    return res.some(isNaN)?[NaN]:!res.length?[0]:res.sort((a,b)=>a-b);
}
function max(...args){
   return flat(args).reverse()[0];
}

function min(...args){
   return flat(args)[0];
}
*/

/* 
function max(){
  return Object.values(arguments).toString().replace(/[]/g,'').split(',').map(Number).reduce((a,b)=>(a>b)?a:b);
}

function min(){
  return Object.values(arguments).toString().replace(/[]/g,'').split(',').map(Number).reduce((a,b)=>(a<b)?a:b);
}
*/