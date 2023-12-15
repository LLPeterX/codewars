/* 
5kyu - Roguelike game 1 - stats and weapon
https://www.codewars.com/kata/651bfcbd409ea1001ef2c3cb/train/javascript
*/

//const ucase = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

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
  static states = ['strength', 'dexterity', 'intelligence'];

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
  } // end constructor

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
        //if (stateValues.every(s => s === 0)) return Item.fullName(this._tmpName);
        let logStr = Item.fullName(this._tmpName) + ': ';
        let statesStr = stateValues
          .map((v, i) => v ? `${Character.states[i]} ${v > 0 ? '+' : ''}${v}` : '')
          .filter(Boolean).join(', ');
        this.items.push(new Item(this._tmpName, str, dex, int));
        this.log.push(logStr + statesStr);
      }
      Reflect.deleteProperty(this, this._tmpName);
      this._tmpName = null;
      let iw = this.items.findIndex(item => item.name === this.weapon.name);
      let max = this.items[iw];
      for (let i = 0; i < this.items.length; i++) {
        if (i !== iw) {
          let item = this.items[i];
          if (item instanceof (Weapon)) {
            let dmgMax = this.getDamage(max);
            let dmgItem = this.getDamage(item);
            if (dmgItem == dmgMax) {
              if (item.enhanced == max.enhanced) {
                //if (i < iw) max = this.items[i]; // WRONG!!
                if (item.name < max.name) max = item;
              }
              if (item.enhanced > max.enhanced) {
                max = item;
              }
            } else if (dmgItem > dmgMax) {
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
    //console.log('--- stats ---');
    let weaponStr = `${Item.fullName(this.weapon.name)}${this.weapon.enhanced ? '(enhanced)' : ''} ${this.getDamage(this.weapon)} dmg`;
    return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${weaponStr}`;
  }

  eventLog() {
    //console.log('--- log ---');
    return this.log.join("\n");
  }
}

// ----- TESTS ----


// const kroker = new Character({ name: 'Kroker', strength: 15, intelligence: 7 });
// //const res = `Kroker\nstr 15\ndex 10\nint 7\nlimbs 32 dmg`;
// console.log('initial:\n', kroker.characterInfo());
// //console.log(kroker.strength);

// kroker.axeOfFire(3, 1, 0, 20);
// //console.log('\nafter axe:\n', kroker.characterInfo()); // 75 dmg - OK
// //console.log(kroker.eventLog()); // "Kroker finds 'Axe of fire'"
// kroker.staffOfWater(1, 0, 2, 60);
// //console.log('\nafter staff:\n', kroker.characterInfo()); // 89 dmg
// console.log(' ==== find second axe ====');
// kroker.axeOfFire(1, 2, 1, 10);
// console.log('\nafter 2 axe:\n', kroker.characterInfo()); // 92 dmg
// kroker.strangeFruit(-2, 0, 2);
// console.log('\nafter fruit:\n', kroker.characterInfo());
// // console.log(kroker.characterInfo()); // 91 dmg
// console.log(kroker.eventLog()); //...

// ---------- TEST 5 (FAIL) ----
// const test = new Character({ name: 'Kroker', strength: 15, intelligence: 7 });
// test.axeOfFire(3, 1, 0, 20);
// test.staffOfWater(1, 0, 2, 60);
// test.axeOfFire(1, 2, 1, 10);
// test.strangeFruit(-2, 0, 2);
// console.log(test.characterInfo()); // `Kroker\nstr 13\ndex 10\nint 9\nStaff of water 91 dmg`;

let test = new Character({ name: 'Porky', strength: 15, intelligence: 7 });
test.pillarOfWater(4, 1, 2, 60);
test.axeOfFire(3, 1, 2, 20);
test.dunderOfWater(0, 2, 0, 1);
test.axeOfFire(4, 0, 1, 60);
test.staffOfWater(4, 1, 2, 60);
console.log(test.characterInfo());
//console.log(test.items.filter(item => item instanceof (Weapon)).map((item, i) => `${i}: ${item.name} ${test.getDamage(item)}`))

// ---- TEST 7 ---
// test = new Character({ name: 'Pinky', strength: 5, dexterity: 5, intelligence: 5 });
// test.strangeFruit(0, 2, -1);
// test.ancientBook(2, 1, -2);
// test.ancientBook(2, 1, -2);
// console.log(test.characterInfo());



/* 
// fail: log test, info tests in random tests
expected 'Hero finds \'Mace of water\'\nHero finds \'Mace of light\'\nHero finds \'Mace of light\'\nHero finds \'Mace of ice\'\nHero finds \'Staff of water\'\nHero finds \'Spear of dsjqcgrbkx\'\nHero finds \'Staff of ice\'\nHero finds \'Spear of dark\'\nHero finds \'Axe of water\'\nHero finds \'Staff of water\'\nStrange gltsbepa: strength +1, dexterity -2, intelligence +1\nAncient book: strength -2, dexterity -2, intelligence +2\nHero finds \'Sword of dark\'\nAncient elixir: strength -2, dexterity -2, intelligence -2\nHero finds \'Mace of ice\'\nHero finds \'Staff of fire\'\nHero finds \'Staff of rbfubr\'\nHero finds \'Staff of fire\'' 
to equal 'Hero finds \'Mace of water\'\nHero finds \'Mace of light\'\nMagical book: \nHero finds \'Mace of light\'\nHero finds \'Mace of ice\'\nHero finds \'Staff of water\'\nHero finds \'Spear of dsjqcgrbkx\'\nHero finds \'Staff of ice\'\nHero finds \'Spear of dark\'\nHero finds \'Axe of water\'\nHero finds \'Staff of water\'\nStrange gltsbepa: strength +1, dexterity -2, intelligence +1\nAncient book: strength -2, dexterity -2, intelligence +2\nHero finds \'Sword of dark\'\nAncient elixir: strength -2, dexterity -2, intelligence -2\nHero finds \'Mace of ice\'\nHero finds \'Staff of fire\'\nHero finds \'Staff of rbfubr\'\nHero finds \'Staff of fire\''
*/