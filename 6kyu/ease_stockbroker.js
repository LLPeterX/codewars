/* 
6kyu Ease the StockBroker
https://www.codewars.com/kata/54de3257f565801d96001200

Клиенты размещают заказы брокеру виде строк. Заказ может быть одинчным, множественным, или пустым.
Формат: "Quote Quantity Price Status" (через пробел).
Quote - имя ЦБ, Quantity - int, Price - float, Status = "B"/"S". Пример: "GOOG 300 542.0 B"

Задача: сформировать заказ в удобочитаемом виде "Buy: b Sell: s", где 'b' и 's' - int суммы продаж и покупки.

Если заказ неверно оформлен, то сформировать ответ в виде 
"Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

Если заказ пустой, сформировать строку  "Buy is 0 and Sell is 0"

 */
/*
function balanceStatements(list){
  if(!list || list.length===0) {
    return "Buy: 0 Sell: 0";
  }
  let orders = list.split(',').map(str => str.trim());
  let sumB=0, sumS=0, errStr="", errCount=0;
  for(let i=0; i<orders.length; i++) {
    let m = orders[i].match(/^([A-Z0-9\.]+)\s(\d+)\s(\d+\.\d+)\s([BS])$/);
    if(m) {
      let [,quote, qty, price, status] = m;
      if(status==='B') {
        sumB += Math.round(parseInt(qty)*parseFloat(price));
      } else if(status === 'S') {
        sumS += Math.round(parseInt(qty)*parseFloat(price));
      } 
    } else {
      errCount ++;
      errStr += orders[i]+" ;";
    }
  }
  let res = `Buy: ${sumB} Sell: ${sumS}`;
  if(errCount>0) {
    res += `; Badly formed ${errCount}: ${errStr}`;
  }
  return res;
}
*/
function balanceStatements(list) {
  // if(!list || list.length===0) {
  //   return "Buy: 0 Sell: 0";
  // }
  let sumB = 0, sumS = 0, errStr = "", errCount = 0;
  list && list.split(',').map(str => str.trim()).forEach(order => {
    let m = order.match(/^([A-Z0-9\.]+)\s(\d+)\s(\d*\.\d+)\s([BS])$/);
    if (m) {
      let [, qute, qty, price, status] = m;
      if (status === 'B') {
        sumB += Math.round(+qty * parseFloat(price));
      } else { 
        sumS += Math.round(+qty * parseFloat(price));
      }
    } else {
      errCount++;
      errStr += order + " ;";
    }
  });
  return `Buy: ${sumB} Sell: ${sumS}` + ((errCount > 0) ? `; Badly formed ${errCount}: ${errStr}` : "");
}

console.log(balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S"));
// exp: "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;"
// my :  Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;
console.log(balanceStatements("ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"));
// exp: "Buy: 29499 Sell: 0"
// my :  Buy: 29499 Sell: 0
console.log(balanceStatements("GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S"));
// exp: "Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;"
// my:   Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;
console.log(balanceStatements(""));
// exp: Buy 0, sell 0


//my best
// shortest:
/* 
const balanceStatements=(l,t=([d,e,f,g])=>/\./.test(f)&&!!g)=>{
   const arr = l.split`, `.map(a=>a.split` `).map(a=>[t(a),...a]); 
   const [b,s] = arr.reduce(([a,b],[c,d,e,f,g])=>c?g=='B'?[a+(e*f),b]:[a,b+(e*f)]:[a,b],[0,0]);
   const badly = arr.filter(a=>!a[0]).map(([a,...b])=>b); 
   return `Buy: ${Math.round(b)} Sell: ${Math.round(s)}${badly.length&&l?`; Badly formed ${badly.length}: ${badly.map(a=>[...a,';'].join` `).join``}`:''}`
}
*/