/* 
2kyu - Full Metal Chemist #1: build me...
https://www.codewars.com/kata/5a27ca7ab6cfd70f9300007a

Создать 2 класса: Molecule и Atom.
это позволит вам, используя набор методов, 
построить числовые эквиваленты органических соединений 
и восстановить некоторые из их простейших свойств 
(например, молекулярный вес и исходную формулу).
Также надо имплементировать Error.

--- Класс Molecule ---

Основной объект, представляет молекулу, её свойства и атомы.
свойства:
 - this.formula - химическая формула (типа "C2H5OH", "C5H10O2BrClS")
 - this.molecularWeight (double) - вес. г/моль
 - this.atoms - список атомов. Атомы добавляются в порядке создания.
 - this.name - наименование молекулы

Методы:
- constructor(name = null) . Наименование может быть опущено.

- brancher(x,y,z, ...) - Ветка - это цепочка совединенных вместе атомов.
  Когда создается ветвь, все ее атомы являются атомами углерода.
  Каждая «ветвь» молекулы идентифицируется номером, соответствующим 
  порядку ее создания: первая созданная ветвь имеет номер 1, вторая — номер 2,…
  Метод brancher() может принимать любое кол-во аргументов, (каждый из
  аргументов = число атомов C в ветви), добавлет
  новые "ветви" к текущей молекуле.

- bounder([c1,b1,c2,b2], ...)  - создает соединение между атомами в существующих ветках
   c1,b1 - позиция первого атома c1 в ветке b1
   c2,b2 - позиция второго атома
  Позиции нумеруются с 1. [1,1,5,3] означает соединение первого атома первой ветки
  с 5-м атомом 3-й ветки. Только положительные целые

 - mutate([nc,nb,elt], ...) 
    * замещает атом углерода nc (нумерация с 1!) в ветке bc на химический элемент elt (строка)
    * id атома остается прежним
    
 - add([nc,nb,elt], ...)
  * добавляет new Atom() типа elt (elt - строка) к углероду nc в ветке nb.
  * такие добавленные атомы не считаются частью ветви, с которой они связаны, 
    и не считаются новой ветвью молекулы.
 
....
Related behaviours:

* Методы должны соединяться в цепочку: (ex: molec = Molecule("octane").brancher(8).closer()).
* Построение молекулы заключается в мутации исходного объекта при каждом вызове метода.
* Если атом превышает свою валентность или связывается с самим собой,
  бросать исколючение

An InvalidBond exception should be thrown each time you encounter a case 
where an atom exceeds its valence number or is bounded to itself 
(about the valence number, see additional information below).
When a method throws an exception while it still has several arguments/atoms left to handle, the modifications resulting from the valid previous operations must be kept but all the arguments after the error are ignored.
Special case with add_chaining: if an error occurs at any point when adding the chain, all its atoms have to be removed from the instance (even the valid ones).
The whole molecule integrity should hold against any error, meaning that it must be possible to correctly work with a molecule object even after it threw an exception.
The fields formula and molecular_weight or the associated getters (depending on your language) should throw an UnlockedMolecule exception if an user tries to access them while the molecule isn't locked (because we do not want the user to catch incomplete/invalid information).
In a similar manner, attempts of modification of a molecule after it has been locked should throw a LockedMolecule exception (the closer method follows this behavior too).

*/


/* 
TODO:

1) Check all possible mutations and correct behavior of 'add' on the mutated atom
new Molecule('').brancher(1).mutate([1,1,'H']).closer()
Testing raw formula with mutation: expected 'H' to deeply equal 'H2' - ???

2) д.б. Ошибка "Should fail when chaining atoms after any monovalent atom"
(без closer())
new Molecule('').brancher(3).addChaining(2,1,'C','C','F','H')
д.б.: [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3)', 'Atom(C.3: C2)' ]
моё:  [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C4)', 'Atom(C.3: C2)' ]

3) При разблокировке перименовать ID атомов в this.atoms[] начиная с 1.
заодно в links


*/

const ELEMENTS = {
  'H': { valence: 1, weight: 1, order: 2 },
  'B': { valence: 3, weight: 10.8, order: 4 },
  'C': { valence: 4, weight: 12, order: 1 },
  'N': { valence: 3, weight: 14, order: 9 },
  'O': { valence: 2, weight: 16, order: 3 },
  'F': { valence: 1, weight: 19, order: 7 },
  'Mg': { valence: 2, weight: 24.3, order: 8 },
  'P': { valence: 3, weight: 31, order: 10 },
  'S': { valence: 2, weight: 32.1, order: 11 },
  'Cl': { valence: 1, weight: 35.5, order: 6 },
  'Br': { valence: 1, weight: 80, order: 5 },
};


class Atom {

  constructor(elt, id) {
    this.id = id;
    this.element = elt;
    this.links = []; // array of bound Atom's
  }

  get weight() {
    return ELEMENTS[this.element].weight;
  }

  get valence() {
    return ELEMENTS[this.element].valence;
  }

  get boundCount() {
    return this.links.length;
  }

  get order() {
    return ELEMENTS[this.element].order;
  }

  connect(otherAtom) { // other atom object
    if (otherAtom.id === this.id) {
      throw new InvalidBond(`Cannot bind ${this} to self`);
    }
    if (this.valence <= this.boundCount || otherAtom.valence <= otherAtom.boundCount) {
      throw new InvalidBond(`Cannot bind ${this} to ${otherAtom}: incompatible valences`);
    }
    this.links.push(otherAtom);
    otherAtom.links.push(this);
  }

  replace(elt) {
    if (this.boundCount > ELEMENTS[elt].valence) {
      throw new InvalidBond(`Cannot replace atom ${this} with ${elt}: new valence is too small`);
    }
    this.element = elt;
  }

  toString() {
    let output = `Atom(${this.element}.${this.id}`;
    if (!this.boundCount) {
      return output + ')';
    }
    let hs = this.links.filter(e => e.element === 'H');
    let nonH = this.links
      .filter(e => e.element !== 'H')
      .sort((a, b) => a.order == b.order ? a.id - b.id : a.order - b.order);
    output += ': ';
    if (nonH.length > 0) output += nonH.map(e => `${e.element}${e.id}`).join(',');
    if (hs.length) output += (nonH.length > 0 ? ',' : '') + Array(hs.length).fill('H').join(',');
    output += ')';
    return output;
  }
}


class Molecule {
  constructor(name = '') {
    this.name = name;
    this.atoms = []; // array of Atom objects
    this.branches = []; // array of arrays of Atom objects
    this.isLocked = false;
    this.idc = 1; // atoms counter
    console.log('\n --- new molecule:', name);
  }

  brancher(...brn) {
    console.log(' brancher', brn);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    for (let atomsCount of brn) {
      let branch = [];
      for (let j = 0; j < atomsCount; j++) {
        let atom = new Atom('C', this.idc++);
        branch.push(atom);
        this.atoms.push(atom);
        if (j > 0) {
          atom.connect(branch[j - 1]);
        }
      }
      this.branches.push(branch);
    }
    return this;
  }

  bounder(...b) {
    console.log(' bounder', b);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    for (let [c1, b1, c2, b2] of b) {
      let atom1 = this.branches[b1 - 1][c1 - 1];
      let atom2 = this.branches[b2 - 1][c2 - 1];
      atom1.connect(atom2);
    }
    return this;
  }

  mutate(...m) {
    console.log(' mutate', m);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    for (let [ci, bi, e] of m) {
      let branchAtom = this.branches[bi - 1][ci - 1];
      if (!branchAtom) {
        throw Error(`Atom in branch ${bi} #${ci} not found`);
      }
      branchAtom.replace(e);
    }
    return this;
  }

  add(...a) {
    console.log(' add', a);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    for (let [ci, bi, e] of a) {
      let atom = this.branches[bi - 1][ci - 1];
      if (!atom) {
        throw Error(`Atom in the branch ${bi} at index ${ci} not found`);
      }
      let newAtom = new Atom(e, this.idc++);
      atom.connect(newAtom);
      this.atoms.push(newAtom);
    }
    return this;
  }

  addChaining(ci, bi, ...elements) {
    console.log(' addChaining', ci, bi, elements);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    let backupAtoms = new Set(this.atoms.map(a => a.id)); // faster than arr.includes()
    let prevAtom = this.branches[bi - 1][ci - 1];
    let prevAtomIndex = this.atoms.findIndex(a => a.id == prevAtom.id);
    let oldIdc = this.idc;
    try {
      for (let i = 0; i < elements.length; i++) {
        if (prevAtom.valence == 1) {
          throw new InvalidBond(`Valence of ${prevAtom.element} = 1`);
        }
        let elt = elements[i];
        let newAtom = new Atom(elt, this.idc++);
        prevAtom.connect(newAtom);
        this.atoms.push(newAtom);
        prevAtom = newAtom;
      }
    } catch (e) {
      // restore molecule
      this.idc = oldIdc;
      this.atoms = this.atoms.filter(a => backupAtoms.has(a.id));
      // fix links
      this.atoms[prevAtomIndex].links = this.atoms[prevAtomIndex].links.filter(a => backupAtoms.has(a.id));
      throw new InvalidBond();
    }
    return this;
  }

  closer() {
    console.log(' closer');
    if (this.isLocked) {
      throw new LockedMolecule("Molecule already finished");
    }
    let atomsCount = this.atoms.length;
    for (let i = 0; i < atomsCount; i++) {
      let a = this.atoms[i];
      let addCount = a.valence - a.boundCount;
      while (addCount-- > 0) {
        let h = new Atom('H', this.idc++);
        this.atoms.push(h);
        a.connect(h);
      }
    }
    this.isLocked = true;
    return this;
  }

  unlock() {
    console.log(' unlock2');
    // здесь ошибка с удалением пустых веток
    let newId = 1;
    let newBranches = [];
    for (let b of this.branches) {
      b = b.filter(a => a.element !== 'H');
      if (b.length) {
        newBranches.push(b);
      }
    }
    let newAtoms = [];
    for (let a of this.atoms) {
      if (a.element !== 'H') {
        a.links = a.links.filter(e => e.element !== 'H');
        // тут фигня: не в той последовательности 
        // модифицируются id's
        // надо их менять при изменении branches[] - ??
        a.id = newId++;
        newAtoms.push(a);
      }
    }
    if (!newAtoms.length) {
      throw new EmptyMolecule('Molecule is empty');
    }
    this.branches = newBranches;
    this.atoms = newAtoms;
    this.idc = newId;
    this.isLocked = false;
    return this;
  }

  get molecularWeight() {
    if (!this.isLocked) throw new UnlockedMolecule("Molecule not finished");
    return this.atoms.reduce((sumw, a) => sumw += a.weight, 0);
  }

  get formula() {
    if (!this.isLocked) throw new UnlockedMolecule("Molecule not finished");
    // CHO first, then others
    let objCounter = this.atoms
      .reduce((obj, a) => { obj[a.element] = (obj[a.element] || 0) + 1; return obj; }, {});
    let strAtoms = Object.entries(objCounter)
      .sort((a, b) => ELEMENTS[a[0]].order - ELEMENTS[b[0]].order)
      .map(([elt, count]) => `${elt}${count > 1 ? count : ''}`);
    return strAtoms.join``;
  }
}

class InvalidBond extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidBond';
  }
}

class LockedMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = 'LockedMolecule';
  }
}

class UnlockedMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnlockedMolecule';
  }
}

class EmptyMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = 'EmptyMolecule';
  }
}


// ----- TESTS -----------


// FAIL TEST
// должно выбросить исключение
//Should have removed correctly the first empty branch 
//and should have used what was previously the second branch 
//as the currently first one: let m1 = new Molecule('');
//try {
m1 = new Molecule()
m1.brancher(1, 5)
  .bounder([2, 2, 5, 2], [4, 2, 1, 1])
  .mutate([1, 1, 'H'])
  .brancher(3)
  .bounder([2, 3, 1, 3], [2, 3, 3, 3])
  .closer()
  .unlock()
  .add([2, 2, 'P'])
  .add([2, 1, 'P'])

//} catch (e) {
console.log(m1.atoms.map(a => a.toString()));
//}
/* 
The carbone (1,2) mutated to hydrogen before has been removed 
  when unlocking the molecule: it should have been removed 
  from the branches structure too
expected [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C5,P10)', 'Atom(C.3: C2,C4)', 'Atom(C.4: C3,C5)', 'Atom(C.5: C2,C4)', 'Atom(C.6: C7,C7)', 'Atom(C.7: C6,C6,C8,C8)', 'Atom(C.8: C7,C7)', 'Atom(P.10: C2)' ] 
to equal [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C5,P9)',  'Atom(C.3: C2,C4)', 'Atom(C.4: C3,C5)', 'Atom(C.5: C2,C4)', 'Atom(C.6: C7,C7)', 'Atom(C.7: C6,C6,C8,C8)', 'Atom(C.8: C7,C7)', 'Atom(P.9: C2)' ]
                                                ^^                                                                                                                                     ^^                                  

*/


// console.log(' ---Basic tests ---- ');
// let mdemo = new Molecule('demo').brancher(1).mutate([1, 1, 'H']).closer();
// console.log('===>', mdemo.formula, 'H2');

// {
//   console.log('Constructors');
//   var m = new Molecule
//   console.log(m.name, '', 'Should define the empty string as default name');
//   m = new Molecule('banana')
//   console.log(m.name, 'banana', 'Even if...');
// }
// {
//   console.log('Simple carbohydrates');
//   /* methane:
//     H
//     |
//   H-C-H   <=>  CH4
//     |
//     H
//   */
//   var methane = new Molecule("methane").brancher(1).closer()
//   console.log(methane.formula, 'CH4')
//   console.log(methane.molecularWeight, 16)
//   /* octane:
//   CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3
//   */
//   var octane = new Molecule('octane').brancher(8).closer()
//   console.log(octane.formula, 'C8H18')
//   console.log(octane.molecularWeight, 114)
// }

// console.log(' --- basic successful ---');
// ------------------------------------------------------------------

const str = it => it.toString()

// console.log('Atom class specifications (using methane)');
// {
//   var methane, atoms;
//   //beforeEach(() => {
//   methane = new Molecule('methane').brancher(1);
//   atoms = methane.atoms;
//   //})

//   console.log('toString() implementation (basics 1): atom without bonds');
//   console.log(str(atoms[0]), 'Atom(C.1)')

//   console.log("'element' and 'id' properties");
//   methane.closer()
//   atoms = methane.atoms;
//   console.log(atoms.length, 5, 'Wrong number of atoms');
//   [...'CHHHH'].forEach((elt, x) => {
//     console.log(atoms[x].element, elt, `Wrong atom at the index ${x} in self.atoms`)
//     console.log(atoms[x].id, x + 1, `Wrong id value ${x + 1} in self.atoms`)
//   })
// }
// // ===
// {
//   methane = new Molecule('methane').brancher(1);
//   atoms = methane.atoms;

//   console.log('toString() implementation (basics 2)');
//   methane.closer()
//   atoms = methane.atoms;
//   console.log(str(atoms[0]), 'Atom(C.1: H,H,H,H)')
//   console.log(str(atoms[atoms.length - 1]), 'Atom(H.5: C1)')
//   console.log('---- end Atom class specifications (using methane) ----');
// }

// ---------------------------------------------------------------



const extractNoneHToStr = m => m.atoms.filter(it => it.element != 'H').map(str)

const testThisMolecule = (m, formula, mm, strNoH) => {
  console.log(m.formula, formula, 'Testing raw formula');
  console.log(m.molecularWeight, mm, 'Testing molecular weight');
  console.log(extractNoneHToStr(m), strNoH, 'Checking bonds (for non-hydrogens)');
}


//console.log('\n-- Create carbohydrates and bound them correctly (id tracking, raw formula and molecular weight tested)--\n');

// const config = [

//   [/* cyclohexane:
// CH2-CH2-CH2
// |       |
// CH2-CH2-CH2
// */,
//     'cyclohexane',
//     [6],
//     [[1, 1, 6, 1]],
//     'C6H12',
//     84,
//     ['Atom(C.1: C2,C6,H,H)', 'Atom(C.2: C1,C3,H,H)', 'Atom(C.3: C2,C4,H,H)', 'Atom(C.4: C3,C5,H,H)', 'Atom(C.5: C4,C6,H,H)', 'Atom(C.6: C1,C5,H,H)']],


//   [/* 1,1-dimethyl-2-propylcyclohexane:
//             CH3   CH3
//                \ /
// CH3-CH2-CH2-CH2-CH2-CH2
//             |       |
//             CH2-CH2-CH2
// */,
//     '2-propyl-1,1-dimethylcyclohexane',
//     [9, 1, 1],
//     [[4, 1, 9, 1], [5, 1, 1, 2], [5, 1, 1, 3]],
//     'C11H22',
//     154,
//     ['Atom(C.1: C2,H,H,H)', 'Atom(C.2: C1,C3,H,H)', 'Atom(C.3: C2,C4,H,H)', 'Atom(C.4: C3,C5,C9,H)', 'Atom(C.5: C4,C6,C10,C11)', 'Atom(C.6: C5,C7,H,H)', 'Atom(C.7: C6,C8,H,H)', 'Atom(C.8: C7,C9,H,H)', 'Atom(C.9: C4,C8,H,H)', 'Atom(C.10: C5,H,H,H)', 'Atom(C.11: C5,H,H,H)']],


//   [/* cubane (something like that, with one more 'CH' group at the back of the cube...):
//        CH-----CH
//       /      /|
//      /      / |
//     CH-----CH CH
//     |      | /
//     |      |/
//     CH-----CH
// */, 'cubane - one branch',
//     [8],
//     [[3, 1, 6, 1], [2, 1, 7, 1], [1, 1, 8, 1], [4, 1, 1, 1], [5, 1, 8, 1]],
//     'C8H8',
//     104,
//     ['Atom(C.1: C2,C4,C8,H)', 'Atom(C.2: C1,C3,C7,H)', 'Atom(C.3: C2,C4,C6,H)', 'Atom(C.4: C1,C3,C5,H)', 'Atom(C.5: C4,C6,C8,H)', 'Atom(C.6: C3,C5,C7,H)', 'Atom(C.7: C2,C6,C8,H)', 'Atom(C.8: C1,C5,C7,H)']],


// [/* cubane again: same than the one above!
// */,
//   'cubane - two branches', // name
//   [4, 4], // brancher
//   [[1, 1, 4, 1], [1, 2, 4, 2], [1, 1, 1, 2], [2, 1, 2, 2], [3, 1, 3, 2], [4, 1, 4, 2]], // bounder
//   'C8H8', // formula
//   104, // atomWight
//   ['Atom(C.1: C2,C4,C5,H)', 'Atom(C.2: C1,C3,C6,H)', 'Atom(C.3: C2,C4,C7,H)', 'Atom(C.4: C1,C3,C8,H)', 'Atom(C.5: C1,C6,C8,H)', 'Atom(C.6: C2,C5,C7,H)', 'Atom(C.7: C3,C6,C8,H)', 'Atom(C.8: C4,C5,C7,H)']], // carbRoStr

//   [/* benzene:
//  CH-CH
// //   \\
// CH    CH
// \    /
//  CH=CH
// */,
//     'benzene: double bonds',
//     [2, 2, 2],
//     [[1, 1, 2, 1], [1, 2, 2, 2], [1, 3, 2, 3], [2, 1, 1, 2], [2, 2, 1, 3], [2, 3, 1, 1]],
//     'C6H6',
//     78,
//     ['Atom(C.1: C2,C2,C6,H)', 'Atom(C.2: C1,C1,C3,H)', 'Atom(C.3: C2,C4,C4,H)', 'Atom(C.4: C3,C3,C5,H)', 'Atom(C.5: C4,C6,C6,H)', 'Atom(C.6: C1,C5,C5,H)']], // carbToStr

//]; // config
// config.forEach(([_, name, branch, bonds, formula, mm, carbToStr]) => {
//   console.log(`--- check ${name} --- `);
//   const m = new Molecule(name).brancher(...branch).bounder(...bonds).closer();
//   testThisMolecule(m, formula, mm, carbToStr);
//   console.log('..atoms:', m.atoms.map(e => `${e.element}${e.id}`));
//   console.log(' braches:', m.branches.map(b => b.map(e => `${e.element}${e.id}`)));
// });
// console.log(' \n-- end Create carbohydrates and bound them correctly (id tracking, raw formula and molecular weight tested)--\n\n');
// ----------



// console.log(' --- Mutating, adding and valence numbers consistencies');

// const config = [
//   [/* Furane:
//     O
//   /   \
// CH     CH
//  \\   //
//   CH-CH
// */,
//     'Furane: no additional hydrogens while closing after mutation',
//     [5],
//     [[5, 1, 1, 1], [5, 1, 4, 1], [2, 1, 3, 1]],
//     [[1, 1, 'O']],
//     'C4H4O',
//     68,
//     ['Atom(O.1: C2,C5)', 'Atom(C.2: C3,C3,O1,H)', 'Atom(C.3: C2,C2,C4,H)', 'Atom(C.4: C3,C5,C5,H)', 'Atom(C.5: C4,C4,O1,H)']],


//   [/* isopropylmagnesium bromide:
// CH3
//   \
//    CH-Mg-Br
//   /
// CH3
// */,
//     'isopropylmagnesium bromide',
//     [4, 1],
//     [[2, 1, 1, 2]],
//     [[3, 1, 'Mg'], [4, 1, 'Br']],
//     'C3H7BrMg',
//     147.3,
//     ['Atom(C.1: C2,H,H,H)', 'Atom(C.2: C1,C5,Mg3,H)', 'Atom(Mg.3: C2,Br4)', 'Atom(Br.4: Mg3)', 'Atom(C.5: C2,H,H,H)']]
// ];

// config.forEach(([_, name, branch, bonds, mut, formula, mm, carbToStr]) => {
//   console.log('>>>', name);
//   const m = new Molecule(name).brancher(...branch).bounder(...bonds).mutate(...mut).closer();
//   testThisMolecule(m, formula, mm, carbToStr)
// });


// ------------------ FAIL TESTS -------------------

// console.log('Fail when it should, building molecules');

// console.log('Invalid basic builds');

// const config = [
//   // ['No self-bonding',
//   //   [6],
//   //   [[1, 1, 1, 1]]],

//   ['Should fail when exceeding the valence number adding new alkyls to the same atom',
//     [3, 1, 1, 1],
//     [[2, 1, 1, 2], [2, 1, 1, 3], [2, 1, 1, 4]]],

//   ['Should fail when exceeding the valence number with multiple bonds',
//     [4],
//     [[2, 1, 3, 1], [2, 1, 3, 1], [2, 1, 3, 1]]],

// ];

// config.forEach(([descript, branch, bonds]) => {
//   // assert.throws(
//   //   () => { new Molecule('').brancher(...branch).bounder(...bonds).closer() },
//   //   InvalidBond, '',
//   //   descript
//   // )
//   console.log(`testing ${descript}:`)
//   try {
//     new Molecule('').brancher(...branch).bounder(...bonds).closer();
//     console.log(' ...created - FAIL;')
//   } catch (e) {
//     console.log(' OK', e.message);
//   }
// })





// describe('Invalid mutations and additions', () => {

//   const config = [
//     ['Should fail when mutating a carbon with three atoms already linked to an oxygen',
//       [3, 1],
//       [[2, 1, 1, 2]],
//       'mutate', [2, 1, 'O']],

//     ['Should fail when mutating a carbon with two double bonds to nitrogen',
//       [3],
//       [[1, 1, 2, 1], [3, 1, 2, 1]],
//       'mutate', [2, 1, 'N']],

//     ['Should fail when adding a new hydrogen to a carbon with already 4 bonds',
//       [3],
//       [[1, 1, 2, 1], [3, 1, 2, 1]],
//       'add', [2, 1, 'H']],


//     ['Should fail when mutating an atom and then adding too much atoms on it',
//       [3],
//       [[1, 1, 2, 1]],
//       'mutadd', [[2, 1, 'N'], [2, 1, 'O']]],

//   ]
//   config.forEach(([descript, branch, bonds, mutadd, inp]) => {
//     it(descript, () => {
//       const m = new Molecule('').brancher(...branch).bounder(...bonds)
//       var func
//       if (mutadd === 'mutate') func = () => m.mutate(inp).closer()
//       else if (mutadd === 'add') func = () => m.add(inp).closer()
//       else if (mutadd === 'mutadd') func = () => m.mutate(inp[0]).add(inp[1]).closer()
//       else throw new Error('Wrong configuration of the tests')

//       assert.throws(func, InvalidBond)
//     })
//   })
// })


/* 
Error logs:
-------------------------------
-- new molecule 
brancher: [ 1 ]
mutate: [ [ 1, 1, 'H' ] ] 1
closing [ Atom { id: 1, element: 'H', links: [] } ]
Testing raw formula with mutation: expected 'H' to deeply equal 'H2'
-----------------------------

Should fail when chaining atoms after any monovalent atom
т.е. после F должно быть InvalidBound exception
Log
-- new molecule 
brancher: [ 3 ]
chaining 2 1 [ 'C', 'C', 'F', 'H' ]
expected [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C4)', 'Atom(C.3: C2)' ] to deeply equal [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3)', 'Atom(C.3: C2)' ]
-------------
Unlock properly a molecule, removing hydrogens and updating id numbers)
All hydrogens should have been removed after closing/unlocking 
and carbons ids modified accordingly: 
expected        [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C5)', 'Atom(C.3: C2)', 'Atom(C.5: C2)' ] 
to deeply equal [ 'Atom(C.1: C2)', 'Atom(C.2: C1,C3,C4)', 'Atom(C.3: C2)', 'Atom(C.4: C2)' ]
-----------------------------
Handle unlocking while a carbon from the 'branches' 
has been mutated to an hydrogen before
-----------------------------
Remove empty branches, after unlocking
-----------------------------
Throw an EmptyMolecule exception if no branches are left after unlocking
-----------------------------
Correct management of the atoms that should be in the branches or not
(Error: TypeError: Cannot read properties of undefined (reading 'connect'))

The chain -C-Br added on the carbon (nc=1, nb=1) shouldn't be considered 
as a 'branch' of the curent molecule, so your molecule should only contain 
2 branches left, now. 
Your code threw the exception logged above.: expected false to be true
-------------------------------
*/