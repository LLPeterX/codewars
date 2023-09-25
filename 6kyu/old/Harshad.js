/* 
6kyu - Harshad or Niven numbers
https://www.codewars.com/kata/54a0689443ab7271a90000c6/train/javascript

Harshad numbers (also called Niven numbers) are positive numbers 
that can be divided (without remainder) by the sum of their digits.

Your task is to complete the skeleton Harshad object ("static class") which has 3 functions:
 - isValid() that checks if n is a Harshad number or not
 - getNext() that returns the next Harshad number > n
 - getSerie() that returns a series of n Harshad numbers, optional start value not included
*/

var Harshad = (function () {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function (number) {
      let sum = [...`${number}`].reduce((s, v) => s + +v, 0);
      return number % sum === 0;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function (number) {
      while (!this.isValid(++number));
      return number;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function (count, start = 0) {
      let result = [];
      ++start;
      while (count > 0) {
        if (Harshad.isValid(start)) {
          result.push(start);
          count--;
        }
        start++;
      }
      return result;
    }
  };

}());
// console.log(typeof Harshad);
// console.log(typeof Harshad.isValid === 'function');
// console.log(typeof Harshad.getNext === 'function');
// console.log(typeof Harshad.getSerie === 'function');

// console.log(Harshad.isValid(1) === true);
// console.log(Harshad.isValid(18) === true);
//console.log(Harshad.isValid(19) === false);
console.log(Harshad.isValid(1000) === false);

// console.log(Harshad.getNext(1), 2);
// console.log(Harshad.getNext(18), 20);
// console.log(Harshad.getNext(1000), 1002);

//console.log(Harshad.getSerie(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(Harshad.getSerie(10, 1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);

// best

/* 
var Harshad = (function () {
  return {
    isValid (number) {
      return !(number % [...`${number}`].reduce((pre, val) => +pre + +val));
    },
    getNext (number) {
      return this.isValid(++number) ? number : this.getNext(number);
    },
    getSerie (count, start = 0, arr = []) {
      return count ? (start = this.getNext(start), this.getSerie(--count, start, [...arr, start])) : arr;
    }
  };
}());
*/