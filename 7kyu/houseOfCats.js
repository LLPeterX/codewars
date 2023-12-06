/* 
7kyu - Simple Fun #38: House Of Cats
https://www.codewars.com/kata/588810c99fb63e49e1000606/train/javascript

There are some people and cats in a house. 
You are given the number of legs they have all together. 
Your task is to return an array containing every possible number 
of people that could be in the house sorted in ascending order. 
It's guaranteed that each person has 2 legs and each cat has 4 legs.

Example
For legs = 6, the output should be [1, 3].
There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

For legs = 2, the output should be [1].
There can be only 1 person.
*/

function houseOfCats(legs) {
  const result = [];
  for (let cats = Math.floor(legs / 4); cats >= 0; cats--) {
    let men = (legs - cats * 4) / 2;
    if (Number.isInteger(men)) {
      result.push(men);
    }
  }
  return result;
}


console.log(houseOfCats(6), [1, 3])
console.log(houseOfCats(2), [1])
console.log(houseOfCats(8), [0, 2, 4])
console.log(houseOfCats(4), [0, 2])
console.log(houseOfCats(44), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22])

// best

/* 
function houseOfCats(legs) {
  let arr = []
  for(let i = 0; i <= legs/4; i++) {
    arr.push(legs/2 - i*2)
  }
    return arr.reverse()
}
*/

/* 
houseOfCats=(a,b=a/2,c=[b])=>b<=1?c:houseOfCats(a,b-2,[b-2,...c])
*/