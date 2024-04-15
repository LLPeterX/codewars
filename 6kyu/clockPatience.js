/* 
6kyu - Clock Patience
https://www.codewars.com/kata/58e8f020fd89eaa1cf0000c2
*/
/* 
// first attempt
function patience(cards) {
    //console.log(cards);
    const cardPositions = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const stack = Array.from({length:13},()=>({shown:[], hidden:[]}));
    for(let i=0; i<cards.length; i++) {
      stack[i%13].hidden.push(cards[i]);
    }
    let k=12;
    while(true) {
        //if(stack[12].shown.length===4) return 0;
        if(stack[k].hidden.length===0) break;
        let card = stack[k].hidden.pop();
        k = cardPositions.indexOf(card);
        stack[k].shown.push(card);
    }
    return stack.reduce((sum,e)=>sum+=e.hidden.length,0);
  }
 */
  function patience(cards) {
    const cardPositions = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const stack = cardPositions.map(()=>[]);
    for(let i=0; i<cards.length; i++) {
        stack[i%13].push(cards[i]);
    }
    let cardIndex=12;
    while(stack[cardIndex].length) {
        cardIndex = cardPositions.indexOf(stack[cardIndex].pop());
    }
    return stack.reduce((sum,e)=>sum+=e.length,0);
  }


  console.log(patience([ 'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K' ]),48);