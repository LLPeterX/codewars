/* 
6kyu - Get the square of a number without ** or * or pow()
https://www.codewars.com/kata/58a8807c5336a3f613000157/train/javascript

Возвести в квадрат число N, не используя умножение или Math.pow().
Код функции должен быть <= 25 символов
*/

// const square=(n,res=0)=>{
//   for(let i=0;i<n;i++)res+=n;return res;
// }

function square(n) {
  return eval(n + '**' + 2);
}

console.log(square(2), 4)
console.log(square(3), 9)
console.log(square(4), 16)

// best
/* 
 square =n=>n/(1/n)

 */

/*
square=f=(n,x=n)=>!x?0:n+f(n,--x)
*/

/*
square=n=>~~(n/(1/n)+.5)
*/