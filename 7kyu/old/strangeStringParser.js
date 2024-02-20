/* 
7kyu - Strange Strings Parser!
https://www.codewars.com/kata/584d88622609c8bda30000cf/train/javascript
 */

function wordSplitter(string) {
  return string.split(new RegExp(`[${[...new Set(string.match(/[^A-Za-z0-9.-]/g))].join('')}]`, 'g'));
}

console.log(wordSplitter("11:11:11:11:11"), ["11", "11", "11", "11", "11"]);
console.log(wordSplitter("RADIO+FREQ+12500+NW+1600+END"), ["RADIO", "FREQ", "12500", "NW", "1600", "END"]);
console.log(wordSplitter("CODE*SEVEN|FOURTY#THREE&HUNDRED"), ["CODE", "SEVEN", "FOURTY", "THREE", "HUNDRED"]);
console.log(wordSplitter("56&SHORT!BEACH+WEST=HOUSE"), ["56", "SHORT", "BEACH", "WEST", "HOUSE"]);
console.log(wordSplitter("320000;56C*7200RPM#MODE%65>LATCH?ON"), ["320000", "56C", "7200RPM", "MODE", "65", "LATCH", "ON"]);
console.log(wordSplitter("320000;56C:7200RPM#MODE%65>LATCH?ON"), ["320000", "56C", "7200RPM", "MODE", "65", "LATCH", "ON"]);
console.log(wordSplitter("32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25"),
  ["32.0500", "-6C", "PITCH", "-72", "ROLL", "21.3", "REGISTER", "90.345689", "ARMED", "-25"]);

console.log(wordSplitter("Cd9tGF8/BuH.6O:Ge1M!8x6exr/nvdm-l0xeTSOTBd|m3|xlkhe7nDQPqSTDV'gjZsDIP9+o07CZTFxYfvl*9VhIWP1FLRz+ReSdink8o06-e7O:Yl7UDtuIWeI"),
  ['Cd9tGF8', 'BuH.6O', 'Ge1M', '8x6exr', 'nvdm-l0xeTSOTBd', 'm3', 'xlkhe7nDQPqSTDV', 'gjZsDIP9', 'o07CZTFxYfvl', '9VhIWP1FLRz', 'ReSdink8o06-e7O', 'Yl7UDtuIWeI']);

  // "Cd9tGF8/BuH.6O:Ge1M!8x6exr/nvdm-l0xeTSOTBd|m3|xlkhe7nDQPqSTDV'gjZsDIP9+o07CZTFxYfvl*9VhIWP1FLRz+ReSdink8o06-e7O:Yl7UDtuIWeI"

  // exp: [ 'C',  '9',  'GF8',  'B',  'H.6O',  'G',  '1M',  '8',  '6',  '',  '',  '',  '',  '',  '',  '',  '-',  '0',  '',  'TSOTB',  '',  '',  '3',  '',  '',  '',  '',  '',  '7',  'DQP',  'STDV',  '',  '',  'Z',  'DIP9',  '',  '07CZTF',  'Y',  '',  '',  '',  '9V',  'IWP1FLR', '',  'R',  'S',  '',  '',  '',  '8',  '06-',  '7O',  'Y',  '7UD',  '',  'IW',  'I' ]
  // got: [ 'Cd9tGF8',  'BuH.6O',  'Ge1M',  '8x6exr',  'nvdm-l0xeTSOTBd',  'm3',  'xlkhe7nDQPqSTDV',  'gjZsDIP9',  'o07CZTFxYfvl',  '9VhIWP1FLRz',  'ReSdink8o06-e7O',  'Yl7UDtuIWeI' ]


  // best

/*
function wordSplitter(string){
  return string.split(/[^a-z\d.-]/i)
}
*/

/*
const wordSplitter = str => str.match(/[\w.-]+/g)
*/