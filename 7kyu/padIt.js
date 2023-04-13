/* 
8kyu - Training JS #9: loop statement --while and do..while
https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript



*/

function padIt(str, n) {
  let i = 0, output = '*' + str;
  while (++i < n) {
    output = i % 2 ? output + '*' : '*' + output;
  }
  return output;
}

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");