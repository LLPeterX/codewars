/* 
5kyu - URL shortener
https://www.codewars.com/kata/5fee4559135609002c1a1841/train/javascript

Write a method shorten, which receives a long URL and returns a short URL starting with short.ly/, consisting only of lowercase letters (and one dot and one slash) and max length of 13.
*/



/* 
class UrlShortener {
  constructor() {
    //this.base = [456976, 17576, 676, 26, 0];
    this.base = [0, 1, 27, 703, 18279, 475255, 12356631];
    this.index = 0;
    this.cacheLong = new Map();
    this.cacheShort = new Map();
  }

  // decode(str) {
  //   let result = 0
  //   for (let i = 0; i < this.base.length; i++) {
  //     result += (str.charCodeAt(i) - 97) * 26 ** (str.length - i - 1);
  //   }
  //   return result + this.base[str.length];
  // }

  // getN(x) {
  //   for (let i = 0; i < this.base.length; i++) {
  //     if (this.base[i] <= x && this.base[i + 1] > x) return i;
  //   }
  //   return 0;
  // }

  encode(x) {
    //let index = this.getN(x);
    let index = this.base.findIndex((v, i, a) => v <= x && a[i + 1] > x);
    x -= this.base[index];
    let result = "";
    for (let i = 0; i < index; i++) {
      let tmp = ~~(x / (26 ** (index - i - 1)));
      result += String.fromCharCode(97 + tmp);
      x -= tmp * (26 ** (index - i - 1));
    }
    return result;
  }

  shorten(longURL) {
    let shortURL;
    if (!this.cacheLong.has(longURL)) {
      ++this.index;
      shortURL = this.encode(this.index);
      this.cacheLong.set(longURL, shortURL);
      this.cacheShort.set(shortURL, longURL);
    } else {
      shortURL = this.cacheLong.get(longURL);
    }
    return 'short.ly/' + shortURL;

  }

  redirect(shortURL) {
    let url = shortURL.replace(/^short.ly\//i, '');
    return this.cacheShort.get(url);
  }
}
 */

class UrlShortener {
  constructor() {
    this.pow26 = [0, 1, 27, 703, 18279, 475255, 12356631];
    this.index = 0;
    this.cacheLong = new Map();
    this.cacheShort = new Map();
  }

  encode(x) {
    let index = this.pow26.findIndex((v, i, a) => v <= x && a[i + 1] > x);
    x -= this.pow26[index];
    let outString = "";
    for (let i = 0; i < index; i++) {
      let tmp = ~~(x / (26 ** (index - i - 1)));
      outString += String.fromCharCode(97 + tmp);
      x -= tmp * (26 ** (index - i - 1));
    }
    return outString;
  }

  shorten(longURL) {
    let shortURL;
    if (!this.cacheLong.has(longURL)) {
      ++this.index;
      shortURL = this.encode(this.index);
      this.cacheLong.set(longURL, shortURL);
      this.cacheShort.set(shortURL, longURL);
    } else {
      shortURL = this.cacheLong.get(longURL);
    }
    return 'short.ly/' + shortURL;

  }

  redirect(shortURL) {
    return this.cacheShort.get(shortURL.replace(/^short.ly\//i, ''));
  }
}


const testFormat = string => {
  let res = /^short.ly\/[a-z]{1,4}$/.test(string) ? `"${string}" url format is incorrect: should starts with "short.ly/", with length<14 and only lowercase letters a the end.` : "";
}

const urlShortener = new UrlShortener();
let shortUrl1 = urlShortener.shorten("https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e");
console.log(shortUrl1);
// console.log(urlShortener.cacheLong);
// console.log(urlShortener.cacheShort);
let shortUrl2 = urlShortener.shorten("https://www.codewars.com/kata/5efae11e2d12df00331f91a6");
console.log(shortUrl2);
console.log(urlShortener.redirect(shortUrl1), "https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e");
console.log(urlShortener.redirect(shortUrl2), "https://www.codewars.com/kata/5efae11e2d12df00331f91a6");

// best

/* 
class UrlShortener {
  constructor() {
    this.URLBaseShort = {};
    this.URLBaseLong = {};
    this.prefix = 'short.ly/';
    this.minLengthOfHash = 1;
    this.maxLengthOfHash = 5; // in task 4, but in this case we're not including 5
    this.charCodeStart = 97; // 97 = a
    this.charCodeEnd = 123; // 122 = z
  }

  shorten(longURL) {
    let newHash = '';

    if (this.URLBaseLong[longURL]) {
      newHash = this.URLBaseLong[longURL];
    } else {
      newHash = this.#generateRandomUniqueHash();
      this.URLBaseLong[longURL] = newHash;
    }

    this.URLBaseShort[newHash] = longURL;
    const shortURL = `${this.prefix}${newHash}`;
    return shortURL;
  }

  redirect(shortURL) {
    const hash = shortURL.replace(this.prefix, '');
    return this.URLBaseShort[hash];
  }

  #generateRandomUniqueHash() {
    let newHashLength = this.#getRandomNumberInRange(this.minLengthOfHash, this.maxLengthOfHash);
    let newHash = this.#generateRandomHash(newHashLength);

    while (this.URLBaseShort[newHash]) {
      newHashLength = this.#getRandomNumberInRange(this.minLengthOfHash, this.maxLengthOfHash);
      newHash = this.#generateRandomHash(newHashLength);
    }

    return newHash;
  }

  #getRandomNumberInRange(start, end) {
    return start + Math.floor(Math.random() * (end - start));
  }

  #generateRandomHash(length) {
    let randomHash = '';

    for (let i = 0; i < length; i++) {
      randomHash += this.#getRandomLetter();
    }

    return randomHash;
  }

  #getRandomLetter() {
    const randomCharCode = this.#getRandomNumberInRange(this.charCodeStart, this.charCodeEnd);
    return String.fromCharCode(randomCharCode);
  }
}
*/

/* 
class UrlShortener {
  constructor() {
    this.arL = {};
    this.arS = {};
    this.count = 0;
  }

  shorten(longURL) {
    if (this.arS[longURL]) {
      return this.arS[longURL];
    }
    let short26 = "short.ly/" + toL(this.count++);

    this.arL[short26] = longURL;
    this.arS[longURL] = short26;
    return short26;
  }

  redirect(shortURL) {
    return this.arL[shortURL];
  }
}

function toL(l) {
  let arrNumbers = [];
  if (l >= 26 ** 4 && l < 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26) {
    arrNumbers.push("q");
    l -= 26 ** 4;
  }

  if (
    l >= 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26 &&
    l < 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26 + 25 * 26 + 26
  ) {
    arrNumbers.push("qq");
    l -= 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26;
  }

  if (l >= 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26 + 25 * 26 + 26) {
    arrNumbers.push("qqq");
    l -= 26 ** 4 + 25 * 26 * 26 + 25 * 26 + 26 + 25 * 26 + 26;
  }

  let s26n = l.toString(26);
  let arrLetters = s26n.toLowerCase().split("");

  arrLetters.forEach((element) => {
    if (element.charCodeAt(0) < 60) {
      arrNumbers.push(String.fromCharCode(element.charCodeAt(0) + 65));
    } else {
      arrNumbers.push(element);
    }
  });

  return arrNumbers.join("");
}
*/