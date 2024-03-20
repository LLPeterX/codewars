/* 
5kyu - Finding an appointment
https://www.codewars.com/kata/525f277c7103571f47000147


The businesspeople among you will know that it's often not easy to find an appointment. 
In this kata we want to find such an appointment automatically. 
You will be given the calendars of our businessperson and a duration for the meeting. 
Your task is to find the earliest time, when every businessperson is free for at least that duration.

Example Schedule:

Person | Meetings
-------+-----------------------------------------------------------
     A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
     B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
     C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00
Rules:

All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
The businesspeople work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
If the meeting does not fit into the schedules, return null or None as result
The duration of the meeting will be provided as an integer in minutes
Following these rules and looking at the example above the earliest time for a 60 minutes meeting would be 12:15.

Data Format:

The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

[
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
]
*/


const toMinites = (str) => str.slice(0, 2) * 60 + +str.slice(3);

// from: https://www.youtube.com/watch?v=geVyARo1by8

function getStartTime(schedules, duration) {
  const sorted = schedules
    .reduce((res, arr) => [...res, ...arr], [])
    .sort((a, b) => toMinites(a[0]) - toMinites(b[0]));
  const intervals = [sorted[0]];
  for (let [curStart, curEnd] of sorted) {
    let lastEnd = intervals.at(-1)[1];
    if (curStart <= lastEnd) {
      intervals.at(-1)[1] = lastEnd > curEnd ? lastEnd : curEnd;
    } else {
      intervals.push([curStart, curEnd]);
    }
  }
  if (intervals.length === 0) return null;
  if (toMinites(intervals[0][0]) - 540 >= duration) return "09:00";
  for (let i = 1; i < intervals.length; i++) {
    if (toMinites(intervals[i][0]) - toMinites(intervals[i - 1][1]) >= duration) return intervals[i - 1][1];
  }
  if (1140 - toMinites(intervals[intervals.length - 1][1]) >= duration) return intervals[intervals.length - 1][1];
  return null;
}



const schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];
console.log(getStartTime(schedules, 60), '12:15');
console.log(getStartTime(schedules, 90), null);

console.log(getStartTime([[['09:00', '19:00']], [], [], []], 1), null);

// FAIL:
console.log(getStartTime([
  [
    ['09:09', '11:27'],
    ['12:14', '13:41'],
    ['15:16', '17:17'],
    ['17:32', '18:50']
  ],
  [
    ['10:38', '12:06'],
    ['13:39', '15:08'],
    ['17:23', '17:26'],
    ['18:02', '18:26']
  ]
], 10), "18:50");

// best

/* 
function getStartTime(schedules, duration) {
  function toMinutes(s) {
    return s.split(':').reduce(function(h, m) {
      return parseInt(h) * 60 + parseInt(m);
    });
  }
  return schedules.reduce(function(p, n) {
    return p.concat(n);
  }, [['00:00', '09:00'], ['19:00', '24:00']]).sort().reduce(function(p, n) {
    if (!p.start && toMinutes(p.last) + duration <= toMinutes(n[0])) {
      p.start = p.last;
    }
    p.last = p.last < n[1] ? n[1] : p.last;
    return p;
  }, {last: '00:00', start: null}).start;
}
*/