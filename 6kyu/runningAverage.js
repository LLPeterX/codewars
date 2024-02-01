/* 
6kyu - Running Average
https://www.codewars.com/kata/589e4d646642d144a90000d8/train/javascript

reate a function running_average() that returns a callable function object. 
Update the series with each given value and calculate the current average.

r_avg = running_average()
r_avg(10) = 10.0
r_avg(11) = 10.5
r_avg(12) = 11
*/

function runningAverage() {
  let accum = 0, count = 0;
  return (value) => +((accum += value) / (++count)).toFixed(2);
}

var rAvgSol = runningAverage();
console.log(rAvgSol(10), 10);
console.log(rAvgSol(11), 10.5);
console.log(rAvgSol(12), 11);

// best

/* 
function runningAverage() {
  var accumulator = 0;
  var size = 0;

  return function(number) {
    accumulator += number;
    size += 1;
    
    return Math.round(accumulator / size * 100) / 100;
  };
}
*/