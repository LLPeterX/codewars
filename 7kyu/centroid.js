/* 
7kyu - Centroid I
https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4/train/javascript
*/

function centroid(c) {
  console.log(`len=${c.length}`);
  let res = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < c.length; j++) {
      res[i] += c[j][i];
    }
  }
  return res.map(v => +(v / c.length).toFixed(2))
}

console.log(centroid([[1, 0, 5], [0, 1, 5], [2, 2, 5]]), [1, 1, 5])
console.log(centroid([[7, 0, 5], [3, 1, 5], [2, 1, 5]]), [4, 0.67, 5])


let a = [
  [0.9450715514276213, -1.3142933572528674, 1.5029782339215672],
  [-1.1115562990434373, -1.6445484725322794, 2.850223156348174],
  [-2.148215078648304, 1.162880285209189, 1.977519534776519],
  [-1.8817949076187785, 1.914515324924718, -1.7842150603155207],
  [-1.3015409074801298, -1.8089712550160568, 0.4437069738996162],
  [-1.6414819510467344, 2.4242350496058336, 2.8193712433325206],
  [-2.8593921832426994, 2.7246087605139353, 1.3188502419025916],
  [-2.8521979424791213, 0.9398936839602698, 1.1526060365942392]];

console.log(centroid(a), [-1.61, 0.55, 1.29]);

// best

/* 
function centroid(arr) {
  return arr.reduce((a,c)=> {
    a[0] += c[0]/arr.length;
    a[1] += c[1]/arr.length;
    a[2] += c[2]/arr.length;
    return a
  },[0,0,0])
  .map( e => Math.round( e * 100 ) / 100);
}
*/

/* 
const centroid = (c) => [...Array(3)].map((_, idx) => +(c.reduce((acc, cur) => acc + cur[idx], 0) / c.length).toFixed(2));
*/