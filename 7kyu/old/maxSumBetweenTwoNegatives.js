/* 
7kyu - Max sum between two negatives
https://www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

You have a list of integers. 
The task is to return the maximum sum of the elements located between two negative elements,
or if there is no such sum: -1.

No negative element should be present in this sum.
*/


function maxSumBetweenTwoNegatives(arr) {
  let indexes = arr.map((e, i) => e < 0 ? i : -1).filter(e => e >= 0), max = -1
  let max = -1;
  for (let i = 0; i < indexes.length - 1; i++) {
    max = Math.max(arr.slice(indexes[i] + 1, indexes[i + 1]).reduce((sum, v) => sum + v, 0), max);
  }
  return max;
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]), 8);
console.log(maxSumBetweenTwoNegatives([5, -1, -2]), 0);
console.log(maxSumBetweenTwoNegatives([1, -2]), -1);
console.log(maxSumBetweenTwoNegatives([-1, 2]), -1);

//best
/* 
function maxSumBetweenTwoNegatives(a) {
  let i=0,c=0,m=-1;
  while(i<a.length&&a[i]>=0) i++;
  while(++i<a.length){
    if(a[i]<0){ m=m<c?c:m; c=0; }
    else c+=a[i];
  }
  return m;
}
*/

/* 
function maxSumBetweenTwoNegatives(a) {
  let result = -1;
  let sum = -1;
  for (let x of a)
  {
    if (sum == -1 && x < 0)
    {
      sum = 0;
    }
    else if (sum >= 0 && x < 0)
    {
      result = Math.max(result, sum);
      sum = 0;
    }
    else if (sum >= 0)
    {
      sum += x;
    }
  }
  return result;
}
*/

/* 
function maxSumBetweenTwoNegatives(arr) {
  let i=0, c=0, m=-1;
  while(i < arr.length && arr[i] >= 0) i++;
  while(++i < arr.length){
    if(arr[i] < 0){ m=m<c?c : m; c = 0; }
    else c += arr[i];
  }
  return m;
}
*/

/* 
function maxSumBetweenTwoNegatives(a) {
  const s = a.join(' ')               // stringify the array 
    .replace(/^.*?((-\d)|$)/, '$1')   // get rid of anything before the first negative number
    .replace(/(^|(-\d))[^-]*$/,'$1'); // get rid of anything after  the last  negative number

  const series = s.split(/-\d+/g)  // split through negative numbers (keep only the intervals between negative numbers)
    .filter(Boolean)              // filter out any empty entry (which appear when 2 consecutive numbers are negative)
    .map(e => e.split(' ').reduce((a,v)=>+v+a,0)); // sum each remaining interval

  // if we have results, return the max. else, return -1
  return  series.length ? Math.max(...series) : -1; 
}
*/

/* 
onst maxSumBetweenTwoNegatives = a =>
  a.reduce(([sum, max], val) => val < 0 ? [0, Math.max(sum, max)] : [sum < 0 ? sum : sum + val, max], [-1, -1]).pop();
*/