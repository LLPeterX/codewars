/* 
5kyu - Best Travel
https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

John and Mary want to travel between a few towns A, B, C ... 
Mary has on a sheet of paper a list of distances between these towns.
ls = [50, 55, 57, 58, 60]. 
John is tired of driving and he says to Mary that he doesn't want 
to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose 
so that the sum of the distances is the biggest possible to please Mary and John?
*/

function chooseBestSum(maxDistance, numberOfTowns, distancesList) {
  const allDistances = distancesList.reduce((x, v) => x.concat(x.filter(c => c.length < numberOfTowns).map(c => c.concat([v]))), [[]]);
  if (allDistances.length === 0) return null;
  const desiredTowns = allDistances.filter(c => c.length === numberOfTowns);
  if (!desiredTowns) return null;
  const distances = desiredTowns.map(t => t.reduce((s, v) => s + v));
  return distances.filter(e => e <= maxDistance).sort((a, b) => b - a)[0] || null;
}


let ts = [50, 55, 56, 57, 58];
//console.log(chooseBestSum(163, 3, ts)); // 163
console.log(chooseBestSum(174, 3, [50, 55, 57, 58, 60])); // 173
// console.log(chooseBestSum(163, 3, [50])); // null
// console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 228
// console.log(chooseBestSum(331, 2, [91, 74, 73, 85, 73, 81, 87])); // 178
// console.log(chooseBestSum(331, 4, [91, 74, 73, 85, 73, 81, 87])); // 331
// решение взято из https://github.com/Automedon/Codewars/blob/master/5-kyu/Best%20travel.js


// best
/* 
function chooseBestSum(t, k, ls) {
  var biggestCount = 0;
  var recurseTowns = function(townsSoFar, lastIndex) {
    townsSoFar = townsSoFar || [];
    //base case
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }      
      return; //EJECT
    }
    //recursive case
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}
*/

/* 
function chooseBestSum(t, k, ls) {
  let arr = [];  
    
  function rec(sum, ar, n) {
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum+ar[i], ar.slice(i+1), n-1);
      }
    }
  }

  rec(0, ls, k);
    
  var sol = arr.sort( (a, b) => b - a).find( a => a <= t);
  return typeof sol === 'undefined' ? null : sol;
}
*/

/* 
const chooseBestSum = (t, k, ls) =>
  ls.reduce((pre, val) => [...pre, ...pre.filter(val => val.length < k).map(v => [...v, val])], [[]])
    .filter(val => val.length === k)
    .map(val => val.reduce((pre, val) => pre + val))
    .filter(val => val <= t)
    .sort((a, b) => a - b).pop() || null;
*/

/* 
function chooseBestSum(t, k, ls){
    if (ls.length < k) return null
    const results = [[]]
    for (const value of ls) {
        const copy = [...results]
        for (const prefix of copy) {
            results.push(prefix.concat(value))
        }
    }
    return results
        .filter((a => a.length && a.length == k ))
        .map(item => item.reduce((a,b) => a + b), 0)
        .filter(item => item <= t)
        .sort((a,b) => b-a)[0] || null
}
*/