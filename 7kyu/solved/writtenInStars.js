/* 
7kyu - It is written in the stars
https://www.codewars.com/kata/5888a57cbf87c25c840000c6/train/javascript

Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:
*/

function starSign(date) {
  const zodiac = {
    "Aquarius": [121, 219],
    "Pisces": [220, 320],
    "Aries": [321, 420],
    "Taurus": [421, 521],
    "Gemini": [522, 621],
    "Cancer": [622, 722],
    "Leo": [723, 823],
    "Virgo": [824, 923],
    "Libra": [924, 1023],
    "Scorpio": [1024, 1122],
    "Sagittarius": [1123, 1221],
    "Capricorn": [1222, 120]
  };
  let dx = (date.getMonth() + 1) * 100 + date.getDate();
  let name = Object.entries(zodiac).find(([_, d]) => (dx >= d[0] && dx <= d[1]));
  return name ? name[0] : "Capricorn";
}

console.log(starSign(new Date(1970, 5, 5)), 'Gemini');
console.log(starSign(new Date(2000, 1, 15)), 'Aquarius');
console.log(starSign(new Date(1987, 7, 23)), 'Leo');

// best

/* 
function starSign(date) {
  var day = date.getDate();

  switch(date.getMonth()){
    case 0:  return day < 21 ? "Capricorn" : "Aquarius";
    case 1:  return day < 20 ? "Aquarius" : "Pisces";
    case 2:  return day < 21 ? "Pisces" : "Aries";
    case 3:  return day < 21 ? "Aries" : "Taurus";
    case 4:  return day < 22 ? "Taurus" : "Gemini";
    case 5:  return day < 22 ? "Gemini" : "Cancer";
    case 6:  return day < 23 ? "Cancer" : "Leo";
    case 7:  return day < 24 ? "Leo" : "Virgo";
    case 8:  return day < 24 ? "Virgo" : "Libra";
    case 9:  return day < 24 ? "Libra" : "Scorpio";
    case 10: return day < 23 ? "Scorpio" : "Sagittarius";
    case 11: return day < 22 ? "Sagittarius" : "Capricorn";           
  }
}
*/