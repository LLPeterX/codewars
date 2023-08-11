/* 
7kyu - Slaphead
https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript


You will be given a string(x). 
Clean shaved head is shown as "-" and stray hairs are shown as "/". 
Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. 
Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"
*/

function bald(x) {
  let n = x.replace(/-/g, '').length;
  let s = n < 1 ? "Clean!" : n < 2 ? "Unicorn!" : n < 3 ? "Homer!" : n < 6 ? "Careless!" : "Hobo!";
  return ['-'.repeat(x.length), s]
}

console.log(bald('/---------'), ['----------', 'Unicorn!']);
console.log(bald('/-----/-'), ['--------', 'Homer!']);
console.log(bald('--/--/---/-/---'), ['---------------', 'Careless!']);

// best
/* 
const bald = function(x){
  return ['-'.repeat(x.length), 
          {0:'Clean!', 1:'Unicorn!',2:'Homer!', 3:'Careless!', 
           4:'Careless!', 5:'Careless!'}[x.replace(/-/g, '').length] || 'Hobo!']
}
*/

/* 
const bald=x=>[(y=x.split("/")).join("-"),["Clean!","Unicorn!","Homer!","Careless!","Careless!","Careless!"][y.length-1]||"Hobo!"]
*/