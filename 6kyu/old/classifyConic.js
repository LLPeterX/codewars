/* 
6kyu - Conic Classification
https://www.codewars.com/kata/56546460730f15790b000075/train/javascript


*/

function classifyConic(A, B, C, D, E, F) {
  let M = 8 * A * C * F + B * E * D + D * B * E - D * 2 * C * D - 2 * A * E * E - B * B * 2 * F;
  let N = B * B - 4 * A * C;
  let S = A + C;
  if (N < 0) {
    //ellips
    if (M != 0) return (M * S < 0) ? "A real ellipse" : "An imaginary ellipse";
    else return "A degenerated ellipse: One point";
  } else if (N > 0) {
    // hyperbola
    return M ? "A real hyperbola" : "A degenerated hyperbola: two intersecting lines"
  }
  // parabola
  if (M) return "A real parabola";
  let x = D * D - 4 * A * F;
  if (x > 0) return "A degenerated parabola: two parallel lines";
  else if (x === 0) return "A degenerated parabola: two coinciding lines";
  else return "A degenerated parabola: two imaginary lines";
}

var A = 1, B = 1, C = 1, D = 2, E = 2, F = -4;
console.log(classifyConic(A, B, C, D, E, F), "A real ellipse");

var A = 1, B = 1, C = -1, D = 2, E = 2, F = 4;
console.log(classifyConic(A, B, C, D, E, F), "A real hyperbola");

var A = 1, B = 0, C = 0, D = 4, E = 4, F = 4;
console.log(classifyConic(A, B, C, D, E, F), "A real parabola");

var A = 5, B = 0, C = 4, D = 0, E = 0, F = 0;
console.log(classifyConic(A, B, C, D, E, F), "A degenerated ellipse: One point");

var A = 19, B = 0, C = -7, D = 0, E = 0, F = 0;
console.log(classifyConic(A, B, C, D, E, F), "A degenerated hyperbola: two intersecting lines");

var A = 40, B = 0, C = 0, D = 0, E = 0, F = 50;
console.log(classifyConic(A, B, C, D, E, F), "A degenerated parabola: two imaginary lines");

var A = 1, B = 1, C = 1, D = 2, E = 2, F = 4;
console.log(classifyConic(A, B, C, D, E, F), "An imaginary ellipse");

console.log(classifyConic(0, 0, 0, 5.223929317251766, -0.6634039803257963, 13.242317110993433), 'A degenerated parabola: two parallel lines');