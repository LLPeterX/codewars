/* 
6kyu - zipWith II: Lists :]
https://www.codewars.com/kata/5826231422be6e7344000006

This zipWith takes a function and two lists and zips the lists together, applying the function to every pair of values.
The function value is one new list.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function zipWith(fn, head0, head1) {
  let result = null, pr;
  while (head0 && head1) {
    let v = fn(head0.value, head1.value);
    if (!result) {
      result = new Node(v);
      pr = result;
    } else {
      pr.value = v;
    }
    head0 = head0.next;
    head1 = head1.next;
    if (!head0 || !head1) break;
    pr.next = new Node();
    pr = pr.next;
  }
  return result;
}

// --------------------------------------------
function arrayToList(arr) {
  let result = new Node(arr[0]);
  let pr = result;
  for (let i = 1; i < arr.length; i++) {
    pr.next = new Node(arr[i]);
    pr = pr.next;
  }
  return result;
}

// let v = zipWith((a, b) => a + b,
//   new Node(0, new Node(1, new Node(2))),
//   new Node(0, new Node(1, new Node(2)))
// );
//console.log(v);
//=> new Node(0, new Node(2, new Node(4)))

console.dir(arrayToList([0, 1, 2, 3]));
let n1 = arrayToList([10, 10, 10, 10]);
let n2 = arrayToList([0, 1, 2, 3]);
console.log(zipWith(Math.pow, n1, n2));

// best
/* 
function zipWith(f, g, h) {
  return g === null || h === null ? null : new Node(f(g.value, h.value), zipWith(f, g.next, h.next));
}
*/