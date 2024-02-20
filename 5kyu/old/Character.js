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


// my best. Other:
/* 
class Character {
  constructor({
    name = "Hero",
    strength = 10,
    dexterity = 10,
    intelligence = 10,
  } = {}) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.weapon;
    this.weapons = {};
    this.log = [];

    return new Proxy(this, {
      get(target, prop) {
        if (prop in target) {
          return target[prop];
        }
        return function () {
          const args = [...arguments];
          if (args.length === 4) {
            const weaponName = prop.toLowerCase().split("of").join(" of ");
            const capitalizedWeaponName =
              weaponName.charAt(0).toUpperCase() + weaponName.slice(1);

            const newWeapon = {
              name: capitalizedWeaponName,
              damage: args,
              isEnhanced: false,
            };

            const enhancedWeapon = this.enhance(newWeapon);

            this.weapons[newWeapon.name] = {
              damage: enhancedWeapon.damage,
              isEnhanced: enhancedWeapon.isEnhanced,
            };
            this.pickStrongestWeapon();

            this.log.push(`${this.name} finds '${enhancedWeapon.name}'`);
          } else {
            const [strength, dexterity, intelligence] = args;
            this.strength = Math.max(0, this.strength + strength);
            this.dexterity = Math.max(0, this.dexterity + dexterity);
            this.intelligence = Math.max(0, this.intelligence + intelligence);
            this.pickStrongestWeapon();

            const itemName = prop
              .split(/(?=[A-Z])/)
              .map((str) => str.toLowerCase())
              .join(" ");

            const capitalizedItemName =
              itemName.charAt(0).toUpperCase() + itemName.slice(1);
            const addedStats = [
              strength
                ? `strength ${strength > 0 ? `+${strength}` : strength}`
                : undefined,
              dexterity
                ? `dexterity ${dexterity > 0 ? `+${dexterity}` : dexterity}`
                : undefined,
              intelligence
                ? `intelligence ${
                    intelligence > 0 ? `+${intelligence}` : intelligence
                  }`
                : undefined,
            ].filter((item) => item !== undefined);

            this.log.push(`${capitalizedItemName}: ${addedStats.join(", ")}`);
          }
        };
      },
    });
  }

  enhance(newWeapon) {
    if (this.weapons[newWeapon.name]) {
      const currentWeapon = this.weapons[newWeapon.name];
      const enhancedDamage = newWeapon.damage.map((damage, index) => {
        return Math.max(damage, currentWeapon.damage[index]);
      });

      return {
        name: newWeapon.name,
        damage: enhancedDamage,
        isEnhanced: true,
      };
    }
    return newWeapon;
  }

  pickStrongestWeapon() {
    let strongestWeapons = [];
    let maxDamage = 0;

    for (let key in this.weapons) {
      const currentDamage = this.calcDamage(this.weapons[key].damage);

      if (currentDamage > maxDamage) {
        strongestWeapons = [
          {
            name: key,
            damage: this.weapons[key].damage,
            isEnhanced: this.weapons[key].isEnhanced,
          },
        ];
        maxDamage = currentDamage;
      } else if (currentDamage === maxDamage) {
        strongestWeapons.push({
          name: key,
          damage: this.weapons[key].damage,
          isEnhanced: this.weapons[key].isEnhanced,
        });
      }
    }

    this.weapon = strongestWeapons.sort((w, nw) =>
      w.name.localeCompare(nw.name)
    )[0];
  }

  calcDamage(weaponStats) {
    const stats = [this.strength, this.dexterity, this.intelligence].map(
      (stat) => (stat < 0 ? 0 : stat)
    );

    if (!weaponStats) {
      return stats.reduce((acc, curr) => acc + curr, 0);
    }

    const [strengthMult, dexterityMult, intelligenceMult, extraDamage] =
      weaponStats;
    return (
      strengthMult * stats[0] +
      dexterityMult * stats[1] +
      intelligenceMult * stats[2] +
      extraDamage
    );
  }

  characterInfo() {
    const weaponName = this.weapon?.name ? this.weapon.name : "limbs";
    const weaponDamage = this.calcDamage(this.weapon?.damage);
    return `${this.name}
str ${this.strength}
dex ${this.dexterity}
int ${this.intelligence}
${weaponName}${
      this.weapon?.isEnhanced ? "(enhanced)" : ""
    } ${weaponDamage} dmg`;
  }

  eventLog() {
    const res = this.log.join("\n");
    return res;
  }
}
*/


/* 
class Weapon {
    constructor(name, str, dex, int, xdmg) {
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.int = int;
        this.xdmg = xdmg
        this.enhanced = false;
    }

    toString() {
        return this.name.toString() + (this.enhanced ? "(enhanced)" : "");
    }

    enhanceWeapon(weapon) {
        this.str = Math.max(this.str, weapon.str);
        this.dex = Math.max(this.dex, weapon.dex);
        this.int = Math.max(this.int, weapon.int);
        this.xdmg = Math.max(this.xdmg, weapon.xdmg);
        this.enhanced = true;
    }
}

class Character {

    constructor({ name = "Hero", strength = 10, dexterity = 10, intelligence = 10 } = {}) {
        this.name = name;
        this.str = strength;
        this.dex = dexterity;
        this.int = intelligence;
        this.weapon = new Weapon("limbs", 1, 1, 1, 0);
        this.stash = [];
        this.eventsStore = [];
        return this.proxy();
    }

    characterInfo() {
        return this.name + "\n"
            + `str ${this.str}` + "\n"
            + `dex ${this.dex}` + "\n"
            + `int ${this.int}` + "\n"
            + `${this.weapon.toString()} ${this.weaponDamage()} dmg`;
    }

    eventLog() {
        return this.eventsStore.join('\n');
    }

    calculateDamage(weapon) {
        return (this.str * weapon.str)
            + (this.dex * weapon.dex)
            + (this.int * weapon.int)
            + weapon.xdmg;
    }

    weaponDamage() {
        return this.calculateDamage(this.weapon);
    }

    addNewWeapon(weapon) {
        var weaponExists = this.stash.findIndex((w) => w.name == weapon.name);

        if (weaponExists != -1) {
            this.stash[weaponExists].enhanceWeapon(weapon);
        }
        else {
            this.stash.push(weapon);
        }
        this.updateChoiceOfWeapon();

        let eventDescription = `${this.name} finds '${weapon.name}'`;
        this.addEventLog(eventDescription);
    }

    addModifier(eventName, str, dex, int) {
        this.str += str;
        this.dex += dex;
        this.int += int;
        this.updateChoiceOfWeapon();

        let eventDescription = `${eventName}:`;
        if (str != 0) {
            eventDescription += ` strength `;
            eventDescription += str < 0 ? str : "+" + str;
        }
        if (dex != 0) {
            eventDescription += str != 0 ? ',' : '';
            eventDescription += ` dexterity `;
            eventDescription += dex < 0 ? dex : "+" + dex;
        }
        if (int != 0) {
            eventDescription += (str != 0 || dex != 0) ? ',' : '';
            eventDescription += ` intelligence `;
            eventDescription += int < 0 ? int : "+" + int;
        }
        if (str == 0 && dex == 0 && int == 0) eventDescription += ' ';

        this.addEventLog(eventDescription);
    }

    updateChoiceOfWeapon() {
        if (this.stash.length != 0) {
            this.stash.sort((a, b) => {

                const damageComparison = this.calculateDamage(b) - this.calculateDamage(a);

                if (damageComparison != 0) return damageComparison;

                return a.name.localeCompare(b.name);

            });

            this.weapon = this.stash[0];
        }
    }

    addEventLog(eventDescription) {
        this.eventsStore.push(eventDescription);
    }

    proxy() {
        var handler = {
            get: function (obj, prop) {
                if (typeof obj[prop] === "function") {
                    return (...args) => obj[prop](...args);
                }
                if (prop.includes("Of")) {
                    return (...args) => {
                        let weaponName = obj["getWeaponName"](prop);
                        let [str, dex, int, xdmg] = args;
                        let newWeapon = new Weapon(weaponName, str, dex, int, xdmg);
                        obj["addNewWeapon"](newWeapon);
                    };
                }
                else {
                    return (...args) => {
                        if (args.length == 3) {
                            let eventName = obj["getEventName"](prop);
                            let [str, dex, int] = args;
                            obj["addModifier"](eventName, str, dex, int);
                        }
                    }
                }

            }
        }

        return new Proxy(this, handler);
    }

    getWeaponName(name) {
        let [type, _, power] = name.split(/(?=[A-Z])/);
        let weaponName = type.slice(0, 1).toUpperCase() + type.slice(1) + ` of ${power.toLowerCase()}`;
        return weaponName;
    }

    getEventName(name) {
        let eventNames = name.split(/(?=[A-Z])/);
        let eventFN = eventNames[0];
        eventNames = eventNames.map((n) => n.toLowerCase());

        let eventName = eventFN.slice(0, 1).toUpperCase() + eventFN.slice(1) + " " + eventNames.slice(1).join(' ');
        return eventName;
    }
}
*/