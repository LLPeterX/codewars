/* 
6kyu - Seven Segment Display
https://www.codewars.com/kata/5d7091aa7bf8d0001200c133/train/javascript

For this Kata, you must accept an integer in the range 0 - 999999 
and print it as a string (in decimal format), 
with each digit being represented as its own seven segment display 
(6x seven segment displays in total). 

Each of the individual led segments per display should be represented by three hashes ###. 
Vertical bars | (ASCII 124) represent the edges of each display, with a single whitespace 
on either side between the edge and the area of the led segments.
*/


function segmentDisplay(num) {
  const digits = `
|  ###  |       |  ###  |  ###  |       |  ###  |  ###  |  ###  |  ###  |  ###  |
| #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
| #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
| #   # |     # |     # |     # | #   # | #     | #     |     # | #   # | #   # |
|       |       |  ###  |  ###  |  ###  |  ###  |  ###  |       |  ###  |  ###  |
| #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
| #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
| #   # |     # | #     |     # |     # |     # | #   # |     # | #   # |     # |
|  ###  |       |  ###  |  ###  |       |  ###  |  ###  |       |  ###  |  ###  |`
    .trim()
    .split("\n")
    .map(row => row.slice(1).split('|'));

  let strNum = ("" + num).padStart(6);
  let output = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 6; j++) {
      if (strNum[j] === ' ') {
        output += '|       ';
      } else {
        output += '|' + digits[i][+strNum[j]];
      }
    }
    output += "|\n";
  }
  return output.trim();
}

//console.log(segmentDisplay(0));
console.log(segmentDisplay(123));