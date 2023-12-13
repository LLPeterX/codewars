/* 
5kyu - Roguelike game 1 - stats and weapon
https://www.codewars.com/kata/651bfcbd409ea1001ef2c3cb/train/javascript
*/

// см. 3kyu/Thing1.js


/* 
TODO:
1) реализовать items[]
2) при добавлении смотреть - если this._tmpName есть в items[]
   то изменить существующий, иначе - добавить
3) Перенести ucase() в Item
4) Item.toString() = Item.fullName(this.name) - ?? надо ли?
*/
const ucase = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

class Item {
  static regexWeapon = new RegExp("(.+?)Of(.+)");
  static isWeapon(itemName) {
    return Item.regexWeapon.test(itemName);
  }

  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }

  static fullName(name) {
    let m = name.match(Item.regexWeapon);
    if (m) {
      let [, first, second] = m;
      return `${ucase(first)} of ${second.toLowerCase()}`;
    } else {
      let words = name.match(/([A-Z][a-z]+|[a-z]+)/g);
      if (!words || words.length == 1) return name;
      words = words.map(w => w.toLowerCase());
      words[0] = ucase(words[0]);
      return words.join(' ');
    }
  }
}


class Weapon extends Item {

  constructor(name, str = 1, dex = 1, int = 1, extra = 0) {
    super(name);
    this.enhanced = false;
    this.str = str;
    this.dex = dex;
    this.int = int;
    this.extra = extra;
  }


  toString() {
    return this.name + (this.enhanced) ? '(enhanced)' : '';
  }

  enhance(str, dex, int, extra) {
    console.log('...enhacing ', this.name);
    this.enhanced = true;
    this.str = Math.max(this.str, str);
    this.dex = Math.max(this.dex, dex);
    this.int = Math.max(this.int, int);
    this.extra = Math.max(this.extra, extra);
  }
}

class Character {
  static states = ['strength', 'dexterity', 'intelligence'];

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
          //existing prop/method
          return target[name];
        } else {
          // add temp method
          target._tmpName = name;
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
      if (Item.isWeapon(this._tmpName)) {
        if (this.weapon.name === this._tmpName) {
          // enhance
          this.weapon.enhance(str, dex, int, extra);
        } else {
          let newWeapon = new Weapon(this._tmpName, str, dex, int, extra);
          if (this.getDamage(newWeapon) > this.getDamage(this.weapon)) {
            console.log('set new weapon ', this._tmpName);
            this.weapon = newWeapon;
          }
        }
        this.log.push(`${this.name} finds '${Item.fullName(this._tmpName)}'`);
      } else {
        this.strength += str;
        this.dexterity += dex;
        this.intelligence += int;
        let stateValues = [str, dex, int];
        if (stateValues.every(s => s === 0)) return Item.fullName(this._tmpName);
        let logStr = Item.fullName(this._tmpName) + ': ';
        let statesStr = stateValues.map((v, i) => v ? `${Character.states[i]} ${v > 0 ? '+' : ''}${v}` : '').filter(Boolean).join(' ');
        this.log.push(logStr + statesStr);
      }
      //Reflect.deleteProperty(this, this._tmpName);
      this._tmpName = null;
    }
  }

  getDamage(weapon = this.weapon) {
    return weapon.str * this.strength +
      weapon.dex * this.dexterity +
      weapon.int * this.intelligence +
      weapon.extra;
  }

  characterInfo() {
    //console.log(this.weapon);
    console.log('--- stats ---');
    let weaponStr = `${Item.fullName(this.weapon.name)}${this.weapon.enhanced ? '(enhanced)' : ''} ${this.getDamage()} dmg`;
    return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${weaponStr}`;
  }

  eventLog() {
    console.log('--- log ---');
    return this.log.join("\n");
  }
}

// ----- TESTS ----


const kroker = new Character({ name: 'Kroker', strength: 15, intelligence: 7 });
//const res = `Kroker\nstr 15\ndex 10\nint 7\nlimbs 32 dmg`;
console.log('initial', kroker.characterInfo());
//console.log(kroker.strength);

kroker.axeOfFire(3, 1, 0, 20);
kroker.staffOfWater(1, 0, 2, 60);
console.log('\nafter staff', kroker.characterInfo());
kroker.axeOfFire(1, 2, 1, 10);
console.log('\nafter 2 axe', kroker.characterInfo());
kroker.strangeFruit(-2, 0, 2);
console.log('\nafter fruit', kroker.characterInfo());
//console.log(kroker.characterInfo()); // str 15 dex 10 int 7 axe 75
console.log(kroker.eventLog()); // str 15 dex 10 int 7 axe 75