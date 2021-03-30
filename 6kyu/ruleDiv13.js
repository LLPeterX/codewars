/* 
https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript
*/

function thirt2(n) {
  let arrN = String(n).split('').map(Number);
  let p10 = 1;
  let sum=0;
  for(let i=arrN.length-1; i>=0; i--) {
    let v=arrN[i]*(p10%13);
    console.log(`i=${i} a[i]=${arrN[i]} pw=${p10%13} v=${v}`);
    sum+=v;
    p10*=10;
  }
  return sum;
}

function thirt(n) {
  while(n>1) {
    let arrN = String(n).split('').map(Number), pow10=1, sum=0;
    for(let i=arrN.length-1; i>=0; i--) {
      let v=arrN[i]*(pow10%13);
//      console.log(`i=${i} a[i]=${arrN[i]} pw=${p10%13} v=${v}`);
      sum+=v;
      pow10*=10;
    }
    if(sum === n) {
      return n;
    }
    n=sum;
  }
}

console.log(thirt(1234567 )); // 87
console.log(thirt(85299258 )); // 31

console.log(thirt(986908530 )); // 12
//best
/* 
const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];
const thirt = n => {
  let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
  return result === n ? result : thirt(result);
}
*/

/* 
thirt=(a,b=[1,10,9,12,3,4])=>a<100?a:thirt([...''+a].reverse().map((e,i)=>e*b[i%6]).reduce((a,b)=>a+b))
*/