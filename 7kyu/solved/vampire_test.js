/* 
7kyu - Vampire Numbers
https://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript

Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

  In number theory, a vampire number (or true vampire number) is a composite natural number 
  with an even number of digits, that can be factored into two natural numbers 
  each with half as many digits as the original number, where the two factors 
  contain precisely all the digits of the original number, in any order, counting multiplicity. 
  The two factors cannot both have trailing zeroes.

  В теории чисел число вампира (или истинное число вампира) — это составное натуральное число 
  с четным числом цифр, которое можно разложить на два натуральных числа, 
  каждое из которых содержит вдвое меньше цифр, чем исходное число, где два множителя 
  содержат точно все цифры исходного числа в любом порядке с учетом кратности. 
  Оба множителя не могут иметь конечные нули.
*/
/*
const vampire_test = function (a, b) {
  let r = a * b;
  if (a.toString().endsWith('0') && b.toString().endsWith('0')) return false;
  if ([...`${a}${b}`].sort().join`` === [...r.toString()].sort().join``) return true;
  return false;
}
*/

const vampire_test = (a, b) => [...`${a}${b}`].sort().join`` === [...(a * b).toString()].sort().join``

console.log(vampire_test(21, 6), true, "Basic: 21 * 6 = 126 should return true")
console.log(vampire_test(204, 615), true, "Basic: 204 * 615 = 125460 should return true")
console.log(vampire_test(30, -51), true, "One Negative: 30 * -51 = -1530 should return true")
console.log(vampire_test(-246, -510), false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)")
console.log(vampire_test(2947050, 8469153), true, "Large: 2947050 * 8469153 = 24959017348650 should return true")
console.log(vampire_test(2947051, 8469153), false, "Large: 2947051 * 8469153 = 24959025817803 should return false")    