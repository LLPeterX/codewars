/* 
7kyu - Valid HK Phone Number
https://www.codewars.com/kata/56f54d45af5b1fec4b000cce/train/javascript

In Hong Kong, a valid phone number has the format xxxx xxxx 
where x is a decimal digit (0-9). For example:

"1234 5678" // is valid
"2359 1478" // is valid
"85748475" // invalid, as there are no spaces separating the first 4 and last 4 digits
"3857  4756" // invalid; there should be exactly 1 whitespace

Task:
Define two functions, isValidHKPhoneNumber and hasValidHKPhoneNumber, 
that returns whether a given string is a valid HK phone number 
and contains a valid HK phone number respectively(i.e.true / false values).
*/


function isValidHKPhoneNumber(number) {
  return /^\d{4} \d{4}$/.test(number)

}

function hasValidHKPhoneNumber(number) {
  return /\d{4} \d{4}/.test(number)
}


