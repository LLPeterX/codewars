/* 
6kyu - Plus - minus - plus - plus - ... - Sum
https://www.codewars.com/kata/5bc463f7797b00b661000118

Given an array [x1, x2, ..., xn] determine 
whether it is possible to put + or - between the elements 
and get an expression equal to sum. Result is boolean

Example
arr = [1, 3, 4, 6, 8]

sum = -2

1 + 3 - 4 + 6 - 8 = -2
*/
/*
class Node {
  constructor(value) {
    this.value = value;
    this.plus = null;
    this.minus = null;
  }
}

// фигня...
function plusMinus(arr, sum) {
  let stack = [new Node(arr[0])];
  for (let i = 1; i < arr.length; i++) {
    node = stack.pop();
    node.plus = new Node(node.value + arr[i]);
    node.minus = new Node(node.value - arr[i]);
    stack.push(node.plus);
    stack.push(node.minus);
  }
  console.log(stack);
}
*/


// https://www.cyberforum.ru/cpp-beginners/thread1925873.html
// а как вернуть на самый верх результат?
function getSolution(arr, sum, i = 1, p = arr[0]) {
  let p1 = p + arr[i], p2 = p - arr[i];
  if (i === arr.length - 1) return p1 === sum || p2 === sum;
  return getSolution(arr, sum, i + 1, p1) || getSolution(arr, sum, i + 1, p2);
}



console.log(getSolution([1, 3, 4, 6, 8], -2), true)
console.log(getSolution([1, 3, 4, 6, 8], -2), true);
console.log(getSolution([15, 2, 3], 10), true);
console.log(getSolution([1, 5, 3, 2, 5], -2), false);

// best

/* 
function getSolution(arr, sum) {
  let sums = new Set([arr[0]]);
  for (let i = 1; i < arr.length; i++) {
    let nextSums = new Set();
    for (let x of sums)
      nextSums.add(x + arr[i]).add(x - arr[i]);
    sums = nextSums;
  }
  return sums.has(sum);
}
*/

/* 
const getSolution = ([first, second, ...arr], sum) =>
  second === void 0
    ? first === sum
    : getSolution([first + second, ...arr], sum)
        ||
      getSolution([first - second, ...arr], sum);
*/

/* 
const getSolution=(a,b)=>a.length<2?a[0]==b:getSolution(a.slice(1),b-a[0])||getSolution(a.slice(1),a[0]-b);
*/

/* 
function getSolution(arr, sum) {
  if (arr.length == 1) return sum == arr[0];
  let k = arr.pop();
  return getSolution(arr.slice(), sum-k) || getSolution(arr.slice(), sum+k);
}
*/