/* 
6kyu - Save the Spice Harvester (Dune Universe)
https://www.codewars.com/kata/587d7544f1be39c48c000109/train/javascript

Goal:
As a spotter pilot, you are responsible for handling dispatch of Carryalls in your vicinity. 
Your goal is to determine whether a carryall should be sent for rescue, 
or if it must be forfeited because there is not enough time.

Each test input will consist of an object data, which has the following properties:

* harvester: location of the spice harvester
* worm: location and travel speed of the spotted sandworm in the form [location, movement speed])
* carryall: location and travel speed of the nearest carryall in the form [location, movement speed])
*/

function harvesterRescue({ harvester, worm, carryall }) {
  let carryTime = Math.sqrt((carryall[0][0] - harvester[0]) ** 2 + (carryall[0][1] - harvester[1]) ** 2) / carryall[1] + 1;
  let wormTime = Math.sqrt((worm[0][0] - harvester[0]) ** 2 + (worm[0][1] - harvester[1]) ** 2) / worm[1];
  return carryTime < wormTime ? 'The spice must flow! Rescue the harvester!' : 'Damn the spice! I\'ll rescue the miners!'
}

let data1 = { harvester: [345, 600], worm: [[200, 100], 25], carryall: [[350, 200], 32] };
let data2 = { harvester: [200, 400], worm: [[200, 0], 40], carryall: [[500, 100], 45] };
let data3 = { harvester: [850, 125], worm: [[80, 650], 20], carryall: [[80, 600], 20] };
let data4 = { harvester: [0, 320], worm: [[250, 680], 42], carryall: [[550, 790], 58] };
let data5 = { harvester: [0, 0], worm: [[0, 600], 50], carryall: [[0, 880], 80] };
let data6 = { harvester: [1123, 402], worm: [[327, 404], 42], carryall: [[1696, 459], 26] };

console.log(harvesterRescue(data1), 'The spice must flow! Rescue the harvester!');
console.log(harvesterRescue(data2), 'Damn the spice! I\'ll rescue the miners!');
console.log(harvesterRescue(data3), 'The spice must flow! Rescue the harvester!');
console.log(harvesterRescue(data4), 'Damn the spice! I\'ll rescue the miners!');
console.log(harvesterRescue(data5), 'Damn the spice! I\'ll rescue the miners!');
console.log(harvesterRescue(data6), 'Damn the spice! I\'ll rescue the miners!');
