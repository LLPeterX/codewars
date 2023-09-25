/*
6kyu - Roman Numerals
https://www.codewars.com/kata/59ea10e87729993f87001647/train/javascript

реализовать:
console.log(0..X) //[0,1,2,3,4,5,6,7,8,9]
*/

//0..IV = [0, 1, 2, 3];

// best

/* 
let Numerals = {'X': 10, 'IV': 4, 'III': 3, 'XIX': 19}
Object.keys(Numerals).map(n => Number.prototype[n] = [...Array(Numerals[n])].map((_, i) => i))
*/

/* 
Object.setPrototypeOf(Number.prototype, new Proxy({}, {
    get (target, p, receiver) {
        if (typeof p !== 'string') return Reflect.get(target, p, receiver)
        const romanNumbers = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        let last = -Infinity
        let result = 0
        for (const s of p.split('').reverse()) {
            if (romanNumbers[s] >= last) {
                result += romanNumbers[s]
            } else {
                result -= romanNumbers[s]
            }
            last = romanNumbers[s]
        }
        if (!(result > 0)) return Reflect.get(target, p, receiver)

        return new Array(result).fill(null).map((_, i) => i)
    }
}))
*/

/* 
const arrayXtoY = (a, b) => [...Array(a).keys()].slice(b);

Number.prototype.X = (function () { return arrayXtoY(10, this); })();
Number.prototype.IV = (function () { return arrayXtoY(4, this); })();
Number.prototype.III = (function () { return arrayXtoY(3, this); })();
Number.prototype.XIX = (function () { return arrayXtoY(19, this); })();
*/

/* 
Number.prototype.X = [...Array(10).keys()]
Number.prototype.IV = [...Array(4).keys()]
Number.prototype.III = [...Array(3).keys()]
Number.prototype.XIX = [...Array(19).keys()]
*/