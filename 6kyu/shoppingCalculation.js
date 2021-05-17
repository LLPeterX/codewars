/* 
6kyu - Shopping Calculation
https://www.codewars.com/kata/5fc907f91853c00018787c73/train/javascript

Дан массив строк. Разобрать на customers, prices, 
*/



function shoppingCalculation(input) {
  let prices = {}, customers=[];
  for(let str of input) {
    let m = str.match(/(.+?) is \$(\d+)/); // is product?
    if(m) {
      prices[m[1].toLowerCase()] = +m[2];
    }
    m = str.match(/(.+?) has \$(\d+)/); // is customer?
    if(m) {
      customers.push({
        name: m[1],
        amount: +m[2],
        prods: [],
        remains: +m[2]
      });
    }
    m = str.match(/(.+?) buys (\d+) ([a-z]+)/); // is buying?
    if(m) {
      let c = customers.find(e => e.name === m[1]);
      if(c) {
        c.prods.push({
          name: m[3].replace(/s$/,""),
          quantity: +m[2]
        });
      }
    }
  }
  // calc remains
  for(let c of customers) {
    let total = c.prods.reduce((sum,e) => sum + prices[e.name] * e.quantity,0);
    c.remains -= total;
  }
  // output
  let res=[];
  for(let c of customers) {
    let buyList = c.prods.map(e => `${e.quantity} ${e.name}${e.quantity>1?'s':''}`).join(', ');
    res.push([c.name, `$${c.remains}`, buyList]);
  }

  return res;
}

let input1 = [
  "Apple is $5.",
  "Banana is $7.",
  "Orange is $2.",
  "Alice has $26.",
  "John has $41.",
  "Alice buys 2 apples.",
  "John buys 1 banana.",
  "Alice buys 5 oranges."
  ];

  console.log(shoppingCalculation(input1));

  const input2 = [
    "Chocolate is $15.",
    "George has $100.",
    "Ross has $80.",
    "George buys 5 chocolates.",
    "Ross buys 1 chocolate.",
    ];

    console.log(shoppingCalculation(input2));

    // brain off
    /* 
    shoppingCalculation=(a,b=b=>a.filter(a=>a.includes(b)).map(a=>a.replace(/\$|s?\./g,'').split(b)),c=b(' is '),d=b(' has '),e=b(' buys '))=>d
  .map(([a,b])=>e.reduce(([_,d,e],[f,g])=>a==f?[a,d-c.find(a=>a[0].toLowerCase()==g.match(/[a-z]+/)[0])[1]*(h=g.match(/\d+/)[0]),[...e,`${g}${h>1?'s':''}`]]:[a,d,e],[a,b,[]]))
  .map(([a,b,c])=>[a,"$"+b,c.join`, `])
    
    */