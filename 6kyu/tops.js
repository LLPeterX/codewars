/* 
6kyu - Square string tops
https://www.codewars.com/kata/5aa3e2b0373c2e4b420009af

Task
Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:


                                         7891012
                             TUWvXY      6     3
                   ABCDE     S    Z      5
           lmno    z   F     R    1      4
     abc   k  p    v   G     Q    2      3
.34..9 d...j  q....x   H.....P    3......2
125678 efghi  rstuwy   IJKLMNO    45678901

The next top is always 1 character higher than the previous one. 
For the above example, the solution for the input
"123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123"
is "7891012TUWvXYABCDElmnoabc34".

When the msg string is empty, return an empty string.
The input strings may be very long. Make sure your solution has good performance.
The (.)dots on the sample dispaly of string are only there to help you to understand the pattern
*/

/* 
* начинаем с i=2 
* дина первого сегмента = 2 ("34")
* пропускаем 5 (56789)
* длина 3 (abc)
* пропускаем 8 (defghijk)
* длина 4 (lmno)
* пропускаем 11 (pq...vz)
* длина 5 (ABCDE)
* пропуск 14

"123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123"
 0123456789012345678901234567890123456789012345678901234567890123456789012345678901234
           1         2         3         4         5         6         7         8  
*/

function tops(msg) {
  if (!msg) return "";
  let result = "";
  let skip = 5, count = 2, i = 2;
  while (i < msg.length) {
    let sub = msg.slice(i, i + count);
    result = sub + result;
    i += count + skip;
    skip += 3;
    count++;
    console.log(` sub=`, sub);
  }
  return result;
}

console.log(tops("123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123"));