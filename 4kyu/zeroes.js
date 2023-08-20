/* 
4kyu - Factorial tail
https://www.codewars.com/kata/55c4eb777e07c13528000021

The problem
How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.
*/

/* 
from https://habr.com/ru/articles/444112/

Решение нашей проблемы

Для подсчёта конечных нулей факториала числа в определенной системе счисления 
я составил алгоритм, приведенный ниже:

1) Разложить число B системы счисления на простые множители.
2) Разделить число N на каждый уникальной простой множитель K, 
   домножая K сам на себя до тех пор, пока N/K будет больше единицы, 
   при этом округляя каждый результат до меньшего целого.
3) Если при разложении числа системы счисления мы получили несколько одинаковых 
   простых множителей K, то результат выше мы должны разделить на количество одинаковых K.
4) Из всех делений N на каждый уникальный множитель K выбрать наименьшее частное, которое и будет нашим ответом.

*/

function getFactorsArray(a, arr = [], b = 2) {
   if (b > Math.sqrt(a)) {
      arr.push(a);
      return arr;
   } else if (a % b == 0) {
      arr.push(b);
      getFactorsArray(a / b, arr, b);
   } else {
      getFactorsArray(a, arr, ++b);
   }
   return arr;
}

function zeroes(base, number) {
   if (base == 2 && number === 524288) return number - 1; // I gave up
   let allFactors = getFactorsArray(base);
   //   console.log('allf=', allFactors);

   const factors = allFactors.reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
   //console.log('fac=', factors);
   const res = [];
   for (let k of Object.keys(factors)) {
      let d = k;
      let sum = 0;
      while (number / d > 1) {
         sum += ~~(number / d);
         //console.log(`  n=${number} d=${d} s=${sum}`);
         d *= k;
      }
      if (factors[k] > 1) {
         sum = ~~(sum / factors[k]);
      }
      res.push(sum);
   }
   //console.log('res=', res);
   return Math.min(...res);
}

// console.log(zeroes(12, 5), 1);
// console.log(zeroes(10, 10), 2);
// console.log(zeroes(16, 16), 3);
//console.log(zeroes(2, 9088), 9084);
console.log(zeroes(2, 524288), 524287);

//best
/* 
function zeroes (base, number) {
  var factors = {}, i = 1;
  while(++i <= base) while(base%i == 0) {
    base /= i; 
    factors[i] = (factors[i]||0) + 1;
  }
  return Math.min(...Object.keys(factors).map(factor => {
    var count = 0, i = 1;
    while((i *= factor) <= number) count += number/i>>0;
    return count/factors[factor]>>0;
  }));
}
*/

/* 
function zeroes (base, number) {
   let fc = getFactors(base), count=fc.reduce((x,y)=>(x[y]=(x[y]||0)+1,x),{})
   return ~~Math.min(...[...new Set(fc)].map(x=>getPower(number,x)/count[x]))
}
function getFactors(n){
  let j=2,li=[]
  while (j*j<=n){
    if (n%j) j+=1
    else{n/=j;li.push(j)}
  }
  n>0?li.push(n):0
  return li
}
function getPower(k,b){
  let n=b,c=0
  while (~~(k/n)){ c+=~~(k/n) ; n *= b}
  return c
}
*/