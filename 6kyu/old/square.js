/* 
https://www.codewars.com/kata/55466989aeecab5aac00003e
Разбить прямоугольник на квадраты

length*width = 
Допустим, у нас есть прямоугольник 5*3
Тогда 3^2 + 2^2 + 1^2 + 1 = 5*3 (15); Тоже самое для 3*5 => [3,2,1,1]


*/

function sqInRect(lng, wdth) {
  let sizeMin, sizeMax, res = [];
  if (lng === wdth) {
    return [lng];
  }
  do {
    sizeMin = Math.min(lng, wdth);
    sizeMax = Math.max(lng, wdth);
    if (sizeMin > 0) {
      res.push(sizeMin);
    }
    sizeMax -= sizeMin;
    lng = sizeMax;
    wdth = sizeMin;
  } while (sizeMin >= 1);
  if (sizeMin > 0) {
    res.push(sizeMin);
  }
  console.log(res,sizeMin);
  return res;
}



console.log(sqInRect(5, 3));
console.log(sqInRect(3, 5));
console.log(sqInRect(20, 14)); // [14, 6, 6, 2, 2, 2]
console.log(sqInRect(37, 14)); // [14, 14, 9, 5, 4, 1, 1, 1, 1]
console.log('end');

//best
/* 
function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth) return null
  while(lng > 0 && wdth > 0){
    arr.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr
}
*/

/* 
function sqInRect(a, b, initial = true){
  if (a === b) { return initial ? null : [a] }  
  const min = Math.min(a, b)
  const max = Math.max(a, b)
    
  return [min, ...sqInRect(max - min, min, false)]
}
*/