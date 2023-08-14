/* 
6kyu - Tom's Allergies
https://www.codewars.com/kata/58be35e9e36224a33f000023/train/javascript

*/

function Allergies(score) {
  this.ALLERGY_SCORES = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128
  }

  if (!Number.isInteger(score)) {
    throw TypeError('Invalid score ' + score);
  }

  this.isAllergicTo = function (allergen) {
    //return !!(this.ALLERGY_SCORES[allergen] ? score & this.ALLERGY_SCORES[allergen] : 0);
    return !!(score & (this.ALLERGY_SCORES[allergen] || 0));
  }

  this.allergies = function () {
    return Object.entries(this.ALLERGY_SCORES)
      .filter(([key, n]) => score & n)
      .map(([key, n]) => key)
      .sort();
  }

  /* 
  this.allergies = function () {
    return Object.keys(this.ALLERGY_SCORES).sort().filter(key => this.isAllergicTo(key));
  };
  */
}

let allergies = new Allergies(0);
console.log(allergies.isAllergicTo("peanuts"), false);
console.log(allergies.isAllergicTo("cats"), false);
console.log(allergies.isAllergicTo("strawberries"), false);
console.log(new Allergies(1).isAllergicTo("eggs"), true);
allergies = new Allergies(5);
console.log(allergies.isAllergicTo("eggs"), true);
console.log(allergies.isAllergicTo("shellfish"), true);
console.log(allergies.isAllergicTo("strawberries"), false);
console.log(new Allergies(0).allergies(), []);
console.log(new Allergies(2).allergies(), ["peanuts"]);
console.log(new Allergies(255).allergies(), ["cats", "chocolate", "eggs", "peanuts", "pollen", "shellfish", "strawberries", "tomatoes"]);
console.log(new Allergies(257).allergies(), ["eggs"]);
console.log(new Allergies(256).allergies(), []);
console.log(new Allergies(257).allergies(), ["eggs"]);
console.log(new Allergies(258).allergies(), ["peanuts"]);
console.log(new Allergies(259).allergies(), ["eggs", "peanuts"]);
console.log(new Allergies(260).allergies(), ["shellfish"]);
// Test.expectError("", _ => new Allergies(""));
// Test.expectError("", _ => new Allergies(5.2));
// Test.expectError("", _ => new Allergies(null));
console.log(new Allergies(1000).allergies(), ["cats", "chocolate", "pollen", "strawberries"]);