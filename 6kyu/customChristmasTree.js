/* 
6kyu - Custom Christmas Tree
https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e/train/javascript

Christmas is coming, and your task is to build a custom 
Christmas tree with the specified characters and the specified height.

Inputs:
- chars: the specified characters.
- n: the specified height. n>3.

The leaves should be n rows. 
The first row fill in 1 char, the second row fill in 3 chars, and so on. 
A single space will be added between two adjust chars, 
and some of the necessary spaces will be added to the left side, 
to keep the shape of the tree. 
No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n. 
The minimum value of n is 3, and the height of the tree trunk is 1 unit height. 
If n increased by 3, and the tree trunk increased by 1 unit. 
For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, 
trunk should be 2 row; and so on.
*/

function customChristmasTree(chars, n) {
  let result = "", k = 0; // k= index of letter in chars
  // leafs
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++, k++) {
      row += chars[k % chars.length] + ' ';
    }
    result += ' '.repeat(n - i - 1) + row.trimEnd() + "\n";
  }
  // trunk
  // for (let i = 0; i < Math.floor(n / 3); i++) {
  //   result += ' '.repeat(n - 1) + "|\n";
  // }
  result += (' '.repeat(n - 1) + "|\n").repeat(n / 3);
  return result.trimEnd();
}

console.log("\n", customChristmasTree("*@o", 3), "\n", JSON.stringify(
  `  *
 @ o
* @ o
  |`));

console.log("\n", customChristmasTree("*@o", 6), "\n", JSON.stringify(
  `     *
    @ o
   * @ o
  * @ o *
 @ o * @ o
* @ o * @ o
     |
     |`));


// cool

/* 
            $
           =(Q
          ,S,I=
         -01)=>[
        ...Array(
       S)].map((_,
      R)=>' '.repeat
     (1+S-1-R-1)+[...
    Array(1+R)].map((_
   ,C)=>Q[I=(1+1+1-2+I)
  %Q.length]).join(' '))
 .join('\n\n'[00])+('\n'+
' '.repeat(S-1)+'|').repeat
            (
            S
            /
            3
            |
            0
            )
  customChristmasTree=$

*/