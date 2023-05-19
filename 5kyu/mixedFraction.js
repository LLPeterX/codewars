/* 
5kyu - Simple fraction to mixed number converter
https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c
*/

/* 
хуйня если одно из чисел отицательно
*/

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function mixedFraction(s) {
  let [n1, n2] = s.match(/(\-?\d+)\/(\-?\d+)/, s).slice(1).map(Number);
  if (n2 === 0) throw ZeroDivisionError();
  if (n1 === 0) return '0';
  if (n1 === n2) return '1';
  let g = gcd(n1, n2), a = n1 / g, b = n2 / g, k = Math.trunc(n1 / n2);
  let an1 = Math.abs(n1), an2 = Math.abs(n2);
  if (an1 < an2 && Math.abs(g) > 1) return `${a * Math.sign(b)}/${Math.abs(b)}`;
  if (an1 < an2 && Math.abs(g) == 1) return `${an1 * Math.sign(n1) * Math.sign(n2)}/${an2}`;
  if (Math.abs(a) >= Math.abs(b)) a -= Math.round(b * k);
  if (a === 0) return `${k}`;
  return `${k != 0 ? k : ""} ${Math.abs(a)}/${Math.abs(b)}`.trim();
}

console.log(mixedFraction('42/9'), '4 2/3');
console.log(mixedFraction('6/3'), '2');
console.log(mixedFraction('1/1'), '1');
console.log(mixedFraction('11/11'), '1');
console.log(mixedFraction('4/6'), '2/3');
console.log(mixedFraction('0/18891'), '0');
console.log(mixedFraction('-10/7'), '-1 3/7');
console.log(mixedFraction('-22/-7'), '3 1/7');
console.log(mixedFraction('-503/679'), '-503/679');
console.log(mixedFraction('2/-6'), '-1/3');
console.log(mixedFraction('9/-2'), '-4 1/2');
console.log(mixedFraction('-7/-10'), '7/10');
console.log(mixedFraction('-1/1'), '-1');

// best

/* 
gcd=(a,b)=> b==0 ? a : gcd(b,a%b);
function mixedFraction(s){
  var [x,y]=s.split("/").map(z=>+z);
  if (y==0) throw "ZeroDivisionError";
  if (x%y==0) return ""+x/y;
  var g=gcd(x,y),add=x/y<0 ? "-" : "";
  x=Math.abs(x/g),y=Math.abs(y/g);
  return add+(x<y ? "" : Math.floor(x/y)+" ")+x%y+"/"+y;
}
*/
