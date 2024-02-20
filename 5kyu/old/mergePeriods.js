/* 
5kyu - Merge your Gantt chart bars
https://www.codewars.com/kata/5c484258de6714599e6f732f

You have a Gantt chart with time period bars, each having a from and to date (colored in image). 

For example: You have period A, B and C as in the image. 
Splitting these periods in subperiods means, we search for each period in which bars change. 
Thus, first period would be A.from until the day before B.from (end date is always inclusive).
Also, we need to know subperiods that do not contain any bars (to calculate gaps).

Merged periods in the image would hence be:

* from 2020-02-04 to 2020-02-05 -> A
* from 2020-02-06 to 2020-02-07 -> A, B
* from 2020-02-08 to 2020-02-11 -> B
* from 2020-02-12 to 2020-02-12 -> empty
* from 2020-02-13 to 2020-02-15 -> C
*/

function mergePeriods(periods) {
  const mss = periods
    .map(p => ({ from: new Date(p.from).getTime(), to: new Date(p.to).getTime(), title: p.title }))
    .sort((a, b) => a.from - b.from);
  const maxDate = Math.max(...mss.map(e => e.to));
  let date2title = {};
  for (let d = mss[0].from; d <= maxDate; d += 86400000) {
    let id = new Date(d).toISOString().slice(0, 10);
    date2title[id] = new Set();
    for (let i = 0; i < mss.length; i++)  date2title[id].add(d >= mss[i].from && d <= mss[i].to ? mss[i].title : '');
  }
  let r = Object.entries(date2title).map(([date, t]) => ({ date, title: [...t].sort().filter(v => v !== '').join(', ') }));
  // join
  let res = [{ from: r[0].date, to: r[0].date, title: r[0].title }];
  for (let i = 1, j = 0; i < r.length; i++) {
    if (r[i].title === res[j].title) {
      res[j].to = r[i].date;
    } else {
      res.push({ from: r[i].date, to: r[i].date, title: r[i].title });
      j++;
    }
  }
  return res;
}

// best

/* 
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function mergePeriods(arr) {
  
  // you get periods as an array of objects with from/to and title attributes
  
  // you return merged subperiods as array of objects, 
  // also with from/to and sorted/joined (", ") titles
  
  let toDate = s => new Date(+s.substring(0,4), +s.substring(5,7)-1, +s.substring(8,10));
  let fromDate = d => `${d.getFullYear().toString().padStart(4,'0')}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
  
  let xs = arr.map(e => ({ from: toDate(e.from), to: toDate(e.to), title: e.title }));
  let dsraw = [...new Set(arr.map(e => e.from).concat(arr.map(e => fromDate(toDate(e.to).addDays(1)))))];
  let ds = dsraw.map(d => toDate(d)).sort((a,b)=>a-b);
  
  let ans = [];
  for (let i = 1; i < ds.length; i++) {
    let titles = xs.filter(e => e.to >= ds[i-1] && e.from < ds[i]).map(e => e.title).sort((a,b)=>a.localeCompare(b)).join(', ');
    ans.push({ from: fromDate(ds[i-1]), to: fromDate(ds[i].addDays(-1)), title: titles });
  }

  return ans;
}
*/

/* 
var moment = require('moment');
var yesterday=s=>moment(s,'YYYY-MM-DD').add(-1,'days').format('YYYY-MM-DD');
var tomorrow=s=>moment(s,'YYYY-MM-DD').add(1,'days').format('YYYY-MM-DD');

function mergePeriods(periods) {
  var times = [...new Set([].concat(...periods.map(r=>r.from),...periods.map(r=>tomorrow(r.to))))].sort((a,b)=>a.localeCompare(b));
  var fromList = periods.map(({from,title})=>({date:from, title})).sort((a,b)=>a.date.localeCompare(b.date));
  var toList = periods.map(({to,title})=>({date:to, title})).sort((a,b)=>a.date.localeCompare(b.date));
  var [fi,ti]=[0,0], last, res=[], tts=new Set();
  for(let p of times) {
    if(last) res.push({from: last, to: yesterday(p), title: [...tts].sort().join(', ')});
    while(fromList[fi]&&fromList[fi].date<=p) {tts.add(fromList[fi].title); fi++;}
    while(toList[ti]&&toList[ti].date<p) {tts.delete(toList[ti].title); ti++;}
    last=p;
  }
  return res;
}
*/