function cypher(string) {
    const letter2digit = {'I':1, 'l':1,'R':2,'z':2,'e':3,'E':3,'A':4,'a':4,'S':5,'s':5,'G':6,'b':6,'t':7,'T':'7','B':8,'g':9,'O':'0','o':'0'};
    return string.replace(/./g,(c)=>letter2digit[c]??c);
      
 }
  