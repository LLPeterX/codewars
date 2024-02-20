/* 
6kyu - Optimum coding school location
https://www.codewars.com/kata/55738b0cffd95756c3000056/train/javascript
*/

function optimumLocation(students, locations) {
  let place = locations
    .map(loc => ({ loc, dist: students.reduce((d, a) => d + Math.abs(loc.x - a[0]) + Math.abs(loc.y - a[1]), 0) }))
    .sort((a, b) => a.dist - b.dist || a.id - b.id)[0].loc;
  return `The best location is number ${place.id} with the coordinates x = ${place.x} and y = ${place.y}`;
}


// best

/* 
var optimumLocation = function(students, locations){
  var minDistance = Infinity;
  let { x, y, id } = locations.reduce((best, item) => {
    let { x, y } = item;
    var totalDistance = students.reduce((d, [xs, ys]) => d + Math.abs(xs-x) + Math.abs(ys-y), 0);
    if (totalDistance >= minDistance) return best;
    minDistance = totalDistance;
    return item;
  }, null);
  return `The best location is number ${id} with the coordinates x = ${x} and y = ${y}`;
}
*/