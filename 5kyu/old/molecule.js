/* 
5kyu - Molecule to atoms
https://www.codewars.com/kata/52f831fa9d332c6591000511

Дана химическая формула типа 'K4[ON(SO3)2]2'
Подсчитать общее количество атомов каждого элемента и вернуть в виде объекта.
Могут быть скобки в виде '()','[]', '{}'. После скобок может не быть числа.

Пример:
'K4[ON(SO3)2]2' => {K: 4, O: 14, N: 2, S: 4}
'Mg(OH)2' => {Mg: 1, O: 2, H: 2}
*/


// ниже на основе https://proglib.io/p/math-expression-tokenizer
// http://vanilla-js.blogspot.com/2015/08/parser-javascript.html

// const isUcase = (c) => c && /[A-Z]/.test(c);
// const isLcase = (c) => c && /[a-z]/.test(c);
// const isNumber = (c) => typeof c === 'number' || /\d+/.test(c);
// const isAtom = (c) => typeof c === 'string' && c !== ')' && c !== '(';

// function joinObjects(o1, o2, mutiplier) {
//   return [...new Set([...Object.keys(o1), ...Object.keys(o2)])].reduce((o, k) => { o[k] = ((o1[k] || 0) + (o2[k] || 0) * mutiplier); return o; }, {});
// }


/* 
 в принипе алогритм такой:
 0) разбиваем строку на токены: атомы, скобки и числа
 1) Находим самые вложенные скобки и вычленяем выражение внутри них.
 2) Парсим выражение внутри скобок:
   2.1) создаем временный объект tmp={}
   2.2) Пробегаемся по выражению:
    - если имя атома, tmp[name]=1. Запоминаем имя.
    - если после имени идет число, tmp[name]=number
   2.3) Помещаем выражение в стек
 3) Если после скобок есть число:
    3.1 stack.pop(), умножаем кол-во на N и снова в стек
 4) Удаляем блок скобок из массива
 */

/* 
 
*/


class AtomsGroup {
  constructor(parent = {}) {
    this.atoms = {};
    this.groups = [];
    this.multiplier = 1;
    this.parent = parent;
  }

  addAtom(name, count) {
    this.atoms[name] = (this.atoms[name] || 0) + +count;
  }
}

const isNumber = (c) => !isNaN(+c);
const isAtom = (c) => c !== ')' && c !== '(';

function parse(tokens) {
  let root = new AtomsGroup(null);
  let current = root;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '(') {
      let parent = current;
      current = new AtomsGroup(parent);
      parent.groups.push(current);
    } else if (isAtom(tokens[i])) {
      if (isNumber(tokens[i + 1])) {
        current.addAtom(tokens[i], tokens[i + 1]);
        i++;
      } else {
        current.addAtom(tokens[i], 1);
      }
    } else if (tokens[i] === ')') {
      if (isNumber(tokens[i + 1])) {
        current.multiplier = +tokens[i + 1];
        i++;
      }
      current = current.parent;

    }
  }
  return root;
}


function joinGroups(tree, parentMultiplier, atoms) {
  let multiplier = tree.multiplier * parentMultiplier;
  for (let g of tree.groups) joinGroups(g, multiplier, atoms);
  for (let a of Object.keys(tree.atoms)) {
    atoms[a] = (atoms[a] || 0) + (tree.atoms[a] * multiplier);
  };
  return atoms;
}


function parseMolecule(formula) {
  const tokens = formula
    .replace(/./g, (c) => ({ '[': '(', '{': '(', ']': ')', '}': ')', ' ': '' }[c] || c))
    .match(/(\d+|\(|\)|[A-Z][a-z]?)/g);
  return joinGroups(parse(tokens), 1, {});
}


console.log(parseMolecule('K4[ON(SO3)2]2'), { K: 4, O: 14, N: 2, S: 4 }); // FAIL
// console.log(parseMolecule('Mg(OH)2'), { Mg: 1, O: 2, H: 2 });
// // отсебятина
// console.log(parseMolecule('HMgHg(OHHg2)12'), { Mg: 1, O: 12, H: 13, Hg: 25 });
// console.log(parseMolecule('H2O'), { H: 2, O: 1 });
// console.log(parseMolecule('(C5H5)Fe(CO)2CH3'), { C: 8, H: 8, Fe: 1, O: 2 });

// best
/* 
function parseMolecule(formula) {
  var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
  while (tokens = tokenExp.exec(formula)) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group))
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}
*/

/* 
function parseMolecule(s) {
  var o = {}
  while (s != (s = s.replace(/[\[\(\{]([a-z0-9]+)[\]\)\}]([0-9]+)/gi, (f,e,n) => repeat(e,n))));
  s.replace(/([A-Z][a-z]?)([0-9]+)?/g, (f,e,n) => (o[e] = (o[e] || 0) + +(n || 1)));
  return o;
}

function repeat(s, n) {
  for (var r = ""; n--; r += s);
  return r;
}
*/

/* 
function parseMolecule(formula) {
  var elementMatch = /([A-Z][a-z]*|[)\]}])(\d*)/g,
      groupMatch = /[{[(]([^{[()\]}]+)[)\]}](\d*)/g,
      numberMatch = /\d+/g,
      atoms = {},
      explicitFormula;
      
  explicitFormula = formula.replace(elementMatch, function(m, s, n){
    return s + (n || '1');
  });
  
  while(groupMatch.test(explicitFormula)) {
    explicitFormula = explicitFormula.replace(groupMatch, function(m, s, n){
      return s.replace(numberMatch, function(m){ return (+m)*(+n); })
    })
  }
  
  explicitFormula.replace(elementMatch, function(m, s, n) {
    atoms[s] = (atoms[s] || 0) + (+n);
    return m;
  });
  
  return atoms;
}
*/

