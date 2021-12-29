var bonus = function (arr, s) {
  let d = s / arr.reduce((sum, v) => sum + 1 / v, 0);
  return arr.map(e => d / e);
}
