/* 
7kyu - SCHEDULE YOUR DA(RRA)Y
https://www.codewars.com/kata/581de9a5b7bad5d369000150/train/javascript

*/

// function dayPlan(hours, tasks, duration) {
//   if (tasks * duration > hours * 60) return "You're not sleeping tonight!";
//   let breakTime = Math.round((hours * 60 - tasks * duration) / (tasks - 1));
//   return Array.from({ length: tasks * 2 - 1 }, (_, k) => k % 2 ? breakTime : duration);
// }

// shorter:

const dayPlan = (h, t, d) =>
  t * d > h * 60 ? "You're not sleeping tonight!"
    : Array.from({ length: t * 2 - 1 }, (_, k) => k % 2 ? Math.round((h * 60 - t * d) / (t - 1)) : d);

console.log(dayPlan(8, 5, 30), [30, 83, 30, 83, 30, 83, 30, 83, 30]);
console.log(dayPlan(2, 2, 60), [60, 0, 60]);
console.log(dayPlan(3, 5, 60), 'You\'re not sleeping tonight!');
