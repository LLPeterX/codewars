/* 
6kyu - The lost beginning
https://www.codewars.com/kata/659af96994b858db10e1675f/train/javascript

Given a sequence of one or more consecutive natural numbers concatenated into a string, return the smallest possible first number in the sequence.
Numbers will never be truncated.

Examples
"123" -> [1, 2, 3] -> 1
"91011" -> [9, 10, 11] -> 9
"17181920" -> [17, 18, 19, 20] -> 17
"9899100" -> [98, 99, 100] -> 98
"121122123" -> [121, 122, 123] -> 121
"1235" -> [1235] -> 1235
"101" -> [101] -> 101
*/

// first
// function beginning(xs) {
//   let isEnd;
//   for (let numLen = 1; numLen < xs.length; numLen++) {
//     isEnd = true;
//     let i = numLen;
//     let n = xs.slice(0, numLen), n1 = +n + 1;
//     while (i < xs.length) {
//       let len = ~~Math.log10(n1) + 1;
//       let s1 = xs.slice(i, i + len);
//       if (n1 !== +s1) {
//         isEnd = false;
//         break;
//       }
//       i += len;
//       n1++;
//     }
//     if (isEnd) return +xs.slice(0, numLen);
//   }
//   return +xs;
// }

function beginning(xs) {
  for (let numLen = 1, isEnd = true; numLen < xs.length; numLen++, isEnd = true) {
    let i = numLen;
    let num = +xs.slice(0, numLen) + 1;
    while (i < xs.length) {
      let len = ~~Math.log10(num) + 1;
      if (num !== +xs.slice(i, i + len)) {
        isEnd = false;
        break;
      }
      i += len;
      num++;
    }
    if (isEnd) return +xs.slice(0, numLen);
  }
  return +xs;
}

console.log(beginning("123"), 1);
console.log(beginning("91011"), 9);
console.log(beginning("17181920"), 17);

console.log(beginning("123456789101112131415"), 1, "beginning(\"123456789101112131415\")");
console.log(beginning("17181920"), 17, "beginning(\"17181920\")");
console.log(beginning("72637236"), 72637236, "beginning(\"72637236\")");
console.log(beginning("1112"), 11, "beginning(\"1112\")");
console.log(beginning("91011"), 9, "beginning(\"91011\")");
console.log(beginning("99100"), 99, "beginning(\"99100\")");

// best

/* 
function beginning(s) {
  for (let i = 1; i <= s.length; i++) {
    let n = Number(s.slice(0, i));  //  get number 'n' using slice and index 'i'
    let strNums = '';               // create empty string 'strNums'

    while (strNums.length < s.length) {
      strNums += String(n);  // add number 'n' to string 'str_nums'
      n += 1;                // create next consecutive number 
    } // end of while-loop

    if (strNums === s) return Number(s.slice(0, i));
  } // end of for-loop
} // end of function
*/