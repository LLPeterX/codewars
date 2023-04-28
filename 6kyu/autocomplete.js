/* 
6kyu - Autocomplete! Yay!
https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript
*/

function autocomplete(input, dictionary) {
  let search = input.replace(/[^A-Za-z]/gi, '');
  let re = new RegExp(`^${search}`, 'i');
  return dictionary.filter(w => re.test(w)).slice(0, 5);
}

