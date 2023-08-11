/* 
7kyu - Coding Meetup #14 - Higher-Order Functions Series - Order the food
https://www.codewars.com/kata/583952fbc23341c7180002fd
*/

// function orderFood(list) {
//  return list.reduce((o,e) =>{
//    if(o[e.meal]) {
//      o[e.meal]++;
//    } else {
//      o[e.meal]=1;
//    }
//    return o;
//  },{});
// }

function orderFood(list) {
  return list.reduce((o,e) =>{
    if(o[e.meal]) {
      o[e.meal]++;
    } else {
      o[e.meal]=1;
    }
    return o;
  },{});
 }
 
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

console.log(orderFood(list1)); // { vegetarian: 2, standard: 1, vegan: 1 };

//best
/* 
const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;
*/