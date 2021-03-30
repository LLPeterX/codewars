/* 
https://www.codewars.com/kata/5af96cea3e9715ec670001dd
Создать класс с методами
*/

class Projectile {
  constructor(h, v, a) {
    this.startHeight = h;
    this.startVelocity = v;
    this.startAngle = this.toRadians(a);
    //this.startAngleDeg = a;
  }
  toRadians(angle) {
    return angle * 0.0174533;
  }
  round(num) {
    return num.toFixed(3).replace(/0{2,}$/,'0');
  }
  heightEq() {
    //return this.round(this.startVe  locity * Math.sin(this.startAngle));
    return `h(t) = -16.0t^2 + ${this.round(this.startVelocity * Math.sin(this.startAngle))}t + ${this.round(this.startHeight)}`;
  }
  horizEq() {
    //return this.round(this.startVelocity * Math.cos(this.startAngle));
    return `x(t) = ${this.round(this.startVelocity * Math.cos(this.startAngle))}t`;
  }
  height(t) {
    return this.round(-16*t*t + this.startVelocity * Math.sin(this.startAngle)*t + this.startHeight);
  }
  horiz(t) {
    return this.round(this.startVelocity * Math.cos(this.startAngle) * t);
  }
  landing() {
    // тут засада: надо вернуть массив [w,0,t] где w - расстояние, где упадет снаряд (h=0) и t - время, через которое он упадет
    // По идее, решение квадратного уравнения, но результат не подходит
    let d = Math.pow(this.startVelocity,2) + 4*16*this.startHeight;
    let x1 = (-this.startVelocity + Math.sqrt(d))/-32;
    let x2 = (-this.startVelocity - Math.sqrt(d))/-32;
    let h = x2/(this.startVelocity * Math.cos(this.startAngle));
    return [x1,x2,h];
     
  }
}

let p = new Projectile(5, 2, 45);
console.log('heightEq',p.heightEq());
console.log('horizEq',p.horizEq());
console.log('height',p.height(0.2));
console.log('horiz',p.horiz(0.2));
console.log('landing',p.landing());

// console.log("0,5,45");
// p = new Projectile(0,5, 45);
// console.log(p.height(0.2),0.067);
// console.log(p.horiz(0.2),0.707);


//console.log(Math.cos(45 * 0.0174533));