/* 
5kyu - Simple Events
https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript
*/

class Event {
  constructor() {
    this.handlers = [];
    this.calls = 0;
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(f => f != fn);
  }

  emit(...args) {
    for (let f of this.handlers) {
      f.call(this, ...args);
    }
  }
}

var e = new Event();

function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

function f2() {
  f2.calls2 = (f2.calls2 || 0) + 1;
  f2.args = Array.prototype.slice.call(arguments);
}



e.subscribe(f);
e.emit(1, 'foo', true);
console.log('func=', e.handlers);
console.log(f.calls, f.calls === 1); // calls a handler

console.log(f.args, [1, 'foo', true]); // passes arguments

e.unsubscribe(f);
e.emit(2);

console.log('func=', e.handlers);
console.log(f.calls, f.calls === 1); //no second call

//best

/* 
class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }
  
  unsubscribe(func) {
    this.subscribers.delete(func);
  }
  
  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}
*/