/* 
5kyu - Timmy goes to college
https://www.codewars.com/kata/573f2116d344e09f03000d2d/train/javascript


*/

function getStats(matrikel, gradeList) {
  let allGrades = {};
  let currentID = "", id = "", g;
  let isId = true;
  let isDoubled = false;
  let list1 = gradeList.replace(/\s/g, '');
  for (let i = 0; i < list1.length; i++) {
    let c = list1[i];
    if (isId) {
      //id value
      id += c;
      if (id.length === 5) {
        isId = false;
        currentID = id;
        id = "";
      }
    } else {
      // grade value
      isId = true;
      if (list1.slice(i, i + 4) === 'N.E.') {
        g = list1.slice(i, i + 4);
        i += 3;
      } else if (list1.slice(i, i + 6) === "F.N.B.") {
        g = list1.slice(i, i + 6);
        i += 5;
      } else {
        g = list1.slice(i, i + 3);
        i += 2;
      }
      if (allGrades[currentID]) {
        isDoubled = true;
        break;
      } else {
        allGrades[currentID] = g;
      }
    }
  }
  //console.log(allGrades);
  let isInvalidList = Object.keys(allGrades).find(v => isNaN(+v) || v.length !== 5);
  //let invalidGrade = Object.values(allGrades).find(v => !(v === "N.E." || v === "F.N.B." || (+v >= 1 && +v < 6)));
  //console.log(`  err: L=${isInvalidList} G=${invalidGrade}`);
  if (isInvalidList) return "Error => Invalid list";
  g = allGrades[matrikel];
  if (g) {
    if (isDoubled) return "Error => Double matrikel number entry";
    //let invalidGrade = Object.values(allGrades).find(v => !(v === "N.E." || v === "F.N.B." || (+v >= 1 && +v < 6)));
    let invalidGrade = Object.entries(allGrades).find(([id, grade]) => !(grade === "N.E." || grade === "F.N.B." || (+grade >= 1 && +grade < 6)));
    if (invalidGrade) {
      return `Error => Matrikel ${invalidGrade[0]} has an invalid grade: ${invalidGrade[1]}`;
    }
    let oArr = Object.values(allGrades).filter(v => v != 'N.E.');
    let avg = (oArr.reduce((sum, v) => sum + ((v === "F.N.B.") ? 5 : +v), 0) / oArr.length).toFixed(2);
    let failed = Object.values(allGrades).filter(v => v === "5.0" || v === 'N.E.').length;
    let best = Math.min(...Object.values(allGrades).map(Number).filter(n => !isNaN(n)));
    return `Grade => ${g}, Average => ${avg}, Failed => ${failed}, Best => ${best.toFixed(1)}, Participants => ${oArr.length}`;
  } else {
    return "Error => Timmy's matrikel number not found";
  }

}


const normal = "49167 4.0 49493 5.0 50621   N.E. 52018 3.0 521275.0 52160 5.052545   4.0  54739 3.3 529144.0 53429 5.0    53798 F.N.B. 54520 4.0 54745 3.7";
const gradeError = "49167 N.E. 49493 5.0 50621 0.9 52018 5.0 52127 5.0 52160 5.0 52545 N.E. 54739 3.3  52914 4.0 53429 N.E. 537985.054520 4.0 54745 3.7";
const invalidList = "49167 4.0 494935.050621 5.0 52018 3.2 52127 52160 N.E. 52545   4.0 54739 3.3 52914 4.0  53429 5.0 53798 5.0 54520 4.0 54745  F.N.B 43523 2.7";
const noTimmy = "49167 4.0 49493 F.N.B. 50621   5.0 52127 5.0 52160 5.052545 4.0 54739 3.3 52914 4.0 53429 5.0 53798 5.0 54520 4.0 54745 3.7";
const doubleEntry = "49167 F.N.B. 49493 5.0 50621 5.0 52018 2.1 52127 5.052160  5.0 52545 4.0 54739   3.6 52914 4.052914 4.0 53429 5.0 53798 5.0 54520 4.0 54745 3.7";
const matrikelTimmy = "52018";

console.log(getStats(matrikelTimmy, normal),
  "Grade => 3.0, Average => 4.25, Failed => 5, Best => 3.0, Participants => 12",
  "Make sure your output is correct");
console.log(getStats(matrikelTimmy, gradeError),
  "Error => Matrikel 50621 has an invalid grade: 0.9",
  "Make sure you test input correctly");
console.log(getStats(matrikelTimmy, invalidList),
  "Error => Invalid list",
  "Make sure you test input correctly");
console.log(getStats(matrikelTimmy, noTimmy),
  "Error => Timmy\'s matrikel number not found",
  "Make sure you test input correctly");
console.log(getStats(matrikelTimmy, doubleEntry),
  "Error => Double matrikel number entry",
  "Make sure you test input correctly");



  // best

  /* 
  function getStats(n,list) {
  for (var arr=[],er="",sum=0,g="",f=0,b="5.0",p=0;list!="";){
    var m=list.match(/^\d{5}/)+"";
    if(m=='null') return "Error => Invalid list";
    list=list.replace(/^\d{5}/,"").trim();
    var t1=list.match(/^(?:\d\.\d|N\.E\.|F\.N\.B\.)/i)+"";
    if(t1=='null') return "Error => Invalid list";
    list=list.replace(/^(\d\.\d|N\.E\.|F\.N\.B\.)/i,"").trim();
    var t=t1=="N.E."?0:t1=="F.N.B."?5: +t1;
    if (arr.indexOf(m)!=-1&&er=="") er= "Error => Double matrikel number entry"
    if (t!=0&&t!=5&&(t<1||t>4)&&er=="") er=`Error => Matrikel ${m} has an invalid grade: ${t1}`
    if (m==n) g=t1;
    if (t!=0&&t< +b) b=t1; 
    arr.push(m);  sum+=t; f+=t==5?1:0;  p+=t!=0?1:0;
  }
  return g==''?`Error => Timmy's matrikel number not found`:er?er:`Grade => ${g}, Average => ${(sum/p).toFixed(2)}, Failed => ${f}, Best => ${b}, Participants => ${p}`;
}
  */


/* 
function getStats(matrikel, gradeList) {

  let mine;
  let sum = 0;
  let count = 0;
  let best = 5;
  let failed = 0;
  let seen = {};
  
  const tally = function(_, id, mark) {
    
    let grade = mark[0] === 'F' ? 5 : +mark;

    if (id === matrikel)
      mine = mark;
    
    if (id in seen)
      throw 'Error => Double matrikel number entry';

    seen[id] = true;
    
    if (mark[0] !== 'N') {
      if (grade < 1 || grade > 5 || grade >= 4 && grade % 1)
        throw 'Error => Matrikel ' + id + ' has an invalid grade: ' + mark;
      
      best = Math.min(best, grade);
      sum += grade;
      count++;
      
      if (grade === 5)
        failed++;
    }
    
    return '';
    
  };
  
  try {
    let remainder = gradeList.replace(/\s*(\d{5})\s*(F\.N\.B\.?|N\.E\.?|\d\.\d)\s*/g, tally);

if (remainder)
  return 'Error => Invalid list';

if (mine === undefined)
  return 'Error => Timmy\'s matrikel number not found';
  }
  catch (e) {
  return e;
}


return 'Grade => ' + mine + ', '
  + 'Average => ' + (sum / count).toFixed(2) + ', '
  + 'Failed => ' + failed + ', '
  + 'Best => ' + best.toFixed(1) + ', '
  + 'Participants => ' + count;
  
}
* /