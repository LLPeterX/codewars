/* 
7kyu - What a "Classy" Song
https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
*/

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }
  
  howMany(arr) {
    let uniques = [...new Set(arr.map(e=>e.toLowerCase()))].filter(e => !this.listeners.includes(e));
    this.listeners = [...this.listeners, ...uniques];
    return uniques.length;
  }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']),5);
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']),2);
console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']),2);
console.log(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']),1);
console.log(mountMoose.howMany(['Jack', 'jacK']),1);

//best
/* 
class Song{
  constructor(title, artist){
    this.title = title;
    this.artist = artist;
    this.listener = new Set()
  };
  howMany(people){
    let oldSize = this.listener.size;
    people.map(p => this.listener.add(p.toLowerCase()));
    return this.listener.size - oldSize;
  }
}
*/