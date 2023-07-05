/* 
5kyu - Lazy Repeater
https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

The makeLooper() function (or make_looper in your language) 
takes a string (of non-zero length) as an argument. 
It returns a function. 
The function it returns will return successive characters 
of the string on successive invocations. 
It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/

function makeLooper(str) {
  let i = 0, L = str.length;
  return function () {
    return str[i++ % L];
  }
}

const abc = makeLooper("abc");
console.log(abc(), "a")
console.log(abc(), "b")
console.log(abc(), "c")
console.log(abc(), "a")
console.log(abc(), "b")

// cool

/* 
makeLooper = (s,i=0) => () => s[i++ % s.length]
*/

/* 
const makeLooper = (str) => {
  let i = 0
  return () => str[i++ % str.length]
}
*/

/* 
function makeLooper(str) {
    const funcGenerator = (function*() {
        while(true)
            for(let char of str)
                yield char;
    })();
    return () => funcGenerator.next().value;
}
*/