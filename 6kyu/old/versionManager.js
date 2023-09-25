/* 
6kyu - Version Manager
https://www.codewars.com/kata/5bc7bb444be9774f100000c3/solutions/javascript
*/

class VersionManager {
  constructor(str) {
    if (!str) {
      this._major = 0;
      this._minor = 0;
      this._patch = 1;
    } else {
      if (!/^(\d+)\.?(\d+)?\.?(\d+)?.*/.test(str)) {
        throw new Error("Error occured while parsing version!");
      }
      let [major, minor, patch] = str.split('.');
      this._major = major || 0;
      this._minor = minor || 0;
      this._patch = patch || 0;
      if (isNaN(+this._major) || isNaN(+this._minor) || isNaN(+this._patch)) {
        throw new Error('Error occured while parsing version!');
      }
    }
    this.state = [];
  }

  major() {
    this.state.push([this._major, this._minor, this._patch])
    ++this._major;
    this._minor = 0;
    this._patch = 0;

    return this;
  }
  minor() {
    this.state.push([this._major, this._minor, this._patch])
    ++this._minor;
    this._patch = 0;
    return this;
  }

  patch() {
    this.state.push([this._major, this._minor, this._patch])
    ++this._patch;
    return this;
  }

  release() {
    return `${this._major}.${this._minor}.${this._patch}`;
  }

  rollback() {
    if (this.state.length <= 0) {
      throw new Error('Cannot rollback!');
    } else {
      let [mj, mi, pa] = this.state.pop();
      this._major = mj; this._minor = mi; this._patch = pa;
    }
    return this;
  }
}
const vm = (str) => new VersionManager(str);

// console.log('-- init test --');
// console.log(vm().release(), '0.0.1', 'Default initial version');
// console.log(vm('').release(), '0.0.1', 'Default initial version');
// console.log(vm('1.2.3').release(), '1.2.3', 'No version changes');
// console.log(vm('1.2.3.4').release(), '1.2.3', 'No version changes');
// console.log(vm('1.2.3.d').release(), '1.2.3', 'No version changes');
// console.log(vm('1').release(), '1.0.0', 'Default minor version is 0');
// console.log(vm('1.1').release(), '1.1.0', 'Default patch is 0');
// console.log('--test major --');
// console.log(vm().major().release(), '1.0.0');
// console.log(vm('1.2.3').major().release(), '2.0.0');
// console.log(vm('1.2.3').major().major().release(), '3.0.0');
// console.log('-- test minor--');
// console.log(vm().minor().release(), '0.1.0');
// console.log(vm('1.2.3').minor().release(), '1.3.0');
// console.log(vm('1').minor().release(), '1.1.0');
// console.log(vm('4').minor().minor().release(), '4.2.0');
// console.log('--patch test--');
// console.log(vm().patch().release(), '0.0.2');
// console.log(vm('1.2.3').patch().release(), '1.2.4');
// console.log(vm('4').patch().patch().release(), '4.0.2');
console.log('--rollback test--');
console.log(vm().major().rollback().release(), '0.0.1');
console.log(vm().minor().rollback().release(), '0.0.1');
console.log(vm().patch().rollback().release(), '0.0.1');
console.log(vm().major().patch().rollback().release(), '1.0.0');
console.log(vm().major().patch().rollback().major().rollback().release(), '1.0.0');
console.log('--- errors --');
//console.log(vm('a.b.c'));
//console.log(vm().rollback().release());


//best
/*
const vm = function (a=''){
      a = (a||'0.0.1').match(/(\w+)?\.?(\w+)?\.?(\w+)?/).slice(1,4)
      if (a.some(x=>x&&x.search(/[^0-9]/)!=-1) ) throw new Error("Error occured while parsing version!")
      let v = a.map(x=>+x||0), prev = []
      return {major:function(){
                prev.push(v.slice())
                v = [v[0]+1,0,0]
                return this
              },
              minor:function(){
                prev.push(v.slice())
                v = [v[0],v[1]+1,0]
                return this
              },
              patch:function(){
                prev.push(v.slice())
                v[2]+=1
                return this
              },
              release:()=>v.join`.`,
              rollback:function(){
                  v = prev.pop()
                  if (!v) throw new Error('Cannot rollback!')
                  return this
              }
      }
}
 */
