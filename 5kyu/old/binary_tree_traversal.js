/* 
5kyu - Binary Tree Traversal
https://www.codewars.com/kata/5268956c10342831a8000135

Given the root node of a binary tree write three functions 
that will print the tree in pre-order, in-order, and post-order.

Pre-order means that we
1.) Visit the root.
2.) Traverse the left subtree (left node.)
3.) Traverse the right subtree (right node.)

In-order means that we
1.) Traverse the left subtree (left node.)
2.) Visit the root.
3.) Traverse the right subtree (right node.)

Post-order means that we
1.) Traverse the left subtree (left node.)
2.) Traverse the right subtree (right node.)
3.) Visit the root.

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");

a.left = b;
a.right = c;
Then, preOrder(a) should return ["A", "B", C"]
inOrder(a) should return ["B", "A", "C"]
postOrder(a) should return ["B", "C", A"]

What would happen if we did this?

var d = new Node("D");
c.left = d;
preOrder(a) should return ["A", "B", "C", "D"]
inOrder(a) should return ["B", "A", "D", "C"]
postOrder(a) should return ["B", "D", "C", "A"]
*/

// prliminary
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// from https://www.digitalocean.com/community/tutorials/js-tree-traversal
function preOrder(node, result = []) {
  if (!node) return result;
  result.push(node.data);
  preOrder(node.left, result);
  preOrder(node.right, result);
  return result;
}

function inOrder(node) {
  let visited = [], current = node;

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.data);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return visited;
}

function postOrder(node) {
  let visited = [], current = node;

  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.data);
  };

  traverse(current);
  return visited;
}


// tests
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");

a.left = b;
a.right = c;
var d = new Node("D");
c.left = d;
/* 
     A
   B   C
      D 

*/

console.log(preOrder(a), ["A", "B", "C", "D"]);
console.log(inOrder(a), ["B", "A", "D", "C"]);
console.log(postOrder(a), ["B", "D", "C", "A"]);

//best
/*
// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
  if (node == undefined) {
    return [];
  }
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
  if (node == undefined) {
    return [];
  }
  return inOrder(node.left).concat(node.data).concat(inOrder(node.right));
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
  if (node == undefined) {
    return [];
  }
  return postOrder(node.left).concat(postOrder(node.right)).concat([node.data]);
}
*/

/* 
// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
  return node ? [ node.data, ...preOrder(node.left), ...preOrder(node.right) ] : [];
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
  return node ? [ ...inOrder(node.left), node.data, ...inOrder(node.right) ] : [];
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
  return node ? [ ...postOrder(node.left), ...postOrder(node.right), node.data ] : [];
}
*/

/* 
function preOrder(node)
{
    var result = [], stack = [node];
    while (stack.length) {
        node = stack.pop();
        result.push(node.data);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
}

function inOrder(node)
{
    var result = [], stack = [node];
    while (node = node.left) stack.push(node);
    while (stack.length) {
        node = stack.pop();
        result.push(node.data);
        if (node = node.right) {
            stack.push(node);
            while (node = node.left) stack.push(node);
        }
    }
    return result;
}

function postOrder(node)
{
    var result = [], stack = [node];
    while (stack.length) {
        node = stack.pop();
        result.push(node.data);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result.reverse();
}
*/