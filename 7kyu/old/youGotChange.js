/* 
7kyu - You Got Change?
https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript
*/

// function giveChange2(amount) {
//   let res = [0, 0, 0, 0, 0, 0], a;
//   a = ~~(amount / 100); res[5] = a; amount -= 100 * a;
//   a = ~~(amount / 50); res[4] = a; amount -= 50 * a;
//   a = ~~(amount / 20); res[3] = a; amount -= 20 * a;
//   a = ~~(amount / 10); res[2] = a; amount -= 10 * a;
//   a = ~~(amount / 5); res[1] = a; amount -= 5 * a;
//   res[0] = amount;
//   return res;
// }

function giveChange2(amount) {
  let bills = [100, 50, 20, 10, 5], res = [0, 0, 0, 0, 0];
  for (let i = 0; i < 5; i++) {
    let a = ~~(amount / bills[i]);
    res[4 - i] = a;
    amount -= bills[i] * a;
  }
  res.unshift(amount);
  return res;
}

function giveChange(amount) {
  let res = [100, 50, 20, 10, 5].map(bill => {
    let a = ~~(amount / bill);
    amount -= bill * a;
    return a;
  }).reverse();
  res.unshift(amount);
  return res;
}

// выше одинаково


console.log(giveChange(365), [0, 1, 1, 0, 1, 3]);
console.log(giveChange(217), [2, 1, 1, 0, 0, 2]);

//best
/*
const giveChange = amount => [100, 50, 20, 10, 5, 1].map(a =>
  ([a, amount] = [Math.floor(amount/a), amount % a])[0]).reverse();

*/

/*
giveChange=a=>[100,50,20,10,5,1].map(v=>(n=~~(a/v),a%=v,n)).reverse()
*/
