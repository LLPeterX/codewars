/* 
6kyu - Parse a linked list from a string
https://www.codewars.com/kata/582c5382f000e535100001a7/train/javascript

Преобразовать строку типа "1 -> 2 -> 3 -> null" в связанный список

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function parse(string) {
  const arr = string.split(' -> ').map(Number);
  if (isNaN(arr[0])) return null;
  let res = new Node(arr[0]), ptr = res;
  for (let i = 1; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      let x = new Node(arr[i]);
      ptr = ptr.next = x;
    }
  }
  return res;
}

console.log(parse("1 -> 2 -> 3 -> null"), "\n=>\n", new Node(1, new Node(2, new Node(3))));
console.log(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
console.log(parse("null"), null);

// best

/* 
const parse = string => string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);
*/

/* 
function parse(string) {
  return string
    .split(' -> ')
    .reverse()
    .map(val => JSON.parse(val))
    .reduce((list, val) => new Node(val, list));
}
*/

/* 
const parse = (string) => string.split(' -> ').reverse().reduce((node, val) => val === 'null' ? node : new Node(+val, node), null);
*/