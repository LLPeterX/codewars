function mixbonacci(pattern, length) {

  let seq = {
    fib: function (n) {
      const a = (1 + 5 ** 0.5) / 2;
      return Math.round(a ** n / 5 ** 0.5);
    },
    pad: function (n) {
      let pprev = 1, prev = 0, curr = 0, next = 1;
      if (n < 3) {
        return n === 0 ? 1 : 0;
      }
      for (let i = 3; i <= n; i++) {
        next = pprev + prev;
        pprev = prev;
        prev = curr;
        curr = next;
      }
      return next;
    },
    pel: function (n) {
      if (n < 2) {
        return n;
      }

      let arr = new Array(n + 1);
      arr[0] = 0;
      arr[1] = 1;

      for (let i = 2; i <= n; i++) {
        arr[i] = 2 * arr[i - 1] + arr[i - 2];
      }
      return arr[n];
    },
    jac: function (n) {
      if (n < 2) {
        return n;
      }

      let arr = new Array(n + 1);
      arr[0] = 0;
      arr[1] = 1;

      for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + 2 * arr[i - 2];
      }
      return arr[n];
    },
    tri: function (n) {
      if (n == 0 || n == 1) {
        return 0;
      }

      if (n == 2) {
        return 1;
      }

      let arr = new Array(n + 1);
      arr[0] = 0;
      arr[1] = 0;
      arr[2] = 1;

      for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
      }
      return arr[n];
    },
    tet: function (n) {
      if (n < 3) {
        return 0;
      }

      if (n == 3) {
        return 1;
      }

      let arr = new Array(n + 1);
      arr[0] = 0;
      arr[1] = 0;
      arr[2] = 0;
      arr[3] = 1;

      for (let i = 4; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4];
      }
      return arr[n];
    },

    cnt: { fib: 0, pad: 0, jac: 0, pel: 0, tri: 0, tet: 0 }
  };



  if (length === 0 || pattern.length === 0) {
    return [];
  }
  let res = [], count = 0;
  while (count < length) {
    for (let i = 0; i < pattern.length && count++ < length; i++) {
      let p = pattern[i];
      res.push(seq[p](seq.cnt[p]));
      seq.cnt[p]++;
    }
  }
  return res;
}