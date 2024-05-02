/* 
6kyu - Linux history and `!` command. Series#2 The `!n` command
https://www.codewars.com/kata/5814bf3f3db1ffc0180000d3/train/javascript
*/

function bangN(n, history) {
  let m = history
    .split("\n")
    .find((row) => new RegExp(`^${n}\\s+`).test(row.trim()));
  return m ? m.replace(/^\s*?\d+\s+/, "") : `!${n}: event not found`;
}

var history =
  "   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me \n  6  chmod 000 me \n  7  more me\n  8  history";
console.log(bangN(4, history), "ls");
history =
  "   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls\n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me";
console.log(bangN(2, history), "more beer");
history =
  "   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me";
console.log(bangN(12, history), "!12: event not found");

// best

/* 
const bangN = (n, history) =>
  (history.match(new RegExp(`${n} +(.+)`)) || [,`!${n}: event not found`])[1];
*/
