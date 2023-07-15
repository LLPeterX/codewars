/* 
6kyu - We are the Robots
https://www.codewars.com/kata/587ae98e2ab0ef32ef00004c/train/javascript

Task:
You will receieve an array of strings such as
a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b"]
Count the robots represented by d[(0)(0)]b
where:
- 0 = eyes. Always 0
- d = legs. Any from: abcdefghijklmnopqrstuvwxyz
     Case insensitive
- [], () - body. Any from: |};&#[]/><()*

There may be cases where a part is totally missing and of course a robot 
cannot function at all without a part or where the factory put a valid part 
in the wrong place and it's again not a valid robot.

Case insensitve count of robots in string with "automatik" or "mechanik". 
Strings do not contain both "automatik and "mechanik".

Return an array with the count like below

a[0] = automatik count
a[1] = mechanik count

["1 robots functioning automatik", "1 robots dancing mechanik"]
*/

// function countRobots(a) {
//   let result = [0, 0], k;
//   for (let i = 0; i < a.length; i++) {
//     if (/automatik/i.test(a[i])) k = 0;
//     else if (/mechanik/i.test(a[i])) k = 1;
//     else continue;
//     //console.log(` i=${i} k=${k} str=${a[i]}`);
//     let m = a[i].match(/(([a-z])([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])0([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])0([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])([a-z]))/ig)
//     //console.log(` m=${m}`);
//     if (m) {
//       result[k] += m.length;
//     }
//   }
//   return [`${result[0]} robots functioning automatik`, `${result[1]} robots dancing mechanik`];
//   //return result;
// }

function countRobots(a) {
  let r = [0, 0], k;
  for (let s of a) {
    if (/automatik/i.test(s)) k = 0;
    else if (/mechanik/i.test(s)) k = 1;
    else continue;
    let m = s.match(/(([a-z])([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])0([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])0([\|\}\;\&\#\[\]\/\>\<\(\)\*])([\|\}\;\&\#\[\]\/\>\<\(\)\*])([a-z]))/ig)
    if (m) r[k] += m.length;
  }
  return [`${r[0]} robots functioning automatik`, `${r[1]} robots dancing mechanik`];
}

let a = []
console.log(countRobots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik", "And we are dancing mechanik"]
console.log(countRobots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik d[(0)(0)]b", "And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
console.log(countRobots(a), ["1 robots functioning automatik", "2 robots dancing mechanik"])
a = ["d[(0)(0)]b We're functioning automatik d[(0)(0)]b", "And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
console.log(countRobots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d[(0)(0)}b We're functioning automatik D[(0)(0)]b", "And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
console.log(countRobots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b", "And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
console.log(countRobots(a), ["3 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", 'and m><0(;0[;a we dancing are Mechanic']
console.log(countRobots(a), ["3 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're charging our battery", "And now we're full of energy", "We are the robots", "We're functioning automatik",
  "And we are dancing mechanik", "We are the robotororo robots", "Ja tvoi sluga", "Ja tvoi Rabotnik robotnik",
  "We are programmed just to do", "anything you want us to", "we are the robots", "We're functioning Automatic",
  "and we are dancing Mechanic", "we are the robots", "Ja tvoi sluga", "Ja tvoi Rabotnik robotnik",
  "We are the robots", "d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
  "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]

console.log(countRobots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"]
console.log(countRobots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])

// best

// function countRobots(a) {
//   var re = /[a-z]([\|\}\;\&\#\[\]\/\>\<\(\)\*]{2}0){2}[\|\}\;\&\#\[\]\/\>\<\(\)\*]{2}[a-z]/ig;
//   var auto = a.filter(/./.test.bind(/automatik/i)).toString();
//   var mech = a.filter(/./.test.bind(/mechanik/i)).toString();

//   return [(auto.match(re) || []).length + ' robots functioning automatik', (mech.match(re) || []).length + ' robots dancing mechanik'];
// }

