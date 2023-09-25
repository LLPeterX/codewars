/* 
6kyu - Arabian String
https://www.codewars.com/kata/525821ce8e7b0d240b002615

*/

function camelize(str){
  return str && str.length ? str.split(/[^A-Za-z0-9]/).filter(w=>w!='').map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join`` : "";
}

// console.log(camelize("java script"),"JavaScript" );
// console.log(camelize("cODE warS"),"CodeWars" );
// console.log(camelize("your-NaMe-here"),"YourNameHere" );
console.log(camelize("john doe\nfrank peas\nRugby:Club:2013\nArabian_String-Test\nNinja-Test--01"),"херня" );

//best
/* 
function camelize(str) {
  return str.match(/[a-z0-9]+/gi).map(function(s) {
    return s[0].toUpperCase() + s.substr(1).toLowerCase()
  }).join('')
}
*/
