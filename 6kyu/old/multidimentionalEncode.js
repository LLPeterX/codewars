/* 
6kyu - Multidimensional Coordinate Encoding
https://www.codewars.com/kata/63be67b37060ec0a8b2fdcf7/train/javascript
*/

function encode(dimensions, point) {
  let res = 0n;
  for (let i = 0; i < point.length; i++) {
    let p = point[i];
    for (let j = i + 1; j < dimensions.length; j++) p *= BigInt(dimensions[j]);
    res += p;
  }
  return res;
}

function decode(dimensions, encodedPoint) {
  let res = [], e = BigInt(encodedPoint);
  for (let j = dimensions.length - 1; j >= 0; j--) {
    let n = e % dimensions[j];
    res.push(n);
    e = (e - n) / dimensions[j];
  }
  return res.reverse();
}

// best
/* 
function encode(dimensions, point) {
  let f=1n
  return dimensions.reduceRight( (s,d,i)=>(s+=f*point[i], f*=d, s), 0n);
}

function decode(dimensions, pnt) {
  let z, p=dimensions.reduce((p,d)=>p*d, 1n)
  return dimensions.map(d=>(p/=d, z=pnt/p, pnt%=p, z))
}
*/