/* 
6kyu - Wheel of Fortune
https://www.codewars.com/kata/55191f78cd82ff246f000784/train/javascript


*/

// function winner(candidates) {
//   console.log(candidates);
//   if (candidates.length !== 3) return false;
//   if (candidates.some(c => !c.name || !c.scores || c.scores.length < 1 || c.scores.length > 2 || c.scores[0] + (c.scores[1] || 0) > 100 || c.scores.some(s => s < 0 || s > 100 || s % 5))) return false;
//   return candidates.sort((a, b) => b.scores[0] + (b.scores[1] || 0) - a.scores[0] - (a.scores[1] || 0))[0].name;
// }

// same in one line
function winner(candidates) {
  return (candidates.length !== 3 || candidates.some(c => !c.name || !c.scores || c.scores.length < 1 || c.scores.length > 2 || c.scores[0] + (c.scores[1] || 0) > 100 || c.scores.some(s => s < 0 || s > 100 || s % 5))) ? false : candidates.sort((a, b) => b.scores[0] + (b.scores[1] || 0) - a.scores[0] - (a.scores[1] || 0))[0].name;
}


var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
console.log(winner([c1, c2, c3]), "Bill");

console.log(winner([
  { name: 'Robert', scores: [45] },
  { name: 'Rob', scores: [40, 45] },
  { name: 'Ned', scores: [10] }
]), "Rob");


// best

/* 
var arr=['Bill',false,false,false,false,false,false,false,false,false,false,false,'Rob','Gandalf','Rob','Gandalf']
var c=0;
winner=()=>arr[c++];
*/

/* 
function winner(candidates) {
  var winner = false, best = 0;
  if (candidates.length!==3) return false;
  for (var c of candidates) {
    if (!c.name || !c.scores || Math.ceil(c.scores.length/2)!==1 || c.scores.some(x=>x>100||x%5)) return false;
    var score = c.scores.reduce((x,y)=>x+y);
    if (score > best && score <= 100) [winner, best] = [c.name, score];
  }
  return winner;
}
*/