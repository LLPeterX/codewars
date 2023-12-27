/* 
6kyu - Esolang: MiniBitMove
https://www.codewars.com/kata/587c0138110b20624e000253/train/javascript

This kata asks you to make a custom esolang interpreter 
for the language MiniBitMove. 
MiniBitMove has only two commands and operates on a array of bits. 
It works like this:

1: Flip the bit at the current cell
0: Move selector by 1
It takes two inputs, the program and the bits in needs to operate on. 
The program returns the modified bits. 
The program stops when selector reaches the end of the array. 
Otherwise the program repeats itself. 
Note: This means that if a program does not have any zeros it is an infinite loop
*/

function interpreter(tape, array) {
  let bin = [...array].map(Number);
  let i = 0, j = 0;
  while (true) {
    let cmd = tape[j % tape.length];
    j++;
    if (cmd === '0') {
      ++i;
      if (i == bin.length) break;
    } else {
      bin[i] = 1 - bin[i];
    }
  }
  return bin.join('');
}


// Flips all bits in an array
console.log(interpreter("10", "1100101"), "0011010");
// Flips every second bit in an array
console.log(interpreter("100", "1111111111"), "0101010101");

// best

/* 
function interpreter(tape, input) {
  const mem = Array.from(input, Number)
  for (let pc = 0, sp = 0; sp < mem.length; ++pc) {
    switch (tape[pc % tape.length]) {
      case "1": mem[sp] ^= 1; break
      case "0": sp++; break
    }
  }
  return mem.join("")
}
*/