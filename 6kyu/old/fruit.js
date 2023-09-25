/* 
6kyu - Fruit Machine
https://www.codewars.com/kata/590adadea658017d90000039/train/javascript
*/

function fruit(reels, spins) {
  const scores = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  const images = Object.entries(spins.map((s, i) => reels[i][s]).reduce((m, v) => { m[v] = (m[v] || 0) + 1; return m; }, {})).sort((a, b) => b[1] - a[1]);
  if (images.length === 3) return 0;
  let value = scores.indexOf(images[0][0]) + 1;
  return images.length === 2 ? (images[0][0] === 'Wild' ? 10 : images[1][0] === 'Wild' ? value * 2 : value) : value * 10;
  // if (images.length === 2) {
  //   return images[0][0] === 'Wild' ? 10 : images[1][0] === 'Wild' ? value * 2 : value;
  // }
  // return value * 10;
}

var reel = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
var spin = [0, 0, 0];
//console.log(fruit([reel, reel, reel], spin), 100, "Should return: '100'");

var reel1 = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
var reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
var reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
var spin = [5, 4, 3];
//console.log(fruit([reel1, reel2, reel3], spin), 0, "Should return: '0'");

reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin = [0, 0, 1];
//console.log(fruit([reel1, reel2, reel3], spin), 3, "Should return: '3'");

reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
spin = [0, 5, 0];
console.log(fruit([reel1, reel2, reel3], spin), 6, "Should return: '6'");

reel1 = ["Cherry", "Star", "Jack", "Wild", "Bell", "Shell", "King", "Bar", "Seven", "Queen"];
reel2 = ["Shell", "Star", "King", "Queen", "Cherry", "Seven", "Jack", "Wild", "Bell", "Bar"];
reel3 = ["Shell", "Star", "Bell", "Seven", "Wild", "Jack", "Queen", "Bar", "King", "Cherry"];
spin = [3, 7, 2]; // Wild, Wild, Jack
console.log(fruit([reel1, reel2, reel3], spin), 10, "Should return: '10'");


// best
/* 

function fruit(reels, spins) {
  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  
  let [a, b, c] = reels
    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
    .sort((a, b) => a - b);

  if (a === b && b === c)
    return a * 10;
    
  if (a === b)
    return c === 10 ? a * 2 : a;
  
  return b === c ? b : 0;
}
*/