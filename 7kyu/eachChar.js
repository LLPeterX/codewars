/* 
7kyu - RuplesJS #3: String EachChar
https://www.codewars.com/kata/56808724e7784d220c00003f/javascript 
*/

String.prototype.eachChar = function (c) {

  // if (typeof c === 'function') {
  //   console.log('fun');
  //   return this.replace(/./g, c);
  // } else {
  //   console.log('char');
  //   return this.replace(/./g, (x) => x + c);
  // }

  return this.replace(/./g, typeof c === 'function' ? c : (x) => x + c);
}

