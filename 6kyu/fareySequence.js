/* 
6kyu - Farey Sequence
https://www.codewars.com/kata/590926c5579da9e62000003b
 */

/* 
Последовательность Фарея порядка n+1 можно построить из последовательности порядка n по следующему правилу:

1) Копируем все элементы последовательности порядка n.
2) Если сумма знаменателей в двух соседних дробях последовательности порядка n даёт число не большее, чем n+1, 
   то вставляем между этими дробями их медианту, равную отношению суммы их числителей к сумме знаменателей.
*/


/* 
solution from https://habr.com/ru/post/188160/
*/
const createSequence = (n, n1, div1, n2, div2, res = []) => {
  let a = n1 + n2, b = div1 + div2;
  if (b <= n) {
    createSequence(n, n1, div1, a, b, res);
    res.push({ n: a, div: b });
    createSequence(n, a, b, n2, div2, res);
  }
}

function fareySequence(n, m) {
  if (m === 1) return "0/1";
  let f = [{ n: 0, div: 1 }];
  createSequence(n, 0, 1, 1, 1, f);
  f.push({ n: 1, div: 1 });
  return `${f[m - 1].n}/${f[m - 1].div}`;
}

console.log(fareySequence(1, 2), "1/1")
console.log(fareySequence(1, 1), "0/1")
console.log(fareySequence(5, 7), "3/5")

// best
/* 
function fareySequence(n, m) {
  
  let [ a, b, c, d ] = [ 0, 1, 1, n ];

  while (c <= n && --m > 0) {
    let k = Math.floor((n + b) / d);
    [ a, b, c, d ] = [ c, d, k * c - a, k * d - b ];
  }
  
  return a + "/" + b;
  
}
*/

/* 
function fareySequence(n,m) {
  const gcd = (a,b) => b ? gcd(b,a%b) : a ;
  const numerically = (a,b) => eval(a) - eval(b) ;
  for ( var farey = [ "0/1", "1/1" ], denom = 1; denom<=n; denom++ )
    for ( var num = 1; num<denom; num++ )
      if ( gcd(num,denom)===1 )
        farey.push( `${num}/${denom}` );
  return farey.sort(numerically)[m-1];
}

*/