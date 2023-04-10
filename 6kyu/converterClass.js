/* 
6kyu - Converter
https://www.codewars.com/kata/596fd97f65ad2fc072000037/train/javascript

Create class Converter that will have:

Properties:

- number that represent size amount (not necessarily integer).
- string that represent current unit type. Unit type can be only one of the next: 'B', 'KB', 'MB', 'GB', 'TB'

Methods:

- unit: return current unit type;
- size: return current size and unit as a string '19 MB' or '38.45 GB' or '7.5 TB'
- toB: convert size to Bytes and unit to 'B'
- toKB: convert size to Kilobytes and unit to 'KB'
- toMB: convert size to Megabyte and unit to 'MB'
- toGB: convert size to Gigabyte and unit to 'GB'
- toTB: convert size to Terabyte and unit to 'TB'
 */

class Converter {
  #mul = {
    'B': 1,
    'KB': 1024,
    'MB': 1024 ** 2,
    'GB': 1024 ** 3,
    'TB': 1024 ** 4
  };
  #size;
  constructor(value, unit) {
    this.bytes = value * this.#mul[unit];
    this.unit = unit;
    this.#size = value;
  }

  #round(value) {
    return Math.floor(value * 1000) / 1000;
  }

  get size() {
    return `${this.#size} ${this.unit}`;
  }

  toB() {
    this.#size = this.bytes;
    this.unit = 'B';
  }

  toKB() {
    this.#size = this.#round(this.bytes / this.#mul['KB']);
    this.unit = 'KB';
  }

  toMB() {
    this.#size = this.#round(this.bytes / this.#mul['MB']);
    this.unit = 'MB';
  }

  toGB() {
    this.#size = this.#round(this.bytes / this.#mul['GB']);
    this.unit = 'GB';
  }

  toTB() {
    this.#size = this.#round(this.bytes / this.#mul['TB']);
    this.unit = 'TB';
  }
}

const file = new Converter(1099511627776, "B");
file.toKB();
console.log(file.unit, "KB", "Wrong unit");
console.log(file.size, "1073741824 KB", "Wrong size");
file.toMB();
console.log(file.unit, "MB", "Wrong unit");
console.log(file.size, "1048576 MB", "Wrong size");



// cool but not best
/* 
class Converter {
  constructor(size,unit){
    this.size=`${size} ${unit}`;
    this.unit=unit;
    this.units=["B","KB","MB","GB","TB"];
    this.units.forEach(u=>{
      this[`to${u}`]=()=>{
        const d=this.units.indexOf(u)-this.units.indexOf(this.unit);
        this.unit=u;
        this.size=`${Math.floor(+this.size.replace(/[^\d.]/g,"")/Math.pow(2,10*d)*1000)/1000} ${u}`;
      }
    })
  }
}
*/