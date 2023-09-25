/* 
6kyu - Lottery Ticket
https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
*/

function bingo(ticket, win) {
  return ticket.reduce((count, t) => count + ([...t[0]].map(v => v.charCodeAt()).includes(t[1]) ? 1 : 0), 0) >= win ? 'Winner!' : 'Loser!'
  // let count = 0;
  // for (let a of ticket) {
  //   count += [...a[0]].map(v => v.charCodeAt()).includes(a[1]) ? 1 : 0;
  // }
  //return count >= win ? 'Winner!' : 'Loser!';
}

