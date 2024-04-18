/* 
6kyu - Zig-Zag Camel
https://www.codewars.com/kata/582c6b7cfb3179eb6e000027/train/javascript

*/

function zigZagCamel(d, h) {
  const A30 = Math.PI / 6; // 30°
  const A = Math.atan(h / d);
  if (A <= A30) return Math.hypot(d, h);
  const COS30 = Math.cos(A30);
  const SIN30 = Math.sin(A30);
  // верблюд должен идти зигзагами
  let distance = 0,
    a = A;
  let h1, dx;

  // ниже неверно!

  let direction = 0;
  do {
    if (direction % 2 === 0) {
      // walk right
      dx = d / COS30; // новый низ
      distance += dx;
      h1 = dx * SIN30;
      h -= h1; // новый бок
      d = h * SIN30;
      a = Math.atan(h / d);
    } else {
      // walk left
      // верблюд идет влево и упирается в наклон
      /* 
         /   \
        /     \ <- camel path
       /       \
      /.........\ <- 30° angle
      ------------
      */
      dx = d / Math.sin(Math.PI - A - A30);
      h1 = dx * SIN30;
      h -= h1; // новый бок
      d = h * SIN30;
      a = Math.atan(h / d);
    }
    direction++;
    // console.log(
    //   `[${direction}] d=${d}  h=${h} h1=${h1} dx=${dx} dst=${distance}`
    // );
  } while (a > A30 && ++direction < 1000);
  console.log(` ... rest: d=${d} h=${h} `);
  return distance + Math.hypot(d, h);
}

console.log(zigZagCamel(10, 5), Math.hypot(10, 5));

console.log(
  zigZagCamel(201.0964445362025, 127.88541637776775),
  255.7708327555355
);

// best

/* 
const zigZagCamel = (d,h) => Math.max(Math.hypot(d,h), 2*h)
*/

/* 
Math.degrees = radians => radians * (180 / Math.PI);

function zigZagCamel(base, height) {
  const theta = Math.degrees(Math.atan(height / base));
  return theta > 30 ? 2 * height : Math.hypot(base, height);
}
*/

/* 
function zigZagCamel(d,h) {
  // Your code here
  let r = Math.sqrt(d*d+h*h)
  let rad = Math.atan(h/d)
  let deg = rad * (180/Math.PI)
  // console.log(d,h,r,rad,deg)
  if (deg <= 30) {
    return r
  } else {
    /*
    30 = Math.atan(h/d) * (180/Math.PI)
    30 * (Math.PI/180) = Math.atan(h/d)
    Math.tan(30 * (Math.PI/180)) = h/d
    d = h / (Math.tan(30 * (Math.PI/180)))
    */
    let d2 = h / (Math.tan(30 * (Math.PI/180)))
    let r2 = Math.sqrt(d2*d2+h*h)
    return r2
  }
}
*/