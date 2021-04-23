/* 
7kyu Harvest Festival
https://www.codewars.com/kata/606efc6a9409580033837dfb


*/

function plant(seed, water, fert, temp){
  console.log(`>>${seed}, ${water}, ${fert}, ${temp}`);
  const isBadTemp = temp < 20 || temp>30;
  let flowers = seed.repeat(isBadTemp ? 0 : fert);
  let stem = '-'.repeat(water);
  return (stem + flowers).repeat(water) + (isBadTemp ? seed : '');
 }

 console.log(plant("+", 1, 3, 15));
 console.log(plant(",", 3, 7, 25));
 console.log(plant(";", 9, 10, 30));
 console.log(plant("#", 10, 2, 15));
 

 //best
 /* 
 function plant(seed, water, fert, temp){
  return 20 <= temp && temp <= 30 ? ("-".repeat(water) + seed.repeat(fert)).repeat(water) : "-".repeat(water * water) + seed
}
 */

/* 
function plant(seed, water, fert, temp){
    let stem = '-'.repeat(water);
    let flower = seed.repeat(fert);
    if (temp < 20 || temp > 30) return stem.repeat(water) + seed;
    return (stem + flower).repeat(water);
}
*/