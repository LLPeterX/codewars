/* 
6kyu - Transpose of a Matrix
https://www.codewars.com/kata/559656796d8fb52e17000003/train/javascript

Transpose means is to interchange rows and columns of 
a two-dimensional array matrix.

Write a prototype transpose() to Array so that any matrix of order ixj 2-D array
returns transposed Matrix of jxi .

[[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]
*/
/*
Array.prototype.transpose = function () {
  console.log(' input=', this);
  if (!this || !this.length || !Array.isArray(this[0])) return this;
  //return this[0].map((_, i) => this.map(r => r[i]));
  let res = [];
  if (!this[0].length) res.push([]); else {
    for (let i = 0; i < this[0].length; i++) {
      res[i] = [];
      for (j = 0; j < this.length; j++) {
        res[i].push(this[j][i]);
      }
    }
  }
  return res;
};
*/

//new version
Array.prototype.transpose = function () {
  console.log(' input=', this);
  if (!this || !this.length || !Array.isArray(this[0])) return this;
  return this[0].length ? this[0].map((_, i) => this.map(r => r[i])) : [[]];
};


//best

/* 
Array.prototype.transpose = function() {
  if (!this.length) return [];
  if (!this[0].length) return [[]];
  const transposedMatrix = [];
  for (let i = 0; i < this[0].length; i++) {
    const curRow = [];
    for (let j = 0; j < this.length; j++) {
      curRow.push(this[j][i]);
    }
    transposedMatrix.push(curRow);
  } 
  return transposedMatrix;
}
*/

/* 
Array.prototype.transpose = function() {
  return this.length==0 ? [] : this.every(x=>x.length==0) ? [[]] :
  [...Array(this[0].length)].map((_,i)=>[...Array(this.length)].map((_,j)=>this[j][i]));
};
*/

/* 
Array.prototype.transpose = function(){ return !this.length ? this : !this[0].length ? [[]] : this[0].map((_,i)=>this.map(a=>a[i])) };
*/