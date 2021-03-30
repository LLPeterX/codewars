/* 
https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
Battleship field validator
*/

function validateBattlefield(field) {
  let component = [];
  let queue = [];
  let components = null;

  let visited = [];
  for (let i = 0; i < 10; i++) {
    visited.push([]);
    for (let j = 0; j < 10; j++) {
      visited[i].push(false);
    }
  }

  let isOverlapped = (components) => {
    return !(components.every((p) => { return p.r === components[0].r; }) ||
      components.every((p) => { return p.c === components[0].c; }));
  };

  let generateNeighbors = (r, c) => {
    let offsets = [ [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1] ];
    return offsets.reduce((acc, offset) => {
      let nbr = r + offset[0];
      let nbc = c + offset[1];
      if (nbr >= 0 && nbr < 10 && nbc >= 0 && nbc < 10) {
        acc.push ({r: nbr, c: nbc });
      }
      return acc;
    }, []);
  };

  let hasCorrectNumShip = (components, size, expectedNumShip) => {
      return components.filter((c) => { return c.length === size; })
        .length === expectedNumShip;
  };

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      queue.push({r: i, c: j});
      components = [];
      while (queue.length > 0) {
        let {r, c} = queue.shift();
        if (field[r][c] === 1 && !visited[r][c]) {
          visited[r][c] = true;
          components.push({r, c});
          queue = queue.concat(generateNeighbors(r, c));
        }
      }
      if (components.length > 0) { component.push(components); }
    }
  }

  let wrongShape = component.some((c) => { return isOverlapped(c); });
  if (!wrongShape) {

    return hasCorrectNumShip(component, 4, 1) &&
            hasCorrectNumShip(component, 3, 2) &&
            hasCorrectNumShip(component, 2, 3) &&
            hasCorrectNumShip(component, 1, 4);
  }
  return false;
}git