/* 
6kyu - Get the addresses of all Google Sheets cells in the range
https://www.codewars.com/kata/62c376ce1019024820580309/train/javascript

Your task is to write a getCellAddresses(range) function 
that takes a range of Google Sheets cells as a parameter, 
and returns an array of addresses of all cells in the specified range.

Notes:
- Letters in addresses: from A-Z
- The final array must be sorted by the number in each address (ascending)
- The letters in the addresses must go in alphabetical order (A to Z).
*/

function getCellAddresses(range) {
  let [from, to] = range.split(':');
  if (from === to) return [];
  let result = [];
  for (let j = +from.slice(1); j <= +to.slice(1); j++) {
    for (let i = from.charCodeAt(0) - 65; i <= to.charCodeAt(0) - 65; i++) {
      result.push(`${String.fromCharCode(i + 65)}${j}`);
    }
  }

  return result;
}

console.log(getCellAddresses("A1:A10"), ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']);
console.log(getCellAddresses("A1:Z1"), ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", "M1", "N1", "O1", "P1", "Q1", "R1", "S1", "T1", "U1", "V1", "W1", "X1", "Y1", "Z1"]);
console.log(getCellAddresses("F12:J17"), [
  'F12', 'G12', 'H12', 'I12',
  'J12', 'F13', 'G13', 'H13',
  'I13', 'J13', 'F14', 'G14',
  'H14', 'I14', 'J14', 'F15',
  'G15', 'H15', 'I15', 'J15',
  'F16', 'G16', 'H16', 'I16',
  'J16', 'F17', 'G17', 'H17',
  'I17', 'J17'
]);

