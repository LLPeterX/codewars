/* 
6kyu - Christmas mission: Distribute gifts #7
https://www.codewars.com/kata/5a40aa008f27f2aba800003a/train/javascript

Santa Claus is naughty, and he always distributes gifts according to the size of the children's sock.

First he chose the smallest sock and put in the largest gift. 
Then he chose the largest sock and put in the smallest gift. 
And so on.. Until no gifts, or every child got a gift.

*/

function distribute(gifts, socks) {
  let result = Array(socks.length).fill(0);
  let visited = Array(socks.length).fill(false);
  let k = socks.length;
  gifts.sort((a, b) => b - a);
  while (gifts.length > 0 && k > 0) {
    let minSockIndex, maxSockIndex;
    let minSockValue = Infinity, maxSockValue = -Infinity;
    for (let i = 0; i < socks.length; i++) {
      if (!visited[i]) {
        if (socks[i] > maxSockValue) {
          maxSockValue = socks[i];
          maxSockIndex = i;
        }
        if (socks[i] <= minSockValue) {
          minSockValue = socks[i];
          minSockIndex = i;
        }
      }
    }
    visited[minSockIndex] = true; k--;
    visited[maxSockIndex] = true; k--;
    result[minSockIndex] += gifts.shift();
    if (minSockIndex !== maxSockIndex && gifts.length > 0) {
      result[maxSockIndex] += gifts.pop();
    }
  }
  return result;
}


