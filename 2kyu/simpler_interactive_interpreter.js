/* 
2kyu - Simpler Interactive Interpreter
https://www.codewars.com/kata/52ffcfa4aff455b3c2000750

You will create an interpreter which takes inputs described below 
and produces outputs, storing state in between each input.

No funtions.

Concepts:
The interpreter will take inputs in the language described 
under the language header below. This section will give an overview of the language constructs.


Variables
- любой идентификатор, не являющийся ключевым словом.
If the identifier is on the left hand side of an assignment operator, 
the result of the right hand side will be stored in the variable. 
If a variable occurs as part of an expression, the value held in the variable 
will be substituted when the expression is evaluated.

Variables are implicitly declared the first time they are assigned to.

Example: Initializing a variable to a constant value and using the variable in another expression (Each line starting with a '>' indicates a separate call to the input method of the interpreter, other lines represent output)
>x = 7
    7
>x + 6
    13   
    
Referencing a non-existent variable will cause the interpreter to throw an error. 
The interpreter should be able to continue accepting input even after throwing.

Assignments
An assignment is an expression that has an identifier on left side 
of an = operator, and any expression on the right. 
Such expressions should store the value of the right hand side 
in the specified variable and return the result.

In this kata, all tests will contain only a single assignment. 
You do not need to consider chained or nested assignments.

Name conflicts
Because variables are declared implicitly, no naming conflicts are possible. 
variable assignment will always overwrite any existing value.

Input
Input will conform to the expression production in the grammar below.

Output
Output for a valid expression will be the result of the expression.
Output for input consisting entirely of whitespace will be an empty string.

Grammar:

expression      ::= factor | expression operator expression
factor          ::= number | identifier | assignment | '(' expression ')'
assignment      ::= identifier '=' expression

operator        ::= '+' | '-' | '*' | '/' | '%'

identifier      ::= letter | '_' { identifier-char }
identifier-char ::= '_' | letter | digit

number          ::= { digit } [ '.' digit { digit } ]

letter          ::= 'a' | 'b' | ... | 'y' | 'z' | 'A' | 'B' | ... | 'Y' | 'Z'
digit           ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

Operator Precedence
The following table lists the language's operators grouped in order of precedence. Operators within each group have equal precedence.

Category	          Operators
Multiplicative	    *, /, %
Additive	          +, -
Assignment	        =
*/

class Interpreter {
  constructor() {
    this.expression = ""; // for error messages only
    this.vars = {};
    this.operators = {
      '+': { precedence: 1, fn: (a, b) => b + a },
      '-': { precedence: 2, fn: (a, b) => b - a },
      '*': { precedence: 3, fn: (a, b) => b * a },
      '/': { precedence: 4, fn: (a, b) => b / a },
      '%': { precedence: 5, fn: (a, b) => b % a }
    };
  }

  tokenize(program) {
    if (!program) return [];
    return program.split(/\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g).filter(s => !/^\s*$/.test(s));
  }

  input(expr) {
    //console.log('expr=', expr);
    if (!expr) return "";
    this.expression = expr; // just for error messages
    const tokens = this.tokenize(expr);
    let value;
    if (tokens[1] === '=') {
      if (/[a-z]+/i.test(tokens[0])) { // variable name first
        value = this.calc(this.parse(tokens.slice(2)));
        this.vars[tokens[0]] = value;
      } else throw Error(`Syntax error in expression ${this.expression}`);
    } else {
      value = this.calc(this.parse(tokens));
    }
    return value;
  }

  // parse to polish notation
  parse(tokens) {
    let polish = [];
    let ops = [];
    let lastType = null;
    for (let token of tokens) {
      if (/^\-?\d+(?:\.\d*)?$/.test(token)) { // number?
        if (lastType == "number") throw Error(`Syntax error in expression ${this.expression}`);
        lastType = "number";
        polish.push(+token);
      } else if (token in this.vars) { // variable ?
        if (lastType === "number") throw Error(`Syntax error in expression ${this.expression}`);
        lastType = "number";
        polish.push(this.vars[token]);
      } else if (token in this.operators) { // operator?
        lastType = "op";
        //rearrange with operators precedence
        if (ops.length && ops[ops.length - 1] in this.operators) {
          let pr1 = this.operators[token].precedence;
          let pr2 = this.operators[ops[ops.length - 1]].precedence;
          while (ops.length && (ops[ops.length - 1] in this.operators) && pr2 >= pr1) {
            pr2 = this.operators[ops[ops.length - 1]].precedence;
            polish.push(this.operators[ops.pop()].fn);
          }
        }
        ops.push(token);
      } else if (token === '(') {
        ops.push(lastType = token);
      } else if (token === ')') {
        lastType = token;
        while (ops.length && ops[ops.length - 1] !== '(') {
          polish.push(this.operators[ops.pop()].fn);
        }
        ops.pop(); // remove paren
      } else { // none of the above
        throw Error(`Syntax error in expression ${this.expression}`);
      }
    }// end for
    // add remians
    //while (ops.length) polish.push(this.operators[ops.pop()].fn);
    return polish.concat(ops.reverse().map(o => this.operators[o].fn));
  }

  calc(tokens) {
    const stack = [];
    let value, t;
    /*
    while (t = tokens.shift()) {
      // if (typeof t === 'function') {
      //   value = t(stack.pop(), stack.pop());
      // } else {
      //   value = t;
      // }
      // stack.push(value);
      stack.push(value = (typeof t === 'function') ? t(stack.pop(), stack.pop()) : t);
    }
    */
    while (t = tokens.shift()) stack.push(value = (typeof t === 'function') ? t(stack.pop(), stack.pop()) : t);
    return value;
  }
}



var interpreter = new Interpreter();
console.log(interpreter.input("1 + 1"), 2);
console.log(interpreter.input("2 - 1"), 1);
console.log(interpreter.input("2 * 3"), 6);
console.log(interpreter.input("8 / 4"), 2);
console.log(interpreter.input("7 % 4"), 3);

console.log(interpreter.input("x = 1"), 1);
console.log(interpreter.input("x"), 1);
console.log(interpreter.input("x + 3"), 4);

console.log(interpreter.input("4 + 2 * 3"), 10);
console.log(interpreter.input("4 / 2 * 3"), 6);
console.log(interpreter.input("(4 + 2) * 3"), 18);
console.log(interpreter.input("(8 - (4 + 2)) * 3"), 6);

//console.log(interpreter.input("y")); // ERROR

// best
/* 
Array.prototype.last = function() {
    return this[this.length-1];
}

function Interpreter()
{
    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program)
{
    if (program === "")
        return [];

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr) {

  var _this = this;
  var tokens = this.tokenize(expr);
  var ops = [];
  var stack = [];

  tokens.forEach(function (token) {

    if (_this.isOperator(token)) {
      if (_this.getOperatorRank(ops.last()) < _this.getOperatorRank(token) || (stack.length >= 2 && stack[stack.length - 2] == '(')) {
        ops.push(token);
      } else {
        var b = stack.pop();
        var a = stack.pop();
        stack.push(_this.doOp(a, ops.pop(), b));
        ops.push(token);
      }
    } else if (token == "(") {
      stack.push(token);
    } else if (_this.isNumber(token)) {
      stack.push(token);
    } else if (_this.isIdentifier(token)) {
      stack.push(token);
    } else if (token == ")") {
      while (stack.length > 0) {
        var b = stack.pop();
        var a = stack.pop();
        if (stack.last() == "(") {
          stack.pop();
          stack.push(_this.doOp(a, ops.pop(), b));
          break;
        }
      };

    }
  });

  while (stack.length > 1) {
    var b = stack.pop();
    var a = stack.pop();
    stack.push(_this.doOp(a, ops.pop(), b));
  }
  return (tokens.length > 0) ? _this.getVal(stack.pop()) : "";
};

Interpreter.prototype.isDigit = function (token) {
  return (token.length == 1 && token >= "0" && token <= "9");
};

Interpreter.prototype.isLetter = function (token) {
  return token.length == 1 && (token >= "a" && token <= "z" || token >= "A" && token <= "Z");
}

Interpreter.prototype.isOperator = function (token) {
  return ["+", "-", "*", "/", "%", "="].indexOf(token) >= 0;
}

Interpreter.prototype.getOperatorRank = function (token) {
  switch (token) {
    case "=": return 0;
    case "+":
    case "-": return 1;
    case "*":
    case "/":
    case "%": return 2;
  }
  return -1;
}

Interpreter.prototype.isIdentifier = function (token) {
  var regex = /^[a-zA-Z]([a-zA-Z_0-9]*)?$/g;
  return regex.test(token);
}

Interpreter.prototype.isNumber = function (token) {
  var regex = /^[\+\-]?\d*[\.]?\d+$/g;
  return regex.test(token);
}
Interpreter.prototype.getVal = function (a) {
  if (this.isNumber(a)) {
    a = Number(a);
  } else if (this.isIdentifier(a)) {
    var aa = this.vars[a];
    if (typeof aa === "undefined") {
      throw "No variable with name '" + a + "' was found.";
    }
    a = aa;
  }
  return a;
}
Interpreter.prototype.doOp = function (a, op, b) {
  if (op != "=") {
    var aa = this.getVal(a);
    var bb = this.getVal(b);

    switch (op) {
      case "+": return aa + bb;
      case "-": return aa - bb;
      case "*": return aa * bb;
      case "/": return aa / bb;
      case "%": return aa % bb;
      case "=": this.vars[a] = bb; return a;
    }
  } else {
    this.vars[a] = this.getVal(b);
    return a;
  }
}
  * /

/* 
function Interpreter()
{
    this.vars = {};
    this.functions = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b
    };
}

Interpreter.prototype.tokenize = function (program)
{
    if (program === "")
        return [];

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr) {
  var tokens = this.tokenize(expr);
  if (!tokens.length) return ""

  const ast = this.parse(tokens)
  return this.evaluate(ast)
};

Interpreter.prototype.parse = function (tokens) {

  const parse_with = (operators, parser) => {
    let result = parser()
    while (operators.includes(tokens[0])) {
      const op = tokens.shift()
      const right = parser()
      result = {
        type: op,
        left: result,
        right
      }
    }
    return result
  }

  const parse_expression = () =>
    parse_with(['+', '-'], () =>
      parse_with(['*', '/', '%'], () => {
        const cur = tokens.shift()
        if (cur == '(') {
          const expr = parse_expression()
          tokens.shift()
          return expr
        }

        if (/^[A-Za-z_][A-Za-z0-9_]*/.test(cur)) {
          return {
            type: 'var',
            id: cur
          }
        }
        return {
          type: 'num',
          val: Number(cur)
        }
      }))

  let result = parse_expression()
  if (tokens.shift() == '=') {
    result = {
      type: '=',
      left: result,
      right: parse_expression()
    }
  }
  return result
}

Interpreter.prototype.evaluate = function (ast) {
  switch (ast.type) {
    case 'var':
      if (!this.vars[ast.id]) throw 0
      return this.vars[ast.id]

    case 'num':
      return ast.val

    case '=':
      this.vars[ast.left.id] = this.evaluate(ast.right)
      return this.vars[ast.left.id]

    default:
      return this.functions[ast.type](this.evaluate(ast.left), this.evaluate(ast.right))
  }
}
  * /

/* 
class Interpreter {
    constructor() {
        this.vars = {};
        this.operators = ['()', '*/% ', ' + -', '='];

    }

    static tokenize(program) {
  const regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
  return program.split(regex).filter(s => /\S/.test(s));
}

input(expr) {
  const tokens = Interpreter.tokenize(expr);
  if (!tokens.length) return '';

  if (tokens.length === 1) {
    if (!/\d+/.test(tokens[0])) {
      if (!Object.keys(this.vars).includes(tokens[0])) {
        throw new Error(`ERROR: Invalid identifier. No variable with name '${tokens[0]}' was found.`);
      }

      return +this.vars[tokens[0]];
    }

    return +tokens[0];
  }


  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === this.operators[0][0]) {
      let open = 1;

      let j = i + 1;
      for (; open; j++) {
        if (tokens[j] === this.operators[0][0]) open++;
        else if (tokens[j] === this.operators[0][1]) open--;
      }

      let result = this.input(tokens.slice(i + 1, j - 1).join('')).toString();
      tokens.splice(i, j - i, result);
    }
  }

  for (let i = 1; i < this.operators.length; i++) {
    for (let j = 0; j < tokens.length; j++) {
      if (this.operators[i].includes(tokens[j])) {
        let result = this.parseExp(tokens[j - 1], tokens[j], tokens[j + 1]);

        tokens.splice(--j, 3, result);

        if (tokens.length === 1) return +tokens[0];
      }
    }
  }




}


parseExp(var1, oper, var2){

  let types = [/\d+/.test(var1), /\d+/.test(var2)];

  if (!types[1] && !Object.keys(this.vars).includes(var2)) {
    throw new Error(`ERROR: Invalid identifier. No variable with name '${var2}' was found.`);
  }

  if (!types[0]) {


    if (oper === '=') {
      if (!types[1]) {
        this.vars[var1] = this.vars[var2];
        return this.vars[var1];
      }

      this.vars[var1] = var2;
      return var2;
    }

    if (!Object.keys(this.vars).includes(var1)) {
      throw new Error(`ERROR: Invalid identifier. No variable with name '${var1}' was found.`);
    }

    if (!types[1]) return this.calc(this.vars[var1], oper, this.vars[var2]).toString();

    return this.calc(this.vars[var1], oper, var2).toString();

  }

  if (!types[1]) return this.calc(var1, oper, this.vars[var2]).toString();

  return this.calc(var1, oper, var2).toString();
}


calc(var1, oper, var2){
  var1 = +var1;
  var2 = +var2;

  switch (oper) {
    case '+': return var1 + var2;
    case '-': return var1 - var2;
    case '*': return var1 * var2;
    case '/': return var1 / var2;
    case '%': return var1 % var2;
  }
}


}
* /