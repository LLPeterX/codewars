/* 
7kyu - Outrun your past self
https://www.codewars.com/kata/6525caefd77c582baf678ddf/train/javascript


*/

function number_lappings(my_speed, ghost_speed, time, round_length) {
  if (my_speed <= ghost_speed) return 0;
  let x = (my_speed - ghost_speed) * time / round_length;
  return Math.floor(x) - Number.isInteger(x);
}

console.log(number_lappings(1, 1, 100, 1), 0);
console.log(number_lappings(2, 1, 1000, 1000), 0);
console.log(number_lappings(0, 10, 1000, 1), 0);
console.log(number_lappings(14, 13.5, 5, 1), 2);
console.log(number_lappings(13.4, 7.3, 1, 1.5), 4);
console.log(number_lappings(14, 6, 2.5, 10), 1);


// best

/* 
function number_lappings(my_speed, ghost_speed, time, round_length){
  let diffSpeed = my_speed - ghost_speed;
  if (diffSpeed <= 0){
    return 0;
  }
  else{
    let timeToLap = round_length / diffSpeed;
    return time % timeToLap === 0 ? time / timeToLap - 1: Math.floor(time / timeToLap);
  }
}
*/