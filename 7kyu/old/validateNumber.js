/* 
7kyu - Is that a real phone number? (British version)
https://www.codewars.com/kata/581a52d305fe7756720002eb/train/javascript

Your task is to write a function that verifies 
whether a given string contains a valid British mobile (cell) phone number or not.

A number can be valid in the following ways:
* Here in the UK mobile numbers begin with '07' followed by 9 other digits, e.g. '07454876120'.
* Sometimes the number is preceded by the country code, 
  the prefix '+44', which replaces the '0' in ‘07’, e.g. '+447454876120'.
* And sometimes you will find numbers with dashes in-between digits 
  or on either side, e.g. '+44--745---487-6120' or '-074-54-87-61-20-'. 
  As you can see, dashes may be consecutive.
*/

function validateNumber(str) {
  return /(\+447|07)\d{9}$/.test(str.replaceAll('-', '')) ? 'In with a chance' : 'Plenty more fish in the sea'
}

console.log(validateNumber('07454876120'), 'In with a chance')
console.log(validateNumber('0754876120'), 'Plenty more fish in the sea', 'Number too short')
console.log(validateNumber('0745-487-61-20'), 'In with a chance')
console.log(validateNumber('+447535514555'), 'In with a chance')
console.log(validateNumber('+337535512555'), 'Plenty more fish in the sea')
