/* 
6kyu - Allocating Hotel Rooms
https://www.codewars.com/kata/6638277786032a014d3e0072/train/javascript

Allocate customers to hotel rooms based on their arrival and departure days. 
Each customer wants their own room, so two customers can stay in the same room 
only if the departure day of the first customer is earlier than 
the arrival day of the second customer. 
The number of rooms used should be minimized.

Output
A list or array of size n, where element i indicates the room that customer i was allocated. 
Rooms are numbered 1,2, ..., k for some 1 ≤ k ≤ n. 
Any allocation that minimizes the number of rooms k is a valid solution.
*/

function allocateRooms(customers) {
  const rooms = [];
  const cus = customers.map((c, i) => ({ arrival: c[0], departure: c[1], num: i, room: 0 })).sort((a, b) => a.arrival - b.arrival);

  for (let c of cus) {
    let freeRoomIndex = rooms.findIndex((roomEndDay) => c.arrival > roomEndDay);
    if (freeRoomIndex < 0) {
      rooms.push(c.departure);
      c.room = rooms.length;
    } else {
      rooms[freeRoomIndex] = c.departure;
      c.room = freeRoomIndex + 1; // starts with 1
    }
  }
  return cus.sort((a, b) => a.num - b.num).map((c) => c.room);
}

// best

/* 

function allocateRooms(customers) {
  customers = customers.map((x, i) => [i, x]).sort((a, b) => a[1][0] - b[1][0]);
  const res = [];
  const rooms = [];

  for (const [ri, cust] of customers) {
    let r = rooms.findIndex((room, i) => room < cust[0]);
    if (r === -1) r = rooms.length;

    rooms[r] = cust[1];
    res[ri] = r+1;
  }

  return res;
}
*/
