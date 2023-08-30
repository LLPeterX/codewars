/* 
6kyu - Decode the woofs!
https://www.codewars.com/kata/63fb421be6be1f57ad81809e

Декодировать лай.
* Каждая последовательность 'woof' означает одну букву.
  в конце последовательности должен стоять "!"
* случайные звуки игнорировать. буквы w, o, o, f должны быть по порядку,
  но не обязательно друг за другом, регистр м.б. любым
* последовательности состоят из подпоследовательностей, разделенных '-'.
  Каждая подпоследовательность может содержать "woof", а может и нет.
   "Woof-shhh-woofwoof!" => ["Woof", "shhh","woofwoof"] (woof есть в 0 и 2),
   причем в 2 только 1 шт.
* Если в строке нет допустимой последовательности 'woof', вернуть "nothing to decode!"
* Если число "woof" превышает количество букв в алфавите, вернуть "just barking!"
* в возвращаемом значении не должно быть пробелов
*/


function woofDecoder(str) {
  //if (str.length < 4) return "nothing to decode!"
  str = str.toLowerCase().replace(/[^wof\-!]/g, '');
  let result = "", barks = 0, prevC = null;
  for (let c of str) {
    if (c === 'w' && (!prevC || prevC == '-' || prevC == 'w')) prevC = 'w';
    else if (c === 'o' && (prevC == 'w' || prevC == 'o')) prevC = 'o';
    else if (c === 'f' && (prevC == 'o' || prevC == 'f')) prevC = 'f';
    else if (c === '-' && prevC === 'f') {
      barks++;
      prevC = c;
    } else if (c === '!' && prevC === 'f') {
      if (barks > 25) return "just barking!";
      result += String.fromCharCode(97 + barks);
      barks = 0;
      prevC = null;
    }
  }
  return result || "nothing to decode!";
}


console.log(woofDecoder("Woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof!"), 'hi'); // OK
console.log(woofDecoder("Woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof! Woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof!"), 'feedme'); // OK
console.log(woofDecoder("Shhhh!"), "nothing to decode!"); // OK
console.log(woofDecoder("WoofWoof!"), "a"); // FAIL
console.log(woofDecoder("khkhkhWbzzzzobzzzOghrrrrfseswsw!"), "a");
console.log(woofDecoder("Woofshhh! Shhh!"), "a");
console.log(woofDecoder("luwdoonsgorjfscu-flwovoff-cvhwemzooctf-hzofwbofxzyqjotoqcmolfn-wowlonystf-pwvvkowbxodgff-wpcweookfgf-wbwounsoeqofo-woagwogoorf-ywxuevgovocdhf-wdloguofvuce-wcaoseofhefrobuoxf-vewoydwdzoyxworjfav-woof-ikmmawhujovhovfppj-bwoiofma-worhoxf-iwaoayoukotbcfs-wuaoodvdwf!waofdkofgbjq-dwokzof-wioaovqwjplbf-waizorofo-zwjoanhjuymsofu-ybwookogqfpwf-wggogomcgblfm-nwxfuomwiposlfof-wpojotfmfo-wnlcwojaiofiaxff-wmhfookfazz-wlcfnjopohdf-iwdizojof! woacmwozwadfmq-mjvwlijrboof-wzoohfct-abwzpooocgjfzfq-nwoksondfr!xshuxqwolodmpfqda-otwuojofx-woorefq-woooxf-wzzsneeowqootcoxf-wnohbnxohfasf-qrwnncqceocqhywocrtkdfgm-wuojbanbxvboyxfv-wivoomf-mwfouoyf-hfwookrpjf-wrkiowmmnuotfu! wiboeobrpfzq-ywtjfgooqf-jdwtyjzyoof-woolff-wxsokowrifo-vwzdepporuiowbf-wooyfhfmc-jwophogjfj-wjoovf-whfboxlojzklldfr-hwmiireoomfg-wprhoaoff! mwipomoyivjf-bwaoof-vfwjzgrzojoccgxvwfe-owoeaovrtbsgef-wouoeoqdfp-brwtvoxoxfjnh-wtyousofotfn-waorihwbofuvfd-wcnhootnsf-wsoofnk-owuoznsbajgahhbpxfocf-wjxoodsfg-woboweqofo-fpjwbomfgqveonvrlfizbt-wxoof-wzwoookqdzcfaoj-wqeofoaqhzimfref-pwwcveoyhbeojfv-wwoomepfp! pwltqoiotwf-cpwaoigzyoeafydu-cwwqooylfft-qwooxftka-wlefcoodsfkn-hwoacmoesf!vjzwwzoasogvf-cczjwrhozpvof-wfocseounfzz-wpjjcomogivfp-uwlovof-woycogf-wksodoraowf-atwiiuoohjufzaad-wtgpoof-vhwfzrrgohyortf-wqjzaggiowohwynf-bwcotodfgglwd-lwfoquofbnorgjftwvupj-bwyyzstodrmqyofagf-pfowelmoyboofev-gwbjaqoyddcoef-ywljoccolllof-hwbopiqopuxf-waovoevufh-wouyskofw-wnbnaoofb! wejoymof-cwofojbieigbjcf-wrhkftomlodmzlzwzfl-wxloqjof-mqbwaolofq-wnothlhooomqf-mwofqozhf-rdhwoofo-dawobsohf-uwowvaopdbfp-vwzknqstyayoofgsce-wkolihonfqjkp-wodorgpaegfko-kwytzootltf!woeovpbozf-woyiyofzti-wodoymf-hxdwxwhoogtfs-wdrbocqof-kwtodawcobmf-wbootkxobuwfblp-wdjodouzgf-ewrooqcqayf-wjocmqofvtozimmozunuf-wipoieoofn-awxyznvojooqnaf-kwgoogbiobf-qfwjnoponwf! wdotkgof-woohiafuy-gwkmiqobpjrjevoif-uawnoubdoplkvtfwp-wuopbthjvodlvvf-qilqbwoqwofd-xiqowowonycfgbf-wlodoojpeof-wohboofurw-gwiqyosgdoxdaefm-kjwgsnqpoyorofh-dfmowvgcowovf-hwocjtomdkegftlj-wvohzof-iwaoootrff-wducovipsihgoyyfskm-pwbjfnaorbmqotreif-wodxqxoayfai-cwoxoafpklxu-wpohomfit-wnjoroaf-wohzzoblfln-qbwodqoweyf-dvkwolrofsvzppfly-wobofyf!"), "smellsfunny"); // OK


console.log(woofDecoder("__w_oo_+gorjfscu-flwovoff-cvhwemzooctf-hzofwbofxzyqjotoqcmolfn-wowlonystf-pwvvkowbxodgff-wpcweookfgf-wbwounsoeqofo-woagwogoorf-ywxuevgovocdhf-wdloguofvuce-wcaoseofhefrobuoxf-vewoydwdzoyxworjfav-woof-ikmmawhujovhovfppj-bwoiofma-worhoxf-iwaoayoukotbcfs-wuaoodvdwf!waofdkofgbjq-dwokzof-wioaovqwjplbf-waizorofo-zwjoanhjuymsofu-ybwookogqfpwf-wggogomcgblfm-nwxfuomwiposlfof-wpojotfmfo-wnlcwojaiofiaxff-wmhfookfazz-wlcfnjopohdf-iwdizojof! woacmwozwadfmq-mjvwlijrboof-wzoohfct-abwzpooocgjfzfq-nwoksondfr!xshuxqwolodmpfqda-otwuojofx-woorefq-woooxf-wzzsneeowqootcoxf-wnohbnxohfasf-qrwnncqceocqhywocrtkdfgm-wuojbanbxvboyxfv-wivoomf-mwfouoyf-hfwookrpjf-wrkiowmmnuotfu! wiboeobrpfzq-ywtjfgooqf-jdwtyjzyoof-woolff-wxsokowrifo-vwzdepporuiowbf-wooyfhfmc-jwophogjfj-wjoovf-whfboxlojzklldfr-hwmiireoomfg-wprhoaoff! mwipomoyivjf-bwaoof-vfwjzgrzojoccgxvwfe-owoeaovrtbsgef-wouoeoqdfp-brwtvoxoxfjnh-wtyousofotfn-waorihwbofuvfd-wcnhootnsf-wsoofnk-owuoznsbajgahhbpxfocf-wjxoodsfg-woboweqofo-fpjwbomfgqveonvrlfizbt-wxoof-wzwoookqdzcfaoj-wqeofoaqhzimfref-pwwcveoyhbeojfv-wwoomepfp! pwltqoiotwf-cpwaoigzyoeafydu-cwwqooylfft-qwooxftka-wlefcoodsfkn-hwoacmoesf!vjzwwzoasogvf-cczjwrhozpvof-wfocseounfzz-wpjjcomogivfp-uwlovof-woycogf-wksodoraowf-atwiiuoohjufzaad-wtgpoof-vhwfzrrgohyortf-wqjzaggiowohwynf-bwcotodfgglwd-lwfoquofbnorgjftwvupj-bwyyzstodrmqyofagf-pfowelmoyboofev-gwbjaqoyddcoef-ywljoccolllof-hwbopiqopuxf-waovoevufh-wouyskofw-wnbnaoofb! wejoymof-cwofojbieigbjcf-wrhkftomlodmzlzwzfl-wxloqjof-mqbwaolofq-wnothlhooomqf-mwofqozhf-rdhwoofo-dawobsohf-uwowvaopdbfp-vwzknqstyayoofgsce-wkolihonfqjkp-wodorgpaegfko-kwytzootltf!woeovpbozf-woyiyofzti-wodoymf-hxdwxwhoogtfs-wdrbocqof-kwtodawcobmf-wbootkxobuwfblp-wdjodouzgf-ewrooqcqayf-wjocmqofvtozimmozunuf-wipoieoofn-awxyznvojooqnaf-kwgoogbiobf-qfwjnoponwf! wdotkgof-woohiafuy-gwkmiqobpjrjevoif-uawnoubdoplkvtfwp-wuopbthjvodlvvf-qilqbwoqwofd-xiqowowonycfgbf-wlodoojpeof-wohboofurw-gwiqyosgdoxdaefm-kjwgsnqpoyorofh-dfmowvgcowovf-hwocjtomdkegftlj-wvohzof-iwaoootrff-wducovipsihgoyyfskm-pwbjfnaorbmqotreif-wodxqxoayfai-cwoxoafpklxu-wpohomfit-wnjoroaf-wohzzoblfln-qbwodqoweyf-dvkwolrofsvzppfly-wobofyf!"), 'smellsfunny');

console.log(woofDecoder("Woof-shhh-woofwoof!"), 'b')

// best

/* 
function woofDecoder(s) {
  const ms  = s.toLowerCase().match(/w[^!-]*?o[^!-]*?o[^!-]*?f[^!-]*?[-!]/g) || []
  const arr = ms.join('').split('!').map(s=>s&&s.split('-').length)
  return arr.some(n=>n>26) ? "just barking!"
                           : arr.map(w=> w && String.fromCharCode(w+96) ).join('') || 'nothing to decode!'
}
*/

/* 
function woofDecoder(recording) {
  let decoded = [];
  for (let sequence of recording.split('!')) {
    let ord = sequence
      .split('-')
      .filter(noise => noise.match(/w.*o.*o.*f/i))
      .length;
    if (ord > 26) return 'just barking!';
    if (ord > 0) decoded.push(96+ord);
  }
  
  return decoded.length ? String.fromCharCode(...decoded) : 'nothing to decode!';
}
*/