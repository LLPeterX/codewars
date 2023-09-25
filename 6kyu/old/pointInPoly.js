/* 
6kyu - Point in Polygon
https://www.codewars.com/kata/530265044b7e23379d00076a/train/javascript

In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

Points will be represented as [x,y] arrays.

*/

// from: https://ru.stackoverflow.com/questions/464787/%D0%A2%D0%BE%D1%87%D0%BA%D0%B0-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0

function pointInPoly(poly, [px, py]) {
  let result = false;
  let j = poly.length - 1;
  for (let i = 0; i < poly.length; i++) {
    let pix = poly[i][0];
    let piy = poly[i][1];
    let pjx = poly[j][0];
    let pjy = poly[j][1];
    if ((piy < py && pjy >= py || pjy < py && piy >= py) &&
      (pix + (py - piy) / (pjy - piy) * (pjx - pix) < px))
      result = !result;
    j = i;
  }
  return result;
}


var poly = [
  [-5, -5], [5, -5],
  [5, 5], [-5, 5]
];
console.log(pointInPoly(poly, [-6, 0]), false);
console.log('--');
console.log(pointInPoly(poly, [1, 1]), true);

// best
/* 
function pointInPoly(poly, point) {
  var x = point[0];
  var y = point[1];
    
  var isInside = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var xi = poly[i][0];
    var yi = poly[i][1];

    var xj = poly[j][0];
    var yj = poly[j][1];

    var shouldCheck = (yi > y) !== (yj > y);
    if (shouldCheck) {
      var slope = (xj - xi) / (yj - yi);

      if (x < slope * (y - yi) + xi) {
        isInside = !isInside;
      }
    }
  }

  return isInside;
}
*/

/* 
function pointInPoly(poly, point) {
  let inside = false;
  
  const px = point[0];
  const py = point[1];
  
  for (var start = 0, end = poly.length - 1; start < poly.length; end = start++) {    
    const x1 = poly[start][0];
    const y1 = poly[start][1];    
    const x2 = poly[end][0];
    const y2 = poly[end][1];    
    const dx = x2 - x1;
    const dy = y2 - y1;
    const t = (py - y1) / dy;    // Determine t where segment intersects horizontal ray
    
    if (y1 > py != y2 > py)      // Check if start and end of segment are on opposite sides of the ray          
      if (dx * t + x1 >= px)     // Check if X component of intersection point is t > 0 on ray
        inside = !inside;        // If it is the ray intersects the segment, so flip inside flag    
  }
  
  return inside;
}
*/