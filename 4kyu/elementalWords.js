/* 
4kyu - Elemental Words
https://www.codewars.com/kata/56fa9cd6da8ca623f9001233/train/javascript

Your task is to implement the function elementalForms(word), 
which takes one parameter (the string word), and returns an array (which we'll call forms). 
If word can be formed by combining element symbols from the periodic table, 
then forms should contain one or more sub-arrays, each consisting of strings of the form 
'elementName (elementSymbol)', for each unique combination of elements that can form word.

"snack" => [
  ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
  ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
  ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
]

*/

const ELEMENTS = {
  H: 'Hydrogen',
  He: 'Helium',
  Li: 'Lithium',
  Be: 'Beryllium',
  B: 'Boron',
  C: 'Carbon',
  N: 'Nitrogen',
  O: 'Oxygen',
  F: 'Fluorine',
  Ne: 'Neon',
  Na: 'Sodium',
  Mg: 'Magnesium',
  Al: 'Aluminium',
  Si: 'Silicon',
  P: 'Phosphorus',
  S: 'Sulfur',
  Cl: 'Chlorine',
  Ar: 'Argon',
  K: 'Potassium',
  Ca: 'Calcium',
  Sc: 'Scandium',
  Ti: 'Titanium',
  V: 'Vanadium',
  Cr: 'Chromium',
  Mn: 'Manganese',
  Fe: 'Iron',
  Co: 'Cobalt',
  Ni: 'Nickel',
  Cu: 'Copper',
  Zn: 'Zinc',
  Ga: 'Gallium',
  Ge: 'Germanium',
  As: 'Arsenic',
  Se: 'Selenium',
  Br: 'Bromine',
  Kr: 'Krypton',
  Rb: 'Rubidium',
  Sr: 'Strontium',
  Y: 'Yttrium',
  Zr: 'Zirconium',
  Nb: 'Niobium',
  Mo: 'Molybdenum',
  Tc: 'Technetium',
  Ru: 'Ruthenium',
  Rh: 'Rhodium',
  Pd: 'Palladium',
  Ag: 'Silver',
  Cd: 'Cadmium',
  In: 'Indium',
  Sn: 'Tin',
  Sb: 'Antimony',
  Te: 'Tellurium',
  I: 'Iodine',
  Xe: 'Xenon',
  Cs: 'Caesium',
  Ba: 'Barium',
  Hf: 'Hafnium',
  Ta: 'Tantalum',
  W: 'Tungsten',
  Re: 'Rhenium',
  Os: 'Osmium',
  Ir: 'Iridium',
  Pt: 'Platinum',
  Au: 'Gold',
  Hg: 'Mercury',
  Tl: 'Thallium',
  Pb: 'Lead',
  Bi: 'Bismuth',
  Po: 'Polonium',
  At: 'Astatine',
  Rn: 'Radon',
  Fr: 'Francium',
  Ra: 'Radium',
  Rf: 'Rutherfordium',
  Db: 'Dubnium',
  Sg: 'Seaborgium',
  Bh: 'Bohrium',
  Hs: 'Hassium',
  Mt: 'Meitnerium',
  Ds: 'Darmstadtium',
  Rg: 'Roentgenium',
  Cn: 'Copernicium',
  Uut: 'Ununtrium',
  Fl: 'Flerovium',
  Uup: 'Ununpentium',
  Lv: 'Livermorium',
  Uus: 'Ununseptium',
  Uuo: 'Ununoctium',
  La: 'Lanthanum',
  Ce: 'Cerium',
  Pr: 'Praseodymium',
  Nd: 'Neodymium',
  Pm: 'Promethium',
  Sm: 'Samarium',
  Eu: 'Europium',
  Gd: 'Gadolinium',
  Tb: 'Terbium',
  Dy: 'Dysprosium',
  Ho: 'Holmium',
  Er: 'Erbium',
  Tm: 'Thulium',
  Yb: 'Ytterbium',
  Lu: 'Lutetium',
  Ac: 'Actinium',
  Th: 'Thorium',
  Pa: 'Protactinium',
  U: 'Uranium',
  Np: 'Neptunium',
  Pu: 'Plutonium',
  Am: 'Americium',
  Cm: 'Curium',
  Bk: 'Berkelium',
  Cf: 'Californium',
  Es: 'Einsteinium',
  Fm: 'Fermium',
  Md: 'Mendelevium',
  No: 'Nobelium',
  Lr: 'Lawrencium'
};

class Node {
  constructor(value) {
    this.value = value;
    this.e1 = null;
    this.e2 = null;
    this.e3 = null;
  }
}


function getElement(str) {
  return str[0] + str.slice(1).toLowerCase();
}

function isElement(str) {
  return ELEMENTS[getElement(str)] !== undefined;
}

function buildTree(node, str) {
  if (!str || !node) return;
  if (isElement(str[0])) {
    node.e1 = new Node(str[0]);
    buildTree(node.e1, str.slice(1));
  }
  if (isElement(str.slice(0, 2))) {
    node.e2 = new Node(str.slice(0, 2));
    buildTree(node.e2, str.slice(2));
  }
  if (isElement(str.slice(0, 3))) {
    node.e3 = new Node(str.slice(0, 3));
    buildTree(node.e3, str.slice(3));
  }
}

function getPath(node, arr, res) {
  if (!node) return;
  arr.push(node.value);
  if (node.e1 === null && node.e2 === null && node.e3 === null) {
    res.push(arr.slice());
    arr.pop();
    return;
  }
  getPath(node.e1, arr, res);
  getPath(node.e2, arr, res);
  getPath(node.e3, arr, res);
  arr.pop();
}


function elementalForms(word) {
  if (!word) return [];
  let root = new Node('');
  word = word.toUpperCase();
  buildTree(root, word);
  let res = [], arr = [];
  getPath(root, arr, res);
  // get unques
  let uniques = new Set();
  for (let a of res) {
    if (a.join("") === word) {
      uniques.add(a.slice(1).join(','));
    }
  }
  return [...uniques].map(row => row.split(',').map(e => `${ELEMENTS[getElement(e)]} (${getElement(e)})`));
}


console.log(elementalForms(''));
console.log(elementalForms('snack'));
console.log(elementalForms('beach'));

// best

/* 
const elementalForms = (word, acc = [], result = []) => {
  for (let i = 1; i <= 3; i += 1) {
    const el = word.slice(0, i).toLowerCase().replace(/^./, ch => ch.toUpperCase());
    if (!ELEMENTS[el]) continue;       

    const line = [ ...acc, `${ELEMENTS[el]} (${el})` ];   
    i === word.length && result.push(line);         

    elementalForms(word.slice(i), line, result);
  }
  
  return result;
}
*/

/* 
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function* findForms(ws, form = []) {
    if (ws.length == 0) yield form.map(e => ELEMENTS[e] + ' (' + e + ')');
    for (var i = 3; i > 0; --i) {
        if (ws.length >= i) {
            var el = ws.slice(0, i).capitalize();
            if (el in ELEMENTS) {
                form.push(el);
                yield* findForms(ws.slice(i), form);
                form.pop();
            }
        }
    }
}

function elementalForms(word) {
    return word.length == 0 ? [] : Array.from(findForms(word));
}
*/

/* 
function elementalForms(word) {
  return word == '' ? [] : [1,2,3].filter(len=>len<=word.length).reduce((res, len) => {
    var el = word[0].toUpperCase()+word.slice(1,len).toLowerCase(), name = ELEMENTS[el];
    return res.concat(name ? (len<word.length ? elementalForms(word.slice(len)) : [[]]).map(arr => [`${name} (${el})`].concat(arr)) : []);
  }, []);
}
*/

/* 
E=ELEMENTS
function elementalForms(word) {
  const forms = [], queue = [[[],word.slice()]]
  while (queue.length) {
    let path = queue.pop(), form = path[0], word = path[1]
    for (let e in E)
      if (word.toLowerCase().startsWith(e.toLowerCase())) {
          const newform = form.concat(E[e]+' ('+e+')')
          ,newword = word.slice(e.length)
          if (!newword){forms.push(newform);continue}
          queue.push([newform, newword])
      }
  }
  return forms
}
*/