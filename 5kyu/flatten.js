/* 
5kyu - flatten
https://www.codewars.com/kata/513fa1d75e4297ba38000003/train/javascript

For this exercise you will create a global flatten method. 
The method takes in any number of arguments and flattens them 
into a single array. 

If any of the arguments passed in are an array then the individual objects 
within the array will be flattened so that they exist at the same level 
as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.
*/

// function flatten(...args) {
//   return args.reduce(function (flat, toFlatten) {
//     return flat.concat(Array.isArray(toFlatten) ? flatten(...toFlatten) : toFlatten);
//   }, []);
// }

function flatten(...args) {
  return args.reduce((result, v) => result.concat(Array.isArray(v) ? flatten(...v) : v), []);
}


// best
/* 
function flatten(){
  return [].slice.call(arguments).reduce(function(a,b){              
    return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
  },[]);
}
*/

/* 
var flatten=function(...arr){
  return arr.toString().split(",");
}
*/

