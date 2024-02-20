/* 
7kyu - Movie Showtimes
https://www.codewars.com/kata/6376bbc66f2ae900343b7010

You just started working at a local cinema, and your first task is to write a function 
that returns the showtimes of a specific movie, given its length.
In order to make your job easier, you will work with 24-hour format throughout this kata.

Your function receives three parameters, all of them being integers:

* open - Hour at which the cinema opens.
* close - Hour at which the cinema closes.
* length - Length of the movie, in minutes.

It must return an array of times, with each time being in the format (hour, minute). 
For example, (19, 30) means 19:30, and (2, 0) means 02:00. 
The last session in the array cannot end after the cinema closes. 
Also, the times in the array must be sorted from earliest to latest.

There's also a 15-minute window between a session's end and the beginning of the following one, 
in order to give enough time for users to take a seat.
*/

function movie_times(open, close, length) {
  let res = [];
  if (close < open) close += 24;
  for (let time = open * 60; time + length <= close * 60; time += (length + 15)) {
    let t = time > 1440 ? time - 1440 : time;
    let h = Math.floor(t / 60) % 24;
    res.push([h, t % 60]);
  }
  return res;
}

console.log(movie_times(13, 23, 60), 'via', [[13, 0], [14, 15], [15, 30], [16, 45], [18, 0], [19, 15], [20, 30], [21, 45]]);
console.log(movie_times(16, 3, 75), 'vs', [[16, 0], [17, 30], [19, 0], [20, 30], [22, 0], [23, 30], [1, 0]]);
console.log(movie_times(16, 21, 90), 'via', [[16, 0], [17, 45], [19, 30]]);

// my best!