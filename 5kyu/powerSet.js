/* 
5kyu - By the Power Set of Castle Grayskull
https://www.codewars.com/kata/53d3173cf4eb7605c10001a8/train/javascript

Write a function that returns all of the sublists of a list/array.
*/

function power(array) {
  return array.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ),
    [[]]
  );
}

// best

/* 
function power(s) {
  return s.reduce( function(p, e) {
      return p.concat( p.map ( function(sub) { 
        return sub.concat([e]);}));
    }, [[]]);
}
*/

/* 
function power(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(ary[i]));
        }
    }
    return ps;
}
*/