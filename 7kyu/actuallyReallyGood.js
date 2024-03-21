/* 
7kyu - Food combinations
https://www.codewars.com/kata/565f448e6e0190b0a40000cc/train/javascript

ask:
Given an array containing a list of good foods, return a string 
containing the assertion that any two of the individually good foods are really good when combined.

eg: "You know what's actually really good? Pancakes and relish."

Examples:
  Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]
  actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."
  actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."
  actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"

Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.


*/

const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
function actuallyReallyGood(foods) {
  const prefix = "You know what's actually really good? ";
  if (foods.length === 0) return prefix + "Nothing!";
  let fi1 = Math.floor(Math.random() * foods.length), fi2;
  if (foods.length > 2) {
    do {
      fi2 = Math.floor(Math.random() * foods.length);
    } while (fi2 !== fi1);
  } else {
    fi2 = fi1;
  }
  return `${prefix}${capitalize(foods[fi1])} and ${fi1 == fi2 ? "more " : ''}${foods[fi2].toLowerCase()}.`;
}

console.log(actuallyReallyGood([]), "You know what's actually really good? Nothing!")
console.log(actuallyReallyGood(['Peanut butter']), "You know what's actually really good? Peanut butter and more peanut butter.")

