/* 
7kyu - Fun with lists: length
https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript

Дан список в виде 
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Найти длину списка
*/

function length(head) {
  let res = 0;
  while (head.next) {
    res++;
    head = head.next;
  }
  return res;
}

// best
/* 
function length(head) {
  if (head == null) return 0;
  return 1 + length(head.next);
}
*/