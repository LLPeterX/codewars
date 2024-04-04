/* 
6kyu - Permutations Of An Array And Associated Values
https://www.codewars.com/kata/562c5ea7b5fe27d303000054/train/javascript

We need a special function ssc_forperm() that receives an array 
of uncertain number of elements (the elements may occur more than once) 
and may output a list of dictionaries with the following data:

[{"total perm":__}, {"total ssc": ___}, {"max ssc": __}, {"min ssc": __}]
For the example we have above will be:

ssc_forperm([6, 12, -1]) = [{"total perm":6}, {"total ssc:204}, {"max ssc":47}, {"min ssc":21}]

*/

const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

function sscForperm(arr) {
  let count = 0, min = Infinity, max = -Infinity, total = 0;
  let visited = new Set();
  for (let p of permutator(arr)) {
    let key = p.toString();
    if (!visited.has(key)) {
      let sum = p.reduce((s, v, i) => s + v * (i + 1), 0);
      min = Math.min(min, sum);
      max = Math.max(max, sum);
      total += sum;
      count++;
      visited.add(key);
    }
  }
  return [{ "total perm": count }, { "total ssc": total }, { "max ssc": max }, { "min ssc": min }];
}


console.log(sscForperm([1, -1]), [{ "total perm": 2 },
{ "total ssc": 0 }, { "max ssc": 1 }, { "min ssc": -1 }]);
console.log(sscForperm([6, 12, -1]), [{ "total perm": 6 },
{ "total ssc": 204 }, { "max ssc": 47 }, { "min ssc": 21 }]);
console.log(sscForperm([8, 23, -4, 10]), [{ 'total perm': 24 },
{ 'total ssc': 2220 }, { 'max ssc': 134 }, { 'min ssc': 51 }]);
// FAIL
console.log(sscForperm([4, 25, 5, 11, 4]), [{ 'total perm': 60 },
{ 'total ssc': 8820 }, { 'max ssc': 196 }, { 'min ssc': 98 }]);
console.log(sscForperm([1, 1, 1, 11, 2]), [{ 'total perm': 20 },
{ 'total ssc': 960 }, { 'max ssc': 69 }, { 'min ssc': 27 }]);

// best

/* 
function sscForperm(arr){
  let f = _ => _ < 2 ? 1 : _ * f(_ - 1)
  let max = arr.sort((a, b) => a - b).reduce((a, b, i) => a + b * (i + 1), 0)
  let min = arr.sort((a, b) => b - a).reduce((a, b, i) => a + b * (i + 1), 0)
  let uniq = [...new Set(arr)]
  let len = uniq.reduce((len, _) => len / f(arr.filter(a => a == _).length), f(arr.length))
  let sum = arr.reduce((a, b) => a + b) * len * (arr.length + 1) / 2
  return [
    {"total perm": len},
    {"total ssc": sum},
    {"max ssc": max},
    {"min ssc": min}
  ];
}

*/

/* 
const sscForperm = arr => {
  const perms = permutations(arr);
  const sscArr = perms
    .map(sub => sub.reduce((sum, el, idx) => sum + el * ++idx, 0))
    .sort((a, b) => a - b);
  
  return [
    {"total perm": perms.length}, 
    {"total ssc": sscArr.reduce((sum, el) => sum + el)}, 
    {"max ssc": sscArr[perms.length - 1]}, 
    {"min ssc": sscArr[0]},
  ];
}

const permutations = arr => {
  if (arr.length < 2) return arr;
  return arr.reduce((acc, num, i) => {
    if(arr.indexOf(num) === i) {
      const sub = permutations([...arr.slice(0, i), ...arr.slice(i + 1)]);
      for(var j = 0; j < sub.length; j++) {
        acc.push([].concat(num, sub[j]));
      }
    }
    return acc;
  }, 
*/

/* 
function sscForperm(arr){
    const fact=n=>n ? n*fact(n-1) : 1;
    let c      = arr.reduce((o,v)=>(o[v]=o[v]+1||1,o),{});
    let nPerms = fact(arr.length) / Object.keys(c).reduce((m,k)=>m*fact(c[k]),1)
    let sIdx   = -~arr.length * arr.length >> 1;
    arr = arr.slice().sort((a,b)=>a-b);
    return [{"total perm": nPerms},
            {"total ssc":  arr.reduce((s,v)=> s + sIdx*v*nPerms/arr.length, 0) },
            {"max ssc":    arr.reduce((s,v,i)=> s + (i+1)*v, 0) },
            {"min ssc":    arr.reverse().reduce((s,v,i)=> s + (i+1)*v, 0) }];
}
*/