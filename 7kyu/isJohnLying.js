/* 
7kyu - Simple Fun #324: Is John Lying?
https://www.codewars.com/kata/594cd799c08247a55a000004/train/javascript

In the morning, John starts from (0,0) and goes to the place (a,b) where he is dating. 
Unfortunately, John had no sense of direction at all, so he moved 1 step 
in a random direction(up, down, left or right) each time. 
For example, if John at (x,y), next step he may move to (x+1,y), (x-1,y),(x,y+1) or (x,y-1).

Obviously, when he arrived at the destination, it was already too late and Alice had already left. It's a sadly story :(

The second day, Alice asked John why he didn't go to the dating place. John said he took s steps to his date yesterday.

Alice wants to know whether John is lying. Please help Alice to judge.

Given two coordinates a, b and the step s, return true if John tells the truth, false otherwise.
*/

// INCORRECT !!!
function isJohnLying(a, b, s) {
  return Math.abs(a) + Math.abs(b) == s;
}