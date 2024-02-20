/* 
7kyu - Circular List
https://www.codewars.com/kata/5b2e60742ae7543f9d00005d/train/javascript
 */

class CircularList {
  constructor(...args) {
    if (!args || args.length === 0) {
      throw new Error('Nothing passed in');
    }
    this._values = [...args];
    this._index = undefined;
    this._len = this._values.length;
  }

  next() {
    if (this._index === undefined) {
      this._index = 0;
    } else {
      this._index++;
      if (this._index >= this._len) {
        this._index = 0;
      }
    }
    return this._values[this._index];
  }

  prev() {
    if (this._index == undefined) {
      this._index = this._len - 1;
    } else {
      this._index--;
      if (this._index < 0) {
        this._index = this._len - 1;
      }
    }
    return this._values[this._index];
  }
}


let list = new CircularList(1, 2, 3, 4);
console.log(list.prev(), 4); // ok
console.log(list.prev(), 3); //ok
console.log(list.prev(), 2); //ok 
console.log(list.prev(), 1);// ok
console.log(list.prev(), 4);// ok
console.log('-- next --');
list = new CircularList(1, 2, 3, 4);
console.log(list.next(), 1); // ok
console.log(list.next(), 2); //ok
console.log(list.next(), 3); //ok 
console.log(list.next(), 4);// ok
console.log(list.next(), 1);// ok

console.log('--check--');
list = new CircularList("one", "two", "three");
console.log(list.next(), "one"); // ok
console.log(list.next(), "two"); //ok
console.log(list.next(), "three"); //ok 
console.log(list.next(), "one");// ok
console.log(list.prev(), "three"); // FAIL
console.log(list.prev(), "two");
console.log(list.prev(), "one");
console.log(list.prev(), "three");

// best
/*
class CircularList {
  constructor(...args) {
    this.counter = -1;
    this.arr = [...args]
     if(this.arr.length===0){
      throw new Error('Array is empty!')
    }
  }

  next() {
    this.counter!==this.arr.length-1 ? this.counter ++ : this.counter = 0
    return this.arr[this.counter]
  }

  prev() {
    this.counter>0 ? this.counter -- : this.counter = this.arr.length-1
    return this.arr[this.counter]
  }
}
*/

/*
const CircularList = class {
  constructor(...args) {if (!args[0]) throw Error; [this.n, this.arr] = [-1, args]}
  next(){return this.arr[++this.n >= this.arr.length ? this.n = 0 : this.n]}
  prev() {return this.arr[--this.n < 0 ? this.n = this.arr.length - 1 : this.n]}
}
*/