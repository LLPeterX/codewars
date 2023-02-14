/* 
6kyu - ThetaFormulation
https://www.codewars.com/kata/567610d21541a88876000024

using the following formula:
  Angle (in Radians) === Arc length / Radius length
Write a function thetaFormula:
 - When given two of the values and "?" returns the number value of the missing one.
 - When given all three values returns a boolean value verifying if the statement is true or false.
 - When given one or no values as arguments or invalid arguments returns null.  
*/

function thetaFormula(radius, arc, angle) {
  // console.log(`radius=${radius} (${typeof radius}), arc=${arc} (${typeof arc}), angle=${angle} (${typeof angle})`);
  if (arguments.length < 3) return null;
  const args = Array.from(arguments).slice(0, 3);
  if (args.filter(e => e === '?').length > 1) return null;
  if (args.some(e => typeof e != 'number' && e != '?')) return null;
  if (!args.includes('?')) return (+angle).toFixed(3) === (+arc / +radius).toFixed(3);
  if (radius === '?') return +(arc / angle).toFixed(3);
  if (arc === '?') return +(angle * radius).toFixed(3);
  if (angle === '?') return +(arc / radius).toFixed(3);
}
console.log(thetaFormula(3, 1), null)
console.log(thetaFormula("?", "?", "?"), null)
console.log(thetaFormula(92, 6, "?"), 0.065)
console.log(thetaFormula(26, "?", 4), 104)
console.log(thetaFormula("?", 40, 10), 4)
console.log(thetaFormula(8, "?", 7), 56)
console.log(thetaFormula(-4, 4, -4), false)
console.log(thetaFormula(1, 10, 10), true)
console.log(thetaFormula(20, 200, 10), true)
console.log(thetaFormula(200, 40, 10), false)


// best

/* 
function thetaFormula(radius, arc, angle) {
  if (arguments.length !== 3) return null;
  let nums = 0, inv = false;
  [radius,arc,angle].forEach(v => {
    if (typeof v === 'number') ++nums;
    else if (v !== '?') inv = true;
  });
  if (inv || nums < 2) return null;
  
  switch (true) {
    case radius === '?': return +(arc / angle).toFixed(3);
    case arc === '?': return +(angle * radius).toFixed(3);
    case angle === '?': return +(arc / radius).toFixed(3);
    default: return angle === arc / radius;
  }
}
*/

/* 
function thetaFormula(...args) {
  var a=args[0] , b=args[1] , c=args[2];
  return args.length!=3||args.filter(x=>x=="?").length>1||args.some(x=>typeof x=="string"&&x!="?") ? null :
  typeof(a+b+c)=='number' ? b==a*c : +[b/c,a*c,b/a][args.indexOf("?")].toFixed(3);
}
*/

/* 
function thetaFormula(radius, arc, angle) {
  let args = Array.prototype.slice.call(arguments);
  console.log(args)
  if (args.length !== 3 || args.filter(x => x === "?").length > 1) return null;
  if (args.filter(x => typeof x === 'string').length !== args.filter(x => x === "?").length) return null;
  if (radius === "?") return Math.round(arc / angle * 1000) / 1000;
  if (arc === "?") return Math.round(angle * radius * 1000) / 1000;
  if (angle === "?") return Math.round(arc / radius * 1000) / 1000;
  return radius === arc / angle;
}
*/