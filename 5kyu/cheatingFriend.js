/* 
5kyu https://www.codewars.com/kata/5547cc7dcad755e480000004
Дано число N. В последовательности 1..N найти два числа a,b такие, что
a*b = сумма последовательности, не включая a и b
*/

function removNb(n) {
  // let sum = n*(n+1)/2, res=[];
  // for(let i=1; i<n-1; i++) {
  //   for(let j=i+1; j<n; j++) {
  //     if(i*j === sum-i-j) {
  //       res.push([i,j]);
  //       if(res.length === 2) {
  //         i=n;
  //       }
  //       break;
  //     }
  //   }
  // }
  // if(res.length>0) {
  //   res.push([...res[0]].reverse());
  // }
  // return res;
  let sum = n * (n + 1) / 2,
    lowerBound = Math.floor(((n - 1) * n / 2) / (n + 1)),
    upperBound = Math.floor(Math.sqrt(sum + 1) - 1),
    pairs=[];
  for (let a = upperBound; a >= lowerBound; a--) {
      let b = Math.floor((sum - a)/(a + 1));
      if (a * b + a + b === sum) {
          pairs.push([a, b]);
          pairs.push([b, a]);
      }
  }
  return pairs.sort((a,b)=>a[0]-b[0]);
}

//console.log(removNb(26));
//console.log(removNb(100));
console.log(removNb(1000003));
// best
/* 
function removeNb (n) {
  // from the instruction:
  // a * b = S(n) - a - b
  
  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2
  
  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)
  
  // but a and b are natural and up to n
  
  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}
*/

/* 
function removeNb (n) {
  var sum = n * (n+1) / 2;
  var result = [];
  for(var a = 1; a < n; a++) {
    if ( (sum-a) % (a+1) === 0) {
      var b = (sum-a)/(a+1);
      if (b < n) result.push([a,b]);
    }
  }
  return result;
}
*/