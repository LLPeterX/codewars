/* 
7kyu - Help Grinch steal Christmas from JS programmers
https://www.codewars.com/kata/63387232198a4c00286aa349/train/javascript

Grinch wants to spoil Christmas for JavaScript programmers. 
For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. 
He wants to change method getDate of Date so that it returns 26 for Date objects 
that represent 25th of December but works correctly for all other days of the year.

However, Grinch does not know how to do that. Can you help him?

Нужно сделать так, чтобы 25 декабря = 26 декабря
*/

Date.prototype.getDate = function getGrinchDate() {
  let md = this.toISOString().slice(5, 10);
  return md === '12-25' ? 26 : +md.slice(-2);
}

// best

/* 
Date.prototype.getDate = function getGrinchDate() {
  let [day, month, date] = this.toString().split(" ");
  return month == 'Dec' && date == 25 ? 26 : +date;
};
*/