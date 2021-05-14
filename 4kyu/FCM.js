/* 
4kyu - A Simplistic TCP Finite State Machine (FSM)
https://www.codewars.com/kata/54acc128329e634e9a000362

Создать машину конечных состояний.
*/

function traverseTCPStates(eventList) {
  var state = "CLOSED";  // initial state, always
  const states = [
    ['CLOSED', ['APP_PASSIVE_OPEN', 'LISTEN']],
    ['CLOSED', ['APP_ACTIVE_OPEN', 'SYN_SENT']],
    ['LISTEN', ['RCV_SYN', 'SYN_RCVD']],
    ['LISTEN', ['APP_SEND', 'SYN_SENT']],
    ['LISTEN', ['APP_CLOSE', 'CLOSED']],
    ['SYN_RCVD', ['APP_CLOSE', 'FIN_WAIT_1']],
    ['SYN_RCVD', ['RCV_ACK', 'ESTABLISHED']],
    ['SYN_SENT', ['RCV_SYN', 'SYN_RCVD']],
    ['SYN_SENT', ['RCV_SYN_ACK', 'ESTABLISHED']],
    ['SYN_SENT', ['APP_CLOSE', 'CLOSED']],
    ['ESTABLISHED', ['APP_CLOSE', 'FIN_WAIT_1']],
    ['ESTABLISHED', ['RCV_FIN', 'CLOSE_WAIT']],
    ['FIN_WAIT_1', ['RCV_FIN', 'CLOSING']],
    ['FIN_WAIT_1', ['RCV_FIN_ACK', 'TIME_WAIT']],
    ['FIN_WAIT_1', ['RCV_ACK', 'FIN_WAIT_2']],
    ['CLOSING', ['RCV_ACK', 'TIME_WAIT']],
    ['FIN_WAIT_2', ['RCV_FIN', 'TIME_WAIT']],
    ['TIME_WAIT', ['APP_TIMEOUT', 'CLOSED']],
    ['CLOSE_WAIT', ['APP_CLOSE', 'LAST_ACK']],
    ['LAST_ACK', ['RCV_ACK', 'CLOSED']]
  ];

  for (let event of eventList) {
    let nextState = states.find(s => s[0] === state && s[1][0] === event);
    if (!nextState) {
      return "ERROR";
    }
    state = nextState[1][1];
  }
  return state;
}

console.log(traverseTCPStates(["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN"]), "CLOSE_WAIT")
console.log(traverseTCPStates(["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK"]), "ESTABLISHED")
console.log(traverseTCPStates(["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN", "APP_CLOSE"]), "LAST_ACK")
console.log(traverseTCPStates(["APP_ACTIVE_OPEN"]), "SYN_SENT")
console.log(traverseTCPStates(["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK", "APP_CLOSE", "APP_SEND"]), "ERROR")

//best
/* 
function traverseTCPStates(eventList){
  var state = "CLOSED";  // initial state, always
  
  var states = { 
    CLOSED : { APP_PASSIVE_OPEN : "LISTEN", APP_ACTIVE_OPEN : "SYN_SENT" },
    LISTEN: { RCV_SYN : "SYN_RCVD", APP_SEND : "SYN_SENT", APP_CLOSE : "CLOSED" },
    SYN_RCVD: { APP_CLOSE : "FIN_WAIT_1", RCV_ACK : "ESTABLISHED" },
    SYN_SENT: { RCV_SYN : "SYN_RCVD", RCV_SYN_ACK : "ESTABLISHED", APP_CLOSE : "CLOSED" },
    ESTABLISHED: { APP_CLOSE : "FIN_WAIT_1", RCV_FIN : "CLOSE_WAIT" },
    FIN_WAIT_1: { RCV_FIN : "CLOSING", RCV_FIN_ACK : "TIME_WAIT", RCV_ACK : "FIN_WAIT_2" },
    CLOSING: { RCV_ACK : "TIME_WAIT" },
    FIN_WAIT_2: { RCV_FIN : "TIME_WAIT" },
    TIME_WAIT: { APP_TIMEOUT : "CLOSED" },
    CLOSE_WAIT: { APP_CLOSE : "LAST_ACK" },
    LAST_ACK: { RCV_ACK : "CLOSED" },
    ERROR: {}
  };

  return eventList.reduce(function(state, input) { return states[state][input] || "ERROR"; }, state);
}
*/