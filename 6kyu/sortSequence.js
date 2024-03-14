/* 
6kyu - Sort the number sequence
https://www.codewars.com/kata/5816b76988ca9613cc00024f/train/javascript

You are given a number sequence (an array) that contains some positive integer and zero.

[3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
It can be split to some zero-terminated sub sequence, such as [3,2,1,0], [5,6,4,0] ..

Your task is: 
1. First, sort each sub sequence according to the ascending order 
   (don't sort the zero, it always at the end); 
2.  Second, sort all sub sequence according to their sum value (ascending order too).

The result is the sorted number sequence.
If some sub sequences have the same sum value, sort them according to their original order. (!)
*/


function sortSequence(sequence) {
  const subseq = [];
  for (let i = 0, k = 0; i < sequence.length; i++) {
    if (sequence[i] === 0) {
      let arr = sequence.slice(k, i).sort((a, b) => a - b);
      let sum = arr.reduce((s, v) => s + v, 0);
      subseq.push({ i, arr, sum });
      k = i + 1;
    }
  }
  return subseq.sort((a, b) => a.sum - b.sum || a.i - b.i)
    .reduce((r, e) => [...r, ...e.arr, 0], [])
}

// console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0]),
//   [1, 2, 3, 0, 1, 3, 5, 0, 2, 4, 8, 0, 4, 5, 6, 0])

// console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0]),
//   [1, 2, 3, 0, 2, 2, 2, 0, 1, 3, 5, 0, 4, 5, 6, 0])

// console.log(sortSequence([2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0]),
//   [2, 2, 2, 0, 1, 2, 3, 0, 1, 3, 5, 0, 4, 5, 6, 0])


// best

/* 
const sum = arr => arr.reduce((a,b) => a + b, 0);

function sortSequence (sequence) {
  let res = [];
  for (let i = 0; i < sequence.length; ++i) {
    let temp = [];
    while (sequence[i] !== 0) temp.push(sequence[i++]);
    res.push({
      value: temp.sort((a,b) => a-b).concat(0),
      index: i,
      total: sum(temp)
    });
  }
  res.sort((a,b) => a.total - b.total || a.index - b.index);
  return res.reduce((acc,v) => acc.concat(v.value), []);
}
*/