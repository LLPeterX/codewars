/* 
6kyu Simple string indices
https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078

Найти парную закрывающую скобку
*/

/* function solve(str, idx) {
  if (str[idx] != '(') return -1;
  let cnt = 0;
  let cntOpen = 0, cntClose = 0
  for (let i = 0; i < str.length; i++) {
    // if(str[i] === '(') {
    //   cnt ++;
    // } else if(str[i] === ')') {
    //   cnt --;
    // }
    if (str[i] === '(') {
      cntOpen++;
      if(i>=idx) {
        cnt++;
      }
    } else if (str[i] === ')') {
      cntClose--;
      if(i>idx) {
        cnt--;
      }
    }


  } // for

} */

function solve(str, idx) {
  if (str[idx] != '(') return -1;
  for (let i = idx, cnt=0; i < str.length; i++) {
    if(str[i] === '(') {
      cnt ++;
    } else if(str[i] === ')') {
      cnt --;
    }
    if(cnt === 0) return i;
  } 
  return -1;
}

console.log(solve("((1)23(45))(aB)",0),10);
console.log(solve("((1)23(45))(aB)",1),3);
console.log(solve("((1)23(45))(aB)",2),-1);
console.log(solve("((1)23(45))(aB)",6),9);
console.log(solve("((1)23(45))(aB)",11),14);
console.log(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",11),28);
console.log(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",0),29);
console.log(solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))",19),22);

//best (my best)
/*  
function solve(str,idx){
 if (str[idx]!='(') return -1;
 for (var c=0,i=idx;i<str.length;i++) if ((c+=str[i]=='('?1:str[i]==')'?-1:0)==0) return i;
 return -1 //special dinglemouse version:-P...
}
*/