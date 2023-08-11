/* 
7kyu - You Complete Me
https://www.codewars.com/kata/63967eb85e54bd00237d2201

Task: concatenate one or more letters to the end of a given input string to create a string 
that reads the same forward as backward.

Specifications

* Letters can only be added to the right hand side of the input string.
* You are required to add at least one letter to the input string.
* The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, while (ab)=> aba is Right.
* Inputs will consist of one or more letters, upper and lower case.
* Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.
*/


// from: https://www.youtube.com/watch?v=LjzwdZZxFnY

const complete = str => {
  if (str.length == 1) return str + str;
  for (let i = 1; i < str.length; i++) {
    let rev = [...str.slice(i)].reverse().join``;
    if (str.slice(i) === rev) {
      return str + [...str.slice(0, i)].reverse().join``;
    }
  }
}

