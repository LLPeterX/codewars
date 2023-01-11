/* 
5kyu - Pyramide d'Azkee
https://www.codewars.com/kata/63a31f7d66ad15f77d5358b9

"Given a positive integer n, return a string representing the pyramid associated with it."

--------------------------------------------------
 pyramid                    n     properties
--------------------------------------------------

 ./\                        1     height: 2
\/__\                             width:  5
           
    ./\                     2     height: 4
 .´\/__\                          width: 10
\´\/__:_\ 
 \/_|__|_\
            
       ./\                  3     height: 6
    .´\/__\                       width: 15
 .´\´\/__:_\   
\ \´\/_|__|_\  
 \´\/|__|__|_\ 
  \/__|__|__|_\
             
          ./\               4     height: 8     
       .´\/__\                    width: 20
    .´\´\/__:_\     
 .´\ \´\/_|__|_\    
\´\´\´\/|__|__|_\   
 \´\´\/__|__|__|_\  
  \´\/_|__|__|__|_\ 
   \/|__|__|__|__|_\
               
             ./\            5     height: 10     
          .´\/__\                 width: 25  
       .´\´\/__:_\       
    .´\ \´\/_|__|_\      
 .´\´\´\´\/|__|__|_\     
\ \´\´\´\/__|__|__|_\    
 \´\´\´\/_|__|__|__|_\   
  \´\´\/|__|__|__|__|_\  
   \´\/__|__|__|__|__|_\ 
    \/_|__|__|__|__|__|_\
               
 ...
 
 
0                     ./\                   8     height: 16      
1                  .´\/__\                        width: 40
2               .´\´\/__:_\             
3            .´\ \´\/_|__|_\            
4         .´\´\´\´\/|__|__|_\           
5      .´\ \´\´\´\/__|__|__|_\          
6   .´\´\´\´\´\´\/_|__|__|__|_\         
7.´\ \´\´\´\´\´\/|__|__|__|__|_\        
\´\´\´\´\´\´\´\/__|__|__|__|__|_\       
9\´\´\´\´\´\´\/_|__|__|__|__|__|_\      
10\´\´\´\´\´\/|__|__|__|__|__|__|_\     
11 \´\´\´\´\/__|__|__|__|__|__|__|_\    
12  \´\´\´\/_|__|__|__|__|__|__|__|_\   
13   \´\´\/|__|__|__|__|__|__|__|__|_\  
14    \´\/__|__|__|__|__|__|__|__|__|_\ 
15     \/_|__|__|__|__|__|__|__|__|__|_\
       
 ...
*/


// main solution
/* 
function drawPyramid(n) {
   const p = new Array(n * 2).fill().map(e => new Array(n * 5).fill(' '));
   for (let y = n * 2 - 1, j = n, k = n * 5 - 1, l = n - 1; y >= 0; y--, j++, k--, l--) {
      p[y][j] = "/";
      p[y][k] = "\\";
      for (let x = j + 1; x < k; x++) p[y][x] = '_';
      if (l >= 0) p[y][l] = "\\";
   }
   // side pointss
   let k = p[0].indexOf("/") - 1;
   p[0][k] = '.';
   for (let y = 1, j = k; y <= n; y++) {
      if (j > 0) p[y][--j] = "\\";
      if (j > 0) p[y][--j] = '´'
      if (j > 0) p[y][--j] = '.';
   }
   // inner chars
   if (n > 1) p[2][n * 3] = ':';
   for (let y = 2; y < n; y++) {
      k = p[y].indexOf("\\") + 1;
      if (k >= 0) {
         while (p[y][k] != '/') {
            p[y][k++] = '´';
            p[y][k++] = "\\";
         }
      }
   }
   // bottom left
   for (let y = n * 2 - 1; y >= n; y--) {
      let k = p[y].indexOf("\\") + 1;
      if (k >= 0) {
         while (p[y][k] != '/') {
            p[y][k++] = '´';
            p[y][k++] = "\\";
         }
      }
   }
   if (n > 1) {
      for (let y = 3, k = p[2].indexOf(':') + 2; y < n * 2; y++, k++) {
         for (let x = k - 1; x > p[y].indexOf("/"); x -= 3) p[y][x] = '|';
      }
   }
   for (let y = 3; y <= n; y+=2) p[y][p[y].indexOf("\\") + 1] = ' ';
   return p.map(r => r.join("")).join("\n");
}
*/

// posted solution (limit 1000 chars):

const drawPyramid = n => {
   let h=n*2, p = Array.from(Array(h),()=>new Array(n*5).fill(' ')),k,q,y;
   for (let y=h-1,j=n,k=n*5-1,l=n-1;y>=0;y--,j++,k--,l--) {
      p[y][j]="/";p[y][k]="\\";
      for (let x=j+1;x<k;x++) p[y][x]='_';
      if(l) p[y][l]="\\";
   }
   k=p[0].indexOf("/")-1;p[0][k]='.';
   for (y=1,j=k;y<=n;y++) {
      if(j) p[y][--j]="\\"
      if(j) p[y][--j]='´'
      if(j) p[y][--j]='.'
   }
   if (n>1) p[2][n*3]=':';
   for (y=2;y<n;y++) {
      k=p[y].indexOf("\\")+1;
      if(k>=0){
      while (p[y][k]!='/') {
         p[y][k++]='´'
         p[y][k++]="\\"
      }}
   }
   for (let y=h-1;y>=n;y--) {
      k=p[y].indexOf("\\")+1;
      while (p[y][k]!='/') {
         p[y][k++]='´';p[y][k++]="\\";
      }
   }
   if (n > 1) {
      for (let y=3,k=p[2].indexOf(':')+2;y<n*2;y++,k++) {
         for (let x=k-1;x>p[y].indexOf("/");x-=3) p[y][x]='|';
      }
   }
   for (let y=3;y<=n;y+=2) p[y][p[y].indexOf("\\")+1]=' ';
   return p.map(r=>r.join("")).join("\n");
}

// best
/* 
let row = (i, w, h) => 
      ((i<h ? '.'+'´\\'.repeat(i)+'/' 
             : ('\\´'.repeat(h*2-i-1)+'\\/')).replace(/\\´/, (v,j)=>i<=h&&i&1?'\\ ':v)
       + '_'.repeat(i*2).replace(/./g, (v,j)=>i==1||(i+j)%3^1?'_':' _:'[i]||'|')
       + '\\' + ' '.repeat(h*2-i-1)).padStart(w,' '),
    drawPyramid = n => [...Array(n*2)].map((v,i) => row(i,n*5,n)).join`\n`;
*/

/* 
function drawPyramid(n) {
  if(n==1) return " ./\\ \n\\/__\\"
  
  const H=2*n, A=[...Array(H)].map(_=>Array(H*2.5|0).fill(' '))
  let W=H*2, T=n, x=H-1,y=A[0].length-1, i,j,t
  
  for(;x>=0; x--,y--,T-=(H-1-x)&1,W-=2){
    
    for(i=x,j=y,t=1; t<W ;t++,j--) A[i][j] = t%3==0 ? '|':'_'
    
    A[i][y]='\\' ; A[i][j]='/'
    for(--j,t=T; t>=0 ;t--,i--,j--){
      A[i][j]=t?'\\':(H-1-x)&1?'.':' '
      if(t>(H-x)%2) A[i-1][j]='´'
    }  
  }
  A[++x+1][y]  = '_'
  A[++x+1][--y+2] = ':'
  for(t=n>>1;(x+=2,y-=6,t);t--) A[x][y]=' '
  
  return A.map(r=>r.join('')).join('\n')
}
*/

/* 
function drawPyramid(n) {
  return [...Array(2*n)].map((_,i)=>`${' '.repeat(i<n?1+3*(n+~i):i-n)}${i<n?'.':'\\'}${'´\\'.repeat(i<n?i:2*n+~i)}/${i<3?['','__','__:_'][i]:[...Array(2*i)].map((_,j)=>(2*i-j)%3===2?'|':'_').join('')}\\${' '.repeat(2*n+~i)}`)
    .map((s,i)=>n>2&&i<=n&&i%2?s.replace(/((\.´|^)\\)´/, '$1 '):s).join('\n');
}
*/

/* 
let height = n*2
  let width = height*2+n
  let base = width - (height - 1)
  let p = ``

  for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
      let li = base - (i+2)
      let l = base - ((i+1)*3)
      let r = base + i - 1
      if(j < i-n){
        p += ` `
      }else if(j >= l && j <= r){
        if(j == li)
          p += `/`
        else if(j == r)
          p += `\\`
        else if(j > li && j < r){
          if((j+((i+1)*2)) % 3 == 0 && i != 1)
            if(i==2)
              p += `:`
            else
              p += `|`
          else
            p += `_`
        }else if(j == l){
          p += `.`
        }else if((i+1)%2==0 && j == l+3){
          p += ` `
        }else if((j+i+(n%2))%2 == 0){
          p += `\\`
        }else
          p += `´`

      }else
        p += ` `
    }
    if(i!=height-1)
      p += `\n`
  }
  return p
}
*/