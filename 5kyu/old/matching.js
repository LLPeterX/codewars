/* 
https://www.codewars.com/kata/59de1e2fe50813a046000124/train/javascript

Дана строка. Заменить в ней номенование программы и версию.

*/

function change(s, prog, version) {
  let phone = s.match(/Phone: (.+)\n/)[1], ver = s.match(/Version: (.+)\n/)[1];
  if(! /\+1\-\d{3}\-\d{3}\-\d{4}/.test(phone) ||
     !/\d+\.\d+/.test(ver)) {
    return 'ERROR: VERSION or PHONE';
  }
  if(ver !='2.0') {
      ver = version;
  }
  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${ver}`;
}

const s1 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0910\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha';
console.log(change(s1,'Ladder', '1.1')); // 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1'
                                    //my:    Program: Ladder Author: g964 Phone: +1-503-555-0091 Date: 2019-01-01 Version: 1.1

                                    //Expected: 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1'
                                    //instead : 'Program: Ladder Author: g964 Phone: +1-503-555-0091 Date: 2019-01-01 Version: 1.1'                                    

const s11 = 'Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release'                                    
console.log(change(s11,'Balance', '1.5.6'));
// my: Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.5.6
//     Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0