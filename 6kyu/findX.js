/* 
6kyu - Find X
https://www.codewars.com/kata/5ae71f8c2c5061059e000044
*/

/*
function findX(n) {
  let x = 0;
  let z = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n; j++) {
      x += i + j;
    }
    z += (i + (n * 2 - 1 + i)) * n;
  }
  return [x, z];
  //return x;
}
*/

// final
function findX(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    x += (i + (n * 2 - 1 + i)) * n;
  }
  return x;
}

// best

/* 
const findX = n => n * n * (3 * n - 2);
*/