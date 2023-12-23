/* 
6kyu - Converting Measures
https://www.codewars.com/kata/5acfab8d23c81836c90000eb/train/javascript

Mary wrote a recipe book and is about to publish it,
 but because of a new European law, she needs to update 
 and include all measures in grams.

Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), 
considering 1 tbsp = 15g and 1 tsp = 5g, 
append to the end of the measurement the biggest equivalent integer (rounding up).
*/

// first
// function convertRecipe(recipe) {
//   const W = { 'tsp': 5, 'tbsp': 15 };
//   const toGrams = (t, weight) => Math.ceil(W[t] * eval(weight));
//   const tokens = recipe.split(' ');
//   let res = [];
//   for (let i = 0; i < tokens.length; i++) {
//     if (tokens[i] in W) {
//       res.push(`${tokens[i]} (${toGrams(tokens[i], tokens[i - 1])}g)`);
//     } else {
//       res.push(tokens[i]);
//     }
//   }
//   return res.join(' ');
// }

// final
function convertRecipe(recipe) {
  const W = { 'tsp': 5, 'tbsp': 15 };
  const toGrams = (t, weight) => Math.ceil(W[t] * eval(weight));
  return recipe.split(' ')
    .map((t, i, a) => t in W ? `${t} (${toGrams(t, a[i - 1])}g)` : t)
    .join(' ');
}


console.log(convertRecipe("2 tbsp of butter"), '=>', "2 tbsp (30g) of butter");
console.log(convertRecipe("Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill"), "\n=>\n", "Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill");

// best

/* 
const convertRecipe = recipe =>
  recipe.replace(/(?<=(\d+)(?:\/(\d+))? (tb?sp))/g, (_, gr1, gr2, gr3) =>
    ` (${Math.ceil(gr1 / (gr2 || 1) * (/tsp/.test(gr3) ? 5 : 15))}g)`);
*/

/* 
function convertRecipe(recipe) {
    return recipe.replace(/([\d/]+) (tbsp|tsp)/g, (w, x, unit) => `${w} (${Math.ceil(eval(x) * (unit === 'tbsp' ? 15 : 5))}g)`)
}
*/