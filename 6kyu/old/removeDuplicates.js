/* 
6kyu - Linked Lists - Remove Duplicates
https://www.codewars.com/kata/55d9f257d60c5fd98d00001b/train/javascript

Write a RemoveDuplicates() function which takes a list 
sorted in increasing order and deletes any duplicate nodes from the list. 
Ideally, the list should only be traversed once. 
The head of the resulting list should be returned.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  let ptr = head;
  while (ptr !== null) {
    if (ptr.next !== null) {
      if (ptr.data === ptr.next.data) {
        ptr.next = ptr.next.next;
      } else {
        ptr = ptr.next;
      }
    } else {
      ptr = ptr.next;
    }
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
let y = buildList([1, 1, 1]);
console.log(removeDuplicates(y)); // [1]

// best
/* 
function removeDuplicates(head) {
  for (var node = head; node != null; node = node.next) {
    while (node.next && node.data == node.next.data) {
      node.next = node.next.next
    }
  }
  return head
}
*/

/* 
function removeDuplicates (head) {
  if (!head) return null
  if (!head.next) return head

  let curr = head
  let prev = new Node()

  while (curr) {
    if (prev.data === curr.data)
      prev.next = curr.next
    else
      prev = curr

    curr = curr.next
  }

  return head
}
*/

/* 
function removeDuplicates(head) {
  if(!head) return null;
  
  let prev = head;
  let current = prev.next;
  
  while(current) {
    if(prev.data === prev.next.data) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    
    current = prev.next;  
  }
  
  return head;
}
*/