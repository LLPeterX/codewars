/* 
7kyu - LinkedList -> Array
https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript
*/

function listToArray(list) {
  let result = [list.value];
  while (list.next !== null) {
    list = list.next;
    result.push(list.value);
  }
  return result;
}

var list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
var list2 = { value: "foo", next: { value: "bar", next: null } };

console.log(listToArray(list1), [1, 2, 3]);
console.log(listToArray(list2), ["foo", "bar"]);

// best

/* 
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}
*/