function fizzbuzz(n) {
  return Array(n).fill().map((_, i) => (i + 1) % 15 === 0 ? 'FizzBuzz' : (i + 1) % 5 === 0 ? 'Buzz' : (i + 1) % 3 === 0 ? 'Fizz' : (i + 1));
}


console.log(fizzbuzz(10));

//best
/*
const fizzbuzz = n => Array(n).fill(1).map((x,y)=>x+y).map(n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n);
*/