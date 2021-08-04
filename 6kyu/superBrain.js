/* 
6kyu - Super Brain
https://www.codewars.com/kata/59264edbd771a7e7e60000b6/train/javascript

*/
const revolve = (arr, n) => {
  let res = [...arr];
  while (n--) {
    res.push(res.shift());
  }
  return res;
}
// revolve 1,6,3 ([23, 8, 16, 9, 95, 51|2])=> [ 9, 95, 51, 23, 8, 16 ] =>  min(1,5)=>min([23, 8, 16, 9, 95]) =>8
console.log(revolve([8, 16, 9, 95, 51], 2));

function superBrain(sequence, operations) {
  const revolve = (arr, n) => {
    let res = [...arr];
    while (n--) {
      res.push(res.shift());
    }
    return res;
  }
  const calculator = {
    'ADD': (x, y, n) => [...sequence.slice(0, x - 1), ...sequence.slice(x - 1, y).map(v => v + n), ...sequence.slice(y)],
    'REVERSE': (x, y) => [...sequence.slice(0, x - 1), ...sequence.slice(x - 1, y).reverse(), ...sequence.slice(y)],
    'REVOLVE': (x, y, n) => [...sequence.slice(0, x - 1), ...revolve(sequence.slice(x - 1, y), n), ...sequence.slice(y)],
    'INSERT': (x, n) => [...sequence.slice(0, x - 1), n, ...sequence.slice(x - 1)],
    'DELETE': (x) => [...sequence.slice(0, x - 1), ...sequence.slice(x)]
  }
  for (let i = 0; i < operations.length; i++) {
    let [op, x, y, n] = operations[i].split(' ').map((v, i) => i > 0 ? parseInt(v) : v);
    if (op === 'MIN') {
      return Math.min(...sequence.slice(x - 1, y));
    } else {
      sequence = calculator[op](x, y, n);
    }
  }
}


console.log(superBrain([1, 2, 3, 4, 5], ["MIN 2 4"]), 2)
console.log(superBrain([1, 2, 3, 4, 5], ["ADD 2 4 1", "MIN 2 4"]), 3)
console.log(superBrain([1, 2, 3, 4, 5], ["REVERSE 2 5", "MIN 2 4"]), 3)
console.log(superBrain([1, 2, 3, 4, 5], ["REVOLVE 2 5 1", "MIN 2 4"]), 3) // [1,2,3,4,5] => [3,4,5,2] => min(3,4,5) => 3
console.log(superBrain([1, 2, 3, 4, 5], ["REVOLVE 2 5 2", "MIN 2 4"]), 2) // [1,2,3,4,5] => [1,4,5,2,3] => min(4,5,2) => 2
console.log(superBrain([1, 2, 3, 4, 5], ["INSERT 2 1", "MIN 2 4"]), 1)
console.log(superBrain([1, 2, 3, 4, 5], ["DELETE 2", "MIN 2 4"]), 3)
console.log('---');
console.log(superBrain([23, 8, 16, 9, 95, 51, 2], ["MIN 3 6"]), 9)
console.log(superBrain([23, 8, 16, 9, 95, 51, 2], ["REVOLVE 1 6 3", "MIN 1 5"]), 8) // fail 1)[8,16,9,95,51,23|2] => 2)[16,9,95,51,23,8|2] =>  => 3) [9,95,51,23,8,16|2],min (9,95,51,23,8)=> 8
console.log(superBrain([23, 8, 16, 9, 95, 51, 2], ["REVOLVE 2 7 2", "MIN 3 6"]), 2) // fail = [23|rev 8..2] => [23, 51, 2, 8, 16, 9, 95, 51] => [2, 8, 16, 9] => min=2
console.log(superBrain([23, 8, 16, 9, 95, 51, 2], ["INSERT 3 1", "MIN 2 4"]), 1)
console.log(superBrain([23, 8, 16, 9, 95, 51, 2], ["DELETE 2", "MIN 2 4"]), 9)


//best
/*
superBrain=(s,o)=>(o.map(p=>([,i,j,n]=p.split` `,k="SELED VOVE".search(p[2]+p[3])/2,t=s.slice(--i,j),
k<0?s=Math.min(...t):s.splice(i,k>1?j-i:k,...[[+j],[],t.map(x=>x+ +n),t.map(_=>t[n++%(j-i)]),t.reverse()][k]))),s)


*/