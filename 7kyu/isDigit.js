/* 
8kyu - Regexp Basics - is it a digit?
https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript

Implement String.digit(), which should return true if given object is a digit (0-9), false otherwise.
 */

String.prototype.digit = function () {
  return /^\d$/g.test(this);
};

