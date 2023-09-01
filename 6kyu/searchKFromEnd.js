/* 
6kyu - Node Mania
https://www.codewars.com/kata/5567e7d0adb11174c50000a7/train/javascript

Дан связанный список. Нвайти k-й с конца элемент. k>=1.
Если за пределами списка, вернуть null
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
  static build(arr) {
    let root = new Node(arr[0], null);
    let node = root;
    for (let i = 1; i < arr.length; i++) {
      node.next = new Node(arr[i], null);
      node = node.next;
    }
    return root;
  }
}

function searchKFromEnd(linkedList, k) {
  let values = [], node = linkedList;
  while (node !== null) {
    values.push(node.data);
    node = node.next;
  }
  return values.at(-k) || null;
}

let a = new Node(5, new Node(2, new Node(3, new Node(1, null))));
console.log(searchKFromEnd(a, 2), 3);
console.log(searchKFromEnd(a, 1), 1);

// best
/* 
function searchKFromEnd(linkedList, k) {
  return (Number(`${linkedList}`.split(" -> ").at(-k)) || null)
}
*/