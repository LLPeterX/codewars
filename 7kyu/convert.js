/* 
7kyu - Convert Decimal Degrees to Degrees, Minutes, Seconds
https://www.codewars.com/kata/590ac6b9be4dff49b0000042/train/javascript
*/

function convert(degrees) {
  const d = Math.floor(degrees), m1 = (degrees - d) * 60, m = Math.floor(m1), s = Math.round((m1 - m) * 60), res = [d];
  s && res.push(m, s) || m && res.push(m);
  return res;
}

console.log(convert(0), [0], "0 degrees");
console.log(convert(40.567), [40, 34, 1], "40 degrees, 34 minutes, 1 second");
console.log(convert(80.5), [80, 30], "70 degrees, 14 minutes, 2 seconds");
console.log(convert(70.234).length, 3, "Length of the array should be 3");
console.log(convert(20.999), [20, 59, 56], "20 degrees, 59 minutes, 56 second");
console.log(convert(33.333)[1], 19, "Should return 19 minutes");
console.log(convert(50), [50], "50 degrees");
console.log(convert(0.0001388888888888889), [0, 0, 1], "0 degrees, 0 minutes, 1 second");
console.log(convert(0.0001388888888888888), [0], "0 degrees, 0 minutes, 1 second");


// best
/*
function convert(dg) {
  let d = ~~dg, m = ~~(dg*60%60), s = Math.round( dg*3600%60 );
  if ( s ) return [d, m, s];
  if ( m ) return [d, m];
           return [d]
}
*/

/*
function convert(n) {
  const {round} = Math
  const [degree, min, sec] = [n ^0, n % 1 * 60 ^0, round(n % (1/60) * 3600)]
  return sec ? [degree, min, sec] : min ? [degree, min] : [degree]
}
*/