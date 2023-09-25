/* 
6kyu - Happy Coding : a Spy On the Train
https://www.codewars.com/kata/599cf86d01a4108584000064

Вычислить длину дороги, ориентируясь по звукам поезда

1. "呜呜呜". This is the whistle of the train when it comes in or out of the station.

That is, When you hear the sound for the first time, the train leaves the
station and goes into high speed; When you hear the sound for the second
time, The train pulled into the station and goes into low speed. and so on.

2. "哐当". This is the sound of the train hitting the railroad track.

That is, Every time you hear it, the train advances 20 meters(high speed) 
or 10 meters(low speed).

3. Any other sound. These are all noise, please ignore them ;-)
*/

function lengthOfRailway(sound) {
  let str = sound.replace(/\d/g, '').replace(/哐当/gu, '1').replace(/呜呜呜/gu, '3').replace(/[^1-3]/g, '');
  let dist = 0, mul = 10;
  for (let c of str) {
    if (c === '3') {
      mul = 30 - mul;
    } else {
      dist += mul;
    }
  }
  return dist;
}

console.log(lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"), 150);
console.log(lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"), 300);
console.log(lengthOfRailway("呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"), 150);
console.log(lengthOfRailway("呜呜呜哐当报法治报，重大事件早知道。看报了啊，中国足球，何日出头哐当哐当哐当哐当哐当呜呜呜哐当，请不要在车厢内乱丢垃圾。下车的旅客请注意，请携哐当刻我的内心是崩溃的。。。世界辣么大，我想去看看！谁个哐当哐当狗蛋~~我在这~~快来~~这里哐当哐当哐当哐当。师傅，受累挪一下你的行李。喂喂喂，你说什么，信号不哐当哐当100，谢谢！这位哐当香肠茶叶蛋了啊，请出示你的车票！抓小偷！麻烦让一哐当哐当哐当哐当哐当看！谁个龟孙把我鞋哐当呜呜呜哐当一让，我要上厕所。师傅，哐当哐当哐当哐当哐当呜呜呜哐当哐当肠茶叶蛋了啊，请出示你的车票！抓小偷！麻烦让一让，我要哐当哐当哐当哐当哐当哐当哐当哐当哐当5，再看看你，下车咱哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当哐当哐当~我在这~~快来~~这里有座！哐当人挤人的怎么开展业务啊？先生你好坏坏哟哐当in2015太帅了，我要给他生猴子！你看哐当"), 790);

// best
/* 
lengthOfRailway=a=>a.match(/呜呜呜|哐当/g).reduce(([a,b],c)=>c[0]=='呜'?[a,+!b]:[a+(b?20:10),b],[0,0])[0]
*/