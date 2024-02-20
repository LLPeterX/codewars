/* 
7kyu - Linked Lists - Push & BuildOneTwoThree
https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. 
Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  if (!head) return new Node(data);
  let ptr = new Node(data);
  ptr.next = head;
  return ptr;

}

function buildOneTwoThree() {
  let head = push(null, 3);
  head = push(head, 2);
  return push(head, 1);
}


//console.log(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
console.log(push(null, 1).next, null, "Should be able to create a new linked list with push().");
console.log(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
console.log(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");

console.log(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
console.log(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
console.log(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
console.log(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");

// best
/* 
function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
*/

/* 
function push(head, data) {
  var node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

function Node(data) {
  this.data = data;
  this.next = null;
}
*/

/* 
var push = (head, data) => new Node(data, head);

var build = (...args) => args.reduce(push, null);

var buildOneTwoThree = build.bind(null, 3, 2, 1);

var Node = (data, next = null) => ( {data, next} );
*/