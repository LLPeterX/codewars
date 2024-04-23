/* 
6kyu - Number Shortening Filter
https://www.codewars.com/kata/56b4af8ac6167012ec00006f/train/javascript

In this kata, we will create a function which returns another function 
that shortens very long numbers. 

Given an initial array of values replace the Xth power of a given base. 
If the input of the returned function is not a numerical string, 
it should return the input itself as a string.
*/

function shortenNumber(suffixes, base) {
  return (v) => {
    if(!v || /\D/.test(v.toString())) return v.toString();
    let i = 0, num=+v;
    for(i=0; i<suffixes.length-1 && num>base; i++) {
      num/=base;
    }
    return ~~num+suffixes[i];
  }
}

let filter1 = shortenNumber(['','k','m'],1000);
console.log(filter1('234324'), '234k');
console.log(filter1('98234324'), '98m');
console.log(filter1([1,2,3]), '1,2,3');
console.log(filter1(''), '');
console.log(filter1('32424234223'), '32424m');
var filter2 = shortenNumber(['','KB','MB','GB'],1024);
console.log(filter2('32'), '32');
console.log(filter2('2100'), '2KB');
console.log(filter2('pippi'), 'pippi');
console.log(filter2('2100k'), '2100k');
console.log(filter2('1073741823'), '1023MB')