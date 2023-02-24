/* 
6kyu - Pattern: Wave
https://www.codewars.com/kata/56e67d6166d442121800074c/train/javascript

Complete the pattern, using the special character ■   □
In this kata, we draw some histogram of the sound performance of ups and downs.

*/

function draw(waves) {
  let max = Math.max(...waves);
  let graph = new Array(max).fill().map(_ => Array(waves.length).fill("□"));
  for (let i = 0; i < waves.length; i++) {
    for (let j = 0; j < waves[i]; j++) {
      graph[max - j - 1][i] = "■";
    }
  }
  return graph.map(row => row.join``).join("\n");
}

console.log(draw([1, 2, 3, 4]));
console.log(draw([1, 0, 1, 0, 1, 0, 1, 0]));
console.log(draw([5, 3, 1, 2, 4, 6, 5, 4, 2, 3, 5, 2, 1]));