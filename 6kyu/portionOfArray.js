/* 
6kyu - Portion of Array
https://www.codewars.com/kata/598e3859f289bb47ba00000a
*/

function portion(a, i, n) {
  let start, end, L = a.length;
  if (i >= 0) {
    start = i;
    end = i + n;
  } else {
    start = L + i - n;
    end = L + i;
  }
  if (start < 0 || start > L - 1 || end <= 0 || end > L - 1) return -1;
  return a.slice(start, end);
}

