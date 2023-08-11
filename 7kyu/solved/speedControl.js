/* 
 7kyu Speed Control
 https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
 */

 function gps(s, x) {
  //  let averages = [];
  //  for(let i=0; i<x.length-1; i++) {
  //    console.log(` avg ${x[i]}-${x[i+1]} => ${(x[i+1]-x[i])/s*3600}`);
  //    averages.push(Math.floor((x[i+1]-x[i])/s*3600));

  //  }
  //  console.log(averages);
  //  return Math.max(...averages);
  //let averages = x.map((_,i)=>Math.floor((x[i]-x[i-1])/s*3600));
  //console.log(slice(averages);
  //return Math.max(...averages);
  return x.length<2 ? 0: Math.max(...x.map((_,i)=>Math.floor((x[i]-x[i-1])/s*3600)).slice(1));
  }

  console.log(gps(15,[0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
  console.log(gps(19,[]));