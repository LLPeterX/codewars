/* 
6kyu - The Enigma Machine - Part 1: The Plugboard
https://www.codewars.com/kata/5523b97ac8f5025c45000900/train/javascript
*/

var Plugboard = function (wires) {
  this.cipher = new Map();

  this.process = (wire) => wire && wire.length ? [...wire].map(c => this.cipher.get(c) || c).join`` : wire;

  if (!wires) return;
  if (wires.length < 2 || wires.length % 2 || wires.length > 20) {
    throw Error();
  }
  for (let i = 0; i < wires.length - 1; i += 2) {
    if (this.cipher.has(wires[i]) || this.cipher.has(wires[i + 1])) {
      throw Error(`Existing letter ${wires[i]}`);
    }
    this.cipher.set(wires[i], wires[i + 1]);
    this.cipher.set(wires[i + 1], wires[i]);
  }
}

// var plugboard = new Plugboard("AB")
// console.log(plugboard.process('A'), 'B', "Invalid translation")
// console.log(plugboard.process('B'), 'A', "Invalid translation")
// console.log(plugboard.process('C'), 'C', "Invalid translation")
// var p = new Plugboard('ABCDEFGHIJKLMNOPQRST');
// console.log(p.process('T'));
var p1 = new Plugboard('SUJKPZBR');
console.log(p1.process('AT CUDDLES EATS MESSAGE IS CUDDLES FUN THE'));

// best

/* 
Plugboard = function(wires) {
  wires = wires || '';

  if (!wires.match(/^([A-Z][A-Z]){0,10}$/)) 
    throw Error();
    
  if (wires.match(/(.).*\1/)) 
    throw Error();

  this.process = function(wire) {
    var i = wires.indexOf(wire);
    return i == -1 ? wire : wires[i + 1 - 2 * (i % 2)];
  }
}
*/