/* 
6kyu Handshake Problem
https://www.codewars.com/kata/5574835e3e404a0bed00001b

Фермер Джон ежегодно проводит съезд свекловодов "Брось свеклу"
Каждый год он фотографирует рукопожатие фермеров. 
Джонни знает, что никакие два фермера не пожимают руки более одного раза. 
Он также знает, что некоторые из возможных комбинаций рукопожатий могут не произойти.

Однако Джон хотел бы знать минимальное количество людей, которые участвовали в этом году, 
просто посчитав все рукопожатия.

Напишите функцию, которая берет количество рукопожатий и возвращает минимальное количество людей, 
необходимое для выполнения этих рукопожатий (пара фермеров пожимает руки только один раз)
*/

function getParticipants(handshakes){
  if(handshakes < 6) {
    return handshakes ? Math.floor((handshakes+3)/2) : 1;
  }
  for(let num = 1; num<handshakes; num++) {
    let v = num*num-num;
    if(v >= 2*handshakes) {
      return num;
    }
  }
  return 1;
}

console.log(getParticipants(0)); // 1 
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
console.log(getParticipants(2211)); // 67 (у меня 1107)
console.log(getParticipants(39060)); // 280 (у меня 1107)
console.log(getParticipants(177310)); // 596 (у меня 1107)

//console.log(67*(67+1)/2 - 67);
//console.log(39060, 280*(280+1)/2, 280*(280+1)/2-280) ;

// у меня бредовая хуйня
//best
/*  
function getParticipants(h)
{
  return Math.ceil((1+Math.sqrt(1+8*h))/2);
}
*/

/* 
function getParticipants(handshakes){
    var participants = 1;
    while( participants*(participants-1)/2 < handshakes ) participants++;
    return participants
}//z
*/


/* 
function getParticipants(handshakes){
  var sum=0, i=1;
  while (sum<handshakes)
    sum+=i++;
  return i;
}

*/