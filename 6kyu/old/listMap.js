/* 
6kyu - Fun with lists: map
https://www.codewars.com/kata/58259d9062cfb45e1a00006b

Implement the method map, which accepts a linked list (head) 
and a mapping function, and returns a new linked list (head) 
where every element is the result of applying the given mapping method to each element of the original list.

Оригинальный список не должен изменяться.
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function map(head, f) {
  let result = null, h = head, ptr;
  while (h) {
    if (!result) {
      result = new Node(f(h.data));
      ptr = result;
    } else {
      ptr.next = new Node(f(h.data));
      ptr = ptr.next;
    }
    h = h.next;
  }
  console.log('head=', head);
  return result;
}


let data = new Node(1, new Node(2, new Node(3)));
console.log(map(data, x => x * 2));

// best

/* 
function map(head, f) {
  return !head ? null : new Node(f(head.data), map(head.next, f));
}
*/