/* 
7kyu - Presents
 */
function presents(a){
  let res = Array.from({length: a.length+1});
  a.map((v,i)=>res[v]=i+1);
  return res.slice(1)ж
}

console.log(presents([2, 3, 4, 1])); // [[4, 1, 2, 3]]
// best
/* 
const presents = a => a.map((v,i)=>a.indexOf(i+1)+1);
*/