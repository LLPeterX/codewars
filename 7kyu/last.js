/* 
7kyu - Last
https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

Find the last element of the given argument(s).

last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
*/

function last(list) {
  return arguments.length === 1 ? typeof list[Symbol.iterator] === 'function' ? list[list.length - 1] : list : [...arguments][arguments.length - 1];
  // if (arguments.length === 1) {
  //   return (typeof list[Symbol.iterator] === 'function') ? list[list.length - 1] : list;
  // } else {
  //   return [...arguments][arguments.length - 1];
  // }
}


console.log(last([1, 2, 3, 4, 5]), 5);   //-- array
console.log(last("abcde"), "e");     //-- string
console.log(last(1, "b", 3, "d", 5), 5);//-- arguments
console.log(last(5), 5);

// best

/* 
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
*/