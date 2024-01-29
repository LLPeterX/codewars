/* 
6kyu - Relational expressions
https://www.codewars.com/kata/52c0279f3b64f6f52700029a/train/javascript

ou need to create a class called "Relational", 
which takes a single argument for its initial value. 
Then, by calling various methods, such as .equals(value) or .lessThan(value), 
we can build a similar expression you could do in Mathematics. 
Albeit with a load more characters.

You need to implement the following methods:

.equals(value), .notEquals(value)
.lessThan(value), .lessThanOrEqualTo(value)
.greaterThan(value), .greaterThanOrEqualTo(value)
.passed() should also return the evaluated expression as a true or false value.
And each much be able to compound with the previous statement.

For example: new Relational(1).lessThan(2).lessThan(3).passed() should be equivalent to the Mathematical 1 < 2 < 3, or the code (1 < 2) && (2 < 3).

You could, of course have longer expressions like 1 < 2 < 3 < 4 < 5, or even crazy, kinda useless stuff like 1 < 3 > 2 != 4.
*/

class Relational {
  constructor(initialValue) {
    this.value = initialValue;
    this.result = true;
  }

  equals(input) {
    this.result = this.result && (this.value === input);
    this.value = input;
    return this;
  }

  notEquals(input) {
    this.result = this.result && (this.value !== input);
    this.value = input;
    return this;
  }

  lessThan(input) {
    this.result = this.result && (this.value < input);
    this.value = input;
    return this;
  }

  lessThanOrEqualTo(input) {
    this.result = this.result && (this.value <= input);
    this.value = input;
    return this;
  }

  greaterThan(input) {
    this.result = this.result && (this.value > input);
    this.value = input;
    return this;
  }

  greaterThanOrEqualTo(input) {
    this.result = this.result && (this.value >= input);
    this.value = input;
    return this;
  }

  passed() {
    return this.result;
  }
}


console.log(new Relational(1).lessThan(2).lessThan(3).passed(), true, "1 < 2 < 3");
console.log(new Relational(1).equals(2).equals(2).passed(), false, "1 = 2 = 3");
