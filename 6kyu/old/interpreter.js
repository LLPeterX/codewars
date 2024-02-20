/* 
6kyu - Esolang: Tick
https://www.codewars.com/kata/587edac2bdf76ea23500011a/train/javascript

Task
Make a custom esolang interpreter for the language Tick. 
Tick is a descendant of Ticker but also very different data and command-wise.

Syntax/Info
Commands are given in character format. 
Non-command characters should be ignored. 
Tick has an potentially infinite memory as opposed to 
Ticker(which you have a special command to add a new cell) 
and only has 4 commands(as opposed to 7). 


Commands
>: Move data selector right

<: Move data selector left(infinite in both directions)

+: Increment memory cell by 1. 255+1=0

*: Add ascii value of memory cell to the output tape.
*/

function interpreter(tape) {
  let selector = 0;
  let memory = [0];
  let output = "";
  for (let command of tape) {
    switch (command) {
      case '>':
        ++selector;
        if (selector > memory.length - 1) {
          memory.push(0);
        }
        break;
      case '<':
        --selector;
        if (selector < 0) {
          memory.unshift(0);
          selector = 0;
        }
        break;
      case '+':
        memory[selector] = (memory[selector] + 1) % 256;
        break;
      case '-':
        memory[selector] = (memory[selector] - 1) % 256;
        break;
      case '*':
        output += String.fromCharCode(memory[selector]);
        break;
    }
  }
  return output;
}

console.log(interpreter("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*"), "Hello world!");