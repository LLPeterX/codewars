/* 
7kyu - Fun with lists: indexOf
https://www.codewars.com/kata/581c6b075cfa83852700021f/train/javascript


*/

function indexOf(head, value) {
  let level = -1;
  while (head) {
    if (head.data === value) return level + 1;
    head = head.next;
    ++level;
  }
  return -1;
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
console.log(indexOf(null, 17), -1);
console.log(indexOf(new Node(1, new Node(2, new Node(3))), 2), 1);
console.log(indexOf(new Node('aaa', new Node('b', new Node('abc'))), 'aaa'), 0);
console.log(indexOf(new Node(1, new Node(2, new Node(3))), 4), -1);

// cool
/* 
const indexOf = (head, value, i=0) => (
  head == null? -1 : head.data === value ? i : indexOf(head.next, value, i+1)
)
 */