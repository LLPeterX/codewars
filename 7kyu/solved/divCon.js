/* 
7kyu - Divide and Conquer
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.
*/

function divCon(x) {
  return x.filter(d => typeof d === 'number').reduce((sum, v) => sum + v, 0) -
    x.filter(d => typeof d === 'string').reduce((sum, v) => sum + +v, 0);
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);

// best

/* 
function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}
*/