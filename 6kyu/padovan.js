/* 
6kyu - Padovan numbers
https://www.codewars.com/kata/5803ee0ed5438edcc9000087/train/javascript
*/

function padovan(n) {
  let p = 1, pPrev = 1, ppPrev = 1;
  for (let i = 3, x = p; i <= n; i++) {
    p = ppPrev + pPrev;
    ppPrev = pPrev;
    pPrev = x;
    x = p;
  };
  return p;
}

console.log(padovan(1)); // 1
console.log(padovan(9)); // 9
console.log(padovan(5)); // 3

// best

/* 
function padovan(n) {
     var arr=[1,1,1]
     while (arr.length<=n)
       arr.push(arr[arr.length-2]+arr[arr.length-3])
     return arr[arr.length-1];
}

function padovan(n, paddywagon=[1, 1, 1]) {
    return paddywagon[n] = paddywagon[n] || padovan(n - 2, paddywagon) + padovan(n - 3, paddywagon);
}

const padovan = (n) => {
    let dynamic = [1,1,1]
    for (let counter = 0; counter < n; ++counter) {
      dynamic = [dynamic[1],dynamic[2],dynamic[1]+dynamic[0]]
    }
    return dynamic[0];
}

*/