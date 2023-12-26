/* 
7kyu - Competitive eating scoreboard
https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/train/javascript
*/

function scoreboard(whoAteWhat) {
  const food = {
    chickenwings: 5,
    hamburgers: 3,
    hotdogs: 2
  };
  return whoAteWhat.map(eater => ({
    name: eater.name,
    score: Object.keys(eater).reduce((s, dish) => s + (dish in food ? food[dish] * eater[dish] : 0), 0)
  }))
    .sort((a, b) => a.score == b.score ? a.name.localeCompare(b.name) : b.score - a.score);
}

var whoAteWhat = [
  { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 }
];

console.log(scoreboard(whoAteWhat));

// best

/* 
function scoreboard(whoAteWhat){
  return whoAteWhat.map(obj => ({
    name: obj.name,
    score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
  })).sort((a, b) => b.score - a.score || a.name > b.name);
}
*/