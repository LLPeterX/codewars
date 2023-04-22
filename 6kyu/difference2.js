/* 
6kyu - Difference of 2
https://www.codewars.com/kata/5340298112fa30e786000688

Дан массив уникальных чисел.
Вернуть массив всех пар чисел, у которых разница = 2
*/

function twosDifference(input) {
  input.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < input.length - 1; i++) {
    let v = input.slice(i + 1).find(x => x === input[i] + 2);
    if (v) {
      result.push([input[i], v]);
    }
  }
  return result;
}


console.log(twosDifference([1, 2, 3, 4]), [[1, 3], [2, 4]]);
console.log(twosDifference([4, 3, 1, 5, 6]), [[1, 3], [3, 5], [4, 6]]);

// best

/* 
function twosDifference(input){
  return input
   .sort(function(a, b){
     return a - b
   })
   .filter(function(a){
     return input.indexOf(a+2) != -1
   })
   .map(function(a){
     return [a, a+2]
   })
}
*/

/* 
function twosDifference(input){
  input.sort((a,b)=>a-b)
  var arr=[];
  for (var i=0; i<input.length; ++i)
    if (input.indexOf(input[i]+2)!=-1)
      arr.push([input[i],input[i]+2])
  return arr
}
*/