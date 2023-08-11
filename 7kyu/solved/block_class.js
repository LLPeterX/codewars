/* 
7kyu - Building blocks
https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript
*/

class Block {

  constructor([width, length, height]) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (this.width * this.length + this.width * this.height + this.length * this.height) * 2;
  }

}

let block = new Block([2, 4, 6]);
console.log(block.getWidth(), 2)
console.log(block.getLength(), 4)
console.log(block.getHeight(), 6)
console.log(block.getVolume(), 48)
console.log(block.getSurfaceArea(), 88)
