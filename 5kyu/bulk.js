/* 
5kyu - Bulk up!
https://www.codewars.com/kata/5863f1c8b359c4dd4e000001/train/javascript

Task:
Given an array of meals where each element is a string 
in the form '300g turkey, 300g potatoes, 100g cucumber' 
find out how many proteins and calories you consumed. 

You like to keep things simple so all values will be expressed in grams. 
In case you didn't know every gram of protein and carbohydrate has 4 calories, 
while 1 gram of fat provides 9 calories.

An object food (in Ruby $food ) is preloaded for you that contains the information about the given food per 100 grams:
var food = { 
  chicken: [20, 5, 10], //per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.
  eggs: [10, 5, 15], //protein:10g , carbs:5g , fats: 15g
  salmon: [27, 0, 10], 
  beans: [8, 25, 0], 
  bananas: [1, 23, 0], 
  ... 
  ... 
}
*/

const food = {
  beef: [26, 0, 18],
  buffalo: [27, 0, 2],
  elk: [30, 0, 2],
  lamb: [23, 0, 19],
  pork: [20, 0, 11],
  rabbit: [29, 0, 8],
  chicken: [24, 0, 5],
  duck: [23, 0, 9],
  goose: [28, 0, 10],
  turkey: [26, 0, 2],
  bass: [24, 0, 5],
  catfish: [18, 0, 3],
  crab: [19, 0, 2],
  lobster: [21, 1, 1],
  salmon: [27, 0, 10],
  beans: [8, 25, 0],
  tofu: [7, 3, 3],
  cheddar: [21, 0, 28],
  eggs: [10, 2, 10],
  mozzarella: [18, 3, 18],
  parmesan: [30, 4, 22],
  beer: [0, 5, 0],
  wine: [0, 3, 0],
  juice: [0, 10, 0],
  milk: [3, 4, 2],
  cabbage: [1, 6, 0],
  broccoli: [3, 7, 0],
  corn: [3, 20, 1],
  mushrooms: [3, 3, 0],
  tomatoes: [1, 3, 0],
  potatoes: [2, 16, 0],
  olives: [1, 6, 11],
  cucumber: [1, 4, 0],
  apples: [0, 14, 0],
  bananas: [1, 23, 0],
  blackberries: [1, 10, 0],
  cherries: [1, 12, 0],
  lemons: [1, 9, 0],
  kiwi: [1, 15, 1],
  watermelon: [1, 8, 0],
  oat: [12, 50, 5],
  quinoa: [14, 60, 5],
  rice: [5, 28, 0],
  chocolate: [7, 45, 30],
  mayonnaise: [0, 0, 12]
};

function bulk(arr) {
  let coeffs = [4, 4, 9], proteins = 0, calories = 0;
  let dishes = [];
  for (let mess of arr) dishes = [...dishes, ...mess.split(',').map(v => v.trim())];
  for (let meal of dishes) {
    let [, weight, mealName] = meal.match(/\s*(\d+)g (.+)/);
    proteins += food[mealName][0] * weight / 100;
    for (let i = 0; i < 3; i++) calories += weight / 100 * food[mealName][i] * coeffs[i];
  }
  return `Total proteins: ${+proteins.toFixed(2)} grams, Total calories: ${+calories.toFixed(2)}`;
}

