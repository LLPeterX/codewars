function pascalTriangle(n) {
  let pas=[[1],[1,1]]; // level 0,1
  if(n<2) {
    return pas.slice(0,n);
  }
  for(let i=2; i<=n; i++) {
    let prev = pas[i-1];
    let p=[1];
    for(let j=0; j<prev.length-1; j++) {
      p.push(prev[j] + prev[j+1]);
    }
    p.push(1);
    pas.push(p);
  }

  return pas;
}

console.log(pascalTriangle(7));