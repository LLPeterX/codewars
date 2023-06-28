/* 
5kyu - Did you mean ...?
https://www.codewars.com/kata/5259510fc76e59579e0009d4/train/javascript
*/

/*
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  // TODO: this is your task ;)
}
*/

class Dictionary {
  constructor(words) {
    this.words = words;
  }

  levenshtein(s1, s2) {
    let len1 = s1.length, len2 = s2.length;
    let cutHalf = Math.max(len1, len2)
    let flip = cutHalf;
    let minD = Math.max(1, (len1 - len2)), minI = Math.max(1, (len2 - len1));
    let buf = new Array((cutHalf * 2) - 1);

    for (let i = 0; i <= len2; ++i) {
      buf[i] = i * minD;
    }

    for (let i = 0; i < len1; ++i, flip = cutHalf - flip) {
      let ch = s1[i];
      buf[flip] = (i + 1) * minI;
      let k = flip;
      let k2 = cutHalf - flip;
      for (let j = 0; j < len2; ++j, ++k, ++k2) {
        buf[k + 1] = Math.min(buf[k2 + 1] + 1, buf[k] + 1, buf[k2] + (ch === s2[j] ? 0 : 1));
      }
    }
    return buf[len2 + cutHalf - flip];
  }


  findMostSimilar(term) {
    let distance = [0, Infinity];
    for (let i = 0; i < this.words.length; i++) {
      let d = this.levenshtein(term, this.words[i]);
      if (d < distance[1]) {
        distance[0] = i;
        distance[1] = d;
      }
    }
    return this.words[distance[0]];
  }

}

const fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
console.log(fruits.findMostSimilar('strawbery')); // must return "strawberry"
console.log(fruits.findMostSimilar('berry')); // must return "cherry"

const v1 = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(v1.findMostSimilar('heaven'), 'java');
console.log(v1.findMostSimilar('javascript'), 'javascript');

// best

/* 
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  var levenshtein = function(word) {
    if (word === term) {return 0}
    if (term.length === 0) {return word.length}
    if (word.length === 0) {return term.length}
    var v0 = new Array(term.length + 1);
    var v1 = new Array(term.length + 1);
    for (var i=0; i<v0.length; i++) { v0[i] = i; }
    for (var i=0; i<word.length; i++) {
      v1[0] = i+1;
      for (var j=0; j<term.length; j++) {
        var cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
        v1[j+1] = Math.min(v1[j]+1, v0[j+1]+1, v0[j]+cost);
      }
      var tmp = v0;
      v0 = v1;
      v1 = tmp;
    }
    return v0[term.length];
  }
  return this.words.sort(function(a,b){return levenshtein(a)-levenshtein(b)})[0];
}
*/