/* 
6kyu Ackermann Function
https://www.codewars.com/kata/53ad69892a27079b34000bd9/train/javascript

Создать функцию Аскерманн
*/

const Ackermann = function(m,n) {
  if(m<0 || n<0) {
    return null;
  }
  if(m===0) {
    return n+1;
  } else if(m>0 && n===0) {
    return Ackermann(m-1,1);
  } else {
    return Ackermann(m-1, Ackermann(m, n-1));
  }
};

console.log(Ackermann(1,1));
console.log(Ackermann(4,0));

// best
/* 
Ackermann = function(m,n) {
if (m === 0) return n+1;
if (n === 0) return Ackermann(m-1, 1);
else return Ackermann(m-1, Ackermann(m, n-1));
}
*/

/* 
function Ackermann(m,n) {
  var memo = Ackermann.memo;
  function A(m,n) {
    var k = m+','+n;
    if(!memo[k]) {
      memo[k] = m === 0  ?  n + 1              :
                n === 0  ?  A(m-1, 1)          :
                            A(m-1, A(m, n-1))  ;
    }
    return memo[k];
  }
  return [m,n].every(isPositiveInt) ? A(m,n) : null;
}
Ackermann.memo = {};

function isPositiveInt(v) {
  return ~~v===v && (v === 0 || v > 0);
}
*/

/* 
function Ackermann(m, n) {
  if (~~m !== m || ~~n !== n || m < 0 || n < 0)
    return null;
  return m ? Ackermann(m - 1, n ? Ackermann(m, n - 1) : 1) : n + 1;
}
*/

// shortest:
/* 
Ackermann=(m,n)=>m?m>0&&!n?Ackermann(m-1,1):Ackermann(m-1,Ackermann(m,n-1)):n+1
*/