/* 
7kyu https://www.codewars.com/kata/5d95b7644a336600271f52ba

Робинзон нчинает с хижины [0,0]
Он проходит дистанцию d под углом ang (относительно оси X) и доходит до точки A.
От этой точки он проходит расстояние d*dismult под углом ang*angmult
И т.д. - n раз.
В какой точке он окажется?

*/

function crusoe(n, d, ang, distmult, angmult) {
  let x = 0, y = 0;
  for (let i = 0; i < n; i++) {
    x += d * Math.cos(ang * Math.PI / 180);
    y += d * Math.sin(ang * Math.PI / 180);
    d *= distmult;
    ang *= angmult;
  }
  return [x, y];
}

console.log(crusoe(5, 0.2, 30, 1.02, 1.1));
console.log(crusoe(4, 1, 15, 1, 2));

//console.log(1*Math.sin(15*Math.PI/180));
//console.log(0.2*Math.cos(30*Math.PI/180));

//best
/* 
function crusoe(n, d, ang, distmult, angmult) {
    var x = 0.0, y = 0.0, a = ang * Math.PI / 180.0;
    for (let i = 1; i <= n; i++) {
        x += d * Math.cos(a);
        y += d * Math.sin(a);
        d *= distmult;
        a *= angmult;
    }
    return [x, y];
}
*/