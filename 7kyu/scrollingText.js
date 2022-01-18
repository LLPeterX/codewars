/* 
7kyu - Scrolling Text
https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
*/

// function scrollingText(text) {
//   let t = [...text.toUpperCase()], res = [];
//   for (let i = 0; i < t.length; i++) {
//     t.unshift(t.pop());
//     res.unshift(t.join``);
//   }
//   return res;
// }

function scrollingText(text) {
  return [...text.toUpperCase()].reduce((arr, v, i, a) => {
    a.unshift(a.pop());
    arr.unshift(a.join``);
    return arr;
  }, []);
}


console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"])
console.log(scrollingText("CODEWARS")); // 8 items

// best
/* 
function scrollingText(text){
  text = text.toUpperCase();

  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
} 
*/

/* 
const scrollingText = (t,s = t.toUpperCase()) => [...s].map((_,i)=>s.slice(i)+s.slice(0,i));
*/