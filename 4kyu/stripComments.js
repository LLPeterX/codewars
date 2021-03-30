/* 
4kyu https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
 */

function solution(input, markers) {
  let strArray = input.split('\n').map(str => {
    let commentIndex = Number.MAX_SAFE_INTEGER;
    for (let marker of markers) {
      if (str.includes(marker)) {
        commentIndex = Math.min(commentIndex, str.indexOf(marker));
      }
    }
    return commentIndex >= 0 ? str.slice(0, commentIndex).trimRight() : str;
  });
  return strArray.join('\n').trimRight();
}