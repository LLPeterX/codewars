/* 
6kyu - Linked Lists - Length & Count
https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

Реализовать функции 
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let l = 0;
  while (head) {
    l++;
    head = head.next;
  }
  return l;
}

function count(head, data) {
  let c = 0;
  while (head) {
    if (head.data === data) c++;
    head = head.next;
  }
  return c;
}

// best
/* 
function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}
*/