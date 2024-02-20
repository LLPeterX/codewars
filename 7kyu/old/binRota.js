/* 
7kyu - The Lazy Startup Office
https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/train/javascript

A startup office has an ongoing problem with its bin. 
Due to low budgets, they don't hire cleaners. 
As a result, the staff are left to voluntarily empty the bin. 
It has emerged that a voluntary system is not working and the bin 
is often overflowing. One staff member has suggested creating 
a rota system based upon the staff seating plan.

Create a function binRota that accepts a 2D array of names. 
The function will return a single array containing staff names 
in the order that they should empty the bin.

Adding to the problem, the office has some temporary staff. 
This means that the seating plan changes every month.
 Both staff members' names and the number of rows of seats may change. 
 Ensure that the function binRota works when tested with these changes.
*/

function binRota(arr) {
  return arr.reduce((r, row, i) => r.concat(i % 2 ? row.reverse() : row), []);
}

console.log(binRota([["Billy"], ["Megan"], ["Aki"], ["Arun"], ["Joy"]]), ["Billy", "Megan", "Aki", "Arun", "Joy"], "Test failed");
console.log(binRota([["Sam", "Nina", "Tim", "Helen", "Gurpreet", "Edward", "Holly", "Eliza"], ["Billy", "Megan", "Aki", "Arun", "Joy", "Anish", "Lee", "Maryan"], ["Nick", "Josh", "Pete", "Kavita", "Daisy", "Francesca", "Alfie", "Macy"]]), ["Sam", "Nina", "Tim", "Helen", "Gurpreet", "Edward", "Holly", "Eliza", "Maryan", "Lee", "Anish", "Joy", "Arun", "Aki", "Megan", "Billy", "Nick", "Josh", "Pete", "Kavita", "Daisy", "Francesca", "Alfie", "Macy"], "Test failed")
console.log(binRota([["Stefan", "Raj", "Marie"], ["Alexa", "Amy", "Edward"], ["Liz", "Claire", "Juan"], ["Dee", "Luke", "Elle"]]), ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Elle", "Luke", "Dee"], "Test failed");

// best
/* 
const binRota = arr =>
  [].concat(...arr.map((val, idx) => idx % 2 ? val.reverse() : val));
*/