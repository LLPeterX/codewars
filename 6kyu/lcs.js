/* 
6kyu - Longest Common Subsequence
https://www.codewars.com/kata/52756e5ad454534f220001ef

Write a function called LCS that accepts two sequences 
and returns the longest subsequence common to the passed in sequences.

A subsequence is different from a substring. 
The terms of a subsequence need not be consecutive terms of the original sequence.

LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
LCS( "abc" , "ac" ) => returns "ac"

*/

/*
// хуйня. неверно.
function LCS(x, y) {
  let i = 0, j = 0;
  let result = "", last = "";
  while (i < x.length && j < y.length) {
    if (x[i] === y[j]) {
      last = x[i];
      result += x[i];
      i++;
      j++;
    } else {
      if (x[i] < y[j]) {
        if (x[i] > last && last !== '') {
          last = x[i];
          result += x[i];
        }
        i++;
      } else {
        if (y[j] > last && last !== '') {
          last = y[j];
          result += last;
        }
        j++;
      }
    }
  }
  return result;
}
*/

/* 
 тоже неверный подход: для "anothertest", "notatest" => "notatest"
 ищется "a" в "notatest", в результате получается "at". Не то, что надо.
*/
/*
function LCS(x, y) {
  let result = "", last = "", k;
  while (x.length && y.length) {
    let xx = x[0], yy = y[0];
    if (xx === yy) {
      last = xx;
      result += xx;
      x = x.slice(1);
      y = y.slice(1);
    } else {
      if (xx > last || yy > last) {
        if (xx > yy) {
          k = x.indexOf(yy);
          if (k > 0) {
            x = x.slice(k);
          } else {
            y = y.slice(1);
          }
        } else {
          k = y.indexOf(xx);
          if (k > 0) {
            y = y.slice(k);
          } else {
            x = x.slice(1);
          }
        }
      } else {
        x = x.slice(1);
        y = y.slice(1);
      }
    }
  }
  return result;
}
*/

// from: https://gist.github.com/jaewook77/c4e09607e073561bfeb8
function LCS(x, y) {
  let x1 = x.slice(0, -1);
  let y1 = y.slice(0, -1);
  if (x.length == 0 || y.length == 0) {
    return "";
  } else if (x.slice(-1) == y.slice(-1)) {
    return LCS(x1, y1) + x.slice(-1);
  } else {
    let x2 = LCS(x, y1), y2 = LCS(x1, y);
    return (x2.length > y2.length) ? x2 : y2;
  }
}

console.log(LCS("a", "b"), '=>', "");
console.log(LCS("abcdef", "abc"), '=>', "abc");
console.log(LCS("132535365", "123456789"), '=>', "12356");
console.log(LCS("abc", "ac"), '=>', "ac");
console.log(LCS("anothertest", "notatest"), '=>', "nottest");

// best

/* 
function LCS( xstr, ystr ) {
  if( xstr == '' || ystr == '' ) return '';
    
  var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
      yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
      
  if( xp == yp )
    return xp + LCS( xrest, yrest );
  
  var lcs1 = LCS( xstr, yrest ),
      lcs2 = LCS( xrest, ystr );
      
  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}
*/

/* 
function LCS(x, y) {
  var longest = function (x, y) { return x.length > y.length ? x : y };
  if (!x.length || !y.length) {
    return '';
  } else if (x[0] == y[0]) {
    return x[0] + LCS(x.slice(1), y.slice(1));
  } else {
    return longest(LCS(x.slice(1), y), LCS(x, y.slice(1)));
  }
}
*/

/* 
function LCS(x, y) {
  yChar=y.split("");
  var start=0;
  var arr=[];
  for(var i=0;i<yChar.length;i++){
    pos=x.indexOf(yChar[i],start);
    if(pos>=start){
      arr.push(yChar[i]);
      start=pos+1;
    }
  }
  return arr.join("");
}
*/

/* 
  function LCS(x, y) {
    x = x.split("");

    return y.split("").filter((item) => {
      if (x.indexOf(item) !== -1) {
        return x.splice(0, x.indexOf(item) + 1);
      }
    }).join("");
  }
*/
