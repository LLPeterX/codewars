/* 
7kyu - Going to the cinema
https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
*/
/* 
function movie(card, ticket, perc) {
  let sumB = card, sumA = ticket, k = perc, count = 0;
  console.log(` card=${card} ticket=${ticket} perc=${perc}`);
  while (sumB >= sumA) {
    sumB += Math.ceil(ticket * k);
    sumA += ticket;
    k *= perc;
    count++;
  }
  return count;
}
 */
function movie(card, ticket, perc) {
  var costA = n = 0,
    costB = card;
  while (Math.ceil(costB) >= costA) {
    costA += ticket;
    costB += ticket * Math.pow(perc, ++n);
  }
  return n;
};
// console.log(movie(500, 15, 0.9), 43)
// console.log(movie(100, 10, 0.95), 24)
console.log(movie(0, 10, 0.95), 2);