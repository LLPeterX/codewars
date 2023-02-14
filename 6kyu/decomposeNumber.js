/* 
6kyu - Decompose a number
https://www.codewars.com/kata/55ec80d40d5de30631000025

Дано число N.
Найти степени Ki и остаток R в последовательности 2^k1 + 3^k2 + 4^k3 + ... + R = N
Каждый Ki > 1

*/

function decompose(num) {
  const result = [];
  let k = 2;
  while (true) {
    let p = 2, kPow;
    let prevKpow = 0;
    while (true) {
      kPow = Math.pow(k, p);
      if (kPow > num) break;
      p++;
      prevKpow = kPow;
    }
    k++;
    num -= prevKpow;
    if (p < 3) break;
    result.push(p - 1);

  }
  return [result, num];
}

function check(arr) {
  let num = 0;
  for (let i = 0, k = 2; i < arr[0].length; i++) {
    num += k ** arr[0][i];
    k++;
  }
  num += arr[1];
  return num;
}

console.log(0, decompose(0));
console.log(3, decompose(3));
console.log(4, decompose(4)); // [[2],0]
console.log(26, decompose(26), 'ch=', check([[4, 2], 1]));
// console.log(decompose(8330475), 'ch=', check([22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0));
// console.log(decompose(9819938), "ch=", check([23, 12, 9, 8, 6, 6, 5, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0));
let v = decompose(8331299);
console.log(8331299, v, 'ch=', check(v));
// my: [ [ 22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2 ], 173 ]
//     [ [ 22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2 ], 199 ]

// FAIL:
let v1 = decompose(789637000);
console.log(v1, 'ch=', check(v1), check([[29, 17, 13, 11, 8, 8, 5, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 208]));
console.log('another check', check([[29, 17, 13, 11, 8, 8, 5, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 208]));
console.log('my answer check', check([[29, 17, 13, 11, 8, 8, 5, 5, 5, 4, 4, 3, 3, 3, 3, 3], +0]));
// my: [ [ 29, 17, 13, 11, 8, 8, 5, 5, 5, 4, 4, 3, 3, 3, 3, 3 ], +0 ]
//     [ [ 29, 17, 13, 11, 8, 8, 5, 5, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], 208 ] // должно быть

// best
/*
function decompose(num) {
  var sum = 0
    , exp = 0
    , base = 2
    , powers = []

  do {
    exp = Math.floor(Math.log(num - sum) / Math.log(base));
    if (exp < 2) break;

    powers.push(exp);
    sum += Math.pow(base++, exp);
  }
  while (sum < num);

  return [powers, num - sum];

}
*/

/* 
function decompose(n) {
  let ps = [];
  for (let p=2; p*p<=n; p++) {
    let k = Math.floor(Math.log(n) / Math.log(p));
    ps.push(k);
    n -= p**k;
  }
  return [ps, n];
}
*/