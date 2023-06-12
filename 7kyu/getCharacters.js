/* 
7kyu - Search JSON for any key value pair
https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6/train/javascript

We needs to be able to search for objects in the collection 
by any of the objects keys and return an array of all the matches.

The basic structure of the JSON object is shown below:

characters = {"characters": [
    {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
    // ......
]};
The JSON object is preloaded and can be accessed using the variable characters.
*/

function getCharacters(obj, key, val) {
  return obj.characters.filter(o => (o[key] || '').toLowerCase() === val.toLowerCase());
}
