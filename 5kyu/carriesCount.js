/* 
5kyu - Elementary Arithmetic - Carries Count
https://www.codewars.com/kata/529fdef7488f509b81000061/train/javascript

Дана строка в виде "123 456\n555 555\n123 594".
К каждой паре чисел надо применить + и посчитать общее кол-во переносов при сложении.

"123 456\n555 555\n123 594" => "No carry operation\n3 carry operations\n1 carry operations"

* Все числа могут быть разной длины
* Числа в паре одной длины. Короткие дополняются 0
* На входе произвольное кол-во пар

*/

function solve(input) {
  let counts = [];
  let arr = input.split("\n").map(row => row.split(' '));
  for (let i = 0; i < arr.length; i++) {
    let [a, b] = arr[i], c = 0, count = 0, L = Math.max(a.length, b.length), M = Math.abs(a.length - b.length);
    a = a.padStart(L, '0');
    b = b.padStart(L, '0');
    console.log(`a=${a} b=${b}`);
    //for (let j = a.length - 1; j >= 0; j--) {
    for (let j = a.length - 1; j >= M; j--) {
      if (+a[j] + +b[j] + c > 9) {
        count++;
        c = 1;
      } else c = 0;
    }
    counts.push(count);
  }
  return counts.map(c => `${c || 'No'} carry operation${c ? 's' : ''}`).join('\n');
}

