/* 
7kyu - Cat Years, Dog Years (2)
https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript

I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

Results are truncated whole numbers of "human" years

Cat Years:
- 15 cat years for first year
- +9 cat years for second year
- +4 cat years for each year after that

Dog Years
- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that
*/

function ownedCatAndDog(catYears, dogYears) {
  function calc(humanAge, a3) {
    let petAge;
    if (humanAge >= 24) {
      petAge = 2 + (humanAge - 24) / a3;
    } else if (humanAge >= 15) {
      petAge = 1;
    } else {
      petAge = 0;
    }
    return Math.trunc(petAge);
  }
  return [calc(catYears, 4), calc(dogYears, 5)];
}

console.log(ownedCatAndDog(15, 15), [1, 1]);
console.log(ownedCatAndDog(24, 24), [2, 2]);
console.log(ownedCatAndDog(56, 64), [10, 10]);
console.log(ownedCatAndDog(18, 21), [1, 1]);

//best
/* 
const ownedCatAndDog = (catYears, dogYears) => [
    (catYears < 24)? catYears / 15 : (catYears - 16) / 4,
    (dogYears < 24)? dogYears / 15 : (dogYears - 14) / 5
    ].map(Math.floor);
*/