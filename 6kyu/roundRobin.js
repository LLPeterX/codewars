/* 
6kyu - Scheduling (Round-Robin)
https://www.codewars.com/kata/550cb646b9e7b565d600048a
*/

function roundRobin(jobs, slice, index) {
  let cc = 0, k = 0;;
  while (jobs[index] > 0) {
    if (jobs[k] >= slice) {
      cc += slice;
      jobs[k] -= slice;
    } else {
      cc += jobs[k];
      jobs[k] = 0;
    }
    k = (k + 1) % jobs.length;
  }
  return cc;
}

console.log(roundRobin([10, 20, 1], 5, 0), 16);
console.log(roundRobin([10], 4, 0), 10);