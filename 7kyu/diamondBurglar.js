/* 
7kyu - How fast can the burglar steal all the diamonds?
https://www.codewars.com/kata/63a15a3511e6e70023e7d0d3/train/javascript
*/

function diamondBurglar(locker) {
  //return locker.map(lck => lck.replace(/\*{2}/g, '1').replace(/\*/g, '1')).join('').split('').filter(e => e === '1').length;
  return locker.map(lck => lck.replace(/\*{2}/g, '1').replace(/\*/g, '1')).join('').replace(/\D/g, '').length;

}

console.log(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']), 13);
console.log(diamondBurglar(['..*.*.*...', '.**.*.*.**', '*........*']), 9);
console.log(diamondBurglar(['..*....*..', '....*.....', '*...**....', '..**....**', '..**..**.*', '.*.*.*.**.']), 14)
console.log(diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*']), 12);
console.log(diamondBurglar(['..****..*.', '..***.....', '.*..*...*.', '......**..']), 9);

// best

/* 
function diamondBurglar(locker){
  return (locker.join('.').match(/[*]{1,2}/g)||[]).length
}
*/