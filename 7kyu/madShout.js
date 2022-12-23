/* 
7kyu - Give a shout to your friend walking towards you
https://www.codewars.com/kata/63a2928176157931b3945090/train/javascript

*/

function madShout(sidewalk) {
  const distance = sidewalk.indexOf('F') - sidewalk.indexOf('Y');
  return 'O' + 'i'.repeat(distance < 3 ? 1 : Math.ceil(distance / 2)) + ' F!';
}

