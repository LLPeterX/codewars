/* 
5kyu - Roguelike game 1 - stats and weapon
https://www.codewars.com/kata/651bfcbd409ea1001ef2c3cb/train/javascript
*/

const { formToJSON } = require("axios");


// см. 3kyu/Thing1.js
// я запутался.
class Item {
  constructor(name) {
    this.name = name;
    //this.dmg = 0;
  }
}


class Weapon extends Item {

  static re = new RegExp("(.+?)Of(.+)");

  constructor(name, str = 1, dex = 1, int = 1, extra = 0) {
    super(name);
    this.enhanced = false;
    this.setDamage(str, dex, int, extra);
  }



  static isWeapon(itemName) {
    return Weapon.re.test(itemName);
  }

  setDamage(str, dex, int, extra) {
    this.str = str;
    this.dex = dex;
    this.int = int;
    this.extra = extra;
  }

  toString() {
    return this.name + (this.enhanced) ? '(enhanced)' : '';
  }

  enhance(str, dex, int, extra) {
    this.enhanced = true;
    this.str = Math.max(this.str, str);
    this.dex = Math.max(this.dex, dex);
    this.int = Math.max(this.int, int);
    this.extra = Math.max(this.extra, extra);
  }


}

class Character {

  constructor(info) {
    this.name = info.name ?? 'Hero';
    this.strength = info.strength ?? 10;
    this.dexterity = info.dexterity ?? 10;
    this.intelligence = info.intelligence ?? 10;
    this.weapon = new Weapon('limbs');
    this.log = [];
    this._tmpName = null;

    return new Proxy(this, {
      get: (target, name) => {
        if (name in target) {
          return target[name];
        } else {
          // add Item
          target._tmpName = name;
          // if (Weapon.isWeapon(name)) {
          //   console.log('weapon!');
          //   Reflect.defineProperty(target, name, { value: target.addItem });
          //   return target[name];
          // }
          Reflect.defineProperty(target, name, { value: target.addItem });
          return target[name];
        }
      }
    });
  } // end constructor

  addItem(str, dex, int, extra = 0) {
    console.log('call addItem', this._tmpName);
    const param2str = n => "- +"[Math.sign(n) + 1] + n;
    if (this._tmpName) {
      if (Weapon.isWeapon(this._tmpName)) {
        if (this.weapon.name === this._tmpName) {
          // enhance
          this.weapon.enhance(str, dex, int, extra);
        } else {
          let newWeapon = new Weapon(this._tmpName, str, dex, int, extra);
          if (this.damage(newWeapon) > this.damage(this.weapon)) {
            console.log('set new weapon');
            this.weapon = newWeapon;
          }
        }
        this.log.push(`${this.name} finds '${this._tmpName}'`)

      } else {
        this.strength += str;
        this.dexterity += dex;
        this.intelligence += int;
        let logStr = this._tmpName + ': ';
        if (str) logStr += 'strength ' + param2str(str);
        if (dex) logStr += 'dexterity ' + param2str(dex);
        if (int) logStr += 'intelligence ' + param2str(int);
        this.log.push(logStr);
      }
      //delete this[this._tmpName];
      Reflect.deleteProperty(this, this._tmpName);
    }


  }

  damage(weapon) {
    return weapon.str * this.strength +
      weapon.dex * this.dexterity +
      weapon.int * this.intelligence +
      weapon.extra;
  }

  characterInfo() {
    // let w = this.weapons.sort((a, b) => b.damage - a.damage)[0];
    // let weaponStr = `${w.name}${w.enhanced ? '(enhanced)' : ''} ${this.damage} dmg`;
    // return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${weaponStr}`;

    let weaponStr = `${this.weapon.name}${this.weapon.enhanced ? '(enhanced)' : ''} ${this.damage(this.weapon)} dmg`;
    return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${weaponStr}`;
  }

  eventLog() {
    return this.log.join("\n");
  }
}

// ----- TESTS ----


const kroker = new Character({ name: 'Kroker', strength: 15, intelligence: 7 });
const res = `Kroker\nstr 15\ndex 10\nint 7\nlimbs 32 dmg`;
//console.log(kroker.characterInfo());
//console.log(kroker.strength);

// const test = new Character({ name: 'Kroker', strength: 15, intelligence: 7 });
kroker.axeOfFire(3, 1, 0, 20);
kroker.axeOfFire(1, 2, 1, 10);
// const res = `Kroker\nstr 15\ndex 10\nint 7\nAxe of fire 75 dmg`;
console.log(kroker.characterInfo()); // str 15 dex 10 int 7 axe 75