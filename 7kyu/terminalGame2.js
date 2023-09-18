/* 
7kyu - Terminal Game #2
https://www.codewars.com/kata/55e8beb4e8fc5b7697000036/train/javascript
*/

let Hero = function () {
  this.position = "00";
}

Hero.prototype.move = function (dir) {
  const dirs = {
    'left': [0, -1],
    'right': [0, 1],
    'up': [-1, 0],
    'down': [1, 0]
  };
  // let [y, x] = this.position.split("").map(Number);
  // y += dirs[dir][0];
  // x += dirs[dir][1];
  let [y, x] = this.position.split("").map((v, i) => +v + dirs[dir][i]);
  if (x < 0 || y < 0 || x > 4 || y > 4) {
    throw Error();
  }
  console.log(' new pos=', [x, y]);
  this.position = `${y}${x}`;
}

var testHero = new Hero()
testHero.move('down')
console.log(testHero.position, '10')
testHero.move('right')
console.log(testHero.position, '11')
testHero.move('up')
console.log(testHero.position, '01')
testHero.move('right')
console.log(testHero.position, '02')
testHero.move('down')
console.log(testHero.position, '12')
testHero.move('down')
console.log(testHero.position, '22')