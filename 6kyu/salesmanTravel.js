/* 
6kyu - Salesman's Travel
https://www.codewars.com/kata/56af1a20509ce5b9b000001e

Дана строка типа <дом> <улица> <zip>
"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".
Задача: сгруппировать по ZIP-кодам:
zip:улица1,улица2.../house1,house2...
*/

function travel(r, zipcode) {
  const adr = r.split(',')
    .map(a => a.match(/(\d+)\s*(.+?)\s([A-Z]{2} \d+)/).slice(1))
    .reduce((o, [house, street, zip]) => {
      if (!o[zip]) o[zip] = [];
      o[zip].push({ street, house });
      return o;
    }, { [zipcode]: [] });
  //console.log(adr);
  return `${zipcode}:${adr[zipcode].map(e => e.street).join(',')}/${adr[zipcode].map(e => e.house).join(',')}`;
}

const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";



console.log(travel(ad, "AA 45522"), "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670")
console.log(travel(ad, "EX 34342"), "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100")
console.log(travel(ad, "EX 34345"), "EX 34345:Pussy Cat Rd. Chicago/100")
console.log(travel(ad, "AA 45521"), "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67")
console.log(travel(ad, "AE 56215"), "AE 56215:Main Al. Bern/320")
console.log(travel(ad, "AE 5621"), "AE 56215:/")

// best
/* 
function travel(r, zipcode) {
  re = RegExp('(\\d+)\\s+(.+)\\s+'+zipcode+'$')
  streets = r.split(',').map(x=>x.match(re)).filter(x=>x)
  return zipcode+':'+streets.map(x=>x[2])+'/'+streets.map(x=>x[1])
}
*/