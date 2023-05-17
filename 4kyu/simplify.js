/* 
4kyu - Simplifying multilinear polynomials
https://www.codewars.com/kata/55f89832ac9a66518f000118

Упростить уравнение:
1. Упростить сложение и вычитание эквивалентных мономов ("xy==yx"):
  "cb+cba" -> "bc+abc", 
  "2xy-yx" -> "xy", 
  "-a+5ab+3a-c-2a" -> "-c+5ab"
2. Отсортировать мономы в порядке возрастания количества переменных:
  "-abc+3a+2ac" -> "3a+2ac-abc", 
  "xyz-xz" -> "-xz+xyz"  
3. Если два монома содержат одинаковое кол-во переменных, отсортировать в алфавитном порядке
  "a+ca-ab" -> "a-ab+ac", 
  "xzy+zby" ->"byz+xyz"  
4. Удалить лидирующий "+" если первый коэффициент положительный. Лидирующий "-" может быть:
   "-y+x" -> "x-y", 
   "y-x" ->"-x+y"
*/

const charOrder = (c) => {
  if (/[+-]/.test(c)) return 0;
  if (/\d/.test(c)) return 1;
  return c.toLowerCase().charCodeAt();
}

const getVars = (str) => str.match(/[a-z]+/g)[0];

const getNum = (token) => parseInt(token.match(/(\d+)/) || 1) * (token[0] === '-' ? -1 : 1);

const sortMonoms = (a, b) => a.vars.length == b.vars.length ? a.vars.localeCompare(b.vars) : a.vars.length - b.vars.length;


function simplify(poly) {
  let tokens = poly.match(/([-+]?[^-+]+)/g);
  tokens = tokens
    .map(monom => [...monom].sort((a, b) => charOrder(a) - charOrder(b)).join``)
    .map(monom => ({
      num: getNum(monom),
      vars: getVars(monom)

    }));
  // simplify
  for (let i = 0; i < tokens.length - 1; i++) {
    let a = tokens[i];
    for (let j = i + 1; j < tokens.length; j++) {
      let b = tokens[j];
      if (a.vars === b.vars) {
        a.num += b.num;
        tokens.splice(j, 1);
        --i;
        break;
      }
    }
  }
  // sort
  tokens = tokens.filter(m => m.num !== 0).sort(sortMonoms);
  // make result
  // let result = "";
  // for (let i = 0; i < tokens.length; i++) {
  //   let t = tokens[i];
  //   result += (t.num > 0 ? '+' : '-') + (Math.abs(t.num) !== 1 ? Math.abs(t.num) : "") + t.vars;
  // }
  //return result.replace(/^\+/, '');
  return tokens.reduce((x, t) => x + (t.num > 0 ? '+' : '-') + (Math.abs(t.num) !== 1 ? Math.abs(t.num) : "") + t.vars, "")
    .replace(/^\+/, '');


}

console.log(simplify("2xy-yx"), "xy");
console.log(simplify("-a+5ab+3a-c-2a"), "-c+5ab");
console.log(simplify("-abc+3a+2ac"), "3a+2ac-abc");
console.log(simplify("xyz-xz"), "-xz+xyz");

// best
/* 
function simplify(poly){
  var h = {};
  poly.match(/[+-]?[^+-]+/g).forEach(x => {
    var m = x.match(/[a-z]+/)[0],
        k = x.replace(m, '');
    m = m.split('').sort().join('');
    k = Number(/\d/.test(k) ? k : k+'1');
    h[m] = (h[m]||0) + k;
  });
  return Object.keys(h)
    .filter(m => h[m])
    .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
    .map((m, i) => ({
      sign : h[m] < 0 ? '-' : i > 0 ? '+' : '',
      k : Math.abs(h[m]),
      m : m
    }))
    .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m).join('');
}
*/

/* 
function simplify(poly){
  poly = poly.replace(/\w+/g, i => i
               .replace(/[a-z]+/, i => [...i].sort``.join``))       // sort letters of monomials
             .replace(/([+-]|^)([a-z])/g, '$11$2')                  // add ommited 1
  let re = /([+-]?\d*)([a-z]+)/                                     // regExp for 1st monomial 
  let obj = {}, exp
  while (true) {                                                    // parse all monomials
    exp = poly.match(re)                                            // match first monomial
    if (!exp) break                                                 // if there is no match => parsing is finished
    poly = poly.replace(re, '')                                     // remove matched monomial from polinomial
    obj[exp[2]] = exp[2] in obj ? obj[exp[2]] += +exp[1] : +exp[1]  // save monomial to the object
  }
  return Object.entries(obj)                                        // create array of array-monomials
    .sort((a, b) => a[0].length - b[0].length || a[0] > b[0])       // sort array-monomials according to their length and alphabet
    .map(i => i.reverse``.join``).join`+`                           // transform array monomials to the string-monomials
    .replace(/\+-/g, '-')                                           // remove +-
    .replace(/[+-]?\b0[a-z]+/g, '')                                 // remove 0x
    .replace(/([+-])?\b1([a-z])/g, '$1$2')                          // remove 1x
    .replace(/^\+/, '')                                             // remove leading +
}
*/