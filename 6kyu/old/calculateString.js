/* 
6kyu - Basics 03: Strings, Numbers and Calculation
https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript

nput: String which consists of two positive numbers (doubles) 
and exactly one operator like +, -, * ,/ - always between these numbers. 

The string is dirty, which means that there are different characters inside too, 
not only numbers and the operator. 

You have to combine all digits left and right, perhaps with "." inside (doubles), 
and to calculate the result which has to be rounded to an integer 
and converted to a string at the end.
*/

// first variant:
function calculateString_(st) {
  let s = st.replace(/[^\d.+\-\*\/]/g, '');
  let m = s.match(/((\d*[\.])?\d*)([+\-*\/])((\d*[\.])?\d*)/);
  let [, a, , o, b] = m;
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };
  console.log(a, o, b);
  return "" + Math.round(ops[o](+a, +b));
  //return [a, o, b];
}

// shorten
function calculateString(st) {
  let [, a, , o, b] = st.replace(/[^\d.+\-\*\/]/g, '').match(/((\d*[\.])?\d*)([+\-*\/])((\d*[\.])?\d*)/);
  return "" + Math.round({
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }[o](+a, +b));
}


// console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"), "47");
// console.log(calculateString("sdfsd23454sdf*2342"), "54929268");
// console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"), "-210908"); // !!
// console.log(calculateString("fsdfsd234.4554s4234df+sf234442"), "234676");
// console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c"), '12');
// console.log(calculateString("8073lz0.iprwmdy/7ji353f7.bo69"), '?');
console.log(calculateString("4824j7.0w42dy*903ax90.6r985n30f"), '4361083828');

//best

// function calculateString(s) {
//   return eval(s.replace(/[^\d+*/.()-]/g, '')).toFixed();
// }

// function calculateString(s) {
//   return new Function(`return (${s.replace(/[^\d.+*/-]/g, "")}).toFixed()`)();
// }

