/* 
6kyu - Pete, the baker (part 2)
https://www.codewars.com/kata/5267e5827526ea15d8000708/train/javascript
*/

function getMissingIngredients(recipe, added) {
  const result = {};
  // макс кол-во пирогов, которое можно сделать из ингредиентов
  let maxCakes = Math.max(...Object.keys(recipe).map(item => Math.ceil((added[item] || 0) / recipe[item])));
  if (maxCakes === 0) return recipe;
  for (let ingredient in recipe) {
    let need = recipe[ingredient] * maxCakes - (added[ingredient] || 0);
    if (need > 0) {
      result[ingredient] = need;
    }
  }
  return result;
}

var recipe = { flour: 200, eggs: 1, sugar: 100 };

console.log(getMissingIngredients(recipe, { flour: 50, eggs: 1 }), { flour: 150, sugar: 100 });
console.log(getMissingIngredients(recipe, {}), { flour: 200, eggs: 1, sugar: 100 });
console.log(getMissingIngredients(recipe, { flour: 500, sugar: 200 }), { flour: 100, eggs: 3, sugar: 100 });