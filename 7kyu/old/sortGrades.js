/* 
7kyu - Sort the climbing grades
https://www.codewars.com/kata/58a08e622e7fb654a300000e/train/javascript
*/

function sortGrades(lst) {
  const rank = ["VB", "V0", "V0+", ...Array.from({ length: 17 }, (_, k) => `V${k + 1}`)];
  //console.log(rank);
  return lst.sort((a, b) => rank.indexOf(a) - rank.indexOf(b));
}

//console.log(sortGrades(["V7", "V12", "V1"]), ["V1", "V7", "V12"]);
console.log(sortGrades(["V13", "V14", "VB", "V0"]), ["VB", "V0", "V13", "V14"]);
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]), ["VB", "V0", "V0+", "V2", "V6", "V16"]);
console.log(sortGrades(["V7"]), ["V7"]);
console.log(sortGrades([]), []);

// best

/* 
const grades = ["VB", "V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];

function sortGrades(lst){
  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));
}
*/

/* 
const sortGrades = grades => {
  const value = x => ({ VB: -1, 'V0+': 0.5 }[x] || Number(x.slice(1)))
    return grades.sort((a, b) => value(a) - value(b))
}
*/