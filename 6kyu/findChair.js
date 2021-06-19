/* 
6kyu - Find a chair
https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript
*/

function meeting(x, need) {
  if(need === 0) {
    return 'Game On';
  }
  let res = [],
    totalCount = 0;
  for (let i = 0; i < x.length && totalCount < need; i++) {
    let chairs = x[i][0].length,
      occupants = x[i][1],
      chairsToTake = 0;
    if (occupants > chairs) {
      chairsToTake = Math.min(occupants - chairs, need-totalCount);
      totalCount += chairsToTake;
      // if (totalCount > need) {
      //   chairsToTake -= (need - totalCount);
      // }
    }
    //console.log(`i=${i} ${x[i]} take=${chairsToTake} count=${totalCount} need=${need}`)
    if (totalCount <= need) {
      res.push(chairsToTake);
    }
  }
  return totalCount < need ? "Not enough!" : res;
}

console.log(
  meeting(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    4
  ),
  [0, 1, 3]
);
console.log(
  meeting(
    [
      ["XXX", 1],
      ["XXXXXX", 6],
      ["X", 2],
      ["XXXXXX", 8],
      ["X", 3],
      ["XXX", 1],
    ],
    5
  ),
  [0, 0, 1, 2, 2]
);
console.log(
  meeting(
    [
      ["XX", 2],
      ["XXXX", 6],
      ["XXXXX", 4],
    ],
    0
  ),
  "Game On"
);

console.log(
  meeting(
    [ [ 'XXXXXXX', 3 ],
    [ 'XXXXX', 3 ],
    [ 'XXXXXX', 3 ],
    [ 'XXX', 6 ],
    [ 'XXXXXX', 1 ],
    [ 'XXX', 6 ],
    [ 'XXXX', 2 ],
    [ 'XXXXXXX', 3 ],
    [ 'XX', 1 ] ],
    4
  ),
  [0, 0, 0, 3, 0, 1]
);

// best
/* 
function meeting(rooms, need) {
  if (need <= 0) {
    return 'Game On';
  }
  const taken = [];
  for (const [{ length: chairs }, people] of rooms) {
    const take = Math.min(Math.max(people - chairs, 0), need);
    taken.push(take)
    need -= take;
    if (need <= 0) {
      return taken;
    }
  }
  return 'Not enough!';
}
*/