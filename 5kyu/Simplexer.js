/* 
5kyu - Simpexer
https://www.codewars.com/kata/54b8204dcd7f514bf2000348

You'll need to implement a simple lexer type. 
It should take in an input string through the constructor, 
and break it up into typed-tokens (you'll have to manage null, 
resulting in the same behavior than an empty string). 

You'll need to implement the necessary methods (aaccording to your language) 
to make the Simplexer object behave like an iterator, 
Meaning that it returns a token object each time it a next() method would be called. 
If no tokens are available, an exception should be thrown 
(idealy: StopIteration in python, InvalidOperationException in C# and NoSuchElementException in Java).

Tokens are represented by Token objects, which define two properties as strings: 
text, and type. 
Constructor is Token(text, type)

Token Types
There are 7 tokens types that your lexer will need to produce: 
  * identifier
  * string, 
  * integer, 
  * boolean, 
  * keyword, 
  * operator, 
  * whitespace. 

To create the token, you'd need to pass in the token value (the text) 
and the token type as strings, so for example, a simple integer token 
could be created with new Token("1", "integer") 
(Note: no default values or default constructor are provided, 
  so use new Token("","") if you want a default Token object).

Token Grammar
Here's a table of the grammars for the various token types:

* integer : Any sequence of one or more digits.
* boolean : true or false.
* string : Any sequence of characters surrounded by "double quotes".
* operator : The characters +, -, *, /, %, (, ), and =.
* keyword : if, else, for, while, return, func, and break.
* whitespace : Matches standard whitespace characters (space, newline, tab, etc.)
  Consecutive whitespace characters should be matched together.
* identifier : Any sequence of alphanumber characters, as well as underscore and dollar sign,
  and which doesn't start with a digit. 
  Make sure that keywords aren't matched as identifiers!  
*/

// additional class (not in solution)
class Token {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

// main

// first solution
// class Simplexer {
//   static keywords = ["if", "else", "for", "while", "return", "func", "break"];
//   static operators = "+-*/%()=";
//   constructor(buffer) {
//     this.buffer = buffer;
//     this.ptr = 0;
//     tokens = [];
//     this._parse();
//   }

//   _parse() {
//     let str;
//     for (let i = 0; i < this.buffer.length; i++) {
//       let char = this.buffer[i];
//       if (char === '"') {
//         str = '';
//         i++;
//         while (i < this.buffer.length && this.buffer[i] !== '"') {
//           str += this.buffer[i++];
//         }
//         if (i === this.buffer.length) {
//           throw Error("Syntax Error");
//         }
//         tokens.push(new Token(`"${str}"`, 'string'));
//       } else if (/\d/.test(char)) {
//         str = '';
//         while (/\d/.test(this.buffer[i])) {
//           str += this.buffer[i++];
//         }
//         --i;
//         tokens.push(new Token(str, 'integer'));
//       } else if (Simplexer.operators.includes(char)) {
//         tokens.push(new Token(char, 'operator'));
//       } else if (/[a-z0-9$_]/i.test(char)) {
//         str = '';
//         while (i < this.buffer.length && /[a-z0-9$_]/i.test(this.buffer[i])) {
//           str += this.buffer[i++];
//         }
//         --i;
//         if (['true', 'false'].includes(str)) {
//           tokens.push(new Token(str, 'boolean'));
//         } else if (Simplexer.keywords.includes(str)) {
//           tokens.push(new Token(str, 'keyword'));
//         } else {
//           tokens.push(new Token(str, 'identifier'));
//         }
//       } else if (/\s/.test(char)) {
//         str = '';
//         while (i < this.buffer.length && /\s/.test(this.buffer[i])) {
//           str += this.buffer[i++];
//         }
//         --i;
//         tokens.push(new Token(str, 'whitespace'));
//       } else {
//         throw Error("Syntax Error");
//       }
//     }
//   }

//   hasNext() {
//     return this.ptr < tokens.length;
//   }

//   next() {
//     return tokens[this.ptr++];
//   }
// }

// final:
class Simplexer {
  static keywords = ["if", "else", "for", "while", "return", "func", "break"];
  static operators = "+-*/%()=";

  constructor(buffer) {
    this.tokenIndex = 0;
    this.tokens = this.#parse(buffer || "");
  }

  #parse(buffer) {
    let str;
    const tokens = [];
    for (let i = 0; i < buffer.length; i++) {
      let char = buffer[i];
      if (char === '"') {
        str = '';
        i++;
        while (i < buffer.length && buffer[i] !== '"') str += buffer[i++];
        if (i === buffer.length) throw Error("Syntax Error");
        tokens.push(new Token(`"${str}"`, 'string'));
      } else if (/\d/.test(char)) {
        str = '';
        while (/\d/.test(buffer[i])) str += buffer[i++];
        --i;
        tokens.push(new Token(str, 'integer'));
      } else if (Simplexer.operators.includes(char)) {
        tokens.push(new Token(char, 'operator'));
      } else if (/[a-z0-9$_]/i.test(char)) {
        str = '';
        while (i < buffer.length && /[a-z0-9$_]/i.test(buffer[i])) str += buffer[i++];
        --i;
        if (['true', 'false'].includes(str)) {
          tokens.push(new Token(str, 'boolean'));
        } else if (Simplexer.keywords.includes(str)) {
          tokens.push(new Token(str, 'keyword'));
        } else {
          tokens.push(new Token(str, 'identifier'));
        }
      } else if (/\s/.test(char)) {
        str = '';
        while (i < buffer.length && /\s/.test(buffer[i])) str += buffer[i++];
        --i;
        tokens.push(new Token(str, 'whitespace'));
      } else throw Error("Syntax Error");
    }
    return tokens;
  }

  hasNext() {
    return this.tokenIndex < this.tokens.length;
  }

  next() {
    return this.tokens[this.tokenIndex++];
  }
}


// best


// class Simplexer {
//   static _tokenTypes = {
//     integer: /\d+/,
//     boolean: /true|false/,
//     string: /\"[^"]*\"/,
//     operator: /\+|-|\*|\/|%|\(|\)|=/,
//     keyword: /if|else|for|while|return|func|break/,
//     whitespace: /\s+/,
//     identifier: /[a-zA-Z$_][a-zA-Z$_\d]*/
//   }
// _matcher = new RegExp([...Object.values(Simplexer._tokenTypes)].map(e => e.source).join("|"), "g");
// _tokens = [];

// constructor(buffer = ""){
//   let match;
//   while (match = this._matcher.exec(buffer)) {
//     this._tokens.push(match[0]);
//   }
//   this._tokens = this._tokens.map(token => {
//     for (const [name, regex] of Object.entries(Simplexer._tokenTypes)) {
//       const match = token.match(regex);
//       if (match !== null && match[0].length === token.length) {
//         return [token, name];
//       }
//     }
//     return [token, undefined];
//   });

// }

// hasNext(){
//   return this._tokens.length > 0;
// }

// next(){
//   const t = this._tokens.shift();
//   return new Token(t[0], t[1]);
// }
// }

// ------------------------------------------------------------------------


/* 
// function Simplexer(buffer) {
//   let re  = /\d+|true|false|"[^"]*"|\+|-|\*|\/|%|\(|\)|=|if|else|for|while|return|func|break|\s+(?=(?:[^"]*"[^"]*")*[^"]*$)|[a-zA-Z$_]{1}[a-zA-Z$_0-9]*/g;

// this.i = 0;
// this.tokens = buffer.match(re);
// this.reserved = new Set(['if', 'else', 'for', 'while', 'return', 'func', 'break']);

// this.hasNext = function () {
//   return this.i < this.tokens?.length || false;
// };

// this.next = function () {
//   let token = this.tokens[this.i++];

//   if (this.reserved.has(token)) {
//     token = new Token(token, 'keyword');
//   } else if (token[0] == '"' && token.slice(-1) == '"') {
//     token = new Token(token.slice(), 'string');
//   } else if (token[0] >= '0' && token[0] <= '9') {
//     token = new Token(token, 'integer');
//   } else if (['true', 'false'].includes(token)) {
//     token = new Token(token, 'boolean');
//   } else if (token.includes(' ') || token.includes('\t') || token.includes('\n')) {
//     token = new Token(token, 'whitespace');
//   } else if ('+-*/%()='.includes(token)) {
//     token = new Token(token, 'operator');
//   } else {
//     token = new Token(token, 'identifier');
//   }
//   return token;
// };

// }

