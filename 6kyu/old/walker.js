/* 
6kyu - The Walker
https://www.codewars.com/kata/5b40b666dfb4291ad9000049

The walker

The walker starts from point O, walks along OA, AB and BC. 
When he is in C (C will be in the upper half-plane), what is the distance CO? 
What is the angle tOC in positive degrees, minutes, seconds?

Angle tOA is alpha (here 45 degrees), angle hAB is beta (here 30 degrees), angle uBC is gamma(here 60 degrees).

Task
function solve(a, b, c, alpha, beta, gamma) with parameters
- a, b, c: positive integers in units of distance (stand for OA, AB, BC)
- alpha, beta, gamma: positive integers in degrees (positive angles are anticlockwise)

returns an array:

- 0: distance CO (rounded to the nearest integer)
    then angle tOC with the third following elements:
- 1: number of degrees in angle tOC (truncated positive integer)
- 2: number of minutes in angle tOC (truncated positive integer)
- 3: number of seconds in angle tOC (truncated positive integer)
*/

//const r2d = (rad) => Math.trunc(rad * 180 / Math.PI);

/* 
Близко!
Как перевести градусы/радианы в минуты/секунды???
https://planetcalc.com/166/
*/
const d2r = (degree) => degree * Math.PI / 180;

function solve(a, b, c, alpha, beta, gamma) {
  let y = a * Math.sin(d2r(alpha));
  let x = a * Math.cos(d2r(alpha));
  y += b * Math.cos(d2r(beta));
  x -= b * Math.sin(d2r(beta));
  y -= c * Math.sin(d2r(gamma));
  x -= c * Math.cos(d2r(gamma));
  let l = Math.hypot(x, y);
  let r = Math.PI / 2 + Math.acos(y / l); // angle in radians
  let g = Math.trunc(r * 180 / Math.PI); // angle in raduses
  let z = Math.trunc(r * 648000 / Math.PI);
  return [Math.round(l), g, Math.trunc((z / 60) % 60), z % 60];
}

console.log(solve(12, 20, 18, 45, 30, 60), [15, 135, 49, 18]);
console.log(solve(15, 15, 19, 50, 29, 55), [12, 133, 18, 44]);
console.log(solve(14, 25, 17, 41, 35, 59), [20, 129, 41, 57]);

// best

/* 
const cos = deg => Math.cos(deg * Math.PI / 180);
const sin = deg => Math.sin(deg * Math.PI / 180);

const solve = (a, b, c, alpha, beta, gamma) => {

  const x = a * cos(alpha) - b * sin(beta) - c * cos(gamma);
  const y = a * sin(alpha) + b * cos(beta) - c * sin(gamma);
  const t = Math.atan2(y, x) * 180 / Math.PI;

  return [
    Math.round(Math.hypot(x, y)),
    t | 0,
    t * 60 % 60 | 0,
    t * 3600 % 60 | 0,
  ];
 
};
*/

/* 
function solve(a, b, c, alpha, beta, gamma) {
    const x = a * Math.cos(alpha * Math.PI / 180) - b * Math.sin(beta * Math.PI / 180) - c * Math.cos(gamma * Math.PI / 180);
    const y = a * Math.sin(alpha * Math.PI / 180) + b * Math.cos(beta * Math.PI / 180) - c * Math.sin(gamma * Math.PI / 180);
    let delta = Math.atan(y / x) * 180 / Math.PI + 180;
    let degree = Math.floor(delta), minute = Math.floor((delta - degree) * 60), second = Math.floor(((delta - degree) * 60 - minute) * 60);
    return [Math.round(Math.sqrt(x * x + y * y)), degree, minute, second];
}
*/

