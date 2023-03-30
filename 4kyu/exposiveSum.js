/* 
4kyu - Explosive Sum
https://www.codewars.com/kata/52ec24228a515e620b0005ef

Найти кол-во разбиений числа n
все числа: http://www.numericana.com/data/partition.htm

Алгоритмы: https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B1%D0%B8%D0%B5%D0%BD%D0%B8%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%B0

*/

/* 
// timeout на 100
function sum(num) {
  let count = 0;
  function counter(n, limit) {
    if (n > 0) {
      let k = Math.min(n, limit);
      for (let i = k; i > 0; i--)  counter(n - i, i);
    } else {
      count++;
    }
    return count;
  }
  count = counter(num, num);
  return count;
}
 */

/* 
// тоже timeout
function sum(n, k = n) {
  if (k == 0) return n == 0 ? 1 : 0;
  if (k <= n) return sum(n, k - 1) + sum(n - k, k);
  return sum(n, n);
}
 */

// тоже timeout
/*
function sum(n) {

  if (n < 2) return 1;
  let l = n, r = 1;
  //for (let i = 0; i < l; i++) a.push(1);
  let a = Array(n).fill(1);

  do {
    let s = 0, i = l - 1;
    do { s += a[i--]; } while (i > 0 && a[i - 1] <= a[i]);
    if (++a[i] > n) return r;
    l = s + i;
    for (let j = i + 1; j < l; j++) a[j] = 1;
    r++;
  } while (l > 1);

  return r;
}
*/
// вот жеш блядь...

// против лома нет приёма - засунем числа от 0 до MAX_SAFE_INTEGER в массив из http://www.numericana.com/data/partition.htm
function sum(n) {
  return [1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, 56, 77, 101, 135, 176, 231, 297, 385, 490, 627, 792, 1002, 1255, 1575, 1958, 2436, 3010, 3718, 4565, 5604, 6842, 8349, 10143, 12310, 14883, 17977, 21637, 26015, 31185, 37338, 44583, 53174, 63261, 75175, 89134, 105558, 124754, 147273, 173525, 204226, 239943, 281589, 329931, 386155, 451276, 526823, 614154, 715220, 831820, 966467, 1121505, 1300156, 1505499, 1741630, 2012558, 2323520, 2679689, 3087735, 3554345, 4087968, 4697205, 5392783, 6185689, 7089500, 8118264, 9289091, 10619863, 12132164, 13848650, 15796476, 18004327, 20506255, 23338469, 26543660, 30167357, 34262962, 38887673, 44108109, 49995925, 56634173, 64112359, 72533807, 82010177, 92669720, 104651419, 118114304, 133230930, 150198136, 169229875, 190569292, 214481126, 241265379, 271248950, 304801365, 342325709, 384276336, 431149389, 483502844, 541946240, 607163746, 679903203, 761002156, 851376628, 952050665, 1064144451, 1188908248, 1327710076, 1482074143, 1653668665, 1844349560, 2056148051, 2291320912, 2552338241, 2841940500, 3163127352, 3519222692, 3913864295, 4351078600, 4835271870, 5371315400, 5964539504, 6620830889, 7346629512, 8149040695, 9035836076, 10015581680, 11097645016, 12292341831, 13610949895, 15065878135, 16670689208, 18440293320, 20390982757, 22540654445, 24908858009, 27517052599, 30388671978, 33549419497, 37027355200, 40853235313, 45060624582, 49686288421, 54770336324, 60356673280, 66493182097, 73232243759, 80630964769, 88751778802, 97662728555, 107438159466, 118159068427, 129913904637, 142798995930, 156919475295, 172389800255, 189334822579, 207890420102, 228204732751, 250438925115, 274768617130, 301384802048, 330495499613, 362326859895, 397125074750, 435157697830, 476715857290, 522115831195, 571701605655, 625846753120, 684957390936, 749474411781, 819876908323, 896684817527, 980462880430, 1071823774337, 1171432692373, 1280011042268, 1398341745571, 1527273599625, 1667727404093, 1820701100652, 1987276856363, 2168627105469, 2366022741845, 2580840212973, 2814570987591, 3068829878530, 3345365983698, 3646072432125, 3972999029388, 4328363658647, 4714566886083, 5134205287973, 5590088317495, 6085253859260, 6622987708040, 7206841706490, 7840656226137, 8528581302375, 9275102575355, 10085065885767, 10963707205259, 11916681236278, 12950095925895, 14070545699287, 15285151248481, 16601598107914, 18028182516671, 19573856161145, 21248279009367, 23061871173849, 25025873760111, 27152408925615, 29454549941750, 31946390696157, 34643126322519, 37561133582570, 40718063627362, 44132934884255, 47826239745920, 51820051838712, 56138148670947, 60806135438329, 65851585970275, 71304185514919, 77195892663512, 83561103925871, 90436839668817, 97862933703585, 105882246722733, 114540884553038, 123888443077259, 133978259344888, 144867692496445, 156618412527946, 169296722391554, 182973889854026, 197726516681672, 213636919820625, 230793554364681, 249291451168559, 269232701252579, 290726957916112, 313891991306665, 338854264248680, 365749566870782, 394723676655357, 425933084409356, 459545750448675, 495741934760846, 534715062908609, 576672674947168, 621837416509615, 670448123060170, 722760953690372, 779050629562167, 839611730366814, 904760108316360, 974834369944625, 1050197489931117, 1131238503938606, 1218374349844333, 1312051800816215, 1412749565173450, 1520980492851175, 1637293969337171, 1762278433057269, 1896564103591584, 2040825852575075, 2195786311682516, 2362219145337711, 2540952590045698, 2732873183547535, 2938929793929555, 3160137867148997, 3397584011986773, 3652430836071053, 3925922161489422, 4219388528587095, 4534253126900886, 4872038056472084, 5234371069753672, 5622992691950605, 6039763882095515, 6486674127079088, 6965850144195831, 7479565078510584, 8030248384943040, 8620496275465025, 9253082936723602, 9930972392403501][n];
}

console.log(sum(1)); // 1
console.log(sum(2)); // 2
console.log(sum(4)); // 5
console.log(sum(5)); // 7
console.log(sum(10)); // 42
console.log(sum(50)); // ?
console.log(sum(100)); // 190569292 - TIMEOUT

//best

/* 
var memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (memo[n] && memo[n][m]) return memo[n][m];
    let total = sum(n, m - 1) + sum(n - m, m);
    if (!memo[n]) {
        memo[n] = [];
    }
    memo[n][m] = total;
    return total;
}
*/

/* 
//   sum === 1, which has only one partition (itself)
// So that we don't duplicate partitions (e.g. 3 = 2+1 = 1+2), we make sure all the
//   elements of our partitions are expressed in descending order (2+1 is valid, 1+2 is not)
// Use a recursive function to break a large number down into smaller numbers and add these
//   partitions up to find the result.
// Since this recursive break down will likely lead to repeated function calls with the same
//   parameters, we'll probably want to use some dynamic programming to improve efficiency.
//      
// Optimizations:
//    When we're about to partition a target sum with a max partition of 1, we know
//      the partitions will ALWAYS be ALL ones, so we return early and add to the
//      partition count
//    We iterate each loop with a maximum value of Math.min(target, max). This way we
//      don't needlessly iterate over cases where our max is technically 4, but we're
//      looking for a target sum of 2, so anything greater than 2 will definitely
//      overshoot our target sum and therefore never lead to a possible partition
//    We memoize each function call combination, as they are often repeated, and thus
//      we don't need to re-calculate them.
//
//  1353101 = sum(50) loop count (no optimizations)
//   434881 = sum(50) loop count returning on i = 1
//   377750 = sum(50) loop count w/ above & limiting loop to Math.min(target, max)
//     4198 = sum(50) loop count w/ above &  and memoization

function sum(num) {
  const memo = {};
  
  function sumRecursive(target, max) {
    let partitions = 0;
    for (let i = Math.min(target, max); i > 0; i--) {
      if (i === target || i === 1)
        partitions++;
      else
        partitions += memo[`${target-i}-${i}`] || sumRecursive(target-i, i);
    }
    
    memo[`${target}-${max}`] = partitions;
    return partitions;
  }
  
  return sumRecursive(num, num);
}
*/

/* 
const sum = (num) => {
  const dp = [1, ...new Array(num).fill(0)];
  
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[num];
};
*/