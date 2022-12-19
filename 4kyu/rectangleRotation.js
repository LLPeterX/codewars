/* 
4kyu - Simple Fun #27: Rectangle Rotation
https://www.codewars.com/kata/5886e082a836a691340000c3/train/javascript

На плоскости есть прямоугольник с четными целыми длинами сторон a и b.
Точка пересечения диагоналей (0,0), сам прямоуголник наклонен на 45 градусов.

Сколько точек с целочисленными координатами находится внутри данного прямоугольника 
(в том числе по его сторонам)?
*/

// find intersection point
function intersection(y, x3, y3, x4, y4) {
  let n = (y3 - y) / (y3 - y4);
  return {
    x: x3 + (x4 - x3) * n,
    y: y3 + (y4 - y3) * n
  }
}

/*
function rectangleRotation(a, b) {
  let d = Math.sqrt((a / 2) ** 2 + (b / 2) ** 2); // semidiagonal length
  let angle = Math.asin(a / (2 * d));
  const rotateAngle = -0.7853981633974483;

  let X1 = Math.cos(rotateAngle + Math.PI + angle) * d;
  let Y1 = Math.sin(rotateAngle + Math.PI + angle) * d;

  let X2 = Y1;
  let Y2 = X1;
  let X3 = -X1;
  let Y3 = -Y1;
  let X4 = -Y1;
  let Y4 = -X1;
  let top = Math.floor(Y4), bottom = Math.ceil(Y2), left = Math.ceil(X1), right = Math.floor(X3);
  let count = 0;
  for (let y = top; y >= bottom; y--) {
    let p1, p2;
    if (y > Y1) {
      p1 = intersection(y, X1, Y1, X4, Y4);
    } else {
      p1 = intersection(y, X1, Y1, X2, Y2);
    }
    if (y > Y3) {
      p2 = intersection(y, X4, Y4, X3, Y3);
    } else {
      p2 = intersection(y, X2, Y2, X3, Y3);
    }
    count += Math.ceil(p2.x) - Math.ceil(p1.x);
  }
  return count;
}
*/
function rectangleRotation(a, b) {
  let d = Math.sqrt((a / 2) ** 2 + (b / 2) ** 2); // semidiagonal length
  const angle = -45 * Math.PI / 180 + Math.PI + Math.asin(a / (2 * d));

  let x1 = Math.cos(angle) * d;
  let y1 = Math.sin(angle) * d;

  let count = 0;

  for (let y = Math.floor(-x1); y >= Math.ceil(x1); y--) {
    let p1, p2;
    if (y > y1) {
      p1 = intersection(y, x1, y1, -y1, -x1);
    } else {
      p1 = intersection(y, x1, y1, y1, x1);
    }
    if (y > -y1) {
      p2 = intersection(y, -y1, -x1, -x1, -y1);
    } else {
      p2 = intersection(y, y1, x1, -x1, -y1);
    }
    count += Math.ceil(p2.x) - Math.ceil(p1.x);
  }
  return count;
}

console.log(rectangleRotation(6, 4), 23)
console.log(rectangleRotation(30, 2), 65)
console.log(rectangleRotation(8, 6), 49)
console.log(rectangleRotation(16, 20), 333)

// best
function rectangleRotation2(a, b) {
  /* If we mark the inner points based on (E)ven and (O)dd 
     Manhatten distance from the origin. We end up with 
     an odd and an even rectangle. For example with (6,4):
     
    4 3 2 1 0 1 2 3 4
    
    3         E
             / \
    2       E O E
           / / \ \
    1     E O E O E  
         / /   / /
    0   E O E O E
       / /   / /
    1 E O E O E
       \ \ / /
    2   E O E
         \ / 
    3     E
    
    4
  
    To get the whole number of points, we just need to:
    1. Find the dimension of the even rectangle (5 by 3)
    2. Find the dimensions of the odd rectangle (4 by 2)
    3. Multiply and add together (5*3) + (4*2) = 23
    
    To find the dimensions of the even rectangle we can count 
    the number of hops of length sqrt(2) that it takes to start
    at the origin and move North-East until we reach the edge 
    of the rectangle (half of a). Multiply by two, but subtract 
    one so we don't double count the origin. Repeat North-West.
    
    To find the dimensions of the odd rectangle we can start
    by walking one grid point East if we can. (we can do this
    since a and b are both >= 2). Doing so, takes us just a 
    little bit closer to the top right side of the 
    rectangle (by 1/sqrt(2)). From this point see how many
    North-East hops of length sqrt(2) it takes to reach the edge 
    of the rectangle (half of a). Mutliply by two. 
    Repeat South-East.
  */

  const ceil = Math.ceil;
  const sqrt2 = Math.sqrt(2);
  const invSqrt2 = 1 / sqrt2;
  const halfA = a / 2;
  const halfB = b / 2;

  const evenDimension1 = (ceil(halfA / sqrt2) * 2) - 1;
  const evenDimension2 = (ceil(halfB / sqrt2) * 2) - 1;

  const evenPoints = evenDimension1 * evenDimension2;

  const oddDimension1 = ceil((halfA - invSqrt2) / sqrt2) * 2;
  const oddDimension2 = ceil((halfB - invSqrt2) / sqrt2) * 2;

  const oddPoints = oddDimension1 * oddDimension2;

  return oddPoints + evenPoints;
}


// other

/* 
function rectangleRotation(a, b) {

  let h = a / Math.sqrt(2) | 0
  ,   v = b / Math.sqrt(2) | 0;

  return h * v + (h + 1) * (v + 1) - (h % 2 ^ v % 2);
  
}
*/