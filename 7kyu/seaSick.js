/* 
7kyu - Holiday V - SeaSick Snorkelling
https://www.codewars.com/kata/57e90bcc97a0592126000064/train/javascript
*/

function seaSick(x) {
  let m = (x.match(/_~/g) || []).length + (x.match(/~_/g) || []).length;
  return m / x.length > 0.2 ? "Throw Up" : "No Problem"
}

console.log(seaSick("~"), "No Problem"); // OK
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~"), "Throw Up"); // OK
console.log(seaSick("______~___~_"), "Throw Up"); // FAIL
console.log(seaSick("~~~~__"), "No Problem");

// best

/* 
function seaSick(x){
  var count = 0;
  
  x.split('').reduce(function(first, second) {
    first != second ? ++count : count;
    return second;
  });
  
  if ((count / x.length) * 100 > 20) {
    return "Throw Up";
  }
  
  return "No Problem";
}
*/

/* 
function seaSick(x){
var a = x.split("_~").length-1
var b = x.split("~_").length-1
return (a+b)/x.length>0.2?"Throw Up":"No Problem"
}
*/