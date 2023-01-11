/* 
6kyu - Implementing Object.create
https://www.codewars.com/kata/5366cfe48d004ce19600104b/train/javascript

In this kata you will learn, how Object.create method does its job.
*/


Object.create = function (prototype, properties) {
  if (typeof prototype === 'object') {
    let obj = new Object();
    Object.setPrototypeOf(obj, prototype);
    obj.prototype = prototype;
    if (properties !== undefined) {
      try {
        Object.defineProperties(obj, properties);
      } catch (e) {
        throw new TypeError('properties in not defined');
      }
    }
    return obj;
  } else {
    throw new TypeError('prototype is not object!!');
  }
};

/* 
const citizen = {
  sleep: function () { return "zzZ..."; },
  panic: function () { return "AaAaAaAa!"; }
};

const veteran = Object.create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    }
  }
});

console.log(veteran !== citizen, "veteran is equal citizen. wat??");
console.log(veteran instanceof citizen.constructor, "veteran must inherit citizen");
console.log(veteran.sleep(), "zzZ...", "first argument was not handled properly");
console.log(veteran.panic(), "SNAFU", "`properties` argument was not handled properly");
console.log(veteran.prototype);
 */
// best

/* 
Object.create = function(prototype, properties) {
  //Your code goes here
  //And remember: you need not to reinvent Object.defineProperties on your own!
  if(prototype === undefined) throw new TypeError;
  var obj = new Object;
  obj.__proto__ = prototype;
  if(properties !== undefined){
    Object.defineProperties(obj, properties);
  }
  return obj;
};
*/

/* 
Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object") throw new TypeError();
  return Object.defineProperties({__proto__: prototype}, properties);
};
*/