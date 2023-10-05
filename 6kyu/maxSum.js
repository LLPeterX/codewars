/* 
6kyu - Fun with trees: max sum
https://www.codewars.com/kata/57e5279b7cf1aea5cf000359

You are given a binary tree. 
Implement the method maxSum which returns the maximal sum of a route from root to leaf.
*/

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  };
};
// --------------------------------------------------

function findsum(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return node.value;
  let l = findsum(node.left);
  let r = findsum(node.right);
  return Math.max(l, r) + node.value;
}

function maxSum(root) {
  if (!root) return 0;
  return findsum(root);
}

// FINAL:
/* 
function findsum(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return node.value;
  return Math.max(findsum(node.left), findsum(node.right)) + node.value;
}

function maxSum(root) {
  return root ? findsum(root) : 0;
}
*/

//console.log(maxSum(null), 0);
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
console.log(maxSum(root), 33);

// best
/* 
function maxSum(root) {
  if (!root) return 0;
  return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}
*/