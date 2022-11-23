/* 
7kyu - Find Count of Most Frequent Item in an Array
*/


/* function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  console.log(collection);
  let counts = new Map();
  for (let c of collection) {
    counts.set(c, (counts.get(c) || 0) + 1);
  }
  return Array.from(counts).sort((a, b) => b[1] - a[1])[0][1];
} */
const mostFrequentItemCount = collection => collection.length ? Array.from(collection.reduce((counts, c) => {
  counts.set(c, (counts.get(c) || 0) + 1); return counts;
}, new Map())).sort((a, b) => b[1] - a[1])[0][1] : 0;

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);