/* 
6kyu - Finite State Automata 1: Traffic Lights
https://www.codewars.com/kata/649db66f7feaa30045d41d37/train/javascript

The behavior of traffic lights can be expressed as a finite state machine. A graph of such a state machine's states and transitions could look like this:

     States:      Transitions:
    _________
┌─→/         \
│ (    Red    )
│  \_________/───┐
│   _________    ├─ Prepare
│  /         \←──┘
│ ( Red+Amber )
│  \_________/───┐
│   _________    ├─ Move
│  /         \←──┘
│ (   Green   )
│  \_________/───┐
│   _________    ├─ Slow
│  /         \←──┘
│ (   Amber   )
│  \_________/───┐
│                ├─ Stop
└────────────────┘

Your task is to program a module which:
- holds and initializes the state ID string
- can be initialized with a list of transitions
- provides a method for every declared transition
- calling a transition method should carry out the transition
   ...but only if it's legal according to the associated transition rule

   A single transition rule consists of three strings:

- current - The state ID this transition may begin from (e.g. Red)
- target - The state ID this transition may end at (e.g. Red+Amber)
- method - A name for the method which advances the state (e.g. Prepare)
*/

/**
 * State Transition configuration object
 * @typedef {Object} TransitionConfig
 * @property {string} method  - Name of the method that can carry out the transition
 * @property {string} current - Name of the state that the transition begins from
 * @property {string} target  - Name of the state that the transition ends with
 */

/* 
тут засада: имена методов должны совпадать с методами transitions[] !!!
Задача динамически создать методы внутри класса, в конструкторе.
*/

class StateMachine {
  /**
   * Instantiates a new finite state machine
   * @param {Object}             options -
   * @param {string}             options.init        - The initial state name
   * @param {TransitionConfig[]} options.transitions - A list of transitions that define the FSM
   */
  constructor({ init, transitions }) {
    this.transitions = transitions;
    this.state = init;
    // transitions.forEach(({ method }) => {
    //   this[method] = function () {
    //     let t = this.transitions.find(t => t.method === method);
    //     if (t.current === this.state) {
    //       this.state = t.target;
    //     }
    //   };
    //   this[method] = this[method].bind(this);
    // })
    transitions.forEach(({ method, current, target }) => {
      this[method] = function () {
        if (current === this.state) {
          this.state = target;
        }
      };
      //this[method] = this[method].bind(this); // лишнее
    })

  }
  // ниже не будет работать, если в trabsitions[] другие имена методов.
  /*
    prep() {
      let t = this.transitions.find(t => t.method === 'prep');
      if (t.current === this.state) {
        this.state = t.target;
      }
    }
  
    move() {
      let t = this.transitions.find(t => t.method === 'move');
      if (t.current === this.state) {
        this.state = t.target;
      }
    }
  
    slow() {
      let t = this.transitions.find(t => t.method === 'slow');
      if (t.current === this.state) {
        this.state = t.target;
      }
    }
  
    stop() {
      let t = this.transitions.find(t => t.method === 'stop');
      if (t.current === this.state) {
        this.state = t.target;
      }
    }
    */
}





let trafficLights = new StateMachine({
  init: 'R',
  transitions: [
    { method: 'prep', current: 'R', target: 'RA' },
    { method: 'move', current: 'RA', target: 'G' },
    { method: 'slow', current: 'G', target: 'A' },
    { method: 'stop', current: 'A', target: 'R' }
  ]
});
console.log('Transitions through the states');
trafficLights.prep();
console.log(trafficLights.state, 'RA');
trafficLights.move();
console.log(trafficLights.state, 'G');

// console.log('Adopts the initial state');
// console.log(trafficLights.state, 'R'); // FAIL

// console.log('Transitions through the states');
// trafficLights.prep();
// console.log(trafficLights.state, 'RA');
// trafficLights.move();
// console.log(trafficLights.state, 'G');

// console.log('Prohibits carrying out an invalid transition');
// trafficLights.move();
// console.log(trafficLights.state, 'R');