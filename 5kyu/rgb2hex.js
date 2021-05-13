/* 
5kyu - RGB To Hex Conversion
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
*/

function rgb(r, g, b) {
  function hex(code) {
    if(code>255) code=255;
    if(code<0) code=0;
    return code.toString(16).toUpperCase().padStart(2,'0');
  } 
  return `${hex(r)}${hex(g)}${hex(b)}`;
}

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')

// best 

/* 
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
*/

/* 
function rgb(r, g, b){
  return [r,g,b].map(x => { 
    if(x > 255) return 'FF'
    else if(x < 1) return '00'
    else return x.toString(16).toUpperCase()}).join('') 
}
*/

/* 
function rgb(r, g, b){
   return [].map.call(arguments, function(arg) {
    return arg <= 0 ? '00' : arg > 255 ? 'FF' : arg.toString(16);
  }).join('').toUpperCase();
}
*/