/* 
6kyu - The Spider and the Fly (Jumping Spider)
https://www.codewars.com/kata/5a30e7e9c5e28454790000c1

A spider web is defined by

* "rings" numbered out from the centre as 0, 1, 2, 3, 4
* "radials" labelled clock-wise from the top as A, B, C, D, E, F, G, H

Web Coordinates:
As you can see, each point where the rings and the radials intersect 
can be described by a "web coordinate".

So in this example the spider is at H3 and the fly is at E2

Kata Task:
Our friendly jumping spider is resting and minding his own spidery 
business at web-coordinate spider.
An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.
Your task is to calculate and return the distance the spider must jump to get to the fly.
*/

function spiderToFly(spider, fly) {
  const [spiderRadial, spiderRing] = [...spider];
  const [flyRadial, flyRing] = [...fly];
  const radialsDegrees = {
    "A": 90,
    "B": 45,
    "C": 0,
    "D": 315,
    "E": 270,
    "F": 225,
    "G": 180,
    "H": 135
  }
  let spiderX = spiderRing * Math.cos(radialsDegrees[spiderRadial] * Math.PI / 180),
    spiderY = spiderRing * Math.sin(radialsDegrees[spiderRadial] * Math.PI / 180),
    flyX = flyRing * Math.cos(radialsDegrees[flyRadial] * Math.PI / 180),
    flyY = flyRing * Math.sin(radialsDegrees[flyRadial] * Math.PI / 180);

  return Math.hypot(spiderX - flyX, spiderY - flyY);
}

console.log(spiderToFly("H3", "E2"), 4.63522);
console.log(spiderToFly("F3", "F3"), 0);
console.log(spiderToFly("H1", "H2"), 1);
console.log(spiderToFly("G4", "C4"), 8);