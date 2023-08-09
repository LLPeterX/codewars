/* 
6kyu - The maximum and minimum difference -- Simple version
https://www.codewars.com/kata/583c5469977933319f000403/train/javascript

Даны 2 массива.
Определить минимальную и максимальную разницу между элементами.
*/

function maxAndMin(arr1, arr2) {
  let min = Infinity, max = -Infinity;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      min = Math.min(min, Math.abs(arr1[i] - arr2[j]));
      max = Math.max(max, Math.abs(arr1[i] - arr2[j]));
    }
  }
  return [max, min];
}

console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2])
console.log(maxAndMin([3], [20]), [17, 17])
console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0])
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1])

// best (?)

/* 
const maxAndMin = (arr1, arr2) => {
    let min = Infinity;
    let max = 0;

    for (let i = arr1.length; i-- > 0;) {
        for (let j = arr2.length; j-- > 0;) {
            const diff =
                arr1[i] > arr2[j] ?
                arr1[i] - arr2[j] :
                arr2[j] - arr1[i];

            if (min !== 0 && diff < min)
                min = diff;

            if (diff > max)
                max = diff;


        }
    }

    return [max, min]
}

*/