/* 
8kyu - Blood-Alcohol Content
https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript


*/

function bloodAlcoholContent(drinks, weight, sex, time) {
  //BAC% = (A × 5.14 / W × r) - .015 × H 
  //let r = sex === 'male' ? 0.73 : 0.66;
  return +(drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) - 0.015 * time).toFixed(4);
}

console.log(bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, 'male', 1), 0.0837)
console.log(bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, 'female', 1), 0.1758);
console.log(bloodAlcoholContent({ ounces: 50, abv: 0.14 }, 250, 'male', 3), 0.0601);
console.log(bloodAlcoholContent({ ounces: 20, abv: 0.4 }, 100, 'female', 2), 0.2414);