/* 
6kyu - Levenshtein Distance
https://www.codewars.com/kata/545cdb4f61778e52810003a2/train/javascript

Your task is to implement a function which calculates the Levenshtein distance for two arbitrary strings.
*/

function levenshtein(a, b) {
  let len1 = a.length, len2 = b.length;
  let cutHalf = Math.max(len1, len2)
  let flip = cutHalf;
  let minD = Math.max(1, (len1 - len2)), minI = Math.max(1, (len2 - len1));
  let buf = new Array((cutHalf * 2) - 1);

  for (let i = 0; i <= len2; ++i)  buf[i] = i * minD;
  for (let i = 0; i < len1; ++i, flip = cutHalf - flip) {
    let ch = a[i];
    buf[flip] = (i + 1) * minI;
    let k = flip;
    let k2 = cutHalf - flip;
    for (let j = 0; j < len2; ++j, ++k, ++k2) {
      buf[k + 1] = Math.min(buf[k2 + 1] + 1, buf[k] + 1, buf[k2] + (ch === b[j] ? 0 : 1));
    }
  }
  return buf[len2 + cutHalf - flip];
}

console.log(levenshtein("kitten", "sitting"), 3)

// best
/* 
function levenshtein(a, b) {
  return distance(a, b, a.length, b.length)
  
  function distance(a, b, x, y) {
    if (!x) return y
    if (!y) return x
    
    return Math.min(
      distance(a, b, x - 1, y) + 1,
      distance(a, b, x, y - 1) + 1,
      distance(a, b, x - 1, y - 1) + (a[x - 1] != b[y - 1] ? 1 : 0)
    )
  }
}
*/

/* 
function levenshtein(str1,str2)
{
  const edits = []
  for(let i = 0; i < str2.length + 1; i++){
    const row = []
    for(let j = 0; j < str1.length + 1; j++){
      row.push(j)
    }
    row[0] = i
    edits.push(row)
  }
  for(let i = 1; i < str2.length + 1; i++){
    for(let j = 1; j < str1.length + 1; j++){
      if(str2[i - 1] === str1[j - 1]){
        edits[i][j] = edits[i - 1][j - 1];
      }else{
        edits[i][j] = 1 + Math.min(edits[i - 1][j], edits[i-1][j-1], edits[i][j-1])
      }
    }
  }
  return edits[str2.length][str1.length]
}
*/

/* 
function levenshtein(a, b) {
  let weights = Array.from({ length: b.length + 1 }, (_, i) => i); 
  for (let i = 0; i < a.length; i++) {
    const current = [i + 1];
    for (let j = 0; j < b.length; j++) {
      const cost = weights[j] + (a[i] != b[j]);
      current.push(Math.min(current[j] + 1, weights[j + 1] + 1, cost));
    }
    weights = current;
  }
  return weights.pop();
}
*/

/* 
function levenshtein(s,t)
{
  if(s.length == 0) return t.length 
  if(t.length == 0) return s.length

let cost = s.slice(-1)==t.slice(-1) ? 0:1

  return Math.min(
    levenshtein(s.slice(0,-1), t)+1,
    levenshtein(s, t.slice(0,-1))+1,
    levenshtein(s.slice(0,-1), t.slice(0,-1))+cost
    )
}
*/