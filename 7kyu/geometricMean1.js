/* 
7kyu - Geometric Mean I
https://www.codewars.com/kata/56ebcea1b9d927f9bf000544/train/javascript
*/

function geometricMeanI(arr){ 
    let invalidCount=0, validCount=0;
    let mult=1;
    for(let e of arr) {
        if(typeof e === 'number' && e>=0) {
            mult*=e;
            validCount++;
        } else {
            invalidCount++;
        }
    }
    if((arr.length<11 && invalidCount<2) || (arr.length>10 && invalidCount/arr.length<0.1)) {
        return mult**(1/validCount);
    } else {
        return 0;
    }

}

console.log(geometricMeanI([2, 3, 4, 6]), 3.46410161514)
     console.log(geometricMeanI([2, 3, 4, 6, -5]), 3.46410161514)
     console.log(geometricMeanI([2, 3, 4, 6, '5']), 3.46410161514)
     console.log(geometricMeanI([2, 3, 4, 6, -5, '5']), 0)
     console.log(geometricMeanI([2, 2, 3, 4, 10, 8, 1, 4, 6, 7, 2]), 3.59348221822)
     console.log(geometricMeanI([2, 2, 3, 0, 4, 10, -4, 8, 1, 4, 6, 7, 2]), 0.0)
     console.log(geometricMeanI([2, 2, 3, 4, 10, -4, 8, 1, 4, 6, 7, 2, '']), 0)