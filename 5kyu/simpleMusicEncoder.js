/* 
5kyu - A Simple Music Encoder
https://www.codewars.com/kata/58db9545facc51e3db00000a

Specification
The input signal is represented as an array of integers. Several cases of regularities can be shortened.

* A sequence of 2 or more identical numbers is shortened as number*count
* A sequence of 3 or more consecutive numbers is shortened as first-last. 
   This is true for both ascending and descending order
* A sequence of 3 or more numbers with the same interval is shortened as first-last/interval.
   Note that the interval does NOT need a sign
* Compression happens left to right

Examples
[1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
[0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
[0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
[0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"

Input: A non-empty array of integers
Output: A string of comma-separated integers and sequence descriptors
*/

function compress(music) {
  let res = [
    {
      start: music[0],
      end: music[0],
      count: 1,
      isInt: false,
      int: 0
    }
  ];
  let sameCount = 0;
  let interval = 0;
  for (let i = 1; i < music.length + 1; i++) {
    let prevNum = res[res.length - 1];
    if (music[i] === music[i - 1]) { // same values
      if (prevNum.isInt) {
        res.push({
          start: music[i],
          end: music[i],
          count: 1,
          isInt: false,
          int: 0
        });
      } else {
        sameCount++;
        prevNum.count++;
      }
    } else { // different numbers
      if (sameCount > 0) {
        sameCount = 0;
        if (music[i] !== undefined) {
          res.push({
            start: music[i],
            end: music[i],
            count: 1,
            isInt: false,
            int: 0
          });
          interval = music[i] - music[i - 1];
        }
      } else {
        // if (music[i] - music[i - 1] === interval) {
        if (music[i] - music[i - 1] === interval || (music[i + 1] - music[i] === music[i] - prevNum.start && prevNum.start == prevNum.end && prevNum.count == 1)) {
          prevNum.end = music[i];
          prevNum.count++;
          prevNum.isInt = true;
          prevNum.int = interval;
          // }
        } else { // individual digit
          res.push({
            start: music[i],
            end: music[i],
            count: 1,
            isInt: false,
            int: 0
          }
          );
        }
        interval = music[i] - music[i - 1];
      }
    }
  }
  //console.log('>>> res=', res);
  let output = res.filter(v => v.start !== undefined && v.end !== undefined).map((v) => {
    if (v.start === v.end && v.count <= 1) return v.start;
    else if (v.start === v.end) return `${v.start}*${v.count}`;
    else if (v.start != v.end && Math.abs(v.int) === 1) return `${v.start}-${v.end}`;
    else if (v.isInt && Math.abs(v.count) > 2) return `${v.start}-${v.end}/${Math.abs(v.int)}`;
    else if (v.isInt && Math.abs(v.int) > 1) return `${v.start},${v.end}`;
    else return `${v.start}`
  }).join(',');
  return output;
}

// best
/* 
function compress(music) {
  let buffer = []
  let last = _ => buffer.slice(-1)[0]
  let diff = _ => buffer[1] - buffer[0]
  let result = []
  music.concat(NaN).forEach(x => {
    if (buffer.length <= 1) {
    }
    else if (diff() == 0 && last() != x) {
      result.push(buffer[0] + '*' + buffer.length)
      buffer = []
    }
    else if (x - last() != diff()) {
      if (buffer.length == 2) result.push(buffer.shift())
      else {
        let diffStr = Math.abs(diff()) == 1 ? '' : '/' + Math.abs(diff())
        result.push(buffer[0] + '-' + last() + diffStr)
        buffer = []
      }
    }
    buffer.push(x)
  })
  return result.concat(buffer).slice(0,-1) + ''
}
*/

/* 
function compress(m) {
  let r=[];
  for(let i=0; i<m.length; ++i) {
    let j=i;
    let diff=m[j+1]-m[j];
    while(m[j+1]==m[j]+diff) ++j;
    if(diff==0) {
      r.push(m[i]+'*'+(j-i+1));
      i=j;
    } else {
      if(j-i<=1) {
        r.push(m[i]);
      } else {
        r.push(m[i]+'-'+m[j]+(Math.abs(diff)==1?'':('/'+Math.abs(diff))));
        i=j;
      }
    }
  }
  return r.join();
}
*/

/* 
const compress = music => {
  const size	= music.length;
  const arr	= music.slice(); // protect the original array
  let result	= []; // found sequences converted to strings
  let i = 0;

  while (i < size) {

    // find a chain of repetitions
    let k = i;
    while (++k < size) if (arr[k] != arr[i]) break;
    if (k - i > 1) {
      result.push(`${arr[i]}*${k - i}`);
      i = k;
      continue;
    }

    // checking for the last or two last items
    if (i >= size - 2) {
      result = result.concat(arr.slice(i));
      break;
    }

    // find a chain of 3 or more consecutive values
    let step = arr[i + 1] - arr[i];
    k = i;
    while (++k < size) if (arr[k] - arr[k - 1] != step) break;
    if (k - i > 2) {
      step = Math.abs(step);
      step = step > 1 ? ('/' + step) : '';
      result.push(`${arr[i]}-${arr[k - 1]}${step}`);
      i = k;
    } else result.push(arr[i++]);
  }

  return result.join(',');
}
*/
