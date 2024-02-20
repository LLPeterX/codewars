/* 
5kyu - String generation by pattern
https://www.codewars.com/kata/62b3356dacf409000f53cab7

Реализовать генератор, корорый будет генерировать строки по
заданному шаблону. 
Шаблон: строка, состоящая из символов, цифр, знаков препинания (кроме квадратных скобок)
и токенов, которые необходимо заменить значением, необходимым для построения 
следующей строки в последовательности.

Типы токенов:
- [INC_INT=START,STEP]: инкремент целого. По умолчанию START=1, STEP=1. До бесконечности
- [INC_FLOAT=START,STEP]: инкремент float 0.1. Могут быть очень малые значения.
  Число знаков после запятой в результате определяется как макс.число 
  знаков (включая 0) одного из параметров
- [INTERVAL=FIRST,LAST]: интервал целых от FIRST до LAST включительно. 
  По умолчанию 1. Если не указан LAST, то LAST=FIRST
- [PERIODIC=START,N]: После каждого создания N строк, значение увеличивается на 1
  По умолчанию 1. N>=1.

*/

// function parseString(str) {
//   return str.match(/\[.*?\]/g);
// }

function parseToken(str) {
  let [code, name, , v1, v2] = str.match(/\[\s*?(INC_INT|INC_FLOAT|INTERVAL|PERIODIC)(\s*?\=?\s*?([\d\.]+)\s*?,?\s*?([\d\.]+)?\s*?)?\s*?\]/);
  return { code, name, v1, v2 };
}


function* stringGenerator(pattern) {
  const G = [];
  let calls = 0;
  let tokens = pattern.match(/\[.*?\]/g) || [];
  for (let i = 0; i < tokens.length; i++) {
    let p = parseToken(tokens[i]);
    let o = { code: p.code, name: p.name };
    if (p.name === 'INC_INT') {
      o.start = +(p.v1 ?? 1);
      o.step = +(p.v2 ?? 1);
      o.current = o.start;
    } else if (p.name === 'INC_FLOAT') {
      p.v1 = p.v1 ?? "0.1";
      p.v2 = p.v2 ?? "0.1";
      o.start = +p.v1;
      o.step = +p.v2;
      o.current = o.start;
      o.prec = Math.max(p.v1.slice(p.v1.indexOf('.')).length, p.v2.slice(p.v2.indexOf('.')).length) - 1;
    } else if (p.name === 'INTERVAL') {
      o.start = +(p.v1 ?? 1);
      o.last = +(p.v2 ?? o.start);
      o.current = o.start;
    } else { // periodic
      o.start = +(p.v1 ?? 1);
      o.n = +(p.v2 ?? 1);
      o.current = o.start;
    }
    G.push(o);
  }

  while (true) {
    let str = pattern;

    for (let o of G) {
      let strValue = o.name === 'INC_FLOAT' ? o.current.toFixed(o.prec) : String(o.current);
      str = str.replace(o.code, strValue);
      if (o.name === 'INC_INT' || o.name === 'INC_FLOAT') {
        o.current += o.step;
      } else if (o.name === 'INTERVAL') {
        o.current++;
        if (o.current > o.last) o.current = o.start;
      } else { // periodic. 
        if ((calls + 1) % o.n === 0) {
          o.current++;
        }
      }
    }
    calls++;
    yield str;
  }
}


const tests = [
  "[INC_INT]",
  "[INTERVAL]",
  "[PERIODIC]",
  "[INTERVAL=0]",
  "[INTERVAL=15,20]",
  "[INC_INT=7,0]",
  "[PERIODIC=0]",
  "[PERIODIC=1]",
  "[PERIODIC=7,1]",
  "[PERIODIC=1,10000000]",
  "Hello World[INC_INT]!",
  "I have [INC_INT=3,2] dogs",
  "[INC_FLOAT=2.3,0.000100]",
  "Season [PERIODIC=1,4], Episode [INTERVAL=1,4]",
  "[ INC_INT = 200  ,  3  ], [  INC_FLOAT]", // FAIL
  "[INC_INT]hello [INTERVAL =1 ,4], [PERIODIC= 1, 2]",
  "[INC_FLOAT]+[INC_FLOAT=1.2]+[INC_FLOAT = 1.3, 1.0001]",
  "Testing small floats: [INC_FLOAT=0.000001,0.000000003]",
  "No Tokens",
  "",
  "[INC_INT]}",
  "{}[INC_INT]{}",
];
const results = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["0", "0", "0", "0", "0"],
  ["15", "16", "17", "18", "19", "20", "15", "16", "17", "18"],
  ["7", "7", "7", "7", "7"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  ["7", "8", "9", "10", "11", "12", "13", "14"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["Hello World1!", "Hello World2!", "Hello World3!", "Hello World4!", "Hello World5!"],
  ["I have 3 dogs", "I have 5 dogs", "I have 7 dogs", "I have 9 dogs", "I have 11 dogs", "I have 13 dogs"],
  ["2.300000", "2.300100", "2.300200", "2.300300", "2.300400", "2.300500", "2.300600", "2.300700", "2.300800", "2.300900", "2.301000", "2.301100"],
  ["Season 1, Episode 1", "Season 1, Episode 2", "Season 1, Episode 3", "Season 1, Episode 4", "Season 2, Episode 1", "Season 2, Episode 2"],
  ["200, 0.1", "203, 0.2", "206, 0.3", "209, 0.4", "212, 0.5", "215, 0.6", "218, 0.7", "221, 0.8", "224, 0.9", "227, 1.0", "230, 1.1", "233, 1.2"],
  ["1hello 1, 1", "2hello 2, 1", "3hello 3, 2", "4hello 4, 2", "5hello 1, 3", "6hello 2, 3", "7hello 3, 4", "8hello 4, 4", "9hello 1, 5", "10hello 2, 5", "11hello 3, 6"],
  ["0.1+1.2+1.3000", "0.2+1.3+2.3001", "0.3+1.4+3.3002", "0.4+1.5+4.3003", "0.5+1.6+5.3004", "0.6+1.7+6.3005", "0.7+1.8+7.3006", "0.8+1.9+8.3007", "0.9+2.0+9.3008", "1.0+2.1+10.3009", "1.1+2.2+11.3010", "1.2+2.3+12.3011"],
  ["Testing small floats: 0.000001000", "Testing small floats: 0.000001003", "Testing small floats: 0.000001006", "Testing small floats: 0.000001009", "Testing small floats: 0.000001012", "Testing small floats: 0.000001015", "Testing small floats: 0.000001018", "Testing small floats: 0.000001021", "Testing small floats: 0.000001024"],
  ["No Tokens", "No Tokens", "No Tokens", "No Tokens", "No Tokens", "No Tokens", "No Tokens"],
  ["", "", "", "", "", ""],
  ["1}", "2}", "3}", "4}", "5}", "6}"],
  ["{}1{}", "{}2{}", "{}3{}", "{}4{}"],
];

tests.forEach((test, i) => {
  console.log(`--Pattern: "${test}"`);
  const gen = stringGenerator(test);
  const actual = [];
  for (let j = 0; j < results[i].length; j++) {
    actual.push(gen.next().value);
  }
  console.log(actual, '=>', results[i]);
});

// best

/*
my solution is best!!!
*/

// others:

/* 
function *stringGenerator(pattern) {
  const tokens = (pattern.match(/\[[ A-Z=_,\.0-9]*\]/g)||[]).map(e=>e.match(/([A-Z_]+)[ =]*([\d\.]*)[ ,]*([\d\.]*)/))
  const gens = tokens.map(e=>Fgen[e[1]](e[2]||undefined,e[3]||undefined))
  
  while (true) {
    let i=0 
    yield pattern.replace(/\[[ A-Z=_,\.0-9]*\]/g, ()=>gens[i++].next().value)
  }
}

class Fgen {
  static *INC_INT(start="1", step="1"){
    start = +start
    step = +step    
    while (true) {
      yield start
      start+=step
    }
  }
  static *INC_FLOAT(start="0.1", step="0.1"){
    const prec = Math.max(start.length - start.indexOf("."), step.length - step.indexOf(".")) -1
    start = parseFloat(start)
    step = parseFloat(step)
    while (true) {
      yield start.toFixed(prec)
      start+=step
    }
  }
  static *INTERVAL(first="1", last){
    first = +first
    if (arguments.length == 1) last = first
    let curr = first
    last = +last
    while (true) {
      yield curr
      curr = (curr+1)%(last+1)||first
    }
  }
  static *PERIODIC(start="1", n="1"){
    start = +start
    n = +n
    let timer = n
    while (true) {
      yield start
      timer--
      if (timer == 0) {
        timer = n
        start++
      }
    }
  }
}
*/