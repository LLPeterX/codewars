/* 
6kyu - DevOps legacy roasting -> disco inferno -> burn baby burn
https://www.codewars.com/kata/58ade79f3c97367977000274/train/javascript
*/

function roastLegacy(workloads) {
  const scores = {
    'cobol': 1000,
    'nonobject': 500,
    'monolithic': 500,
    'fax': 100,
    'modem': 100,
    'thickclient': 50,
    'tape': 50,
    'floppy': 50,
    'oldschoolit': 50
  };
  const compliants = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"];
  const w = workloads.toLowerCase();
  let compCount = points = 0;
  for (let k of Object.keys(scores)) {
    let m1 = w.match(new RegExp(k, 'g'));
    if (m1) points += scores[m1[0]] * m1.length;
  }
  for (let k of compliants) {
    let m1 = w.match(new RegExp(k, 'g'));
    if (m1) compCount += m1.length;
  }
  if (points === 0 && compCount === 0) {
    return 'These guys are already DevOps and in the Cloud and the business is happy!'
  }
  return `Burn baby burn disco inferno ${points} points earned in this roasting and ${compCount} complaints resolved!`;
}

var workloads = '';
console.log(roastLegacy(workloads), 'These guys are already DevOps and in the Cloud and the business is happy!');
var workloads = 'cloudstatelesspython';
console.log(roastLegacy(workloads), 'These guys are already DevOps and in the Cloud and the business is happy!');
var workloads = 'COBOL';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 1000 points earned in this roasting and 0 complaints resolved!');
var workloads = 'slow!expensive!';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 0 points earned in this roasting and 2 complaints resolved!');
var workloads = 'EXPENSIVE!AUTOMATEDRUBYCLOUDMONGOPAASTAPEACTIVE-ACTIVEPYTHONNOSQL';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 50 points earned in this roasting and 1 complaints resolved!');
var workloads = 'expensive!NONOBJECTexpensive!NONOBJECThostage!JAVASCRIPTexpensive!DEVOPS';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 1000 points earned in this roasting and 4 complaints resolved!');
var workloads = 'manual!COBOLnonobjectmonolithicfaxmodemthickclienttapefloppyoldschoolITslow!';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 2400 points earned in this roasting and 2 complaints resolved!');
var workloads = 'tapedistributedactive-activeoldschoolITmonolithicjavamodemnotfunctioning!thickclientCOBOLIAASexpensive!statelessrubyPAASautomatedimmutableagilemongonosqlhostage!nonobjectfaxpythoncontainerizedsecurity!floppyslow!manual!multi-tenantSAASserverlessDevOpscloudJavascriptCOBOL';
console.log(roastLegacy(workloads), 'Burn baby burn disco inferno 3400 points earned in this roasting and 5 complaints resolved!');


// best

/* 
onst roastLegacy = workloads => {

  const complaints = /(slow|expensive|manual|down|hostage|security)\!/gi;
  
  const keywords = [ 
    [ 1000, /cobol/gi ], 
    [ 500, /(nonobject|monolithic)/gi ], 
    [ 100, /(fax|modem)/gi ], 
    [ 50, /(thickclient|tape|floppy|oldschoolit)/gi ], 
  ];

  const count = regex => (workloads.match(regex) || []).length;
  
  let c_total = count(complaints);
  let k_total = keywords.reduce((total, [ points, regex ]) => total + points * count(regex), 0);

  if (!k_total && !c_total)
    return 'These guys are already DevOps and in the Cloud and the business is happy!';
  
  return `Burn baby burn disco inferno ${k_total} points earned in this roasting `
       + `and ${c_total} complaints resolved!`;
  
}
*/

/* 
const legacy = {cobol:1000, nonobject:500, monolithic:500, fax:100, modem:100, thickclient:50, tape:50, floppy:50, oldschoolit:50}

function roastLegacy(workloads) {
  var points = Object.keys(legacy).map(x => (workloads.match(new RegExp(x,'ig')) || []).length * legacy[x]).reduce((a,b) => a + b, 0);
  var complaints = (workloads.match(/slow!|expensive!|manual!|down!|hostage!|security!/ig) || []).length;
  return points || complaints ? "Burn baby burn disco inferno "+ points +" points earned in this roasting and "+ complaints +" complaints resolved!" : "These guys are already DevOps and in the Cloud and the business is happy!";
}
*/