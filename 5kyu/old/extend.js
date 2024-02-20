/* 
5kyu - Object extend
https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript

Let's make a function that returns a new object, containing all of the properties 
of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, 
and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. 
You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).
*/

function extend() {
  if (!arguments.length) return null;
  return [...arguments].reduce((o, v, i) => {
    if (isObject(v)) {
      if (Object.keys(o).length === 0) {
        return { ...o, ...v };
      } else {
        for (let [k, w] of Object.entries(v)) {
          if (!(k in o)) {
            o[k] = w;
          }
        }
      }
    }
    return o;
  }, {}) || null;
}

function isObject(v) {
  return v !== null && typeof v === 'object';
}


// console.log(extend({ a: 1, b: 2 }, { c: 3 })); // should === {a: 1, b: 2, c: 3}
// console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 })); // should === {a: 1, b: 2, c: 3, d: 4}
// console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 })); // should  === {a: 1, b: 2, c: 3}
// console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 })); // should  === {a: false, b: null, c: 3}
// console.log(extend({ a: false, b: null }, [12, 13])); // null
// console.log(extend([1])); // null
console.log(extend({ a: 1, b: 2, length: 6 }, [], 'nope', false, () => 1, { c: 3, a: 3 }));

// best

/* 
const extend = function(...args) {
    const result = args
        .reverse()
        .reduce((acc, next) => {
            return typeof next === 'object' 
                ? Object.assign(acc, next) 
                : acc;
        }, {});
    return result;
}
*/

/* 
var extend=(...a)=>a.reduce((x,y)=>isObject(y)?{...y,...x}:x,{})
*/