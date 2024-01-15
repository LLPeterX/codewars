/* 
7kyu - How long should you cook this for?
https://www.codewars.com/kata/5aefd0a686d075d5f3000091/train/javascript

You've purchased a ready-meal from the supermarket.

The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

Oh no, your microwave is 800W! How long should you cook this for?!

*/

//const getPower = str => +str.replace('W', '');
function cookingTime(neededPower, minutes, seconds, power) {
  let time = minutes * 60 + seconds;
  let cookTime = parseInt(neededPower) * time / parseInt(power);
  let m = Math.floor(cookTime / 60);
  let s = Math.ceil(cookTime - m * 60);
  if (s == 60) {
    m++;
    s = 0;
  }
  return `${m} minutes ${s} seconds`;
}

console.log(cookingTime("600W", 4, 20, "800W"), "3 minutes 15 seconds");
console.log(cookingTime("800W", 3, 0, "1200W"), "2 minutes 0 seconds");
console.log(cookingTime("100W", 8, 45, "50W"), "17 minutes 30 seconds");
console.log(cookingTime("7500W", 0, 5, "600W"), "1 minutes 3 seconds");
console.log(cookingTime("450W", 3, 25, "950W"), "1 minutes 38 seconds");
console.log(cookingTime("21W", 64, 88, "25W"), "55 minutes 0 seconds");
console.log(cookingTime("83W", 61, 80, "26W"), "199 minutes 0 seconds");
console.log(cookingTime("38W", 95, 22, "12W"), "302 minutes 0 seconds");

// best

/* 
function cookingTime(neededPower, minutes, seconds, power) {
  var time = Math.ceil((60 * minutes + seconds) * parseInt(neededPower) / parseInt(power));
  return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
}
*/