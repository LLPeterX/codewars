/* 
7kyu - Convert the score
https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript


*/

function scoreboard(string) {
  const numerals = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let score = string.match(new RegExp(`\\b(${numerals.join('|')})`, 'g'));
  // string.match(/\b(nil|one|two|three|four|five|six|seven|eight|nine)/g);
  return score.map(s => numerals.indexOf(s));
}

console.log(scoreboard("The score is four nil"), [4, 0], "Should return: [4,0]");
console.log(scoreboard("new score: two three"), [2, 3], "Should return: [2,3]");
console.log(scoreboard("two two"), [2, 2], "Should return: [2,2]");
console.log(scoreboard("Arsenil just conceded another goal, two nil"), [2, 0], "Should return: [2,0]");

// best

/* 
function scoreboard(string) {
  var arr=string.split(' ');
  var a=['nil','one','two','three','four','five','six','seven','eight','nine']
  return [a.indexOf(arr[arr.length-2]),a.indexOf(arr[arr.length-1])];
}
*/

/* 
function scoreboard(string) {
  let score = ['nil','one','two','three','four', 'five','six','seven','eight','nine']
  return string.split(' ')
               .filter(x => score.includes(x))
               .map(x => score.lastIndexOf(x))
}
*/