/* 
https://www.codewars.com/kata/5da1df6d8b0f6c0026e6d58d

Дано уравнение z^3 = x^2*y^2
Дано z.
Найти число точек z, для которых координаты - положительные целые

k^3 = (xy)^2
Для k=4 кол-во=4 ((1,1), (1,8), (2,4), (4,2),  )
*/

function test(n) {
  let n2 = n * n * n;
  for (let x = 1; x < n2; x++) {
    for (let y = 1; y < n2; y++) {
      if (n2 === (x * y) ** 2) {
        console.log(`n2=${n2} (${x},${y})`);
      }
    }
  }
}

function c(k) {
  let sqared = Math.sqrt(k), res = 1, count = 0;
  // must be integer square root because (xy)^2
  if (~~sqared !== sqared) {
    return 0;
  }
  for (let i = 2; i <= sqared; i++) {
    if (sqared % i === 0) {
      count = 0;
      for(;sqared % i === 0; count++) {
        sqared /= i;
      }
      res *= ((count - 1) * 3) + 4;
    }
  }
  return res;
}

console.log(c(1), 1);
console.log(c(4), 4);
console.log(c(4096576), 160);
console.log(c(2019), 0);
console.log(c(423128), 0);
console.log(c(1369), 4);
console.log(c(2999824), 28);
console.log(c(11710084), 64);

//best
/* 
c=Q=>{for(R=S=1;++S*S<=Q;R*=1+C*3/2){for(C=0;Q%S<1;++C)Q/=S;if(1&C)return 0}return--Q?0:R}
*/

/* 
let c = k => {
  let [sol, i, lim, s] = [1, 1, Math.sqrt(k)];
  while (++i <= lim) {
    [s, k] = k.expdiv(i);
    if (s & 1) return 0;
    sol *= s * 1.5 + 1;
  } return sol * (k <= 1);
};

Number.prototype.expdiv = function (i, res=0) {
  return this % i ? [res, this.valueOf()] : (this/i).expdiv(i, res+1);
};
*/

/* 
function c(k) {
  let n = Math.sqrt(k)
  let res = 1;
  if (Math.floor(n) !== n) return 0; 
  for (let i = 2; i <= n; i++) {
    if (n % i !== 0) continue;
    let count = 0;
    while (n % i === 0) {
        n = n / i;
        count++;
    }
    res *= ((count-1) * 3) + 4;
  }            
  return res;
}
*/