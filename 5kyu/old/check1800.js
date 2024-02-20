/* 
5kyu - 1-800-CODE-WAR
https://www.codewars.com/kata/5a3267b2ee1aaead3d000037/train/javascript

В телефонном номере цифре может соотвествовать буква: 2 - ABC, 3-DEF, ... 9-WXYZ
Напр. "1-800-CODE-WAR" соответствует 1-800-2633-927
(после 800 блоки могут быть по 3 или 4 цифры - напр. "1-800-NEW-KATA")

Компания уже подобрала для вас буквенный номер - например, "1-800-CODE-WAR"
но вы хотите найти все слова, подходящие под этот номер:
 "1-800-CODE-WAR", "1-800-CODE-YAP", "1-800-CODE-WAS", "1-800-CODE-ZAP"

Есть внешний массив Preloaded.WORDS, содержащий 3 или 4-буквенные строки.
В аргументе функции передается номер телефона (буквенный), который хочется использовать.
Вернуть набор всех номеров (буквенных), которые могут быть составлены из цифр.
*/



const Preloaded = {
  WORDS: ["ACT", "ADD", "ALL", "APE", "AND", "ANN", "ANY", "ANT", "ARE", "ART", "ASS", "BAD", "BAR", "BAT", "BAY", "BEE", "BIG", "BIT", "BOB", "BOY", "BUN", "BUT", "CAN", "CAR", "CAT", "COT", "COW", "CUT", "DAD", "DAY", "DEW", "DID", "DIN", "DOG", "DON", "DOT", "DUD", "EAR", "EAT", "EEL", "EGG", "ERR", "EYE", "FAG", "FAR", "FLY", "FOR", "FUN", "FUR", "GAY", "GET", "GOT", "GUM", "GUN", "GUY", "GUT", "GYM", "HAS", "HAT", "HER", "HEY", "HIM", "HIS", "HIT", "HOW", "HUG", "HUN", "ICE", "INK", "ITS", "IVE", "JAN", "JET", "JOB", "JOT", "JOY", "KEY", "LAP", "LAY", "LIE", "LET", "LOG", "MAN", "MAP", "MAY", "MEN", "MOM", "MUD", "MUM", "NAP", "NEW", "NOD", "NOT", "NOW", "OAR", "ODD", "OFF", "OLD", "ONE", "OUR", "OUT", "PAN", "PAL", "PAT", "PAW", "PEN", "PET", "PIG", "PIT", "POT", "PRO", "PUT", "QUO", "RAG", "RAM", "RAN", "RAP", "RAT", "RED", "RIP", "ROD", "ROT", "RUN", "RUT", "SAT", "SAW", "SAY", "SEA", "SEE", "SEX", "SHE", "SOY", "SUN", "SUX", "TAN", "TAT", "TEA", "THE", "TIN", "TIP", "TIT", "TON", "TOP", "TOO", "TWO", "URN", "USE", "VAN", "VET", "VIP", "WAR", "WAS", "WAY", "WED", "WHO", "WHY", "WIN", "WON", "XXX", "YAK", "YAM", "YAP", "YOU", "YUM", "ZAP", "ZIP", "ZIT", "ZOO", "ABLE", "ACED", "AGOG", "AHEM", "AHOY", "ALLY", "AMEN", "ANTI", "ANTS", "ANUS", "APES", "ARMY", "ARSE", "ARTY", "AVID", "AWED", "BABY", "BARS", "BATS", "BAYS", "BEAR", "BEES", "BILL", "BITE", "BITS", "BLOW", "BLUE", "BOLD", "BONE", "BOOB", "BOOM", "BOSS", "BOYS", "BUFF", "BUNG", "BUNS", "BUMS", "BURP", "BUST", "BUSY", "BUZZ", "CANS", "CANT", "CARS", "CART", "CATS", "CHAP", "CHIC", "CHUM", "CIAO", "CLAP", "COCK", "CODE", "COOL", "COWS", "COZY", "CRAB", "CREW", "CURE", "CULT", "DADS", "DAFT", "DAWN", "DAYS", "DECK", "DEED", "DICK", "DING", "DOGS", "DOTS", "DOLL", "DOLT", "DONG", "DOPE", "DOWN", "DRAW", "DUCK", "DUDE", "DUMB", "DUTY", "EARL", "EARN", "EARS", "EASY", "EATS", "EDGE", "EELS", "EGGS", "ENVY", "EPIC", "EYES", "FACE", "FAGS", "FANG", "FARM", "FART", "FANS", "FAST", "FEAT", "FEET", "FISH", "FIVE", "FIZZ", "FLAG", "FLEW", "FLIP", "FLOW", "FOOD", "FORT", "FUCK", "FUND", "GAIN", "GEEK", "GEMS", "GIFT", "GIRL", "GIST", "GIVE", "GLEE", "GLOW", "GOLD", "GOOD", "GOSH", "GRAB", "GRIN", "GRIT", "GROT", "GROW", "GRUB", "GUNS", "GUSH", "GYMS", "HAIL", "HAIR", "HALO", "HANG", "HATS", "HEAD", "HEAL", "HEIR", "HELL", "HELP", "HERE", "HERO", "HERS", "HIGH", "HIRE", "HITS", "HOLY", "HOPE", "HOST", "HUNK", "HUGE", "HUNG", "HUNS", "HURT", "ICON", "IDEA", "IDLE", "IDOL", "IOTA", "JAZZ", "JERK", "JESS", "JETS", "JINX", "JOBS", "JOHN", "JOKE", "JUMP", "JUNE", "JULY", "JUNK", "JUST", "KATA", "KEYS", "KICK", "KIND", "KING", "KISS", "KONG", "KNOB", "KNOW", "LARK", "LATE", "LEAN", "LICE", "LICK", "LIKE", "LION", "LIVE", "LOGS", "LOCK", "LONG", "LOOK", "LORD", "LOVE", "LUCK", "LUSH", "MAKE", "MANY", "MART", "MATE", "MAXI", "MEEK", "MIKE", "MILD", "MINT", "MMMM", "MOMS", "MOOD", "MOON", "MOOT", "MUCH", "MUFF", "MUMS", "MUTT", "NAPS", "NAZI", "NEAT", "NECK", "NEED", "NEWS", "NEXT", "NICE", "NICK", "NOON", "NOSE", "NOTE", "OARS", "OATS", "ONCE", "ONLY", "OPEN", "ORGY", "OVAL", "OVER", "PANS", "PALS", "PART", "PAST", "PATS", "PAWS", "PEAR", "PERT", "PENS", "PETS", "PHEW", "PIPE", "PIPS", "PLAN", "PLUM", "PLUS", "POET", "POOF", "POOP", "POSH", "POTS", "PROS", "PSST", "PUKE", "PUNK", "PURE", "PUSH", "PUSS", "QUAD", "QUAK", "QUID", "QUIT", "RANT", "RAPE", "RAPS", "RAPT", "RATE", "RAMS", "RATS", "REAP", "RICK", "RING", "RIPE", "ROOT", "ROSE", "ROSY", "ROTS", "RUNT", "RUTS", "SAFE", "SAGE", "SANE", "SAVE", "SAWS", "SEEK", "SEXY", "SHAG", "SHIT", "SICK", "SIGH", "SIRE", "SLAG", "SLIT", "SLUT", "SNAP", "SNOG", "SNUG", "SOFT", "SOON", "SOUL", "SOUP", "SPRY", "STIR", "STUN", "SUCK", "SWAG", "SWAY", "TACT", "TANK", "TANS", "THAT", "THIS", "TIME", "TINS", "TINY", "TITS", "TOES", "TONS", "TONY", "TOPS", "TOYS", "UBER", "URNS", "USED", "USER", "USES", "VAIN", "VAMP", "VARY", "VEIN", "VENT", "VERY", "VEST", "VIEW", "VIVA", "VOLT", "VOTE", "WAFT", "WAGE", "WAKE", "WALK", "WALL", "WANG", "WANK", "WANT", "WARD", "WARM", "WARP", "WARS", "WART", "WASH", "WAVE", "WEAR", "WEDS", "WEED", "WEEN", "WELD", "WHAT", "WHEE", "WHEW", "WHIP", "WHIZ", "WHOA", "WIFE", "WILL", "WIND", "WING", "WINK", "WINS", "WIRE", "WISH", "WITH", "WORD", "WORK", "WRAP", "XMAN", "XMEN", "XRAY", "XTRA", "XXXX", "YANK", "YAKS", "YAMS", "YAPS", "YARD", "YARN", "YELP", "YERN", "YOKE", "YOLK", "YULE", "ZANY", "ZAPS", "ZIPS", "ZITS", "ZERO", "ZOOM", "ZOOS"]
};

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
//const a2n = "22233344455566677778889999";
//const n2a = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];


/* 
неверный подход! 
Если мы изначально меняем буквы на цифры, то для 'CODE', то получим '2633' без возможности обратного
представления 'CODE'
*/

const getDigit = c => "22233344455566677778889999"[c.charCodeAt() - 65] || c;
const getLetters = n => ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'][n];

const bsearch = (arr, x) => {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }
  return false;
}


function findCombinations(numbers, offset, len, words) {
  let arrNums = numbers.slice(offset, offset + len);
  let arr = arrNums.map(getLetters);
  let res = [];
  if (len === 3) {
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        for (let k = 0; k < arr[2].length; k++) {
          let v = arr[0][i] + arr[1][j] + arr[2][k];
          if (bsearch(words, v)) {
            res.push(v);
          }
        }
      }
    }
  } else {
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        for (let k = 0; k < arr[2].length; k++) {
          for (let l = 0; l < arr[3].length; l++) {
            let v = arr[0][i] + arr[1][j] + arr[2][k] + arr[3][l];
            if (bsearch(words, v)) {
              res.push(v);
            }
          }
        }
      }
    }
  }
  return res;
}

function check1800(str) {
  let sortedWords = Preloaded.WORDS.sort();
  let numbers = [...str.match(/(1-800-)(.+)/)[2].replace('-', '')].map(getDigit);
  let lefts = [], rights = [];
  lefts = findCombinations(numbers, 0, 3, sortedWords);
  if (lefts.length > 0) {
    rights = findCombinations(numbers, 3, 4, sortedWords);
    if (rights.length === 0) {
      lefts = [];
    }
  }
  let lefts1 = findCombinations(numbers, 0, 4, sortedWords);
  let rights1 = [];
  if (lefts1.length > 0) {
    rights1 = findCombinations(numbers, 4, 3, sortedWords);
    if (rights1.length === 0) {
      lefts1 = [];
    }
  }
  let result = [];
  if (lefts.length && rights.length) {
    for (let i = 0; i < lefts.length; i++) {
      for (let j = 0; j < rights.length; j++) {
        result.push(`1-800-${lefts[i]}-${rights[j]}`);
      }
    }
  }
  if (lefts1.length && rights1.length) {
    for (let i = 0; i < lefts1.length; i++) {
      for (let j = 0; j < rights1.length; j++) {
        result.push(`1-800-${lefts1[i]}-${rights1[j]}`);
      }
    }
  }
  return result;
}

// ------------------------------------
var expected = [
  "1-800-CODE-WAR",
  "1-800-CODE-YAP",
  "1-800-CODE-WAS",
  "1-800-CODE-ZAP"
];
console.log(check1800("1-800-CODE-WAR"))

// best

/* 
const keyMap = {
  1: '',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
  0: ''
}
const stringToNums = str => str
  .replace(/[^a-z]/gi, '')
  .split('')
  .map(ch => Object.entries(keyMap).find(e => e[1].includes(ch))[0])
  
const numsToWords = numArray => {
  const startsWith = numArray.slice(0,4)
    .reduce((wordList, number, i) => 
      wordList.filter(word => !word[i] || keyMap[number].includes(word[i]))
    , Preloaded.WORDS)
  const latterFours =  numArray.slice(3)
    .reduce((wordList, number, i) => 
      wordList.filter(word => keyMap[number].includes(word[i]))
    , Preloaded.WORDS)
  const latterThrees =  numArray.slice(4)
    .reduce((wordList, number, i) => 
      wordList.filter(word => keyMap[number].includes(word[i]))
    , Preloaded.WORDS)
    .filter(word => word.length == 3)
  return [...startsWith].map(first => 
    (first.length == 3 ? latterFours : latterThrees)
      .map(second => "1-800-" + first + "-" + second)
    ).reduce((acc, el) => acc.concat(el), [])
}

const check1800 = str => numsToWords(stringToNums(str))
*/

/* 
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", keyPad = "22233344455566677778889999",
  table = [...alpha].reduce((res, c, i) => (res[c] = keyPad[i], res), {}),
  toPhone = string => string.replace(/[A-Z]/g, m => table[m]),
  LOOKUP = Preloaded.WORDS.reduce((res, w) => (res[i = toPhone(w)] = [...(res[i] || []), w], res), {});

function check1800(string) {
  const num = toPhone(string.slice(6).replace("-", ""));
  return [].concat(...[3, 4]
    .map(i => [LOOKUP[num.slice(0, i)] || [], LOOKUP[num.slice(i)] || []])
    .map(([a, b]) => [].concat(...a.map(x => b.map(y => `1-800-${x}-${y}`)))));
}
*/

