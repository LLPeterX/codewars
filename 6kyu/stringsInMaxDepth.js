/* 
6kyu - Maximum Depth of Nested Brackets
https://www.codewars.com/kata/60e4dfc1dc28e70049e2cb9d

Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.
Example:
         0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16
String:  A   A   (   X   X   (   (   Y   Y   )   )   (   U   )   )
Level:           1           2   3           3   2   2       2   1
Output: ["YY"]

String: (    (   A   A   X   (   A   B   )   (   U   P   )   F   (   Z   )) (HH))")
Level:  1    2               3           3   3           3       3 32 3  32 1        
Output: [ 'AB', 'UP', 'Z' ]
Therefore, answer: { "YY" } since the substring "YY" is locked at the deepest level.
*/


function stringsInMaxDepth(s) {
  let res = [], level = 0, maxLevel = 0, i1 = 0, i2 = 0;
  // first pass
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      level++;
      if (level > maxLevel) {
        maxLevel = level;
      }
    } else if (s[i] === ')') {
      level--;

    }
  }
  //second pass
  level = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      level++;
      if (level === maxLevel) {
        i1 = i;
      }
    } else if (s[i] === ')') {
      if (level === maxLevel) {
        i2 = i;
        res.push(s.slice(i1 + 1, i2));
      }
      level--;

    }
  }
  return res.length ? res : [s];
}


console.log(stringsInMaxDepth("AA(XX((YY))(U))"), ["YY"]);
console.log(stringsInMaxDepth("((AAX(AB)(UP)F(Z))(HH))"), ['AB', 'UP', 'Z']);
console.log(stringsInMaxDepth("FB(TAIHJK(NZZCGDZXKF(SYMBLACQ)SBJMRFM)PRTRX(JCLYCOXIMOKGGIE)MWIOIJDCLXDSQFHK)WLVYSMNNHIGKR(MOIZLOT(RWMAVXSJQROHJ(GZURPPOQJVMYCE(VCPXSHXQ)LETIEWE(CBC)AAHEEO)NZHIGXBSJATXV)BSBYCMKFFAFZIK(KECNRQ)PIIQZGIDMLNQRQS)VGXXBYD"), ['VCPXSHXQ', 'CBC']);
console.log(stringsInMaxDepth("AAA"), ["AAA"]);
console.log(stringsInMaxDepth(""), [""]);

//best
/* 
function stringsInMaxDepth(s) {
  let start=0, lvl=0, deepest=0, out=[s]
  
  for(let i=0;i<s.length;i++){
    let c=s[i]
    if(c==')'){
      if(lvl==deepest) out.push(s.slice(start,i))
      lvl--
    }else if(c=='('){
      lvl++
      start = i+1
    }
    if(lvl>deepest){
      deepest = lvl
      out = []
    }
  }
  return out
}

*/

/* 
function stringsInMaxDepth(s) {
  let deepest = 0, index = [], depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth++;
      if (depth > deepest) {
        deepest = depth;
        index = [i];
      } else if (depth === deepest) {
        index.push(i);
      }
    } else if (s[i] === ")") depth--;
  }
  return index.length === 0 ? [s] : index.map(e => s.slice(e+1, s.indexOf(")", e)));
}
*/