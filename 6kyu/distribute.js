/* 
6kyu - Distribute server workload
https://www.codewars.com/kata/59f22b3cf0a83ff3e3003d8c
*/

function distribute(nodes, workload) {
  let result = Array(nodes).fill().map(_ => []);
  let nodeIndex = 0, jobNum = 0;
  while (workload > 0) {
    let count = Math.ceil(workload / (nodes - nodeIndex));
    result[nodeIndex++] = Array(count).fill().map(_ => jobNum++);
    workload -= count;
  }
  return result;
}


// best

/* 
function distribute(nodes, workload){
  var works = new Array(workload).fill(0).map((v,i) => i);
  
  return new Array(nodes).fill(0).map((v,i) => works.splice(0,Math.ceil(works.length / (nodes - i))));
}
*/