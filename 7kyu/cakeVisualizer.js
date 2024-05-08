/* 
7kyu - Visualization of Wedding Cakes
https://www.codewars.com/kata/662f64adf925ebceb6c5a4e4/train/javascript
*/

function cakeVisualizer(s){
  let rows = s.split("\n");
  let result = rows.map(r=>r[0]+(' ').repeat((r.length-3)/2)+'|'+(' ').repeat((r.length-3)/2)+r[r.length-1]).join('\n');
  return result;
}
