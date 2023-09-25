/* 
6kyu - IP Validation
https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
 */
/* 
function isValidIP(str) {
  //console.log(str);
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(str)
}

 */

const isValidIP = str => /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(str)

//my best

