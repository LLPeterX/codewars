/* 
6kyu - String tops
https://www.codewars.com/kata/59b7571bbf10a48c75000070/train/javascript

Write a function that accepts msg string and returns 
local tops of string from the highest to the lowest.

                                                      3
                              p                     2   4
            g               o   q                 1
  b       f   h           n       r             z
a   c   e       i       m          s          y
      d           j   l             t       x
                    k                 u   w
                                        v
The next top is always 1 character higher than the previous one. 
For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

When the msg string is empty, return an empty string.
The input strings may be very long. Make sure your solution has good performance.

1-6-15-28
 5 9  13 
*/

function tops(msg) {
  let k = 1, j = 5, result = "";
  while (k < msg.length) {
    result = msg[k] + result;
    k += j;
    j += 4;
  }
  return result;
}



// console.log(tops(''), '');
// console.log(tops('12'), '2');
console.log(tops('abcdefghijklmnopqrstuvwxyz12345'), '3pgb');
console.log(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'), 'M3pgb');