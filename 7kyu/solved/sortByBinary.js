/* 
https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6

Отсортировать числа согласно бинарному представлению
*/

const sortFunction = (a, b) => {
  let aStr = a.toString(2), bStr = b.toString(2);
  let aCount = aStr.replace(/0/g,'').length,
      bCount = bStr.replace(/0/g,'').length,
      aLen = aStr.length,
      bLen = bStr.length;
  if(aCount === bCount) {
    if(aLen === bLen) {
      return a-b;
    } else {
      return aLen-bLen;
    }
  } else {
    return bCount-aCount;
  }
};

//console.log(sortFunction(15,5));


const sortByBinaryOnes = (list) => list.sort(sortFunction);



console.log(sortByBinaryOnes( [1,3])); //  [3, 1]
console.log(sortByBinaryOnes( [1,2,3,4])); //  [3, 1, 2, 4]
console.log(sortByBinaryOnes( [1,15,5,7,3])); //  [15, 7, 3, 5, 1]

//best
/* 
const sortChoose = ( $ ) => $.toString(2).replace(/0/g, '').length
const sortFunction = ( a, b ) => (sortChoose(b) - sortChoose(a)) || (a-b)
const sortByBinaryOnes = ( arr ) => arr.sort( sortFunction )
*/

/* 
const sortByBinaryOnes = list =>
  list.sort((a, b) => b.toString(2).replace(/0/g, ``).length - a.toString(2).replace(/0/g, ``).length || a - b);
*/