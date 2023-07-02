/* 
5kyu - Value of x
https://www.codewars.com/kata/614ac445f13ead000f91b4d0

Jack's teacher gave him a ton of equations for homework. 
The thing is they are all kind of same so they are boring.

So help him by making a equation solving function that will return the value of x.

Test Cases will be like this:

# INPUT            # RETURN
'x + 1 = 9 - 2'    # 6
'- 10 = x'         # -10
'x - 2 + 3 = 2'    # 1
'- x = - 1'        # 1

All test cases are valid.
Every +, - and numbers will be separated by space.
There will be only one x either on the left or right.
x can have a - mark before it.
returned object will be a integer.
*/


// можно сильно упростить!!!
/*
function valueOfX(eq) {
  let tokens = eq.split(' ').map(e => /\d/.test(e) ? +e : e);
  let eqIndex = tokens.indexOf('='), xIndex = tokens.indexOf('x');
  let xSign = tokens[xIndex - 1] === '-' ? -1 : 1;
  let left = tokens.slice(0, eqIndex);
  let right = tokens.slice(eqIndex + 1);
  let kx = right.indexOf('x');
  if (kx >= 0) {
    if (right[kx - 1] == '-') {
      left.push('+', 'x');
      right.splice(kx - 1, 2);
      xSign = 1;
    } else {
      left.push('-', 'x');
      right.splice(kx, 1);
      xSign = -1;
    }
  }
  kx = left.indexOf('x');
  // move numbers from left to right with sign change
  for (let i = 0; i < left.length; i++) {
    if (left[i] === '+') {
      if (Number.isInteger(left[i + 1])) {
        right.push('-', left[i + 1]);
        i++;
      }
    } else if (left[i] === '-') {
      if (Number.isInteger(left[i + 1])) {
        if (right[right.length - 1] !== '+') right.push('+');
        right.push(left[i + 1]);
        i++;
      }
    } else if (Number.isInteger(left[i])) {
      right.push('-', left[i]);
    }
  }
  return eval(right.join('')) * xSign;
}
*/

// simplify
function valueOfX(eq) {
  const arr = eq.split(' ').map(e => /\d/.test(e) ? +e : e);
  const tokens = [];
  let xSign = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      if (/\d/.test(arr[i + 1])) {
        tokens.push(arr[i + 1] * -1);
        i++;
      } else if (arr[i + 1] === 'x') {
        xSign = -1;
        tokens.push('x');
        i++;
      }
    } else if (arr[i] === '+') {
      if (/\d/.test(arr[i + 1])) {
        tokens.push(+arr[i + 1]);
        i++;
      } else if (arr[i + 1] === 'x') {
        xSign = 1;
        tokens.push('x');
        i++;
      }
    } else if (arr[i] === '=' || arr[i] === 'x') {
      tokens.push(arr[i]);
    } else if (Number.isInteger(arr[i])) {
      tokens.push(arr[i]);
    }
  }
  let eqIndex = tokens.indexOf('=');
  let left = tokens.slice(0, eqIndex);
  let right = tokens.slice(eqIndex + 1);

  // move x from right to left
  let kx = right.indexOf('x');
  if (kx >= 0) {
    xSign = xSign > 0 ? -1 : 1;
    right.splice(kx, 1)
  }
  // move numbers from left to right with sign change
  // for (let i = 0; i < left.length; i++) {
  //   if (left[i] !== 'x') right.push(left[i] * -1);
  // }
  right = right.concat(left.filter(e => e !== 'x').map(e => -1 * e));
  //console.log(` 3. eq="${eq}" L=${left} R=${right} S=${xSign}`);
  let expr = right.reduce((e, v) => e + (v > 0 ? '+' : '-') + Math.abs(v), "");
  return eval(expr) * xSign;
}





console.log(valueOfX('9 - 1 = - x + 10'), 2);
console.log(valueOfX('x + 1 = 9 - 2'), 6);
console.log(valueOfX('- x = - 1'), 1);
console.log(valueOfX('- 120 + 25 = - 27 - 64 - 13 - 21 + x'), 30);

// best
/* 
function valueOfX(eq) {
  let [left, right] = eq.split(' = '); 
  if (right.includes('x')) [left, right] = [right, left];
  return (eval(right) - eval(left.replace('x', 0))) * (left.includes('- x') ? -1 : 1);
}
*/

/* 
function valueOfX(eq) {
  let [left, right] = eq.split("=");
  if (right.includes("x")){
    [left, right] = [right, left];
  }

  return (left.includes("- x") ? -1 : 1) * (eval(right) - eval(left.replace("x", "0")))
}
*/