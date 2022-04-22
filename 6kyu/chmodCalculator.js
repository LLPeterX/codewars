/* 
6kyu - chmod calculator in octal
https://www.codewars.com/kata/57f4ccf0ab9a91c3d5000054/train/javascript


 */


//console.log(str2bin('rwx'));
console.log(chmodCalculator({ user: 'rwx', group: 'r-x', other: 'r-x' }), "755");
console.log(chmodCalculator({ user: 'rwx', group: 'r--', other: 'r--' }), "744");
console.log(chmodCalculator({ user: 'r-x', group: 'r-x', other: 'r-x' }), "555");
console.log(chmodCalculator({ group: 'rwx' }), "070");

// best

/* 
function chmodCalculator(perm) {
  let octal = p => !p ? 0 : 
    4 * +(p[0] === 'r') + 
    2 * +(p[1] === 'w') + 
    1 * +(p[2] === 'x')
  
  return '' + octal(perm.user) + octal(perm.group) + octal(perm.other); 
}
*/

/* 
function chmodCalculator(perm) {
  let toOct = s => s ? parseInt(s.replace(/./g, c => c == '-' ? 0 : 1), 2) : 0
  return [perm.user, perm.group, perm.other].map(toOct).join``
}
*/

/* 
function chmodCalculator(p) {
  return [p.user,p.group,p.other].map((p='---')=>(p[0]=='r')*4+(p[1]=='w')*2+(p[2]=='x')).join('');
}
*/