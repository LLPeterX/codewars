/* 
6kyu - Spelling Bee
https://www.codewars.com/kata/57d6b40fbfcdc5e9280002ee/train/javascript

How many bees are in the beehive?
* bees can be facing UP, DOWN, LEFT, or RIGHT
* bees can share parts of other bees

Examples:

bee.bee     
.e..e..
.b..eeb
=>5
*/

function howManyBees(hive) {
  if (!hive || hive.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[0].length; j++) {
      if (hive[i][j] === 'b') {
        if (i + 2 < hive.length && hive[i + 1][j] == 'e' && hive[i + 2][j] == 'e') count++;
        if (i - 2 >= 0 && hive[i - 1][j] == 'e' && hive[i - 2][j] == 'e') count++;
        if (j + 2 < hive[0].length && hive[i][j + 1] == 'e' && hive[i][j + 2] == 'e') count++;
        if (j - 2 >= 0 && hive[i][j - 1] == 'e' && hive[i][j - 2] == 'e') count++;
        console.log(` at i=${i} j=${j} c=${count}`);
      }
    }
  }
  return count;
}

// best

/* 
howManyBees = function(hive) {
  if (!hive || !hive.length) 
    return 0;
  
  let flip = hive[0].map((_, i) => hive.map(row => row[i]));  
  let text = hive.concat(flip).map(row => row.join('')).join('|');
  let bees = text.match(/(?=bee|eeb)/g) || [];
  
  return bees.length;
}
*/