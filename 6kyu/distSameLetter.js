/* 
6kyu - imple Fun #221: Furthest Distance Of Same Letter
https://www.codewars.com/kata/5902bc48378a926538000044/train/javascript

Given a string s of lowercase letters ('a' - 'z'), 
get the maximum distance between two same letters, 
and return this distance along with the letter that formed it.

If there is more than one letter with the same maximum distance, 
return the one that appears in s first.
*/

function distSameLetter(s) {
  const letters = Array.from({ length: 26 }, (_, i) => ({
    char: String.fromCharCode(97 + i),
    posMin: 1e9,
    posMax: -1,
  }));
  for (let i = 0; i < s.length; i++) {
    let k = s[i].charCodeAt() - 97;
    letters[k].posMin = Math.min(i, letters[k].posMin);
    letters[k].posMax = Math.max(i, letters[k].posMax);
  }
  console.log(letters.map((e) => ({ ...e, d: e.posMax - e.posMin })));
  let result = letters
    .filter((c) => c.posMax >= 0)
    .sort(
      (a, b) =>
        b.posMax - b.posMin - (a.posMax - a.posMin) || a.posMin - b.posMin,
    )[0];
  return `${result.char}${result.posMax - result.posMin + 1}`;
}

// best

/* 
// iMatveev
function distSameLetter(s) {
  //define the variable and loop to find distance
  var charDist = [];
  for (var i = 0; i < s.length; i++) {
    charDist.push([s[i], s.lastIndexOf(s[i]) - i + 1]);
  }
  //find the most significant distance between chars and return it
  var sortedArr = charDist.reduce(function(prevItem, currItem){
    return (currItem[1] > prevItem[1]) ? currItem : prevItem;
  });
  return sortedArr.join('');
}
*/
