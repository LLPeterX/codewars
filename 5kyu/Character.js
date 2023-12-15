/* 
5kyu - Roguelike game 1 - stats and weapon
https://www.codewars.com/kata/651bfcbd409ea1001ef2c3cb/train/javascript
*/

class Item {
  static regexWeapon = new RegExp("(.+?)Of(.+)");

  constructor(name, str, dex, int, extra = 0) {
    this.name = name;
    this.str = str;
    this.dex = dex;
    this.int = int;
    this.extra = extra;
  }

  toString() {
    return this.name;
  }

  static fullName(name) {
    const ucase = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
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
    super(name, str, dex, int, extra);
    this.enhanced = false;
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
    this.items = [new Weapon('limbs')];
    this.weapon = this.items[0];
    this.log = [];
    this._tmpName = null;


    return new Proxy(this, {
      get: (target, name) => {
        if (!(name in target) || target.items.find(item => item.name === name)) {
          target._tmpName = name;
          Reflect.defineProperty(target, name, { value: target.addItem });
        }
        return target[name];
      }
    });
  }

  addItem(str, dex, int, extra = 0) {
    if (this._tmpName) {
      if (Item.regexWeapon.test(this._tmpName)) {
        let existingWeapon = this.items.find(item => item.name === this._tmpName);
        if (existingWeapon) {
          existingWeapon.enhance(str, dex, int, extra);
        } else {
          this.items.push(new Weapon(this._tmpName, str, dex, int, extra));
        }
        this.log.push(`${this.name} finds '${Item.fullName(this._tmpName)}'`);
      } else {
        this.strength += str;
        this.dexterity += dex;
        this.intelligence += int;
        let stateValues = [str, dex, int];
        let logStr = Item.fullName(this._tmpName) + ': ';
        let statesStr = stateValues
          .map((v, i) => v ? `${['strength', 'dexterity', 'intelligence'][i]} ${v > 0 ? '+' : ''}${v}` : '')
          .filter(Boolean).join(', ');
        this.items.push(new Item(this._tmpName, str, dex, int));
        this.log.push(logStr + statesStr);
      }
      this._tmpName = null;
      let iw = this.items.findIndex(item => item.name === this.weapon.name);
      let max = this.items[iw];
      for (let i = 0; i < this.items.length; i++) {
        if (i !== iw) {
          let item = this.items[i];
          if (item instanceof (Weapon)) {
            let dmgMax = this.getDamage(max);
            let dmgItem = this.getDamage(item);
            if ((dmgItem == dmgMax && item.name < max.name) || dmgItem > dmgMax) {
              max = item;
            }
          }
        }
      }
      this.weapon = max;
    }
  }

  getDamage(weapon) {
    return weapon.str * this.strength +
      weapon.dex * this.dexterity +
      weapon.int * this.intelligence +
      weapon.extra;
  }

  characterInfo() {
    let weaponStr = `${Item.fullName(this.weapon.name)}${this.weapon.enhanced ? '(enhanced)' : ''} ${this.getDamage(this.weapon)} dmg`;
    return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${weaponStr}`;
  }

  eventLog() {
    return this.log.join("\n");
  }
}

