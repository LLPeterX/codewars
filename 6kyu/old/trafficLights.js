/* 
6kyu - Traffic Lights - one car
https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/train/javascript

Overview
A character string represents a city road.

Cars travel on the road obeying the traffic lights..

Legend:

. = Road
C = Car
G = GREEN traffic light
O = ORANGE traffic light
R = RED traffic light
Something like this:

C...R............G......

Simulation
At each iteration:

1.the lights change, according to the traffic light rules... then
2.the car moves, obeying the car rules

Traffic Light Rules
Traffic lights change colour as follows:

- GREEN for 5 time units... then
- ORANGE for 1 time unit... then
- RED for 5 time units....
- ... and repeat the cycle

Car Rules
- Cars travel left to right on the road, 
  moving 1 character position per time unit
- Cars can move freely until they come to a traffic light. 
  Then:
  - if the light is GREEN they can move forward 
    (temporarily occupying the same cell as the light)
  - if the light is ORANGE then they must stop 
    (if they have already entered the intersection they can continue through)
  - if the light is RED the car must stop until the light turns GREEN again

Kata Task
Given the initial state of the road, 
return the states for all iterations of the simiulation.  

- There is only one car
For the initial road state:
  - the car is always at the first character position
  - traffic lights are either GREEN or RED, 
    and are at the beginning of their countdown cycles
- There are no reaction delays - when the lights change 
  the car drivers will react immediately!
- If the car goes off the end of the road it just disappears from view
- There will always be some road between adjacent traffic lights
*/

function trafficLights(road, n) {
  let carPosition = 0, tick = 1;
  let result = [road];
  let lights = [];
  // lights positions
  for (let i = 0; i < road.length; i++) {
    if ("ORG".includes(road[i])) {
      lights.push({ index: i, color: road[i], timer: road[i] === 'O' ? 1 : 5 });
    }
  }
  while (tick++ <= n) {
    let state = Array(road.length).fill('.');
    // update lights
    for (let l of lights) {
      l.timer--;
      if (l.timer < 1) {
        if (l.color === 'R') {
          l.color = 'G';
          l.timer = 5;
          l.nextLight = 'G';
        } else if (l.color == 'G') {
          l.color = 'O';
          l.timer = 1;
          l.nextLight = 'R';
        } else {
          l.color = l.nextLight;
          l.timer = 5;
        }
      }
      state[l.index] = l.color;
    }

    // check road cell
    let c = state[carPosition + 1];
    if (!c || c === '.' || c === 'G') carPosition++;
    if (carPosition < state.length) state[carPosition] = 'C';
    result.push(state.join``);
  }
  return result;
}

//console.log(trafficLights("C...R............G......", 10));
console.log(trafficLights("CG...", 6));

// best

//1
/*
function trafficLights(road, n) {
  let lights = "GGGGGORRRRR";
  let carIndex = road.indexOf('C'); //initial value = 0
  let currentState = [...road].map(c => lights.indexOf(c));
  //initial state = C...R............G......
  //-1,-1,-1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1
  let result = [road];

  for (let i = 0; i < n; i++) {
    // update state of the lights
    // if 'C' or '.', leave the value as -1
    // else increment the index and find modulus of 11 (light pattern length)
    currentState = currentState.map(index => index < 0 ? index : (index + 1) % 11);

    // if possible, move the car 
    // when there are no lights in next step, 
    // when the light is green, 
    // when the car is at the end of the road
    if (currentState[carIndex + 1] < 5 || carIndex === road.length - 1) {
      carIndex++;
    }

    // construct the step of the road
    // create new array of the road length and fill each element
    // default value is '.'
    // if there is a car, show the car
    // then if there is a light, show the light
    let currentRoad = new Array(road.length).fill().map((val, index) => {
      if (index === carIndex) {
        return 'C';
      }
      else if (currentState[index] >= 0) {
        return lights[currentState[index]];
      }
      return '.';
    })

    result.push(currentRoad.join(''));
  }

  return result;
}
*/


