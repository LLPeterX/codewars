/* 
7kyu - Set Reducer
https://www.codewars.com/kata/63cbe409959401003e09978b
*/

function setReducer(arr) {
  if (arr.length < 2) return arr[0];
  let reducedArray = [], prevNumber = arr[0], count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === prevNumber) count++;
    else {
      reducedArray.push(count);
      prevNumber = arr[i];
      count = 1;
    }
  }
  reducedArray.push(count);
  return setReducer(reducedArray);
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]), 2);
console.log(setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]), 3);
console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]), 13);
console.log(setReducer([0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]), 5);

// best

/* 
function setReducer(arr) {
  while(arr.length-1) {
    arr = arr.reduce((a,v,i)=>{
      if(v!=arr[i-1]) a.push(1)
      else a[a.length-1]++
      return a
    }, [])
  }
  return arr.pop()
}
*/