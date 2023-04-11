/* 
6kyu - Simple Fun #210: Maximize Points
https://www.codewars.com/kata/58fec262184b6dc30800000d/train/javascript
*/
/* 
Алгоритм:
1) отсортировать массив team1
2) В массиве team2 найти такой элемент, что t1>t2 и t1-t2=min 
*/
function maximizePoints(team1, team2) {
  team1.sort((a, b) => a - b);
  let score = 0;
  for (let t1 of team1) {
    let x = team2.findIndex(t2 => t2 !== null && t1 > t2);
    if (x >= 0) {
      team2[x] = null;
      score++;
    }
  }
  return score;
}

//console.log(maximizePoints([3, 2, 4], [1, 2, 3]), 2)
console.log(maximizePoints([2, 3, 4], [1, 2, 3]), 3)
console.log(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40], [21, 12, 1, 0, 13, 38, 25, 49]), 7)
console.log(maximizePoints([25, 7, 26, 48], [1, 36, 5, 33]), 3)
console.log(maximizePoints([1], [99]), 0)

// best
/* 
function maximizePoints(team1, team2) {
   var t1=team1.slice().sort((a,b)=>a-b);
   var t2=team2.slice().sort((a,b)=>a-b);
   for (var c=0,j=0,i=0;i<t1.length;i++,j++) if (t1[i]>t2[j]) c++; else j--; 
   return c
}
*/