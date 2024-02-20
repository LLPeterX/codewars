/* 
5kyu - Calculating with Functions
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
*/

function _calc(arg1, calcObj) {
  return {
    '+': (a1, a2) => a1 + a2,
    '-': (a1, a2) => a1 - a2,
    '*': (a1, a2) => a1 * a2,
    '/': (a1, a2) => Math.floor(a1 / a2)
  }[calcObj.op](arg1, calcObj.arg);
}

const zero = (a = 0) => (typeof a === 'object') ? _calc(0, a) : 0;
const one = (a = 1) => (typeof a === 'object') ? _calc(1, a) : 1;
const two = (a = 2) => (typeof a === 'object') ? _calc(2, a) : 2;
const three = (a = 3) => (typeof a === 'object') ? _calc(3, a) : 3;
const four = (a = 4) => (typeof a === 'object') ? _calc(4, a) : 4;
const five = (a = 5) => (typeof a === 'object') ? _calc(5, a) : 5;
const six = (a = 6) => (typeof a === 'object') ? _calc(6, a) : 6;
const seven = (a = 7) => (typeof a === 'object') ? _calc(7, a) : 7;
const eight = (a = 8) => (typeof a === 'object') ? _calc(8, a) : 8;
const nine = (a = 9) => (typeof a === 'object') ? _calc(9, a) : 9;

const plus = (a) => ({ op: '+', arg: a });
const minus = (a) => ({ op: '-', arg: a });
const times = (a) => ({ op: '*', arg: a });
const dividedBy = (a) => ({ op: '/', arg: a });


console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);

// best
/* 
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
*/

/* 
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
*/

/* 
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }
*/