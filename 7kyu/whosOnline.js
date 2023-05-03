/* 
7kyu - Who's Online?
https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript

Given an input of an array of objects containing usernames, status and time 
since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
*/

const whosOnline = (friends) => {
  let result = { online: [], offline: [], away: [] };
  for (let friend of friends) {
    if (friend.status === 'offline') {
      result.offline.push(friend.username);
    } else {
      if (friend.lastActivity > 10) {
        result.away.push(friend.username);
      } else {
        result.online.push(friend.username);
      }
    }
  }
  if (result.online.length == 0) delete result.online;
  if (result.offline.length == 0) delete result.offline;
  if (result.away.length == 0) delete result.away;
  return result;
}

// best

/* 
const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if(status === 'online' && e.lastActivity > 10) status = 'away';
        let temp = output[status];
        if(output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}
*/