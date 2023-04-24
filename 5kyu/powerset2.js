/* 
5kyu - Simple Fun #273: Powerset
https://www.codewars.com/kata/59157809f05d9a8ad7000096

Дан массив целых чисел.
Реализовать алгоритм поиска в глубину (depth-first search) и вернуть все возможные комбинации чисел

[1, 2] => [[], [2], [1], [1, 2]] (4)
[1, 2, 3] => [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]] (8)

длина = 1...10
*/

function powerset(nums) {
  let result = [[]];
  for (let k = nums.length - 1; k >= 0; k--) {
    let L = result.length;
    for (let i = 0; i < L; i++) {
      result.push([nums[k], ...result[i]]);
    }
  }
  return result;
}
console.log(powerset([1, 2]), [[], [2], [1], [1, 2]]);
console.log(powerset([1, 2, 3]), [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]);

// best
/* 
const powerset=nums=> nums.reduceRight((a,n)=>a.push(...a.map(p=>[n,...p]))&&a, [[]])

const powerset=(n,c=[[]])=>(p=>n.length==1 ? p : powerset(n.slice(0,n.length-1),p))(c.concat(c.map(e=>[n[n.length-1]].concat(e))));
*/

/* 
const powerset = (nums) => {
  if (nums.length === 0) return [[]]
  const [num, ...rest] = nums
  const restPowerset = powerset(rest)
  const subsetsWithFirst = restPowerset.map((subset) => [num, ...subset])
  const subsetsWithoutFirst = restPowerset
  return [...subsetsWithoutFirst, ...subsetsWithFirst]
}
*/

/* 
const powerset = (nums, i = 0, arr = [], res = []) => {
  if (i === nums.length) {
    res.push(arr);
    return res;
  }
  
  powerset(nums, i + 1, arr, res);
  
  return powerset(nums, i + 1, [...arr, nums[i]], res);
};
*/
