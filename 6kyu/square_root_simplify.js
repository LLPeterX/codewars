/* 
6kyu - Square Roots: Simplify/Desimplify
https://www.codewars.com/kata/5850e85c6e997bddd300005d/train/javascript

If you have a number, like 80, for example, you would start by finding 
the greatest perfect square divisible by 80. 
In this case, that's 16. Find the square root of 16, and multiply it by 80 / 16. Answer = 4 √5.

ask:
Your job is to write two functions, simplify, and desimplify, 
that simplify and desimplify square roots, respectively. 
(Desimplify isn't a word, but I couldn't come up with a better way to put it.) 

simplify() will take an integer and return a string like "x sqrt y", 
and desimplify() will take a string like "x sqrt y" and return an integer. 

For simplify(), if a square root cannot be simplified, return "sqrt y".
*/

function simplify(n) {
  let sq = Math.sqrt(n);
  if (Number.isInteger(sq)) return "" + sq;
  for (let i = n; i > 1; i--) {
    let root = Math.sqrt(i);
    if (Number.isInteger(root) && n % i === 0) {
      return `${root} sqrt ${n / i}`;
    }
  }
  return `sqrt ${n}`;
}

function desimplify(s) {
  if (s.includes('sqrt')) {
    let [, a, b] = s.match(/(\d+)*\s*sqrt (\d+)/);
    return Math.round(((a || 1) * Math.sqrt(b)) ** 2);
  } else return (+s) ** 2;
}

// console.log(simplify(80), "4 sqrt 5")
// console.log(simplify(1), "1")
// console.log(simplify(2), "sqrt 2")
// console.log(simplify(3), "sqrt 3")
// console.log(simplify(8), "2 sqrt 2")
// console.log(simplify(15), "sqrt 15")
// console.log(simplify(16), "4")
// console.log(simplify(18), "3 sqrt 2")
// console.log(simplify(20), "2 sqrt 5")
// console.log(simplify(24), "2 sqrt 6")
// console.log(simplify(32), "4 sqrt 2")
//-----
console.log(desimplify("1"), 1)
console.log(desimplify("sqrt 2"), 2)
console.log(desimplify("sqrt 3"), 3)
console.log(desimplify("2 sqrt 2"), 8)
console.log(desimplify("sqrt 15"), 15)
console.log(desimplify("4"), 16)
console.log(desimplify("3 sqrt 2"), 18)
console.log(desimplify("2 sqrt 5"), 20)
console.log(desimplify("2 sqrt 6"), 24)
console.log(desimplify("4 sqrt 2"), 32)


//best

/* 
function simplify(n) {
  for(var i=n;i>1;i--) if(n%i==0&&Math.sqrt(i)%1==0) return `${Math.sqrt(i)}${n==i?"":` sqrt ${n/i}`}`
  return n==1?"1":`sqrt ${n}`
}

function desimplify(s) {
  var [a,b]=s.split('sqrt')
  return b?a?a*a*b:+b:a*a
}
*/