/* 
Make the Deadfish swim
https://www.codewars.com/kata/51e0007c1f9378fa810002a9


*/
function parse( data )
{
  let value = 0, res=[];
  for(let i=0; i<data.length; i++) {
    if(data[i] == 'i') value++;
    else if(data[i] == 'd') value--;
    else if(data[i] == 's') value *=value;
    else if(data[i] === 'o') res.push(value);
  }
  return res;
}


console.log(parse("iiisdoso")); // [8,64]
console.log(parse("iiisxxxdoso")); // [8,64]