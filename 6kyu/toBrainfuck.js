/* 
6kyu - Brainfuck generator
https://www.codewars.com/kata/579e646353ba33cce2000093

Convert text to brainfuck
You are tasked to writting a function to_brainfuck/toBrainfuck 
that converts a given string to brainfuck that would print the given string. 

For example if we were to call to_brainfuck("Hello World!") 
it might give us a result that is something like: 
"-[------->+<]>-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.---[->+++<]>.-[--->+<]>---.+++.------.--------.-[--->+<]>."
, if we execute that code we would get "Hello World!" at the output.
// bad!. Real:
// H:72, e: 101
>+++++++++[<++++++++>-]<.>+++++++[<++++>-]<+.+++++++..+++.>>>++++++++[<++++>-]<.>>>++++++++++[<+++++++++>-]<---.<<<<.+++.------.--------.>>+.>++++++++++.
----9---   ----8---      ---7---  ---5-
 a[1]=9
*/

/* 
>	i++;	перейти к следующей ячейке
<	i--;	перейти к предыдущей ячейке
+	arr[i]++;	увеличить значение в текущей ячейке на 1
-	arr[i]--;	уменьшить значение в текущей ячейке на 1
.	putchar(arr[i]);	напечатать значение из текущей ячейки
,	arr[i] = getchar();	ввести извне значение и сохранить в текущей ячейке
[	while(arr[i]){	если значение текущей ячейки ноль, перейти вперёд по тексту программы на символ, следующий за соответствующей ] (с учётом вложенности)
]	}	если значение текущей ячейки не нуль, перейти назад по тексту программы на символ [ (с учётом вложенности)

// 3**2
+++[>+++<-]>. // [0] = 3

*/

// function toBrainfuck(string) {
//   let result = "";
//   for (let c of string) {
//     result += '>';
//     result += '+'.repeat(c.charCodeAt());
//     result += '.';
//   }
//   return result;
// }

function toBrainfuck(string) {
  let result = "";
  for (let c of string) result += `>${'+'.repeat(c.charCodeAt())}.`;
  return result;
}

