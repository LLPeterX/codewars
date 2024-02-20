/* 
7kyu - Sum of Cubes
*/
function sumCubes(n) {
  return Array(n).fill().map((_, i) => i + 1).reduce((sum, v) => sum + v * v * v, 0);
}

console.log(sumCubes(123));
//best
/*
function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
}
*/