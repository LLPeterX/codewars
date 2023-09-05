/* 
5kyu - Fun with trees: is perfect
https://www.codewars.com/kata/57dd79bff6df9b103b00010f/train/javascript

 perfect binary tree is a binary tree in which all interior nodes 
 have two children and all leaves have the same depth or same level.

You are given a class called TreeNode. 
Implement the method isPerfect which determines if a given tree 
denoted by its root node is perfect.

Note: TreeNode class contains helper methods for tree creation, 
which might be handy for your solution. 
Feel free to update those methods, but make sure you keep 
their signatures intact (since they are used from within test cases).

You can (and should) add more tests to validate your solution, 
since not all cases are covered in the example test cases.
*/

// from: https://www.geeksforgeeks.org/check-weather-given-binary-tree-perfect-not/
class TreeNode {

  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(root) {
    return TreeNode.isPerfectRec(root, TreeNode.findDepth(root));
  }

  static isPerfectRec(node, depth, level = 0) {
    ++level;
    if (!node) return true;
    if (!node.left && !node.right) return depth === level;
    if (!node.left || !node.right) return false;
    return TreeNode.isPerfectRec(node.left, depth, level) && TreeNode.isPerfectRec(node.right, depth, level);
  }

  static findDepth(node) {
    let depth = 0;
    while (node) {
      depth++;
      node = node.left;
    }
    return depth;
  }

  static leaf() {
    return new TreeNode();
  }

  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }

  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }

}


// ---- tests ---
var root = TreeNode.leaf().withLeaves();
console.log(TreeNode.isPerfect(root), true);
root = TreeNode.leaf().withLeftLeaf();
console.log(TreeNode.isPerfect(root), false);

// best
/* 
...
static isPerfect(root) {
    if (!root) return true;
    if (TreeNode.countChildren(root.left) !== TreeNode.countChildren(root.right)) return false;
    return TreeNode.isPerfect(root.left) && TreeNode.isPerfect(root.right);
  }
  
  static countChildren(root) {
    if (!root) return 0;
    return 1 + TreeNode.countChildren(root.left) + TreeNode.countChildren(root.right);
  }
...  

*/