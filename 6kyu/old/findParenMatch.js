/* 
6kyu - Find matching parenthesis
https://www.codewars.com/kata/59293c2cfafd38975600002d

Implement String prototype method findParenMatch, taking an index pointing into the string as an argument:
String.prototype.findParenMatch = function(pos) {} ;

Based on the given index, return the index of the matching parenthesis in the given string; 
or -1, Nothing or a similar empty value, if there is no such index.
*/

String.prototype.findParenMatch = function (pos) {
  if (typeof pos !== 'number' || pos >= this.length) return -1;
  let count = 0;
  if (this[pos] === '(') {
    for (let i = pos; i < this.length; i++) {
      if (this[i] === '(') count++;
      if (this[i] === ')') count--;
      if (count === 0) return i;
    }
    return -1;
  } else if (this[pos] === ')') {
    for (let i = pos; i >= 0; i--) {
      if (this[i] === ')') count++;
      if (this[i] === '(') count--;
      if (count === 0) return i;
    }
  }
  return -1;
}

// console.log("(something)".findParenMatch(0), 10);
// console.log("(something)".findParenMatch(10), 0);
// console.log("(som(th)ng)".findParenMatch(0), 10);
// console.log("(som(th)ng)".findParenMatch(10), 0);
console.log("(som(th)ng)".findParenMatch(4), 7);
console.log("(som(th)ng)".findParenMatch(7), 4);

console.log(")()".findParenMatch(0), -1);
console.log(")()".findParenMatch(1), 2);


// best
/* 
String.prototype.findParenMatch = function(pos) {
  const str = this.split('');
  const current = str[pos];
  const find = current == '(' ? ')' : '(';
  
  let jump = 0;
  while (pos < str.length + 1){
    current == '(' ? ++pos : --pos
    if(typeof str[pos] == 'undefined') return -1;
    if(str[pos] == current) jump++;
    if(str[pos] == find && 0 == jump--) return pos;
  }
  return -1;
};
*/

/* 
String.prototype.findParenMatch = function (pos) {
  const stack = [];
  for (let i = 0, j; i < this.length; i++) {
    if (this[i] == "(")
      stack.push(i);
    else if (this[i] == ")" && stack.length) {
      j = stack.pop();
      if (pos == i) return j;
      if (pos == j) return i;
    }
  }
  return -1;
};
*/
