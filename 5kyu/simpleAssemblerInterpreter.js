/* 
5kyu Simple assembler interpreter
https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

Реализовать интерпретатор Ассемблера
 */
function simple_assembler(program) {
  let res = {}, p = 0;
  while (p < program.length) {
      let operation = program[p];
      let [op, v1, v2] = operation.split(' ');
      switch (op) {
          case 'mov':
              res[v1] = !isNaN(v2) ? +v2 : res[v2];
              p++;
              break;
          case 'inc':
              ++res[v1];
              p++;
              break;
          case 'dec':
              --res[v1];
              p++;
              break;
          case 'jnz':
              if (!isNaN(v1)) {
                  p += (v1 != 0) ? +v2 : 1;
              } else {
                  p += (res[v1] != 0) ? +v2 : 1;
              }
              break;
      } // switch

  }
  return res;
}