/* 
5kyu - Fouriest transformation
https://www.codewars.com/kata/59e1254d0863c7808d0000ef
*/


function fouriest(n) {
  let counter = [];
  for (let base = 4; base < 64; base++) {
    let k = n, num = "", b = BigInt(base);
    while (k >= base) {
      let d = k % b;
      num += (d > 9n) ? 'x' : d;
      k /= b;
    }
    if (k > 0n) {
      num += (k > 9n) ? 'x' : k;
    }
    num = [...num].reverse().join``;
    counter.push([base, num, [...num].filter(d => d === '4').length]);
  }
  counter = counter.filter(x => x[2] > 0).sort((a, b) => a[2] == b[2] ? a[0] - b[0] : b[2] - a[2]);
  return counter[0].slice(0, 2).reverse();
}


console.log(fouriest(15n), ["14", 11])
console.log(fouriest(30n), ["42", 7])
console.log(fouriest(9999n), ["304444", 5]) // OK
console.log(fouriest(35353n), ["431401", 6]) // OK
console.log(fouriest(646n), ['10041', 5]) // FAIL

