/* 
6kyu - Unknown amount of duplicates. One missing number.
https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b

Дан неотсортированный массив последовательных чисел.
Найти в нем одно пропущенное число и все дубликаты.
Массив может быть большой (~1,000,000)

*/

/* 
FAIL WITH TIMEOUT
*/

/* 
function findDupsMiss(arr) {
  const dupsMap = new Map();
  let missing = null;
  arr.sort((a, b) => a - b).forEach((e, i, a) => {
    dupsMap.set(e, (dupsMap.has(e) || 0) + 1);
    if (i && e - a[i - 1] == 2) missing = (e + a[i - 1]) / 2;
  });
  let dupsArr = Array.from(dupsMap).filter(e => e[1] > 1).map(e => e[0]);
  return [missing, dupsArr];
}
 */
function findDupsMiss(arr) {
  let min = Infinity, max = -Infinity, sum = 0;
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    nums[arr[i]] = (nums[arr[i]] || 0) + 1;
    if (nums[arr[i]] === 1) sum += arr[i];
  }
  let missNumber = max * (max + 1) / 2 - (min - 1) * min / 2 - sum;
  return [missNumber, Object.keys(nums).filter(k => nums[k] > 1).map(Number)];
}

var arr1 = [10, 9, 8, 9, 6, 1, 2, 4, 3, 2, 5, 5, 3];
console.log(findDupsMiss(arr1), [7, [2, 3, 5, 9]]);

var arr2 = [20, 19, 6, 9, 7, 17, 16, 17, 12, 5, 6, 8, 9, 10, 14, 13, 11, 14, 15, 19];
console.log(findDupsMiss(arr2), [18, [6, 9, 14, 17, 19]]);

var arr3 = [24, 25, 34, 40, 38, 26, 33, 29, 50, 31, 33, 56, 35, 36, 53, 49, 57, 27, 37, 40, 48, 44, 32, 35, 45, 52, 43, 47, 26, 51, 55, 28, 41, 42, 46, 51, 25, 30, 44, 54];
console.log(findDupsMiss(arr3), [39, [25, 26, 33, 35, 40, 44, 51]]);

// best
/* 
function findDupsMiss(arr) {
  let dups = [], set = Array.from(new Set(arr)), sum = 0, min = Infinity, max = -Infinity, counts = {}
  for (let a of arr) {
    if (counts[a]) {
      counts[a] += 1
      dups.push(a)
    } else {
      counts[a] = 1
      sum += a
    }
    if (min > a) min = a
    if (max < a) max = a
  }
  let len = set.length, correctSum = (min + max) * (len + 1) / 2, missing = correctSum - sum
  return [missing, dups.sort((a, b) => a - b)]
}
*/

/* 
function findDupsMiss(arr) {
    var missing = null,duplicateList=[];
    arr.sort((a,b)=>a-b);
    arr.forEach((a,index)=>
      a===arr[index+1]?duplicateList.push(a):(a===arr[index+1]-2)&&(missing=arr[index+1]-1)
    );
    return [missing,Array.from(new Set(duplicateList))];
}
*/

/* 
const findDupsMiss = a => [ a.sort( (v,w) => v-w ).find( (_,i) => a[i+1]-a[i]>1 )+1, a.filter( (_,i) => a[i+1]===a[i] ) ] ;
*/