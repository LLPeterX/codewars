/* 
7kyu - Decoding a message
https://www.codewars.com/kata/565b9d6f8139573819000056
*/

function decode(message) {
  const rev = "zyxwvutsrqponmlkjihgfedcba";
  return message.replace(/./g, (v) => /[a-z]/.test(v) ? rev[v.charCodeAt() - 97] : v);
}

console.log(decode("sr"), "hi")
console.log(decode("svool"), "hello")

// best

/* 
const decode = $ => $.replace(/[a-z]/g, x=> "zyxwvutsrqponmlkjihgfedcba"['abcdefghijklmnopqrstuvwxyz'.indexOf(x)])
*/