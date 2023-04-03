/* 
6kyu - Simple Fun #186: Duplicate Phone Numbers
https://www.codewars.com/kata/58bf67eb68d8469e3c000041/train/javascript

The standard form of a telephone number is seven decimal digits 
with a hyphen between the third and fourth digits (e.g. 888-1200). 
The keypad of a phone supplies the mapping of letters to numbers, as follows:

A, B, and C map to 2
D, E, and F map to 3
G, H, and I map to 4
J, K, and L map to 5
M, N, and O map to 6
P, R, and S map to 7
T, U, and V map to 8
W, X, and Y map to 9

There is no mapping for Q(q) or Z(z). 
Hyphens are not dialed, and can be added and removed as necessary. 
The standard form of TUT-GLOP is 888-4567, the standard form of 310-GINO is 310-4466, 
and the standard form of 3-10-10-10 is 310-1010.
*/

function findDuplicatePhoneNumbers(phoneNumbers) {
  return Object.entries(phoneNumbers.reduce((obj, phone) => {
    let num = phone
      .replace(/-/g, '')
      .replace(/[a-z]/ig, (d) => Math.floor("      ABCDEFGHIJKLMNOPRSTUVWXY".indexOf(d.toUpperCase()) / 3));
    obj[num] = (obj[num] || 0) + 1;
    return obj;
  }, {}))
    .filter(([_, count]) => count > 1)
    .map(([phone, count]) => `${phone.slice(0, 3)}-${phone.slice(3)}:${count}`);
}

// in one line:
// const findDuplicatePhoneNumbers = phoneNumbers =>Object.entries(phoneNumbers.reduce((obj, phone) => {let num = phone.replace(/-/g, '').replace(/[a-z]/ig, (d) => Math.floor("      ABCDEFGHIJKLMNOPRSTUVWXY".indexOf(d.toUpperCase()) / 3));obj[num] = (obj[num] || 0) + 1;return obj;}, {})).filter(([_, count]) => count > 1).map(([phone, count]) => `${phone.slice(0, 3)}-${phone.slice(3)}:${count}`);

