/* 
6kyu - The Rhinestone Cowboy - Count the dollars in his boots!
https://www.codewars.com/kata/58a2a561f749ed763c00000b/train/javascript

You will receive an array of two strings with the Cowboys boots.
Count the number of dollars in each boot and return a string such as: 

"This Rhinestone Cowboy has 2 dollar bills in his right boot and 1 in the left"

boots[0] = left boot boots[1] = right boot

The bill must be of form [(1)] to be counted and only count ones no other denominations.
Only count bills in the top half of the boot (boot leg) so the cowboy 
can pull money out without removing the boots, see diagram above.

The test boots will be well-formed and always the same size.

You will always be given two boots since a Cowboy cannot walk around barefoot!
*/

function cowboysDollars(boots) {
  function countBucks(boot) {
    let count = 0;
    let b = boot.split("\n");
    for (let i = 0; i < b.length; i++) {
      if (b[i].includes("&")) break;
      if (b[i].includes("[(1)]")) count++;
    }
    return count;
  }
  let n = boots.map(countBucks);
  return `This Rhinestone Cowboy has ${n[1]} dollar bills in his right boot and ${n[0]} in the left`;
}

// best
/* 
function cowboysDollars(b) {
  var c = s => s.split('|[(1)]|').length-1;
  return `This Rhinestone Cowboy has ${c(b[1])} dollar bills in his right boot and ${c(b[0])} in the left`;
}
*/
