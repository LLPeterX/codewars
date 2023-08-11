/* 
7kyu - Split In Parts
https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript
*/

var splitInParts = function (s, partLength) {
  return s.split(new RegExp(`(.{${partLength}})`, 'g')).filter(v => v).join(' ');
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3)); // "sup erc ali fra gil ist ice xpi ali doc iou s"

//best
/*
const splitInParts = (s, partLength) =>  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');
*/