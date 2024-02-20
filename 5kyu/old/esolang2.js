/* 
5kyu - Esolang Interpreters #2 - Custom Smallfuck Interpreter
https://www.codewars.com/kata/58678d29dbca9a68d80000d7

* работа с битами
* ограниченный размер памяти
* ввод находится в памяти

Команды:
> - переместить указатель вправо
< - переместить указатель влево
* - инвертировать бит в текущей ячейке
[ - если значение в текущей ячейке =0, то переместиться на ячейку после ]
] - если значение !=0, переместиться в ячейку после [

Программа завершается, если:
* все команды обработаны
* указатель выходит за пределы (слева или справа)

На вход дается code и tape (начальное состояние памяти)

Вернуть конечное состояние памяти
*/


function interpreter(code, tape) {
  const bin = [...tape].map(Number);
  let count;
  for (let i = 0, k = 0; i < code.length && k >= 0 && k < bin.length; i++) {
    switch (code[i]) {
      case '>':
        k++;
        break;
      case '<':
        k--;
        break;
      case '*':
        bin[k] = 1 - bin[k];
        break;
      case '[':
        if (!bin[k]) {
          count = 0;
          for (let j = i + 1; j < code.length; j++) {
            if (code[j] === '[') count++;
            else if (code[j] === ']') {
              if (!count) {
                i = j;
                break;
              } else count--;
            }
          }
        }
        break;
      case ']':
        if (bin[k] != 0) {
          count = 0;
          for (let j = i - 1; j >= 0; j--) {
            if (code[j] === ']') count++;
            else if (code[j] === '[') {
              if (!count) {
                i = j;
                break;
              } else count--;
            }
          }
        }
        break;
    }
  }
  return bin.join('');
}

// Flips the leftmost cell of the tape
console.log(interpreter("*", "00101100"), "10101100");
// Flips the second and third cell of the tape
console.log(interpreter(">*>*", "00101100"), "01001100");
// Flips all the bits in the tape
console.log(interpreter("*>*>*>*>*>*>*>*", "00101100"), "11010011");
// Flips all the bits that are initialized to 0
console.log(interpreter("*>*>>*>>>*>*", "00101100"), "11111111");
// Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
console.log(interpreter(">>>>>*<*<<*", "00101100"), "00000000");
console.log(interpreter("[[]*>*>*>]", "000"), "000");

// cool
/* 
function interpreter(code, tape) {
  const instr = [`let cp = 0`]
  for (let c of code) {
    switch (c) {
      case ">": instr.push(`if (++cp >= cells.length) return cells`); break
      case "<": instr.push(`if (--cp < 0) return cells`); break
      case "*": instr.push(`cells[cp] ^= 1`); break
      case "[": instr.push(`while (cells[cp]) {`); break
      case "]": instr.push(`}`); break
    }
  }
  instr.push(`return cells`)
  return (new Function("cells", instr.join("\n")))(tape.split("").map(Number)).join("")
}
*/

/* 
function interpreter(code, tape) {
  var storage = tape.split("").map(b => +b); // Actual Tape / Data Storage
  var pointer = 0; // Pointer
  for (var i = 0; i < code.length; i++) {
    switch (code[i]) {
      case "*":
      // Flip the bit at the current cell
      storage[pointer] = +!storage[pointer];
      break;
      case ">":
      // Move the pointer to the right.  If pointer goes out-of-bounds then return final state of tape
      pointer++;
      if (pointer >= storage.length) return storage.join("");
      break;
      case "<":
      // Move the pointer to the left.  If pointer goes out-of-bounds then return final state of tape
      pointer--;
      if (pointer < 0) return storage.join("");
      break;
      case "[":
      // Jumps to matching "]" if current bit is 0
      if (storage[pointer] === 0) {
        var unmatched = 1;
        while (unmatched) {
          if (code[++i] === "]") unmatched--;
          if (code[i] === "[") unmatched++;
        }
      }
      break;
      case "]":
      // Jumps back to matching "[" if current bit is 1
      if (storage[pointer] === 1) {
        var unmatched = 1;
        while (unmatched) {
          if (code[--i] === "[") unmatched--;
          if (code[i] === "]") unmatched++;
        }
      }
      break;
    }
  }
  return storage.join("");
}
*/