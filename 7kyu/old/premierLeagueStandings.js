/* 
7kyu - New season, new league
https://www.codewars.com/kata/58de08d376f875dbb40000f1/train/javascript
*/

function premierLeagueStandings(teamStandings) {
  let arr = Object.entries(teamStandings);
  let winner = arr.find(t => t[0] === '1');
  return [winner,
    ...arr.filter(t => +t[0] > 1)
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map((t, i) => [i + 2, t[1]])
  ].reduce((o, v) => { o[v[0]] = v[1]; return o; }, {});
}

console.log(premierLeagueStandings({ 1: 'Arsenal' }), { 1: 'Arsenal' }, 'Should return Arsenal as position 1')
console.log(premierLeagueStandings({ 2: 'Arsenal', 3: 'Accrington Stanley', 1: 'Leeds United' }), { 3: 'Arsenal', 2: 'Accrington Stanley', 1: 'Leeds United' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
console.log(premierLeagueStandings({ 1: 'Leeds United', 2: 'Liverpool', 3: 'Manchester City', 4: 'Coventry', 5: 'Arsenal' }), { 1: 'Leeds United', 2: 'Arsenal', 3: 'Coventry', 4: 'Liverpool', 5: 'Manchester City' }, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')

// best

/* 
function premierLeagueStandings(obj) {
  let res = {}, arr = [];
  for(let i in obj) {
    if(i === '1') res[i] = obj[i];
    else arr.push(obj[i]);
  }
  arr.sort();
  for(let i = 0; i < arr.length; i++) res[i+2] = arr[i];
  return res;
}
*/

/* 
function premierLeagueStandings(teamStandings) {
  let values = Object.values(teamStandings).filter(a => a != teamStandings[1]).sort()
  return {1: teamStandings[1], ...Object.fromEntries(values.map(x => [values.indexOf(x) + 2, x]))}
}
*/