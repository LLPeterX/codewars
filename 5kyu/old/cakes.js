/* 
5kyu - Pete, the baker
https://www.codewars.com/kata/525c65e51bf619685c000059

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
and returns the maximum number of cakes Pete can bake (integer).
Ingredients that are not present in the objects, can be considered as 0.
*/
/* 
function cakes(recipe, available) {
  let minName, minCount = +Infinity;
  for (let [ingredient, count] of Object.entries(recipe)) {
    if (!available[ingredient]) return 0;
    if (count < minCount || count <= available[ingredient]) {
      minCount = count;
      minName = ingredient;
    }
  }
  let cakesCount = Math.floor(available[minName] / minCount); // max cakes
  let incompletes = Object.entries(available)
    .filter(([name, count]) => name in recipe && count < recipe[name] * cakesCount);
  console.log(' incomp', incompletes);
  return cakesCount;
}

 */
function cakes(recipe, available) {
  // let minCount = +Infinity;
  // for (let [ingredient, count] of Object.entries(recipe)) {
  //   minCount = Math.min(minCount, ~~(available[ingredient] / count));
  // }
  // return minCount;
  return Object.entries(recipe).reduce((m, [i, c]) => Math.min(m, ~~(available[i] / c)), +Infinity);
}


let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0);
