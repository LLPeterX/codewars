/* 
6kyu - TV Remote (wrap)
https://www.codewars.com/kata/5b2c2c95b6989da552000120/train/javascript

Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type words...

* aA is the SHIFT key. 
  Pressing this key toggles alpha characters between UPPERCASE and lowercase
* SP is the space character
* The other blank keys in the bottom row have no function

Kata task
How many button presses on my remote are required to type the given words?

Notes
* The cursor always starts on the letter a (top left)
* The alpha characters are initially lowercase (as shown above)
* Remember to also press OK to "accept" each letter
* Take the shortest route from one letter to the next
* The cursor wraps, so as it moves off one edge it will reappear on the opposite edge
* Although the blank keys have no function, you may navigate 
  through them if you want to
* Spaces may occur anywhere in the words string
* Do not press the SHIFT key until you need to. 
  For example, with the word e.Z, the SHIFT change happens after the . 
  is pressed (not before)

  Example
words = Code Wars

C => a-aA-OK-A-B-C-OK = 6
o => C-B-A-aA-OK-u-v-w-x-y-t-o-OK = 12
d => o-j-e-d-OK = 4
e => d-e-OK = 2
space => e-d-c-b-SP-OK = 5
W => SP-aA-OK-SP-V-W-OK = 6
a => W-V-U-aA-OK-a-OK = 6
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 6 + 12 + 4 + 2 + 5 + 6 + 6 + 6 + 2 = 49
*/

function getMinDistance(x0, y0, x1, y1) {
  let xmin = Math.min(Math.abs(x0 - x1), 8 - Math.abs(x0 - x1));
  let ymin = Math.min(Math.abs(y0 - y1), 6 - Math.abs(y0 - y1));
  return xmin + ymin;
}

function tvRemote(words) {
  const buttons = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
  let isLowerCase = true;
  let x, y;
  let prevY = 0, prevX = 0;
  let count = 0;
  for (let c of words) {
    if (c === ' ') {
      y = 5;
      x = 1;
    } else {
      if (/[a-z]/i.test(c) && ((isLowerCase && c.toUpperCase() === c) || (!isLowerCase && c === c.toLowerCase()))) {
        isLowerCase = !isLowerCase;
        count += getMinDistance(prevX, prevY, 0, 5) + 1;
        prevX = 0; prevY = 5;
      }
      let i = buttons.indexOf(c.toLowerCase());
      y = Math.floor(i / 8);
      x = i % 8;
    }
    count += getMinDistance(prevX, prevY, x, y) + 1; // +OK button
    prevX = x;
    prevY = y;
  }
  return count;
}

