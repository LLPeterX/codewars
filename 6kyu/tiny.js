/* 
6kyu - "Tiny" function
https://www.codewars.com/kata/65552e9756ea20197078a163

Write a tiny function f that outputs 'tiny' 
without using the letters t, i, n, y anywhere in your code
Your code is limited to less than 34 characters
*/

//.................................. << max length of code
//t=()=>"tiny"; // ???
//t = () => "tiny"
//f = () => "shmx".replace(/./g, c => String.fromCharCode(c.charCodeAt() + 1)) // 67, inc 't','i','n'
//                                     ^ ^^                          ^                        

// надо в параметрах передать слово, содержащее буквы t,i,n,y
//f = (z = "tiny") => z[0] + z[1] + z[2] + z[3] // 34, но включает все буквы

// "Infinity" !!!
//f = (z = `${1 / 0}`) => z[6] + z[3] + z[4] + z[7] // 36

// final:
f = (z = 1 / 0 + '') => z[6] + z[3] + z[4] + z[7] // 34 !
console.log(f())



