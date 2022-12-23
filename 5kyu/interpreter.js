/* 
5kyu - Esolang: Stick
https://www.codewars.com/kata/58855acc9e1de22dff0000ef/train/javascript

Make a custom esolang interpreter for the language Stick. 
Stick is a simple, stack-based esoteric programming language with only 7 commands.

Commands
  ^: Pop the stack.
  !: Add new element to stack with the value of 0.
  +: Increment element. 255+1=0.
  -: Decrement element. 0-1=255.
  *: Add ascii value of top element to the output stream.
  [: Skip past next ] if element value is 0.
  ]: Jump back to the command after previous [ if element value is nonzero.
*/

function interpreter(tape) {
  let stack = [0], k, v, output = "";
  for (let i = 0; i < tape.length; i++) {
    switch (tape[i]) {
      case '^':
        if (stack.length > 0) {
          v = stack.pop();
        } else {
          throw new Error();
        }
        break;
      case '!':
        stack.push(0);
        break;
      case '+':
        v = (stack.pop() + 1) % 256;
        stack.push(v);
        break;
      case '-':
        v = stack.pop() - 1;
        if (v < 0) v = 256 + v;
        stack.push(v);
        break;
      case '*':
        output += String.fromCharCode(stack[stack.length - 1]);
        break;
      case '[':
        if (stack[stack.length - 1] === 0) {
          while (tape[++i] != ']') { }
        }
        k = i;
        break;
      case ']':
        if (stack[stack.length - 1] != 0) {
          i = k;
        }
        break;
    }
  }
  return output;
}


const HELLO_WORLD = `
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++*!++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++*!+++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++*!+++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++*!+++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++*!++++++++++++++++++++++++++++++++++++++++++++*!++
++++++++++++++++++++++++++++++*!++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++*!+++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++*!++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++*!++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++*!++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++*!+++++++++++++++++++++++++++++++++*!`;
console.log(interpreter(HELLO_WORLD));
console.log(interpreter("+[+]*")); // '\u0000'


// best

/*
function interpreter(t) {
  const tape = t.replace(/[^^!+\-*[\]]/g,'')
  return function go([head, ...tail]=[0], output='', index=0) {
    const process = (s=[head, ... tail], o=output, i=index+1) => go(s,o,i)
    const instructionParameterMap =
      { '^': [ tail ]
      , '!': [ [0, head, ...tail] ]
      , '+': [ [(head + 1) % 256, ...tail] ]
      , '-': [ [(head + 255) % 256, ...tail] ]
      , '*': [ , output + String.fromCharCode(head) ]
      , '[': [ ,, head ? index+1 : tape.indexOf(']', index)+1 ]
      , ']': [ ,,!head ? index+1 : tape.lastIndexOf('[', index)+1 ]
      }

    return head === undefined
      ? requiredError()
      : index === tape.length
      ? output
      : process(...instructionParameterMap[tape[index]])
  }()
}

*/

/*
function interpreter(tape) {
  let stack = [0];
    let i = 0;
    let out = '';

    while (i < tape.length) {
        switch(tape[i]) {
            case '^': //Pop the stack
                if (stack.length === 0) {
                  throw new Error('Whoops!');
                }
                stack.pop();
                break;
            case '!': //Add new element to stack with the value of 0
                stack.push(0);
                break;
            case '+': //Increment element. 255+1=0
            {
                if (stack.length === 0) {
                  throw new Error('Whoops!');
                }
                let elem = stack[stack.length - 1];

                if (elem === 255) {
                    stack[stack.length - 1] = 0;
                } else {
                    stack[stack.length - 1] = elem + 1;
                }
                break;
            }
            case '-': //Decrement element. 0-1=255
            {
                if (stack.length === 0) {
                  throw new Error('Whoops!');
                }
                let elem = stack[stack.length - 1];

                if (elem === 0) {
                    stack[stack.length - 1] = 255;
                } else {
                    stack[stack.length - 1] = elem - 1;
                }
                break;
            }
            case '*': //Add ascii value of top element to the output stream
                out += String.fromCharCode(stack[stack.length - 1])
                break;
            case '[': //Skip past next ] if element value is 0
                if (stack[stack.length - 1] === 0) {
                  i = tape.indexOf(']', i) + 1;
                  continue;
                }
                break;
            case ']': //Jump back to the command after previous [ if element value is nonzero
                if (stack[stack.length - 1] !== 0) {
                  i = tape.substring(0, i).lastIndexOf('[') + 1;
                  continue;
                }
                break;
        }

        i++;
    }

    return out;
}
*/

// omg

/* 
const interpreter=t=>{
  let s=[0],e=0,o=''
  for(let i=0,l=t.length;i<l;i++)
    (({'^'(){if(!e)throw new Error;e--},
     '!'(){s[++e]=0},
     '+'(){s[e]=(s[e]+1)&255},
     '-'(){s[e]+=s[e]?-1:255},
     '*'(){o+=String.fromCharCode(s[e])},
     '['(){if(!s[e])i=t.indexOf(']',i)},
     ']'(){if(s[e])i=t.lastIndexOf('[',i)}
    })[t[i]]||(()=>{}))()
  return o

*/