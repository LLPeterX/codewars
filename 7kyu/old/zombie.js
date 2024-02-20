/* 
7kyu - Will you survive the zombie onslaught?
https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74

Боюсь, вы попали в довольно неудачную ситуацию. Вы повредили ногу и не можете ходить, 
и несколько зомби движутся к вам, намереваясь съесть ваши мозги. 
К счастью, вы отличный стрелок, и у вас есть надежная винтовка под рукой.

Зомби начинают с range метров и движутся со скоростью 0,5 метра в секунду. 
Каждую секунду вы сначала стреляете в одного зомби, а затем оставшиеся зомби продвигаются вперед еще на 0,5 метра.

Если range=0, или кончились патроны вам пиздец.

Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have

If you shoot all the zombies, return "You shot all X zombies." 
If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed." 
If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."
If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".
*/

function zombieShootout(zombies, range, ammo) {
  let killed = 0;
  while (zombies > 0 && range > 0 && ammo > 0) {
    range -= 0.5;
    ammo--;
    zombies--;
    killed++;
  }
  if (zombies === 0) return `You shot all ${killed} zombies.`;
  if (range === 0) return `You shot ${killed} zombies before being eaten: overwhelmed.`
  return `You shot ${killed} zombies before being eaten: ran out of ammo.`;
}

console.log(zombieShootout(3, 10, 10), "You shot all 3 zombies.");
console.log(zombieShootout(100, 8, 200), "You shot 16 zombies before being eaten: overwhelmed.");
console.log(zombieShootout(50, 10, 8), "You shot 8 zombies before being eaten: ran out of ammo.");

// best
/* 
function zombie_shootout(zombies, range, ammo) {
  const steps = range * 2;
  
  if (ammo < steps && zombies > ammo) {
    return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
  }
  
  if (zombies > steps) {
    return `You shot ${steps} zombies before being eaten: overwhelmed.`;
  }

  return `You shot all ${zombies} zombies.`;
}
*/

/* 
const zombie_shootout = (zombies, range, ammo, zCount = 0) => {
  if (!zombies) return `You shot all ${zCount} zombies.`
  if (!range) return `You shot ${zCount} zombies before being eaten: overwhelmed.`
  if (!ammo) return `You shot ${zCount} zombies before being eaten: ran out of ammo.`
  return zombie_shootout(zombies - 1, range - 0.5, ammo - 1, zCount + 1);
};
*/

/* 
function zombie_shootout(zomb, ran, pill) {
  if(zomb <= ran*2 && zomb <= pill) return `You shot all ${zomb} zombies.`
  if(zomb > ran*2 && zomb <= pill) return `You shot ${ran*2} zombies before being eaten: overwhelmed.`
  if(zomb > ran*2 && zomb > pill && ran*2 <= pill) return `You shot ${ran*2} zombies before being eaten: overwhelmed.`
  if(zomb > pill) return `You shot ${pill} zombies before being eaten: ran out of ammo.`
}
*/

/* 
function zombie_shootout(z, r, a) {
  r = 2*r;
  a = a+0.1;
  if ((z<=r)&&(z<=a))         return `You shot all ${z} zombies.`;
  else if (r==Math.min(r, a)) return `You shot ${r} zombies before being eaten: overwhelmed.`;
  else                        return `You shot ${Math.floor(a)} zombies before being eaten: ran out of ammo.`
}
*/