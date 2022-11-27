/* 
7kyu - Cats and shelves
https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 
(the cat cannot climb on the shelf directly above its head)
*/

function solution(start, finish) {
  let jumps = 0;
  while (start < finish) {
    jumps++;
    start += 3;
  }
  if (start - finish === 1) jumps++;
  return jumps;
}


console.log(solution(1, 5), 2) // 2
console.log(solution(2, 4), 2) // 2
console.log(solution(3, 3), 0) // 0
console.log(solution(870, 1780), 304) // 304
console.log(solution(86, 448), 122)
console.log(solution(173, 605), 144)

// best

/* 
const solution = (start, finish, difference = finish - start) => Math.floor(difference / 3) + difference % 3
*/

/* 
function solution(start, finish) 
{
  let stepsToClimb = finish-start

  let numBigJumps = Math.floor(stepsToClimb/3)

  let numSmallJumps = stepsToClimb % 3

  return numBigJumps + numSmallJumps
}
*/

/* 

function solution(start, finish) {
  let murr = start;
  let meow = 0;
  while (murr < finish) {
    let heckinChonker = finish - murr;
    if (heckinChonker < 3) {
      murr++;
      meow++;
    } 
    else {
      murr+=3;//             _,'|             _.-''``-...___..--';)
      meow++;//             /_ \'.      __..-' ,      ,--...--'''   
    }//                    <\    .`--'''       `     /'
  }//                        `-';'               ;   ; ;
  return meow;//       __...--''     ___...--_..'  .;.'
}//                   (,__....----'''       (,..--''
*/

/* 
solution=(s,f)=>(f-=s)/3+f%3|0
*/