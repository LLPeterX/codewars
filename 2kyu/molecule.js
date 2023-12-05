/* 
2kyu - Full Metal Chemist #1: build me...
https://www.codewars.com/kata/5a27ca7ab6cfd70f9300007a


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
    for (let [cn, bn, elt] of a) {
      let atom = this.branches[bn - 1][cn - 1];
      let newAtom = new Atom(elt, this.idc);
      atom.connect(newAtom);
      this.atoms.push(newAtom);
      this.idc++;
    }
    return this;
  }

  addChaining(cn, bn, ...elements) {
    console.log(' addChaining', cn, bn, elements);
    if (this.isLocked) throw new LockedMolecule("Molecule is finished");
    let backupAtoms = new Set(this.atoms.map(a => a.id)); // faster than arr.includes()
    let prevAtom = this.branches[bn - 1][cn - 1];
    let prevAtomIndex = this.atoms.findIndex(a => a.id == prevAtom.id);
    let oldIdc = this.idc;
    try {
      for (let i = 0; i < elements.length; i++) {
        // if (prevAtom.valence == 1) {
        //   throw new InvalidBond(`Valence of ${prevAtom.element} = 1`);
        // }
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
    // The id numbers of the remaining atoms have to be continuous again 
    // (beginning at 1), keeping the order they had when the molecule was locked.
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

// best
/*
const atomTypes = new Map([
  ["C", { valenceNumber: 4, atomicWeight: 12.0, order: 1 }],
  ["H", { valenceNumber: 1, atomicWeight: 1.0, order: 20 }],
  ["O", { valenceNumber: 2, atomicWeight: 16.0, order: 3 }],
  ["B", { valenceNumber: 3, atomicWeight: 10.8, order: 4 }],
  ["Br", { valenceNumber: 1, atomicWeight: 80.0, order: 5 }],
  ["Cl", { valenceNumber: 1, atomicWeight: 35.5, order: 6 }],
  ["F", { valenceNumber: 1, atomicWeight: 19.0, order: 7 }],
  ["Mg", { valenceNumber: 2, atomicWeight: 24.3, order: 8 }],
  ["N", { valenceNumber: 3, atomicWeight: 14.0, order: 9 }],
  ["P", { valenceNumber: 3, atomicWeight: 31.0, order: 10 }],
  ["S", { valenceNumber: 2, atomicWeight: 32.1, order: 11 }],
]);

class InvalidBond extends Error { }
class UnlockedMolecule extends Error { }
class LockedMolecule extends Error { }
class EmptyMolecule extends Error { }

class Atom {
  constructor(elt, id_) {
    this.id = id_;
    this.bonds = [];
    this.mutateTo(elt);
  }
  mutateTo(element) {
    if (!atomTypes.has(element) || this.bonds.length > atomTypes.get(element).valenceNumber) throw new InvalidBond;
    return Object.assign(this, atomTypes.get(element), { element });
  }
  toString() {
    return `Atom(${this.element}.${this.id}${this.bonds.length ? ": " : ""}${this.bonds.sort((a, b) => a.order - b.order || a.id - b.id)
        .map(other => other.element + (other.element === "H" ? "" : other.id))
      })`;
  }
}

class Molecule {
  constructor(name = "") {
    this.name = name;
    this.atoms = [];
    this.branches = [];
    this.locked = false;
  }
  requireLockToBe(locked) {
    if (this.locked !== locked) throw this.locked ? new LockedMolecule : new UnlockedMolecule;
    return true;
  }
  bondAtoms(...atoms) {
    this.requireLockToBe(false);
    let a;
    atoms.forEach((b, i) => {
      if (i && (a === Object(b) || a.bonds.length >= a.valenceNumber
        || b instanceof Atom && b.bonds.length >= b.valenceNumber)) throw new InvalidBond;
      if (b.length) b = atoms[i] = this.newAtom(b);
      if (i) a.bonds.push(b), b.bonds.push(a);
      a = b;
    });
    return atoms;
  }
  newAtom(elt) {
    this.requireLockToBe(false);
    const atom = new Atom(elt, this.atoms.length + 1);
    this.atoms.push(atom);
    return atom;
  }
  transaction(cb) {
    const savePoint = this.atoms.length;
    let result;
    try {
      result = cb();
    }
    catch (e) {
      this.atoms.length = savePoint;
      throw e;
    }
    return result;
  }
  get formula() {
    this.requireLockToBe(true);
    const counts = new Map(Array.from(atomTypes, ([elt]) => [elt, 0]));
    this.atoms.forEach((atom) => counts.set(atom.element, counts.get(atom.element) + 1));
    return Array.from(counts).filter(count => count[1]).map(([elt, count]) => elt + (count < 2 ? "" : count)).join("");
  }
  get molecularWeight() {
    return this.requireLockToBe(true) && this.atoms.reduce((sum, atom) => sum + atom.atomicWeight, 0);
  }
  brancher(...carbonCounts) {
    this.branches.push(...carbonCounts.map(length => this.bondAtoms(..."C".repeat(length))))
    return this;
  }
  bounder(...quads) {
    quads.forEach(([c1, b1, c2, b2]) => this.bondAtoms(this.branches[b1 - 1][c1 - 1], this.branches[b2 - 1][c2 - 1]));
    return this;
  }
  mutate(...triplets) {
    this.requireLockToBe(false);
    triplets.forEach(([nc, nb, elt]) => this.branches[nb - 1][nc - 1].mutateTo(elt));
    return this;
  }
  add(...triplets) {
    triplets.forEach(([nc, nb, elt]) => this.bondAtoms(this.branches[nb - 1][nc - 1], elt));
    return this;
  }
  addChaining(nc, nb, ...elts) {
    this.transaction(() => this.bondAtoms(this.branches[nb - 1][nc - 1], this.bondAtoms(...elts)[0]));
    return this;
  }
  closer() {
    this.requireLockToBe(false);
    this.atoms.forEach(atom => {
      while (atom.valenceNumber > atom.bonds.length) this.bondAtoms(atom, "H");
    });
    this.locked = true;
    return this;
  }
  unlock() {
    this.requireLockToBe(true);
    this.atoms.forEach(atom => atom.bonds = atom.bonds.filter(bonded => bonded.element !== "H"));
    this.atoms = this.atoms.filter(atom => atom.element !== "H");
    this.atoms.forEach((atom, i) => atom.id = i + 1);
    this.branches = this.branches.map(atoms => atoms.filter(atom => atom.element !== "H")).filter(atoms => atoms.length);
    if (!this.branches.length) throw new EmptyMolecule;
    this.locked = false;
    return this;
  }
}
*/