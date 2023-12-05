/* 
6kyu - One Variable Second Degree Equation Solver
https://www.codewars.com/kata/560ae2027dc9033b5e0000c2

We know the formula to find the solutions of an equation 
of second degree with only one variable:

ax^2+bx+c=0
x=-b+/SQRT(b^2-4ac)/2a
D = b^2-4ac

*/

function secDegSolver(a, b, c) {
  const round = n => Math.round(n * 1e10) / 1e10;
  let D = 0;
  if (a === 0) {
    if (b && c) return `It is a first degree equation. Solution: ${round(-c / b)}`;
    else if (b == 0 && c == 0) return "The equation is indeterminate";
    else if (b == 0 && c !== 0) return "Impossible situation. Wrong entries";
    else return "It is a first degree equation. Solution: 0.0";
  } else {
    D = b * b - 4 * a * c;
    if (D < 0) return "There are no real solutions";
    if (D === 0) return `It has one double solution: ${round(-b / 2 / a)}`;
    let res = [round((-b - Math.sqrt(D)) / 2 / a), round((-b + Math.sqrt(D)) / 2 / a)]
      .sort((a, b) => a - b);
    return `Two solutions: ${res.join(', ')}`;
  }
}

