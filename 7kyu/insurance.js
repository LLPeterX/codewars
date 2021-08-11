
/* 
7kyu - Cost of my ride
https://www.codewars.com/kata/586430a5b3a675296a000395/train/javascript
*/

function insurance(age, size, numofdays) {
  const sizes = { 'medium': 10, 'economy': 0, 'full-size': 15 }
  return (50 + (age < 25 ? 10 : 0) + (sizes[size] === undefined ? 15 : sizes[size])) * (numofdays < 0 ? 0 : numofdays);
}

console.log(insurance(18, "medium", 7)); // 490
console.log(insurance(15, "economy", 46)); // 2760 ?

//best
/*
var insurance = (a,s,n) => 0<n ? (50+(a<25)*10+(s=='economy' ? 0 : s=='medium' ? 10 : 15))*n : 0;
*/