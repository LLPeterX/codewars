/* 
7kyu - Scott Booleans
https://www.codewars.com/kata/63d1ba782de94107abbf85c3/train/javascript

We have Boolean = False | True. The Constructors are False and True.
For every Constructor, define a curried function that takes as many arguments 
as there are Constructors ( keeping arguments in order of their enumeration 
  in the type definition ), and returns one of them:

False = f => t => f
True  = f => t => t
*/

const False = a => b => a
const True = a => b => b
const iff = f => a => b => f(b)(a)

