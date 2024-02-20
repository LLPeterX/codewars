/* 
5kyu - Vector class
https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript

Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
*/

class Vector {
  constructor(array) {
    this.array = array || [];
  }

  check(input) {
    if (!input instanceof Vector || input.array.length !== this.array.length) {
      throw Error();
    }
  }

  add(input) {
    this.check(input);
    return new Vector(this.array.map((e, i) => e + input.array[i]));
  }

  subtract(input) {
    this.check(input);
    return new Vector(this.array.map((e, i) => e - input.array[i]));
  }

  dot(input) {
    this.check(input);
    return this.array.reduce((sum, v, i) => sum + v * input.array[i], 0);
  }

  norm() {
    return Math.sqrt(this.array.reduce((sum, v) => sum + v ** 2, 0));
  }

  toString() {
    return `(${this.array})`;
  }

  equals(input) {
    this.check(input);
    return JSON.stringify(this.array) === JSON.stringify(input.array);
  }
}

