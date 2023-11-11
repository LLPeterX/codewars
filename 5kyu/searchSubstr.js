/* 
5kyu - Return substring instance count - 2
https://www.codewars.com/kata/52190daefe9c702a460003dd/train/javascript

Complete the solution so that it returns the number of times 
the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )
so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') // should return 1
searchSubstr( 'aaa', 'aa' ) // should return 2
searchSubstr( 'aaa', '' ) // should return 0
searchSubstr( 'aaa', 'aa', false ) // should return 1
*/

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (!searchText || !fullText) return 0;
  let count = 0, L = searchText.length;
  for (let i = 0; i < fullText.length; i++) {
    if (fullText.slice(i, i + L) === searchText) {
      count++;
      if (!allowOverlap) i += L;
    }
  }
  return count;
}

console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb'), 2);
console.log(searchSubstr('aaabbbcccc', 'bbb'), 1);
console.log(searchSubstr('aaa', 'aa'), 2);
console.log(searchSubstr('aaa', ''), 0);
console.log(searchSubstr('aaa', 'aa', false), 1);