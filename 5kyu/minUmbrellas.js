/* 
5kyu - A Man and his Umbrellas
https://www.codewars.com/kata/58298e19c983caf4ba000c8d/train/javascript


*/

function minUmbrellas(weather) {
  const umbrellas=[0,0];
  const rain = {
    "rainy":1,
    "thunderstorms":1
  };
  for(let i=0; i<weather.length; i++) {
    let forecast = weather[i];
    if(rain[forecast]) {
      if(umbrellas[i%2]>0) {
        --umbrellas[i%2];
        ++umbrellas[(i+1)%2];
      } else {
        umbrellas[i%2]=0;
        ++umbrellas[(i+1)%2];
      }
    }
  }
  return umbrellas[0]+umbrellas[1];
  }

console.log(minUmbrellas(["cloudy"]), 0, "Wrong answer for one value in weather array");
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]), 1, "Wrong answer for always rainy");
console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2, "Wrong answer for 2 dry mornings and 2 rainy afternoons");

// cool

/* 
     minUmbrellas=
   w=>w.map(([x])=>{
 x=='r'|x=='t'&&(a[p]?
a[p]--   :t++,    a[1-p
          ]++
          );p
          =1-
          p},
     a=   [t=
     p=   0,0
      ])&&t

*/