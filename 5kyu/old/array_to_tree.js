/* 
5kyu - Fun with trees: array to tree
https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd

You are given a non-null array of integers. 
Implement the method arrayToTree which creates a binary tree 
from its values in accordance to their order, 
while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:
//                            R   L   R  L   R

    17
   /  \
  0   -4
 / \
3   15 

Для k=0:
 left = k*2+1
 right = k*2+2
 k+=1; // fail
*/

var TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};


function arrayToTree(array) {
  let targets = [[]], root;
  for (let i = 0; i < array.length; i++) {
    let node = new TreeNode(array[i]);
    let [target, side] = targets[i];
    targets.push([node, 'left'], [node, 'right']);
    if (!target) {
      root = node;
      //} else if (array[i] !== null) {
    } else {
      target[side] = node;
    }
  }
  return root;
}



console.log(arrayToTree([17, 0, -4, 3, 15]), new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4)));

// best
/* 
function arrayToTree(array) {
  return (function nodeFromIndex(i) {
    if(array[i] === undefined)
      return;
    return new TreeNode(array[i], nodeFromIndex(i * 2 + 1), nodeFromIndex(i * 2 + 2));
  })(0);
};
*/

/* 
function arrayToTree(values, i = 0) {
  if (i >= values.length) return;
  return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
                                 arrayToTree(values, 2 * i + 2));
}
*/

/* 
function arrayToTree(a) {
  a=a.map(x=>new TreeNode(x)); 
  a.forEach((x,i)=>(x.left=a[2*i+1],x.right=a[2*i+2]));
  return a[0];
};
*/