/* 
4kyu - arrayToString and stringToArray
https://www.codewars.com/kata/582087e5b81f7063a7000242/train/javascript

There is an array arr: [1,2,3,4,6,6,6,6,8,6,4,2]

Task1: Write a function arrayToString. Compress the array to a string:

"1:4+1,6:4,8:4-2"
explain:
1:4+1 ---> start number is 1, total 4 number, 
           Each number increases by 1
6:4   ---> number 6 repeat 4 times
8:4-2 ---> start number is 8, total 4 number, 
           Each number decreases by 2

Only more than 2 numbers increasing, decreasing or the same to be compressed. 
Otherwise, output the original number. For example:  arrayToString([2,1,6,12,5]) === "2,1,6,12,5"

Note2: If there are two sequences are adjacent, and the number of the junction 
can be used by two sequences, then the left sequence give priority to the use of this number, 
unless it affects the compression of right sequence. Two examples:
  arrayToString([1,2,3,4,3,2,1]) === "1:4+1,3:3-1"
  (Should not compress to "1:3+1,4:4-1")
  arrayToString([1,2,3,4,3,2]) === "1:3+1,4:3-1"
  (Should not compress to "1:4+1,3,2")

Note3: It should works for negative integers too: arrayToString([-1,-2,-3,-4,-3,-2]) , "-1:3-1,-4:3+1")

Task2: Write a function stringToArray. 
Decompress the string(like the result above) to an array(like the arr above). 
The inputs of function always be a valid string.
*/


function getStep(arr, start) {
  let steps = new Set();
  if (start === arr.length - 1) return null;
  for (let i = start; i < Math.min(start + 2, arr.length); i++) steps.add(arr[i] - arr[i - 1]);
  return steps.size > 1 ? null : [...steps][0];
}

function arrayToString(arr) {
  let o = { start: arr[0], count: 1, step: 0 };
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    let step = getStep(arr, i);
    if (step === null) {
      result.push(o);
      o = { start: arr[i], count: 1, step: 0 };
      if (i === arr.length - 1) result.push(o);
      continue;
    }

    while (i < arr.length && arr[i] - arr[i - 1] === step) {
      o.count++;
      o.step = step;
      i++;
    }
    if (getStep(arr, i + 1) === null && getStep !== null) {
      o.count--;
      i--;
    }
    result.push(o);
    o = { start: arr[i], count: 1, step: 0 };
  }
  if (JSON.stringify(result[result.length - 1]) !== JSON.stringify(o) && o.start !== undefined) {
    result.push(o);
  }
  return result.map(o => {
    if (o.count === 1) return o.start;
    if (o.step === 0) return `${o.start}:${o.count}`;
    return `${o.start}:${o.count}${o.step < 0 ? '-' : '+'}${Math.abs(o.step)}`;
  }).join(',');
}

function parse(str) {
  let m = str.match(/(-?\d+)(:(\-?\d+)([+-]\d+)?)?/);
  return { start: +m[1], count: +(m[3] || 1), step: +(m[4] || 0) }
}

function stringToArray(str) {
  const result = [];
  str.split(',').map(parse).forEach(o => {
    for (let i = 0, n = o.start; i < o.count; i++, n += o.step) {
      result.push(n);
    }
  });
  return result;
}

//console.log(arrayToString([1, 2, 3, 4, 6, 6, 6, 6, 8, 6, 4, 2]), "1:4+1,6:4,8:4-2")
// console.log(arrayToString([2, 1, 6, 12, 5]), "2,1,6,12,5")
// console.log(arrayToString([1, 2, 3, 4, 3, 2, 1]), "1:4+1,3:3-1")
// console.log(arrayToString([1, 2, 3, 4, 3, 2]), "1:3+1,4:3-1")
// console.log(arrayToString([-1, -2, -3, -4, -3, -2]), "-1:3-1,-4:3+1")
// console.log(arrayToString([9, 5, 1, 0]), '9:3-4,0') // FAIL
// console.log(' -- decode ---');
// console.log(stringToArray("1:4+1,6:4,8:4-2"), [1, 2, 3, 4, 6, 6, 6, 6, 8, 6, 4, 2])
// console.log(stringToArray("2,1,6,12,5"), [2, 1, 6, 12, 5])
// console.log(stringToArray("1:4+1,3:3-1"), [1, 2, 3, 4, 3, 2, 1])
// console.log(stringToArray("1:3+1,4:3-1"), [1, 2, 3, 4, 3, 2])
// console.log(stringToArray("-1:3-1,-4:3+1"), [-1, -2, -3, -4, -3, -2])

// best
/* 
function arrayToString(a) {
    return a.reduce((r,v,d,x) => {
        if (!(x = r[r.length-1])) return [{v,n:1}];
        d = x.p==null ? v-x.v : v-x.p, x.d==null && (x.d = d);
        d==null || d==x.d ? (++x.n, x.p = v) : r.push({v,n:1});
        return r;
    },[]).reduceRight((r,x,i,a) => {
        if ((i=a[i-1]) && x.n==2 && i.p+x.d==x.v) x.v = i.p, ++x.n, i.p -= i.d, --i.n;
        return r.unshift(x), r;
    },[]).reduce((s,{v,p,n,d}) => (s && s+',')+v+(
        n<2 ? '' : n<3 ? ','+p : ':'+n+(0<d ? '+' : '')+(d || '')
    ),'');
}

function stringToArray(s) {
    if (!s) return []; else var r = /^(-?\d+)(?::(\d+)(.*))?$/;
    return s.split(',').reduce((a,s) => {
        a.push((s = r.exec(s).slice(1).map(Number))[0]);
        if (s[1]) while (--s[1]) a.push(s[0] += s[2]|0);
        return a;
    },[]);
}

*/

/* 
function arrayToString(a) {
  const check = i => a[i+2] - a[i+1] === a[i+1] - a[i];
  let res = [];
  for (let i = 0; i < a.length - 2; ++i) {
    if (check(i)) {
      let d = a[i+1] - a[i];
      let j;
      for (j = i + 1; check(j); ++j) {
        if (check(j+2) && !check(j+3)) {
          if (a[i+4] - a[i+3] !== d) {
            break;
          }
        }
      }
      const dstr = d > 0 ? `+${d}` : `${d}`;
      const code = `${a[i]}:${j-i+2}` + (d === 0 ? '' : dstr);
      res.push(code);
      a.splice(i, j + 2);
    } else {
      res.push(a[i]);
      a.splice(i, 1);
    }
    --i;
  }
  
  return [...res, ...a].join(',');
}

function stringToArray(str) {
  return str.split(',').map(code => {
    const m = code.match(/(\-?\d+)(\:(\d+)(([\-\+])(\d+))?)?/);
    if (!m[2]) return [+m[1]];
    return new Array(+m[3]).fill(0).map((z,i) => {
      return +m[1] + i * (+m[6] || 0) * (({'-': -1, '+': 1})[m[5]||'+']);
    });
  }).reduce((res, arr) => [...res, ...arr], []);
}
*/
