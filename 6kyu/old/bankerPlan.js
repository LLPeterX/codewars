/* 
6kyu Banker's Plan
https://www.codewars.com/kata/56445c4755d0e45b8c00010a

Джона хочет положить на депозит деньги (f0). Он хочет снимать каждый год сумму c0 (с учетом инфляции).
План:
 - В начале года депозит = f0
 - Процент = p (не меняется)
 - Инфляция i% в год (не меняется)
 - Джон может снимать каждый год c0 в любое время года.
   Он должен учитывать инфляцию в размере i% в год, чтобы сохранить качество своей жизни. 
 - Суммы f0, f1... усекаются до целых
 
 Даны f0 (нач.депозит), p (%), c0 (сколько снимает), i (% инфляции)
 Определить, сможет ли Джон придерживаться этой стратегии до n-го года

 */

 /*
 function fortune(f0, p, c0, n, i) {
   for(let year=1; year <=n && c0<f0; year++ ) {
    f0 = Math.floor(f0 + f0*p/100 - c0);
    c0 = Math.floor(c0 + c0*i/100);
    console.log(`year:${year+1} f0=${f0} c0=${c0}`);
     if(c0 > f0) {
       return false;
     }
   }
   return f0 >= c0;
 }
*/
function fortune(f0, p, c0, n, i) {
  for (let year=1; year<n; ++year)
  {
    f0=Math.floor(f0 + f0*p/100-c0);
    c0=Math.floor(c0 + c0*i/100);
  }
  return f0>=0;
}
console.log(fortune(100000,1,2000,15,1)); // true
 console.log(fortune(100000000, 5, 1000000, 50, 1)); // true
 console.log(fortune(100000000, 1.5, 10000000, 50, 1)); // false
 console.log(fortune(2244343, 2, 150616, 15, 3)); // true (у меня получается false)
console.log(fortune(8454728, 3, 563759, 15, 4)); // true (у меня получается false)