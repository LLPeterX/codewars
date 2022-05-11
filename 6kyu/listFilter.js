/* 
6kyu - Fun with lists: filter
https://www.codewars.com/kata/582041237df353e01d000084/train/javascript
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function filter(head, p) {
  let result = null, h = head, ptr;
  while (h) {
    if (p(h.data)) {
      if (!result) {
        result = new Node(h.data);
        ptr = result;
      } else {
        ptr.next = new Node(h.data);
        ptr = ptr.next;
      }
    }
    h = h.next;
  }
  return result;
}

let src = new Node(1, new Node(2, new Node(3)));
//console.log(filter(src, (x) => true));
console.log(filter(src, (x) => x > 1));

// best
/* 
function filter(head, p) {
  return !head ? null : p(head.data) ? new Node(head.data, filter(head.next, p)) : filter(head.next, p);
}
*/