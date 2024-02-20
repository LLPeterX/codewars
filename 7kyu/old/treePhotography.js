/* 
7kyu - Tree Photography
https://www.codewars.com/kata/64fd5072fa88ae669bf15342/train/javascript
*/
function treePhotography(trees) {
  let countLeft = countRight = maxViewLeft = maxViewRight = 0;
  for (let l = 0, r = trees.length - 1; l < trees.length; l++, r--) {
    if (trees[l] > maxViewLeft) {
      maxViewLeft = trees[l];
      countLeft++;
    }
    if (trees[r] > maxViewRight) {
      maxViewRight = trees[r];
      countRight++;
    }
  }
  return countLeft >= countRight ? 'left' : 'right';
}


console.log(treePhotography([1, 2, 3, 6, 5]), "left");
console.log(treePhotography([5, 6, 5, 4]), "right");
console.log(treePhotography([1, 3, 1, 6, 5]), "left");
console.log(treePhotography([1, 1, 2, 2, 2, 2, 3]), "left");
console.log(treePhotography([1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2]), "left");
console.log(treePhotography([3, 3, 3, 3, 2]), "right");
console.log(treePhotography([4, 3, 2, 3, 3, 3, 1]), "right");
console.log(treePhotography([3, 1, 4, 5, 2, 5, 1]), "left");
console.log(treePhotography([4, 3, 3, 4, 3, 1, 3]), "right");
console.log(treePhotography([5, 1, 2]), "right");
console.log(treePhotography([1, 2, 4, 1, 5, 3, 1]), "left");
console.log(treePhotography([1, 1, 1, 4, 1, 3, 5]), "left");
console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6]), "left");

// best
/* 
function treePhotography(trees) {
  let max = Math.max(...trees);
  let left = trees.slice(0,trees.indexOf(max)+1).filter((e,i) => i==0||e>trees[0]).length;
  let right = trees.slice(trees.lastIndexOf(max)).filter((e,i,r) => i==r.length-1||e>r[r.length-1]).length;
  return left>right?'left':'right';
}
*/