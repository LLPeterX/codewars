/* 
7kyu Sum of differences between products and LCMs
Дан массив положительных пар чисел.
1) рассчитать наименьший общий множитель LCM
2) рассчитать произведение 
3) вернуть сумму (произведение - LCM)
*/

function sumDifferencesBetweenProductsAndLCMs(pairs){
  function LCM(arr) {
    let n = arr.length, a = Math.abs(arr[0]);
    if(!arr[0] || !arr[1]) { return 0; }
    for (let i = 1; i < n; i++) {
      var b = Math.abs(arr[i]), c = a;
      while (a && b) { a > b ? a %= b : b %= a; }
      a = Math.abs(c * arr[i]) / (a + b);
    }
    return a;
  }
  return pairs.reduce((sum, a) => sum + a[0]*a[1] - LCM(a),0);
}

console.log(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]]),840);
console.log(sumDifferencesBetweenProductsAndLCMs([[1,1], [0,0], [13,91]]),1092); // FAIL!
console.log(sumDifferencesBetweenProductsAndLCMs([[15,7], [4,5], [19,60]]),0);
console.log(sumDifferencesBetweenProductsAndLCMs([[20,50], [10,10], [50,20]]),1890);
console.log(sumDifferencesBetweenProductsAndLCMs([]),0);

// best
/* 
function sumDifferencesBetweenProductsAndLCMs(pairs){
  const gcd = (x,y) => x == 0 ? y : gcd(y % x, x)
  const lcm = (x,y) => x * y == 0 ? 0 : x * y / gcd(x,y)  
  return pairs.map(c => c[0] * c[1] - lcm(c[0],c[1])).reduce((a,c) => a + c, 0);
}

*/

/* 
const sumDifferencesBetweenProductsAndLCMs = pairs =>
  (val => pairs.reduce((pre, [a, b]) => pre + a * b - a * b / (val(a, b) || 1), 0))
  (function gcd(a, b) { return b ? gcd(b, a % b) : a});
*/