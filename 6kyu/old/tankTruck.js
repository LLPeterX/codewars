/* 
6kyu - Tank Truck
https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad

Цистерна стоит на земле, в неё налито немного воды
h - уровень воды внутри
d - даметр цилиндра (сечения цистерны)
vt - общий объем

Задача: рассчитать оставшийся объем жидкости (vt - x)
*/
/* 
function tankvol(h, d, vt) {
  let r = d / 2;
  // if (h == r) {
  //   return vt / 2;
  // }

  let tankLength = vt / (Math.PI * r * r);
  //let height = h > r ? r - (d - h) : r - h;
  let emptyHeight = Math.abs(r - h);
  let side = Math.sqrt(Math.pow(r, 2) - Math.pow(emptyHeight, 2));
  //let theta = Math.toDegrees(Math.acos(height / r));
  let angle = Math.acos(emptyHeight / r) * 180 / Math.PI;
  let v1 = (360 - 2 * angle) / 360 * vt + side * emptyHeight * tankLength;
  //return (int) Math.floor(h > radius ? remainVol : vt - remainVol);
  return Math.floor(vt - v1);
}
 */

/* 
function tankvol(h, d, vt) {
  let tankLength = (4 * vt) / (d * d * Math.PI), 
      angle = Math.acos(Math.abs(d-2*h)/d), 
      smax =  d * d * angle / 4, 
      smin = d * d * Math.sin(2 * angle) / 8, 
      res;
  if (2 * h <= d) {
    //angle = Math.acos((d - 2 * h) / d);
    //smax = d * d * angle / 4;
    //smin = d * d * Math.sin(2 * angle) / 8; 
    res = (smax - smin) * tankLength;
  } else { 
    //angle = Math.acos((2 * h - d) / d); 
    //smax = d * d * angle / 4;
    //smin = d * d * Math.sin(2 * angle) / 8;
    res = vt - (smax - smin) * tankLength;
  }
  return Math.floor(res);
}
 */
function tankvol(h, d, vt) {
  let tankLength = (4 * vt) / (d * d * Math.PI), 
      angle = Math.acos(Math.abs(d-2*h)/d), 
      x1 =  d * d * angle / 4, 
      x2 = d * d * Math.sin(2 * angle) / 8;
  return Math.floor(h<d/2 ? (x1 - x2) * tankLength : vt - (x1 - x2) * tankLength);
}

console.log(tankvol(40, 120, 3500)); //1021
console.log(tankvol(2, 7, 3848)); // 907
console.log(tankvol(5, 7, 3848)); // 2940

// best
/* 
function tankvol(h, d, vt) {
  let r = d / 2;
  let w = vt / (r * r * Math.PI);
  let a = (r * r) * Math.acos(1 - h / r) 
        - (r - h) * Math.sqrt(2 * r * h - h * h); 
  
  return w * a | 0;
}
*/

/* 
unction tankvol(h, d, vt) {
    if (h === 0) return 0;
    // radius
    var r = d / 2.0;
    if (h === r) return Math.floor(vt / 2);
    if (h === d) return vt;
    // height > radius, calculate with d - h and at the end change the volume
    if (h > r) {
        h = d - h;
        var hilevel = true;
    }
    else
        hilevel = false;
    // total area of circle
    var st = Math.PI * r * r;
    // half angle from the center
    var theta = Math.acos((r - h) / r);
    // b = sqrt(r * r - (r - h) ** 2) one side of the right triangle
    var sr = (r - h) * Math.sqrt(r * r - (r - h) * (r - h));
    // area corresponding to angle 2 * theta
    var sa = st / Math.PI * theta;
    // surface corresponding to the height
    var sh = sa - sr;
    // volume to find corresponding to surface of liquid / total surface
    var v = vt * sh / st;
    // if height > radius
    if (hilevel)
        v = vt - v;   
    return Math.floor(v)
}
*/