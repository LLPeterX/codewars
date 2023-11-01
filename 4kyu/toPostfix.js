/* 
4kyu - Infix to Postfix Converter
https://www.codewars.com/kata/52e864d1ffb6ac25db00017f/train/javascript

Construct a function that, when given a string containing an expression in infix notation,
will return an identical expression in postfix notation.

The operators used will be +, -, *, /, and ^ with left-associativity of all operators but ^.
The precedence of the operators (most important to least) are : 
  1) parentheses, 
  2) exponentiation, 
  3) times/divide, 
  4) plus/minus.

The operands will be single-digit integers between 0 and 9, inclusive.
Parentheses may be included in the input, and are guaranteed to be in correct pairs.

toPostfix("2+7*5"); // Should return "275*+"
toPostfix("3*3/(7+1)"); // Should return "33*71+/"
toPostfix("5+(6-2)*9+3^(7-1)"); // Should return "562-9*+371-^+"
toPostfix("1^2^3"); // Should return "123^^"  
*/

function toPostfix(infix) {
  const operators = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3
  };
  const isLeftAssoc = (op) => op !== '^';
  const last = (arr) => arr[arr.length - 1];
  const tokens = infix.match(/[\d\+\-*/^()]/g);
  let ops = [], result = [];
  for (let token of tokens) {
    if (/\d/.test(token)) result.push(token);
    else if (token === '(') {
      ops.push(token);
    } else if (token == ')') {
      while (ops.length > 0 && last(ops) != "(" &&
        last(ops) in operators) {
        result.push(ops.pop());
      }
      ops.pop();
    } else if (token in operators) {
      if (ops.length > 0 && last(ops) in operators) {
        let o1 = token, o2 = last(ops);
        while (ops.length && o2 in operators &&
          ((isLeftAssoc(o1) && operators[o1] <= operators[o2]) ||
            (!isLeftAssoc(o1) && operators[o1] < operators[o2]))) {
          result.push(ops.pop());
          if (ops.length > 0) o2 = last(ops);
          else break;
        }
      }
      ops.push(token);
    } else {
      result.push(token);
    }
  }
  result = [...result, ...ops.reverse()];
  return result.join``;
}

console.log(toPostfix("2+7*5"), "275*+");
console.log(toPostfix("3*3/(7+1)"), "33*71+/");
console.log(toPostfix("5+(6-2)*9+3^(7-1)"), "562-9*+371-^+");
console.log(toPostfix("(5-4-1)+9/5/2-7/1/7"), "54-1-95/2/+71/7/-");
console.log(toPostfix("1^2^3"), "123^^");

// best
/* 
function toPostfix (infix) {
  var postFix = "";
  var operatorStack = [];
  var operators = new Operators();

  infix.split("").forEach(function (token) {
    var operator = operators.getOperator(token);

    if (!operator) {
      postFix += token;
      return;
    }

    if (operator.isLeftParenthesis()) {
      operatorStack.push(operator);
      return;
    }

    if (operator.isRightParenthesis()) {
      while (operatorStack.length && !operatorStack[operatorStack.length - 1].isLeftParenthesis())
        postFix += operatorStack.pop();
      operatorStack.pop();
      return;
    }

    while (operatorStack.length && operator.isNotPreceding(operatorStack[operatorStack.length - 1]))
      postFix += operatorStack.pop();
    operatorStack.push(operator);
  });
  while (operatorStack.length)
    postFix += operatorStack.pop();
  return postFix;
}

var Operator = function (operatorSymbol, precedence, associativity) {
  this.operatorSymbol = operatorSymbol;
  this.precedence = precedence;
  this.associativity = associativity;

  this.isNotPreceding = function (operator) {
    return (this.associativity === "left" && this.precedence <= operator.precedence)
      || (this.associativity === "right" && this.precedence < operator.precedence);
  }

  this.isLeftParenthesis = function () {
    return this.operatorSymbol === '(';
  }

  this.isRightParenthesis = function () {
    return this.operatorSymbol === ')';
  }

  this.toString = function () {
    return this.operatorSymbol;
  }
}

var Operators = function () {
  this.operators = [
    new Operator("(", 1, ""),
    new Operator(")", 1, ""),
    new Operator("+", 2, "left"),
    new Operator("-", 2, "left"),
    new Operator("*", 3, "left"),
    new Operator("/", 3, "left"),
    new Operator("^", 4, "right")];

  this.getOperator = function (operatorSymbol) {
    var filterredOperators = this.operators.filter(function (findOperator) {
      return findOperator.operatorSymbol === operatorSymbol;
    });

    return filterredOperators.length ? filterredOperators[0] : null;
  }
}
*/

/* 
unction toPostfix (infix) {
  let stack = []
  let s = ""
  for(let x of infix){   
    
    if(/\d/.test(x)) s += x                                            // add digit to output
    
    if(x == "(" || x == '^') stack.push(x)                             // '^' has the highest precedence
    
    if(x == '+' || x == '-'){      
      while(stack.length && stack[stack.length - 1] != "("){
        s += stack.pop()                                              // remove '+', '-', '*', '/', '^' due to equal or higher precedence
      }
      stack.push(x)                                                   // then only add '+' or '-'
    }
    
    if(x == '*' || x == '/'){     
      while(stack.length && !/[\(+-]/.test(stack[stack.length - 1])){
          s += stack.pop()                                            // remove '*', '/', '^' due to equal or higher precedence
      }
      stack.push(x)                                                   // then only add '*' or '/'
    }
    
    if(x == ")"){
      while(stack[stack.length - 1] != "("){        
        s += stack.pop()                                             // remove all operators on top of first encountered '(' from top of stack
      }
      stack.pop()                                                    // remove '('
    }    
  }
  
  while(stack.length){
    s += stack.pop()                                                  // remove remaining operators from stack
  }
  return s
}
*/

/* 
function toPostfix (infix) {
  var s = [],
    p = {
      '+': 2, '-': 2,
      '/': 3, '*': 3,
      '^': 4
    }, t2;
  return infix.split('').reduce(function(o, t) {
    if (!isNaN(t)) o += t;
    else if (p[t]) {
      while ((t2 = s[s.length - 1]) && (t != '^' && p[t] <= p[t2] || p[t] < p[t2]))
        o += s.pop();
      s.push(t);
    }
    else if (t == '(') s.push(t);
    else if (t == ')') {
      while (s[s.length - 1] != '(') o += s.pop();
      s.pop();
    }
    return o;
  }, '') + s.reverse().join('');
}
*/

/* 
// https://en.wikipedia.org/wiki/Shunting_yard_algorithm

function toPostfix (infix) {
  const precedences = new Map([
    ["(", 3],
    [")", 3],
    ["^", 2],
    ["*", 1],
    ["/", 1],
    ["+", 0],
    ["-", 0],
  ]);

  const output = [];
  const operators = [];

  for (const char of infix.split("")) {
    const num = parseInt(char);
    if (Number.isFinite(num)) {
      output.push(num);
    } else if (char === "(") {
      operators.push(char);
    } else if (char === ")") {
      while (operators.at(-1) !== "(") {
        output.push(operators.pop());
      }
      operators.pop(); // Discard matching "("
    } else {
      const op1 = char;
      let op2 = operators.at(-1);
      while (
        op2 && op2 !== "(" &&
        (precedences.get(op2) > precedences.get(op1) || (
          precedences.get(op2) === precedences.get(op1) && op1 !== "^"
        ))
      ) {
        output.push(operators.pop());
        op2 = operators.at(-1);
      }
      operators.push(op1);
    }
  }

  return output.join("") + operators.reverse().join("");
}
*/