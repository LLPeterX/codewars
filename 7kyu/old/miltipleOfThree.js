/* 
7kyu - Multiple of three
https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript
*/

const prevMultOfThree = n => {
  if (n % 3 === 0) return n;
  while (n > 3) {
    n = ~~(n / 10);
    if (n > 0 && (n % 3 === 0)) return n;
  }
  return null;
}

console.log(prevMultOfThree(1)); // null
console.log(prevMultOfThree(25)); // null
console.log(prevMultOfThree(36)); // 36
console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(952406)); // 9
console.log(prevMultOfThree(527338)); // 9

//best
/*
const prevMultOfThree = n => {
  if (n === 0) return null;
  if (n%3 === 0) return n;
  return prevMultOfThree(+n.toString().slice(0, -1))
}
*/

/*
prevMultOfThree=f=n=>n%3?f(0|n/10):n||null
*/