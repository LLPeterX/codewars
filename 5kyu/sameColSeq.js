/* 
5kyu - Working With Coloured Numbers
https://www.codewars.com/kata/57f891255cae44b2e10000c5/train/javascript

We have the numbers with different colours with the sequence: ['red', 'yellow', 'blue'].
That sequence colours the numbers in the following way: 1 2 3 4 5 6 7 8 9 10 11 12 13 .....

We have got the following recursive function:

f(1) = 1
f(n) = f(n - 1) + n

Some terms of this sequence with their corresponding colour are:

term   value   colour
1        1     "red"
2        3     "blue"
3        6     "blue"
4       10     "red"
5       15     "blue"
6       21     "blue"
7       28     "red"

The three terms of the same colour "blue", higher than 3, are: [6, 15, 21]

We need a function `same_col_seq(), that may receive three arguments:
- val, an integer number
- k, an integer number
- colour, the name of one of the three colours(red, yellow or blue), as a string.

The function will output a sorted array with the smallest k terms, 
having the same marked colour, but higher than val.
*/

function sameColSeq(val, k, col) {
  const colorIndex = ['red', 'yellow', 'blue'].indexOf(col);
  let i = Math.floor((1 + Math.sqrt(1 + 8 * val)) / 2);
  const vmax = 2 * k * val;
  const result = [];
  let count = 0;
  while (count < k) {
    let v = i * (i + 1) / 2;
    if (v > vmax && result.length === 0) {
      break;
    }
    if ((v - 1) % 3 === colorIndex) {
      result.push(v);
      count++;
    }
    i++;
  }
  return result;
}

console.log(sameColSeq(3, 3, 'blue'), [6, 15, 21]);
console.log(sameColSeq(100, 4, 'red'), [136, 190, 253, 325]);
console.log(sameColSeq(250, 6, 'yellow'), []);
console.log(sameColSeq(1000, 7, 'red'), [1081, 1225, 1378, 1540, 1711, 1891, 2080]);

// best

/* 
function sameColSeq(value, length, color) {
    let answer = []

    let limit = 2 * length * value
    let counter = valueToNumber(value)

    for(counter; answer.length < length; counter++) {
        value = numberToValue(counter)

        if (sameColor(value, color)) answer.push(value)
      
        if (value >= limit) break
    }

    return answer
}

function numberToValue(n) {
    return n == 1 ? 1 : numberToValue(n - 1) + n
}

function valueToNumber(v) {
    return Math.round(Math.sqrt((v + 1) * 2))
}

function sameColor(n, color) {
    const colors = ['blue', 'red', 'yellow']

    return color == colors[n % 3]
}

*/

/* 
const sameColSeq=(v,k,c)=>{
  let a=[],i=['red','yellow','blue'].indexOf(c)
  for(let t=1,n=1; n<1e4 && a.length<k; t+=++n)
    if(t>v && (t-1)%3==i) a.push(t)
  return a
}
*/


/* 
function sameColSeq(val, k, col) {
    var result = [];
    var n = 1, f = 1;
    var mod = { blue: 0, red: 1, yellow: 2 }[col];
    var limit = 2 * k * val;
    while (k > 0 && f < limit) {
        f += ++n;
        if (f > val && f % 3 == mod) result.push(f), k--;
    }
    return result;
}
*/