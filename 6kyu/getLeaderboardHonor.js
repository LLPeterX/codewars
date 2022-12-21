/* 
6kyu - Codewars Leaderboard
https://www.codewars.com/kata/5a57d101cadebf03d40000b9/train/javascript

Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order
*/


const getLeaderboardHonor = async () => {

  const response = await fetch('https://www.codewars.com/users/leaderboard');
  const htmlText = await response.text();
  const honors = htmlText.match(/(?<=<td class="honor">).+?(?=<\/td>)/ig).map(h => +h.replace(',', ''));
  return honors;
}

const test = async () => {
  const a = await getLeaderboardHonor();
  console.log(a);
}

test();