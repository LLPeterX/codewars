/* 
7kyu Show multiples of 2 numbers within a range

Даны a,b,c
Найти все числа вплоть до С, которые делятся на A и B

*/

function multiples(s1,s2,s3){
  let start = Math.min(s1,s2), res=[];
  for(let i = start; i<s3; i++) {
    if(i%s1===0 && i%s2===0) {
      res.push(i);
    }
  }
  return res;
}

console.log(multiples(2,4,40));
console.log(multiples(13,5,800));

//best
/* 
const multiples = (s1, s2, s3) => [...Array(s3 - s1)].map((_, idx) => idx + s1).filter(val => !(val % s1 || val % s2));
*/