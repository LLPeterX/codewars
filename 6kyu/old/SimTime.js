/* 
6kyu - Time Simulation
https://www.codewars.com/kata/5858326b994864753d0000d1

Let's write an object we can use to simulate time and mess with it as we wish!

new SimTime() - Creates a new SimTime instance

instance.get() - Returns the current time withing the simulation. This value will start at 0.

*/

class SimTime {
  constructor() {
    this.simtime = 0;
    this.speed = 1;
    this.realtime = 0;
  }

  get() {
    return this.simtime;
  }

  set_speed(new_speed) {
    this.speed = new_speed;
  }

  update(current_realtime) {
    if (current_realtime < this.realtime) {
      throw Error('Invalid realtime');
    }
    this.simtime += (current_realtime - this.realtime) * this.speed;
    this.realtime = current_realtime;
  }
}

var sim = new SimTime();
console.log(sim.get(), 0);
sim.update(10);
console.log(sim.get(), 10);
sim.update(12);
sim.set_speed(3);
console.log(sim.get(), 12); // unchanged
sim.update(15);
console.log(sim.get(), 21);
sim.update(17);
console.log(sim.get(), 27);
sim.set_speed(1);
console.log(sim.get(), 27);
sim.update(18);
console.log(sim.get(), 28);
