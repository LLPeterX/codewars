/* 
7kyu - Driving School Series #1
https://www.codewars.com/kata/58999425006ee3f97c00011f/train/javascript

Every month, a random number of students take the driving test 
at Fast & Furious (F&F) Driving School. 
To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average 
demerit points accumulated by ONLY the students who have passed, 
rounded to the nearest integer.

Write a function which would allow them to do so. 
If no students passed the test that month, return 'No pass scores registered.'.

*/

function passed(list) {
  const passedStudents = list.filter(points => points <= 18);
  if (passedStudents.length === 0) return 'No pass scores registered.';
  let totalPoints = passedStudents.reduce((sum, v) => sum + v, 0);
  return Math.round(totalPoints / passedStudents.length);
}

console.log(passed([10, 10, 10, 18, 20, 20]), 12);
console.log(passed([21, 22, 24]), 'No pass scores registered.');
console.log(passed([3, 22, 9, 13, 20, 18, 2, 14, 20, 8, 23, 12, 7, 21, 21, 19, 20, 11, 18, 7, 13, 22, 11, 20, 9]), 10);
console.log(passed([19, 16, 8, 11, 25, 10, 29, 22, 23]), 11);