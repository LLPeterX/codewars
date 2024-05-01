/* 
6kyu - Emojicode
https://www.codewars.com/kata/66279e3bcb95174d2f9cf050/train/javascript
*/

function toEmojicode(emojis) {
  //let result = [];
  // for (let emoChar of emojis) {
  //   let emoDigits = [...`${emoChar.codePointAt(0)}`].reduce(
  //     (str, c) => str + String.fromCharCode(c.charCodeAt(), 0xfe0f, 0x20e3),
  //     "",
  //   );
  //   result.push(emoDigits);
  // }
  // return result.join(" ");
  return [...emojis]
    .map((emoChar) =>
      [...`${emoChar.codePointAt(0)}`].reduce(
        (str, c) => str + String.fromCharCode(c.charCodeAt(), 0xfe0f, 0x20e3),
        "",
      ),
    )
    .join(" ");
}

function toEmojis(emojicode) {
  return emojicode
    .split(" ")
    .map((emoChar) =>
      String.fromCodePoint(
        +[...emoChar]
          .reduce(
            (s, v, i) => (i % 3 == 0 ? [...s, v.charCodeAt() - 48] : s),
            [],
          )
          .join(""),
      ),
    )
    .join("");
}

console.log(toEmojicode("😊"), "1️⃣2️⃣8️⃣5️⃣2️⃣2️⃣");
console.log(toEmojicode("🙈🙉🙊"), "1️⃣2️⃣8️⃣5️⃣8️⃣4️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣5️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣6️⃣");

console.log(toEmojis("1️⃣2️⃣8️⃣5️⃣8️⃣4️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣5️⃣ 1️⃣2️⃣8️⃣5️⃣8️⃣6️⃣"), "🙈🙉🙊");

// best

/* 
// hobovsky
function toEmojicode(emojis) {  
  const KEYCAP_POINT = '\u20E3';
  const EMOJIFY_POINT = '\uFE0F';
  return [...emojis].map(e => {
    let cp = e.codePointAt(0).toString();
    return [...cp].map(d => d + EMOJIFY_POINT + KEYCAP_POINT).join('')
  }).join(' ');
}

function toEmojis(emojicode) {
  let cps = emojicode.split(' ').map(ec => {
    let cp = 0;
    for(let pos = 0; pos < ec.length; pos += 3) {
      cp = cp * 10 + +ec[pos];
    }
    return cp;
  });
  return String.fromCodePoint(...cps);
}
*/

/* 
// JohanWiltink
function toEmojicode(emojis) { return Array.from( emojis, emoji => String(emoji.codePointAt()).replace( /./g, c => String.fromCodePoint(0x30+Number(c),0xFE0F,0x20E3) ) ).join(' '); }
function toEmojis(emojicode) { return String.fromCodePoint(...emojicode.split("").filter( x => " 0123456789".includes(x) ).join("").split(' ').map(Number)); }
*/
