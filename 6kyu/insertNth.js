/* 
6kyu - Linked Lists - Insert Nth Node
https://www.codewars.com/kata/55cacc3039607536c6000081

Write a RemoveDuplicates() function which takes a list 
sorted in increasing order and deletes any duplicate nodes from the list. 
Ideally, the list should only be traversed once. 
The head of the resulting list should be returned.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let ptr = head, parent = null;
  let i = 0;
  let done = false;
  if (!head) return new Node(data);
  while (ptr) {
    if (i === index) {
      let node = new Node(data);
      node.next = ptr;
      if (parent) {
        parent.next = node;
      } else {
        parent = head = node;
      }
      done = true;
      break;
    }
    parent = ptr;
    ptr = ptr.next;
    i++;
  }
  if (index === i && !done) {
    parent.next = new Node(data);
    done = true;
  }
  if (!done) {
    throw Error();
  }
  return head;
}

// ---- additional functions for test
function buildList(arr) {
  let head = ptr = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ptr.next = new Node(arr[i]);
    ptr = ptr.next;
  }
  return head;

}
let y = buildList([1, 2, 3]);
console.log(insertNth(y, 0, 7)); // [1,7,2,3]
let z = buildList([1, 2]);
console.log(insertNth(z, 2, 7)); // [1,2,7]

// best

/* 
function insertNth(head, index, data) {
  if(index == 0) return new Node(data, head);
  if(head && index > 0) {
    head.next = insertNth(head.next, index - 1, data);
    return head;
  }
  throw "Error";
}
*/

/* 
function insertNth(head, index, data) {

  var node = new Node(data);
  if (index == 0) {
    node.next = head;
    return node;
  }
  
  var counter = 0;
  var previous, current = head;
  while (counter < index) {
    previous = current;
    current = current.next;
    counter++;
  }
  
  node.next = current;
  previous.next = node;
  
  return head;
}
*/