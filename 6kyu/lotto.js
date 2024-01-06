/* 
6kyu - LOTTO 6 aus 49 - 6 of 49
https://www.codewars.com/kata/57a98e8172292d977b000079/train/javascript

In Germany we have "LOTTO 6 aus 49". That means that 6 of 49 numbers are drawn as winning combination.
There is also a "Superzahl", an additional number, which can increase your winning category.

In this kata you have to write two methods.

function numberGenerator()

function checkForWinningCategory(checkCombination, winningCombination)
The first method is for drawing the lottery numbers.
You have to create an array with 7 random numbers. 6 from these are from 1 - 49.
Of course every number may only occur once.
And the 7th number is the "Superzahl". A number from 0 - 9. This number is independent from the first six numbers.
The first 6 numbers have to be in ascending order.

A result could be:
4, 9, 17, 22, 25, 35, 0
Or:
4, 18, 22, 34, 41, 44, 4

The second method should check a given number against the winning combination and have to return the winning category:

1  - 6 numbers and Superzahl match
2  - 6 numbers match
3  - 5 numbers and Superzahl match
4  - 5 numbers match
5  - 4 numbers and Superzahl match
6  - 4 numbers match
7  - 3 numbers and Superzahl match
8  - 3 numbers match
9  - 2 numbers and Superzahl match
-1 - if the numbers do not match any of the rules above


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

const getRandomNumber = (min, max) => ~~(Math.random() * (max - min) + min);

function numberGenerator() {
  let result = new Set();
  while (result.size < 6) result.add(getRandomNumber(1, 50));
  return [...[...result].sort((a, b) => a - b), getRandomNumber(0, 10)];
}

function checkForWinningCategory(checkCombination, winningCombination) {
  let winCombWithoutSuper = winningCombination.slice(0, 6);
  let checkCombWithoutSuper = checkCombination.slice(0, 6);
  let winSuper = winningCombination[6];
  let checkSuper = checkCombination[6];
  let countWithoutSuper = checkCombWithoutSuper.filter(c => winCombWithoutSuper.includes(c)).length;
  if (countWithoutSuper < 2) return -1;
  let result = [, , 10, 8, 6, 4, 2][countWithoutSuper] - (winSuper == checkSuper);
  return result < 10 ? result : -1;
}

let nums = numberGenerator();
//console.log(nums);

console.log(checkForWinningCategory([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]), 1);
console.log(checkForWinningCategory([1, 2, 3, 4, 5, 6, 0], [1, 2, 3, 4, 5, 6, 7]), 2);
console.log(checkForWinningCategory([1, 2, 3, 34, 35, 39, 1], [1, 2, 3, 4, 5, 6, 7]), 8);

// best

/* 
function numberGenerator() {
    return Array.from({length: 49}, (_, k) => k + 1)
                .sort((a, b) => Math.random() - Math.random())
                .slice(0, 6)
                .sort((a, b) => a - b)
                .concat([~~(Math.random() * 10)]);
}

function checkForWinningCategory(checkCombination, winningCombination) {
    let a = new Set(checkCombination.slice(0, 6)),
        b = new Set(winningCombination.slice(0, 6));

    let numbers = new Set([...a].filter(x => b.has(x))).size,
        superZahl = (checkCombination[6] === winningCombination[6] ? 1 : 0);

    switch(numbers) {
        case 6: return 2 - superZahl;
        case 5: return 4 - superZahl;
        case 4: return 6 - superZahl;
        case 3: return 8 - superZahl;   
    }

    if(numbers == 2 && superZahl == 1) {
        return 9;
    }
    
    return -1;
}
*/