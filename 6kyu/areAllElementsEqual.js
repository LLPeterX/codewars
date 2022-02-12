/* 
6kyu - Are all elements equal?
https://www.codewars.com/kata/5963caa2cb97be79630000c0

Дан некторый список. Определить - все ли элементы равны? Строгое сравнение.
Список может быть строкой или массивом (бонус - объектом).
Бонус: поддержка любого итерируемого объекта.
Метод не должен быть enumerable (?)
*/

/*
// т.к. мы определили eqAll() в самом Object, то ниже код не нужен - Array и String наследуются от Object
Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    const iterator = this[Symbol.iterator]();
    let c0 = iterator.next().value;
    while (true) {
      let { value, done } = iterator.next();
      if (done) break;
      if (value !== c0) return false;
    }
    return true;
  },
  enumerable: false
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    const iterator = this[Symbol.iterator]();
    let c0 = iterator.next().value;
    while (true) {
      let { value, done } = iterator.next();
      if (done) break;
      if (value !== c0) return false;
    }
    return true;
  },
  enumerable: false
});
*/

Object.defineProperty(Object.prototype, "eqAll", {
  value: function eqAll() {
    const iterator = this[Symbol.iterator]();
    let c0 = iterator.next().value;
    while (true) {
      let { value, done } = iterator.next();
      if (done) break;
      if (value !== c0) return false;
    }
    return true;
  },
  enumerable: false
});

console.log(' ---- str --');
console.log("aaaaa".eqAll(), true);
console.log("abcde".eqAll(), false);
console.log("".eqAll(), true);
console.log(' ---- arr --');
console.log([0, 0, 0].eqAll(), true);
console.log([0, 1, 2].eqAll(), false);
console.log([].eqAll(), true);

// objects
console.log(' ---- obj --');
let o1 = { a: 1, b: 1, c: 1 };
// console.log(o1.eqAll(), true);
// let o2 = { a: 1, b: 2, c: 1 };
// console.log(o2.eqAll(), true);

// my best

// other:
/* 
Object.defineProperty(Object.prototype, 'eqAll', {
    enumerable: false,
    value: function() {
        const tab = Array.from(this);
        return tab.length ? tab.every(x => x === tab[0]) : true;
    }
});
*/

/* 
Object.defineProperty(
    Object.prototype,
    'eqAll',
    {
    value: function eqAll() {
      const iterator = this[Symbol.iterator]()
      const first = iterator.next()

      if (!first.done) {
        for (const item of iterator) {
          if (item !== first.value) {
            return false
          }
        }
      }

      return true
    }
  }
)
*/