/* 
7kyu - Offload your work!
https://www.codewars.com/kata/5b3e1dca3da310a4390000f3/train/javascript


*/

// first
// function workNeeded(projectMinutes, freelancers) {
//   let freelancersMunutes = freelancers.reduce((s, v) => s + v[0] * 60 + v[1], 0);
//   return freelancersMunutes >= projectMinutes
//     ? "Easy Money!"
//     : `I need to work ${Math.floor((projectMinutes - freelancersMunutes) / 60)} hour(s) and ${(projectMinutes - freelancersMunutes) % 60} minute(s)`;
// }

function workNeeded(projectMinutes, freelancers) {
  let minutes = projectMinutes - freelancers.reduce((s, v) => s + v[0] * 60 + v[1], 0);
  return minutes <= 0 ? "Easy Money!" : `I need to work ${Math.floor((minutes) / 60)} hour(s) and ${(minutes) % 60} minute(s)`;
}

console.log(workNeeded(60, [[1, 0]]), "Easy Money!");
console.log(workNeeded(60, [[0, 0]]), "I need to work 1 hour(s) and 0 minute(s)");
console.log(workNeeded(141, [[1, 55], [0, 25]]), "I need to work 0 hour(s) and 1 minute(s)");