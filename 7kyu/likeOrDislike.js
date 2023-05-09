/* 
7kyu - Likes Vs Dislikes
https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
*/

const Like = "Like";
const Dislike = "Dislike";
const Nothing = "Nothing"

function likeOrDislike(buttons) {
  let state = buttons[0] || Nothing;
  for (let i = 1; i < buttons.length; i++) {
    if (state === Nothing) state = buttons[i];
    else if (state === buttons[i]) state = Nothing;
    else state = state == Like ? Dislike : Like;
  }
  return state;
}

console.log(likeOrDislike([Dislike]), Dislike);
console.log(likeOrDislike([Like, Like]), Nothing);
console.log(likeOrDislike([Dislike, Like]), Like);
console.log(likeOrDislike([Like, Dislike, Dislike]), Nothing);

console.log(likeOrDislike([Dislike, Dislike]), Nothing);
console.log(likeOrDislike([Like, Like, Like]), Like);
console.log(likeOrDislike([Like, Dislike]), Dislike);
console.log(likeOrDislike([Dislike, Like, Dislike]), Dislike);
console.log(likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]), Dislike);
console.log(likeOrDislike([]), Nothing);

// best
/* 
function likeOrDislike(buttons) {
  let state = 'Nothing';

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = 'Nothing'
    } else {
      state = buttons[i]
    }
  }

  return state
}
*/

/* 
function likeOrDislike(buttons) {
  return buttons.reduce( (state,button) => button===state ? Nothing : button , Nothing );
}
*/