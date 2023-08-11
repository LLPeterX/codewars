/* 
https://www.codewars.com/kata/56a4872cbb65f3a610000026
*/

function maxRot(n) {
  let str = String(n), strlen = str.length, arr=[str];
  for(let i=0; i<strlen-1; i++) {
    let rotated = (i?str.slice(0,i):"") + str.slice(i+1,strlen)+str.slice(i,i+1);
    arr.push(rotated);
    str=rotated;
  }
  return +Math.max(...arr);
}

console.log(maxRot(56789)); // 68957
console.log(maxRot(195881031)); // 988103115

//best

/* 
function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}
*/
/* 
const maxRot = n =>
  [...`${n}`].reduce((pre, _, idx) => Math.max(pre, n = `${n}`.slice(0, idx) + `${n}`.slice(idx + 1) + `${n}`.slice(idx, idx + 1)), n);
*/

/* 
function maxRot(n) {
  if ((n+='').length === 1) return +n;
  let rotate = str => str.slice(1).concat(str.slice(0, 1)), tmp = [n];
  for (let i = 0, l = n.length - 1; i < l; i += 1) tmp.push(n = n.slice(0, i) + rotate(n.slice(i)));
  return Math.max(...tmp);
}
*/