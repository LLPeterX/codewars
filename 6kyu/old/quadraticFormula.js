/* 
6kyu - #Paper and pencil 2: Finding the formula of a single 'x'^2 sequence and the next terms
https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/javascript

Task:
Write a function with 3 parameter of integers, representing the first 3 terms 
of the single 'x^2' sequence, with that, you have to return a list/tuple 
which contains the formula of this sequence and the next two numbers. 
The input will always be valid. 

You should form your formula in the normal way that you write it out 
(e.g. You don't write x^2+1x+0, but instead you do x^2+x...)

Input: 3 parameters representing the first 3 terms of a quadratic sequence.

Output: A array, with the quadratic formula and fourth, fifth term of the sequence.

[4, 9, 16] ---> ['x^2+2x+1', 25, 36]

т.е. в системе уравнений
ax1^2+bx1+c = N1 (x1=1) a + b + c = N1
ax2^2+bx2+c = N2 (x2=2) a*4 + b*2 + c = N2
ax3^2+bx3+c = N3 (x3=3) a*9 + b*3 + c = N3

a=N1-b-c
(N1-b-c)*4 + b*2 + c = N2
4*N1 -4*b - 4*c + 2*b + c = N2
выделяем B
 -4*b + 2*b = N2 - 4*N1 + 4*c -c
 2b-4b = N2 - 4*N1 + 4*c -c
 b =  (-N2+ 4*N1 - 4*c + c)/2

 или
4*N1-4*c + c - N2 = 4*b-2*b
4*N1-4*c + c - N2 = 2*b
b=(4*N1-4*c + c - N2)/2 !!! 
  (для a=1,b=2; [4,9,16]) b=(4*4-4+1-9)/2 = 2 => OK!
  (для a1=1,b=0,c=0, [1,4,9] ) => (4*1-4*0+0-4)/2 = (4-4)/2 = 0 => OK!

a*9 + b*3 + c = N3:
a*9 + (4*N1-4*c + c - N2)/2*3 + c = N3
умножаем на 2
a*18 + 12*N1 - 12*c + 3*c - 3*N2 + 2*c = 2*N3
если a=N1-b-c, то:
18*N1 - 9*(4*N1-4*c + c - N2) + 12*N1 - 12*c + 3*c - 3*N2 + 2*c = 2*N3
18*N1 - (36*N1 - 36*c + 9*c-9N2) +  12*N1 - 12*c + 3*c - 3*N2 + 2*c = 2*N3
18*N1 - 36N1 + 36*c - 9*c + 9N2 +  12*N1 - 12*c + 3*c - 3*N2 + 2*c = 2*N3
// выносим C влево
  36*c - 9*c  - 12*c + 3*c + 2*c = 2*N3 - 18*N1 + 36N1 - 9*N2 - 12*N1 + 3*N2
  20*c = 2*N3  - 9*N2 + 3*N2
  20*c = 2*N3 +6*N1 - 6*N2
  // test: для [4,9,16] c = (2*16+6*4-6*9)/20


надо определить коэффициенты a,b,c и на основе их выичслить X(4) и X(5)
*/
function quadraticFormula(y1, y2, y3) {
  let c = (2 * y3 + 6 * y1 - 6 * y2) / 2;
  let b = (4 * y1 - 4 * c + c - y2) / 2;
  let a = y1 - b - c;
  let eq = "";
  if (a !== 0) {
    if (a < 0) eq += '-';
    eq += `${Math.abs(a) === 1 ? "" : Math.abs(a)}x^2`;
  }
  if (b !== 0) {
    eq += (b < 0) ? "-" : "+";
    eq += `${Math.abs(b) === 1 ? "" : Math.abs(b)}x`;
  }
  if (c !== 0) {
    eq += (c < 0) ? "-" : "+";
    eq += Math.abs(c);
  }
  return [eq, a * 16 + b * 4 + c, a * 25 + b * 5 + c]
}



console.log(quadraticFormula(1, 4, 9));
console.log(quadraticFormula(4, 9, 16), ["x^2+2x+1", 25, 36]);
console.log(quadraticFormula(5, 15, 27), ["x^2+7x-3", 41, 57]);

// my best

// cool
/* 
function quadraticFormula(y1, y2) {
  let b = y2 - y1 - 3;
  let c = y1 - b - 1;
  let bx = b == 0 ? "" : b == 1 ? "+x" : b == -1 ? "-x" : `${b > 0 ? "+" : ""}${b}x`;
  let s = `x^2${bx}${c == 0 ? "" : `${c > 0 ? "+" : ""}${c}`}`;
  return [s, 16 + 4 * b + c, 25 + 5 * b + c];
}
*/