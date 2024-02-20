/* 
6kyu - 80's Kids #4: Legends of the Hidden Temple
https://www.codewars.com/kata/56648a2e2c464b8c030000bf/train/javascript

draw 'X'
*/

function markSpot(n) {
  if (!Number.isInteger(n) || n % 2 === 0) return '?';
  if (n === 1) return "X\n";
  let arr = Array(n).fill().map(_ => Array(n * 2 - 1).fill(' '));
  for (let i = 0; i < n; i++) {
    let j = i * 2;
    arr[i][j] = 'X';
    arr[i][arr[0].length - j - 1] = 'X';
  }
  //return arr.map(row => row.join('').trimEnd()).join("\n") + "\n";
  return arr.map(row => row.join('').replace(/\s+$/, '')).join("\n") + "\n";
}

// best

/* 
String.prototype.padLeft=function(len){
        var temp=this;
        while (temp.length<len) temp=" "+temp;
        return temp;
}
function markSpot(n) {
  if (typeof n!="number"||n%2==0||n<0) return "?";
  var rs="X".padLeft(n)+"\n";
  for (var i=n-2,j=1;i>0;i-=2,j++) rs="X".padLeft(i)+"X".padLeft(j*4)+"\n"+rs+"X".padLeft(i)+"X".padLeft(j*4)+"\n";
  return rs;
}
*/

/* 
function markSpot(n) {
  if(!(+n)||n<1||!(n&1)) return '?'
  const arr = Array(n).fill().map(_=>Array(2*n-1).fill(" ")); let l = 0, r = 2*n-2;
  for(let i = 0; i < n; i++)
         arr[i][l]='X', arr[i][r]='X', l+=2, r-=2;
  return arr.map(v=>v.join``.replace(/ +$/,'')).join`\n`+'\n';
}
*/