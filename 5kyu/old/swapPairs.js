/* 
5kyu - Swap Node Pairs In Linked List
https://www.codewars.com/kata/59c6f43c2963ecf6bf002252

You are given the head node of a singly-linked list. 
Write a method that swaps each pair of nodes in the list, 
then returns the head node of the list. 

You have to swap the nodes themselves, not their values.

Example:
(A --> B --> C --> D) => (B --> A --> D --> C)

The swapping should be done left to right, so if the list has an odd length, the last node stays in place:
(A --> B --> C) => (B --> A --> C)

*/

function Node(value) {
  if (!(this instanceof Node)) return new Node(value);

  if (value instanceof Node) {
    this.next = value.next === null ? null : new Node(value.next);
    value = value.getValue();
  } else {
    this.next = null;
  }

  this.getValue = function () { return value; }
  this.printList = function () {
    if (this.next === null) return this.getValue() + " -> null";
    return this.getValue() + " -> " + this.next.printList();
  }
}

function ListBuilder() {
  let head = null;
  let res = null;

  this.withValue = function (value) {
    const node = new Node(value);
    if (head === null) {
      head = node;
      res = node;
    } else {
      res.next = node;
      res = res.next;
    }
    return this;
  }
  this.build = function () { return head; }
}
//--------------------------------------------------------------


function swapPairs(head) {
  if (!head) return null;
  let node = head;
  let values = [];
  while (node) {
    values.push(node.getValue());
    node = node.next;
  }
  for (let i = 0; i < values.length - 1; i += 2) {
    [values[i], values[i + 1]] = [values[i + 1], values[i]];
  }
  const result = new Node(values[0]);
  node = result;
  for (let i = 1; i < values.length; i++) {
    node.next = new Node(values[i]);
    node = node.next;
  }
  return result;
}



// best
/* 
function swapPairs(head) {
    if (head === null || head.next === null) return head;

    const node = new Node(head.next.getValue());
    node.next = new Node(head.getValue());
    node.next.next = swapPairs(head.next.next);

    return node;
}

*/

/* 
function swapPairs(head) {
     if (!head || !head.next) {
        return head;
    }

    let prev = null;
    let current = head;
    let next = null;

    while (current && current.next) {
        next = current.next;
        current.next = next.next;
        next.next = current;

        if (prev) {
            prev.next = next;
        } else {
            head = next;
        }
        prev = current;
        current = current.next;
    }

    return head;
}
*/