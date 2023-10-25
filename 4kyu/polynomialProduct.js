/* 
4kyu - Multiplying Polynomials
https://www.codewars.com/kata/63c05c1aeffe877458a15994

Даны две строки в виде  "ax^n + bx^n-1 + cx^n-2 ... + hx^2 + ix + j"
Где a,b,c (любые буквы) - целые числа
Вернуть строку, представляющей собой произвендение полиномов

Условия:
* Переменные могут иметь любые имена. 
* Переменные всегда согласуются в полиномах (т.е. если есть, то только одна):
  Уравнения могут иметь вид "A^3 - A" и "2A^2 + 8", но не могут быть "3x^2 - x" и "2y + 1"
* Если коэффициент 1, он не отображается: "u^3 - u^2 + u - 1"  
* Если коэффициент 0, то выражение отсутствует: "3H^3 - 4H"

Вывод:
Вернуть строку в виде "ax^n + bx^n-1 + cx^n-2 ... + hx^2 + ix + j"
Пример: "x^2 + 2x + 1" * "x + 1" => "x^3+3x^2+3x+1"

Форматирование:
* без пробелов
* Не отображать 1 и -1. Вмето "-1x^2+1x-1" вернуть "-x^2+x-1"
* Если коэффициент 0, не отображать выражение.
* Выражения должны быть отсортированы по степени в убывающем порядке
* Переменные должны быть такими же, что и в аргументах. Не использовать "x"
*/


function parse(eq) {
  eq = eq.replace(/\s/g, '');
  let sign = 1, num = null, pow = 1, maxPow = 0;
  let tokens = [];
  for (let i = 0; i < eq.length; i++) {
    let c = eq[i];
    if (c === '+') {
      sign = 1;
      num = null;
    } else if (c === '-') {
      sign = -1;
      num = null;
    } else if (/\d/.test(c)) {
      let str = "";
      while (i < eq.length && /\d/.test(eq[i])) str += eq[i++];
      num = parseInt(str);
      if (i >= eq.length || !/[a-z]/i.test(eq[i])) {
        tokens.push({ coeff: num * sign, pow: 0 });
      }
      --i;
    } else if (/[a-z]/i.test(c)) {
      let str = "";
      while (i < eq.length && /[a-z]/i.test(eq[i])) i++; //skip var name
      pow = 1;
      if (eq[i] == '^') {
        let strPow = "";
        ++i;
        while (i < eq.length && /\d/i.test(eq[i])) strPow += eq[i++];
        pow = +strPow;
      }
      --i;
      tokens.push({
        coeff: sign * (num || 1), // only sign if num==null
        pow
      });
      maxPow = Math.max(maxPow, pow);
    }
  }
  let coeffs = Array(maxPow + 1).fill(0);
  for (let t of tokens) coeffs[t.pow] = t.coeff;
  return coeffs;
}



function polynomialProduct(polynom1, polynom2) {
  let varName = (polynom1 + polynom2).match(/[a-z]/i) || [null][0];
  let a = parse(polynom1);
  let b = parse(polynom2);
  let result = Array(a.length + b.length).fill(0);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result[i + j] += a[i] * b[j];
    }
  }
  return result.map((c, i) => {
    if (c === 0) return null;
    if (i === 0) return c || null;
    let res = "";
    if (Math.abs(c) > 1) res += c;
    else res += (c < 0 ? '-' : '');
    res += varName || '';
    if (i > 1) res += `^${i}`;
    return res;
  }).reverse().filter(Boolean).join('+').replace(/\+\-/g, '-') || '0';
}


console.log(polynomialProduct("u^2+2u+1", "u+1"), "u^3+3u^2+3u+1");
console.log(polynomialProduct("x^2", "3x - 1"), "3x^3-x^2");
console.log(polynomialProduct("2", "4y - 4"), "8y-8");
console.log(polynomialProduct("-4r^2 + 1", "-1"), "4r^2 - 1");
console.log(polynomialProduct("1", "p^3"), "p^3");
console.log(polynomialProduct("1", "-1"), "-1");
console.log(polynomialProduct("0", "2 - x"), "0");
console.log(polynomialProduct("-1", "0"), "0");
console.log(polynomialProduct("v^2 - 1+3v^3", "1+v^2"), "3v^5+v^4+3v^3-1");

// best
/* 
function polynomialProduct(polynom1, polynom2) {
  const letter = getLetter(polynom1 + polynom2);
  const p1 = toArray(polynom1),
        p2 = toArray(polynom2),
        p3 = Array(p1.length + p2.length).fill(0);
  
  for(let i = 0; i < p1.length; i++){
    for(let j = 0; j < p2.length; j++){
      p3[i + j] += p1[i] * p2[j];
    }
  }
  
  return toPolynomialString(p3, letter);
}

function toArray(polynomial){
  const temp = polynomial.replace(/ /g, "")
                   .replace(/\b(?=[a-zA-Z])/g, "1")
                   .match(/([+-]?\d+[a-zA-Z]?(?:\^\d+)?)/g)
                   .map(e => e.split(/[a-zA-Z]\^?/).map(Number))
                   .map(e => e[1] === 0 ? [e[0], 1] : e);
  const res = Array(Math.max(...temp.map(e => e[1] ?? 0))).fill(0);
  temp.forEach(e => {
    res[e[1] ?? 0] = e[0];
  });
  return res;
}

function toPolynomialString(array, letter = "x"){
  const max = array.findLastIndex(e => e !== 0);
  return array.slice(0, max + 1)
    .map((e,i) => {
      if(e === 0) return e;
    
      let res = "";
      if(e < 0) res += "-";
      else if(i < max) res += "+";
      
      if(Math.abs(e) > 1 || i === 0) res += Math.abs(e);
    
      if(i > 0){
        res += letter;
        if(i > 1) res += "^" + i;
      }
      return res;
    })
    .filter(e => e !== 0)
    .reverse()
    .join("") || "0";
}

function getLetter(str){
  return str.match(/[a-zA-Z]/)?.[0] ?? "x";
}
*/

/* 
const polynomialProduct = (polynom1, polynom2) => { //
  const tokenize = polynom =>
    polynom.replace(/\s+/g, '').split(/(?=-)|\+/)
           .reduce((acc, token) => {
              let {groups: {coeff, letter, pow}} = token.match(/^(?<coeff>-?\d*)(?<letter>\w?)\^?(?<pow>\d*)$/);
              ['-', ''].includes(coeff) && (coeff += '1');           
              acc[+pow || 1 - !letter] = +coeff;
              return acc;
           }, []);
  
  let variable = (polynom1 + polynom2).match(/[a-z]|$/i)[0] || 'x';
  
  const product = [];
  const [_polynom1, _polynom2] = [polynom1, polynom2].map(tokenize);
  for (let i = 0, l1 = _polynom1.length; i < l1; i++) {
    for (let j = 0, l2 = _polynom2.length; j < l2; j++) {
      product[i + j] = (product[i + j] || 0) + (_polynom1[i] * _polynom2[j] || 0);
    }
  }
  
  return product.map((coeff, pow) => `${coeff}${variable}^${pow}`)
                .reverse().join`+`
                .replace(/[+-]?\b0[\w^]+|\b1(?=\w\^[1-9])|\w\^0|\^1\b|\+(?=-)/g, '') || '0';      
}
*/

/* 
const coefs = p => p.replaceAll(' ','').match(/[+-]?[^+-]+/g).reduce((a, s) => {
  let i = 0
  if (/[a-z]/i.test(s)) i = (s.match(/\d+$/)||[1])[0]
  a[i] = +(s.match(/^[+-]?\d+/)||[s[0]=='-'?-1:1])[0]
  return a
}, [])

function polynomialProduct(...polynoms) {
  const letter = (polynoms+'x').match(/[a-z]/i)[0],
        [p1, p2] = polynoms.map(coefs),
        result = []
  for (let i = 0; i < p1.length; ++i)
    for (let j = 0; j < p2.length; ++j)
      result[i+j] = (result[i+j]||0)+(p1[i]||0)*(p2[j]||0)
  return result.map((x,i)=>x==0?'':`${x==-1&&i?'-':x>0?'+'+(x==1&&i?'':x):x}${i?letter:''}${i>1?'^'+i:''}`).reverse().join('').replace(/^\+/,'')||'0'
}
*/