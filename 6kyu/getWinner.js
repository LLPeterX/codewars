/* 
6kyu - Who won the election?
https://www.codewars.com/kata/554910d77a3582bbe300009c
*/

function getWinner(listOfBallots) {
  const results = listOfBallots.reduce((c, name) => { c[name] = (c[name] || 0) + 1; return c; }, {});
  const total = Object.values(results).reduce((sum, v) => sum + v);
  const winner = Object.entries(results).find(([, votes]) => votes > total / 2);
  return winner ? winner[0] : null;
}

console.log(getWinner(["A", "A", "A", "B", "B", "B", "A"])); // "A";
console.log(getWinner(["A"])); // "A";
console.log(getWinner(["A", "A", "A", "B", "B", "B"])); // null

// best

/* 
function getWinner(list) {
    var result= {};
    var winNumber = list.length / 2;
    list.forEach(function(char) { ++result[char] || (result[char] = 1); });
    var answer = Object.keys(result).filter(function(key) {if (result[key] > winNumber) return key; });
    return answer[0] || null;
}

function getWinner(list) {
  var arr = [], winNum = list.length/2;
  list.forEach(function(val){ ++arr[val] || (arr[val]=1) });
  for(var name in arr) if(arr[name] > winNum) return name;
  return null;
}

// funny!
function getWinner(b){v={},x
=null;b.map(function(n){v[n]
=(v[n]|0)+1});for(n in v)v[n
]>b.length/2?x=n:0;return x}
*/