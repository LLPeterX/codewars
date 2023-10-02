/* 
6kyu - An OSHA Approved Ladder?
https://www.codewars.com/kata/65116501a5de2bc51f409c1a/train/javascript

* There will be exactly one character space with no rung 
  at the top and bottom of every ladder. +
* The ladder must be at least 5 characters wide.+
* The ladder mustn't have more than a 2 character gap between rungs.
* Rungs must be evenly spaced apart.
* Each part of the ladder must have equal width +
* Rungs should not be broken (i.e. no gaps, a broken rung always has 
  at least one piece still attached to the poles).
* There should be atleast one rung. +
*/

function isLadderSafe(ladder) {
  let w = ladder[0].length;
  if (w < 5) return false;
  let reGap = new RegExp(/^#\s{3,}#$/);
  let reRung = new RegExp(/^#{5,}$/);
  let rungs = [];
  if (!reGap.test(ladder[0]) || !reGap.test(ladder[ladder.length - 1])) return false;
  for (let i = 0; i < ladder.length; i++) {
    if (ladder[i].length !== w) return false;
    if (reRung.test(ladder[i])) {
      rungs.push(i);
    } else if (!reGap.test(ladder[i])) {
      return false;
    }
  }
  if (rungs.length === 0) return false;
  if (rungs.length > 1) {
    let diff = rungs[1] - rungs[0];
    if (diff > 3) return false;
    if (rungs.length > 2) {
      for (let i = 2; i < rungs.length; i++) {
        if (rungs[i] - rungs[i - 1] !== diff) return false;
      }
    }
  }
  return true;
}


// best

/*
function isLadderSafe(ladder) {

  let l = ladder[0].length
  if(new Set(ladder.map(x => x.length)).size != 1 || l < 5) return false

  let arr = ladder.map((x, i) => [x, i]).filter(([x, _]) => x == "#".repeat(l)).map(([_, i]) => i)
  if(!arr.length || arr[0] != 1 || arr[arr.length - 1] != ladder.length - 2) return false

  let st = new Set()
  for(let i = 1; i < arr.length; i++){
    let diff = arr[i] - arr[i - 1]
    if(diff > 3) return false
    st.add(diff)
  }
  return st.size == 1
}

*/

// function isLadderSafe(ladder) {
//   let ls = ladder.join(",") + ",";
//   let m = ls.match(/^(# {3,}#,)(?:(?:(#{5,},)(\1{1,2}))(?:\2\3)*\2\1|(#{5,},)+\1)$/);
//   return m !== null;
// }

