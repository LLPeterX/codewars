/* 
3kyu - The builder of things
https://www.codewars.com/kata/5571d9fc11526780a000011a

onst jane = new Thing('Jane')
jane.name // => 'Jane'

// can define boolean methods on an instance
jane.is_a.person
jane.is_a.woman
jane.is_not_a.man

jane.is_a_person // => true
jane.is_a_man // => false

// can define properties on a per instance level
jane.is_the.parent_of.joe
jane.parent_of // => 'joe'

// can define number of child things
// when more than 1, an array is created
jane.has(2).legs
jane.legs.length // => 2
jane.legs[0] instanceof Thing // => true

// can define single items
jane.has(1).head

jane.head instanceof Thing // => true

// can define number of things in a chainable and natural format
jane.has(2).arms.each(arm => having(1).hand.having(5).fingers )

jane.arms[0].hand.fingers.length // => 5

// can define properties on nested items
jane.has(1).head.having(2).eyes.each( eye => being_the.color.blue.having(1).pupil.being_the.color.black )

// can define methods
jane.can.speak('spoke', phrase =>
  `${name} says: ${phrase}`)

jane.speak("hello") // => "Jane says: hello"

// if past tense was provided then method calls are tracked
jane.spoke // => ["Jane says: hello"]
*/

// см. решение https://gist.github.com/nramirez/625fdcf5cf3e2697242befd4417225a6

class Thing {
  constructor(name) {
    this.name = name;
    this.__lookupGetter__ = (n) => this[n];
    this.is_a = new Proxy(this, {
      get: (target, name) => {
        if (typeof n === 'symbol') {
          return target[n];
        }
        const propName = `is_a_${name}`;
        Reflect.defineProperty(target, propName, { value: true });
        return target[propName];
      }
    });

    this.is_not_a = new Proxy(this, {
      get: (target, name) => {
        const propName = `is_a_${name}`;
        Reflect.defineProperty(target, propName, { value: false });
        return target[propName];
      }
    });

    this.and_the = this.being_the = this.is_the = new Proxy(this, {
      get: (target, name) => {
        return new Proxy(target, {
          get: (t, tempProxName) => {
            Reflect.defineProperty(t, name, { value: tempProxName });
            return target;
          }
        });;
      }
    });

    this.having = this.has = (n) => new Proxy(this, {
      get: (target, name) => {
        let result;
        if (n > 1) {
          const singularName = name.substring(0, name.length - 1);
          result = new Array(n).fill(singularName).map(n => new Thing(n));
          result.each = (callback) => {
            let stringFunc = callback.toString();
            const arrowIndex = stringFunc.indexOf('=>');
            const leProp = stringFunc.substring(0, arrowIndex - 1);
            stringFunc = `${leProp} => ${leProp}.${stringFunc.substring(arrowIndex + 3)}`;
            const evalFunction = eval(stringFunc);

            result.forEach(evalFunction);
          }
        } else {
          result = new Thing(name);
        }

        Reflect.defineProperty(target, name, { value: result });
        return target[name];
      }
    });

    this.can = new Proxy(this, {
      get: (target, name) => {
        const tempFuncCreator = (first, second) => {
          let callback = second ? second : first;
          let cacheProp = second ? first : null;
          let stringFunc = callback.toString();
          let finalFunc = stringFunc;
          let interpolationRegex = /\${(\w+)}/g;
          let leMatch;
          while (leMatch = interpolationRegex.exec(stringFunc)) {
            const value = target[leMatch[1]];
            if (value) {
              finalFunc = finalFunc.replace(leMatch[0], value);
            }
          }
          finalFunc = eval(finalFunc);
          if (cacheProp) {
            finalFunc = new Proxy(finalFunc, {
              apply: (evalFunction, thisArg, argumentsList) => {
                const history = target[cacheProp] ? target[cacheProp] : new Array();
                history.push(evalFunction.apply(thisArg, argumentsList))
                Reflect.defineProperty(target, cacheProp, { value: history });
                return target;
              }
            });
          }
          Reflect.defineProperty(target, name, { value: finalFunc });
        };
        return tempFuncCreator;
      }
    });
  }
}
