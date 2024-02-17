/* 
6kyu - Sort the columns of a csv-file
https://www.codewars.com/kata/57f7f71a7b992e699400013f/train/javascript

You get a string with the content of a csv-file. T
he columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.
*/

function sortCsvColumns(csvFileContent) {
  const data = csvFileContent.split("\n").map(row => row.split(';'));
  const indexMap = Array.from(data[0], (_, i) => i);
  for (let i = 0; i < data[0].length; i++) {
    for (let j = i + 1; j < data[0].length; j++) {
      if (data[0][indexMap[j]].toLowerCase() < data[0][indexMap[i]].toLowerCase()) {
        [indexMap[i], indexMap[j]] = [indexMap[j], indexMap[i]];
      }
    }
  }
  /*
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const row = [];
    for (let j = 0; j < data[0].length; j++) {
      row.push(data[i][indexMap[j]]);
    }
    result.push(row);
  }
  //return [data[0], indexMap];
  return result.map(row => row.join(';')).join('\n');
  */
  return data.map(row => row.map((_, j, row) => row[indexMap[j]]).join(';')).join("\n");
}

var preSorting = "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n"
  + "17945;10091;10088;3907;10132\n"
  + "2;12;13;48;11";
var postSorting = "Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n"
  + "3907;17945;10091;10088;10132\n"
  + "48;2;12;13;11";

console.log(sortCsvColumns(preSorting), "\n=>\n", postSorting);

preSorting = "IronMan;Thor;Captain America;Hulk\n"
  + "arrogant;divine;honorably;angry\n"
  + "armor;hammer;shield;greenhorn\n"
  + "Tony;Thor;Steven;Bruce";
postSorting = "Captain America;Hulk;IronMan;Thor\n"
  + "honorably;angry;arrogant;divine\n"
  + "shield;greenhorn;armor;hammer\n"
  + "Steven;Bruce;Tony;Thor";

// best

/* 
function trans(arr){
  return arr[0].map((_, i) => arr.map(row => row[i]));
}
function sortCsvColumns(csv) {
 return trans(trans(csv.split('\n').map(row => row.split(';'))).sort((x, y) => x[0].toLowerCase() < y[0].toLowerCase() ? -1 : 1)).map(row => row.join(';')).join('\n');
}
*/

/* 
const zip = require('lodash').zip

const byNameLowerCase=(a,b)=>a[0].toLowerCase().localeCompare( b[0].toLowerCase() )

function sortCsvColumns(csvFileContent, sep=';', end='\n') {
  const arrData = csvFileContent.split(end).map(r=>r.split(sep))
  const cols    = zip(...arrData).sort(byNameLowerCase)
  const out     = zip(...cols).map(r=>r.join(sep)).join(end)
  return out
}
*/