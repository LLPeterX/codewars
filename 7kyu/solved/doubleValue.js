/* 
7kyu - Double value every next call
https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript
*/

class Class {
  static #num = 1;
  static getNumber() {
    let value = Class.#num;
    Class.#num *= 2;
    return value;
  }
}

console.log(Class.getNumber(), 1, "1st call should return 1");
console.log(Class.getNumber(), 2, "2nd call should return 2");
console.log(Class.getNumber(), 4, "3rd call should return 4");
console.log(Class.getNumber(), 8, "4th call should return 8");
console.log(Class.getNumber(), 16, "5th call should return 16");