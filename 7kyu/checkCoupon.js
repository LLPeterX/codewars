/* 
7kyu - The Coupon Code
https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);