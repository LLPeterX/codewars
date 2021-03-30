/* 
https://www.codewars.com/kata/59c03f175fb13337df00002e

Дано число N
Нарисовать окно.
Окно стосит из 4 панелей (2x2)
Каждая панель состоит из N точек
*/

function makeAWindow(num) {
  return '-'.repeat(num*2+3)+"\n" + 
  (('|'+'.'.repeat(num)+'|'+'.'.repeat(num)+'|\n')).repeat(num) + 
  '|'+'-'.repeat(num) + '+' + '-'.repeat(num) + '|\n' + 
  (('|'+'.'.repeat(num)+'|'+'.'.repeat(num)+'|\n')).repeat(num) + 
  '-'.repeat(num*2+3);
}

console.log(makeAWindow(3));

//expected '---------\n|...|...|\n|...|...|\n|...|...|\n|...+...|\n|...|...|\n|...|...|\n|...|...|\n---------' 
//to equal '---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------'