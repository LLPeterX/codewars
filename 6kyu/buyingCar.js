/* 
6kyu - Buying a car
https://www.codewars.com/kata/554a44516729e4d80b000012

У мужика есть $2000 (startPriceOld) . Он хочет купить тачку за $8000 (startPriceNew). 
Каждый месяц он откладывает $1000 (savingperMonth).
Однако, с каждым месяцем стоимость обоих машин уменьшается на 1.5% (percentLossByMonth)
Более того, процент падения увеличивается на 0.5% в конце каждого второго месяца.
Найти кол-во месяцев и кол-во оставшихся денег
 */

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let month=0, available=-1;
  //for(let month=0; month<1000; month++) {
  while(available<0) {
    available = startPriceOld - startPriceNew + savingperMonth*month;
    // if(available>=0) {
    //   return [month, Math.round(available)];
    // }
    if(month && (month-1)%2 === 0) {
      percentLossByMonth += 0.5;
    }
    startPriceOld -= startPriceOld*percentLossByMonth/100;
    startPriceNew -= startPriceNew*percentLossByMonth/100;
    month++;
  }
  return [month, Math.round(available)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // [0, 4000]

//best
/* 
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved){
    moneySaved += savingperMonth;
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
    months++;
    if (months % 2 == 1){
      percentLossByMonth += .5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}
*/

/* 
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  // Case 1 : the old man has enough money
  
  //   We return 0 for the number of month and the difference between the two prices
  if(startPriceOld >= startPriceNew) {return [0, Math.round(startPriceOld - startPriceNew)];}
  
  
  // Case 2 : the old man doesn't have enough money
  
  // We initiate two variables, months for the number of months he's been waiting
  //   and total for the total money he has
  var months = 0, total = startPriceOld;
  
  // As long as the old man doesn't have enough money, we loop again for a new month
  while(total < startPriceNew) {
    // We add the savingperMonth for the new month
    total += savingperMonth;
    
    // We adjust the price of the old car
    total -= startPriceOld * percentLossByMonth / 100;
    
    
    // Applying the interest rate on the new car price and 
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
    
    // We increase the month counter
    months++;
    
    // Increasing the rate for all the even months (we use the increased rate immediately after month 1)
    //   So each time the numbers of passed months is odd, we increase the rate
    months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth;
    
  } // end while
  
  // Returning the number of months and what the old man has left after the purchase (rounded to units)
  return [months, Math.round(total - startPriceNew)];
    
}
*/