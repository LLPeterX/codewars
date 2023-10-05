/* 
4kyu - Linear Equation Solver
https://www.codewars.com/kata/56d6d927c9ae3f115b0008dd

Write a method solve that accepts a list of linear equations 
that your method will have to solve. 
The output should be a Map object in JavaScript with a value 
for each variable in the equations. 
If the system does not have a unique solution 
(has infinitely many solutions or is unsolvable), return null.

Possible input equations have the following rules:

- Only the plus and minus operators are used on both the left and right hand side of the equation.
- Both sides of the equation can have variables; 
- One variable can appear in multiple terms, on both sides.
- Variable names are strings of arbitrary length.
- All coefficients are integers and generally fall within the range of -150 to 150, 
  with a few ranging from -1000 to 1000. Free terms are integers in range -20000 to 20000.
- Equations do not necessarily have variables.
- Equations have exactly one operator (+ or -) between terms.

For example :

"2x + 4y + 6z = 18"
"3y + 3z = 6"
"x + 2y = z - 3"

should result in a map :
x = 2
y = -1
z = 3

*/

/* 
см. https://externat.foxford.ru/polezno-znat/wiki-algebra-metody-resheniya-sistem-linejnyh-uravnenij
Вариант 2: метод почленного сложения уравнений

*/


function parseEpression(eq) {
  eq = eq.replace(/\s/g, '');
  let sign = 1, num = null;
  let tokens = [];
  for (let i = 0; i < eq.length; i++) {
    let c = eq[i];
    if (c === '+') {
      sign = 1;
      num = null;
    } else if (c === '-') {
      sign = -1;
      num = null;
    } else if (/\d/.test(c)) {
      let str = "";
      while (i < eq.length && /\d/.test(eq[i])) {
        str += eq[i];
        i++;
      }
      num = parseInt(str);
      if (i >= eq.length || !/[a-z]/.test(eq[i])) {
        tokens.push({ n: num * sign, v: null });
      }
      --i;
    } else if (/[a-z]/i.test(c)) {
      let str = "";
      while (i < eq.length && /[a-z]/i.test(eq[i])) {
        str += eq[i];
        i++;
      }
      --i;
      if (num !== null) {
        tokens.push({ n: num * sign, v: str });
      } else {
        tokens.push({ n: sign, v: str });
      }
    }
  }
  return tokens;
}

function joinVars(tokens) {
  let allVarsObj = tokens.reduce((o, v) => {
    if (v.v in o) {
      o[v.v].n += v.n;
    } else {
      o[v.v] = v;
    }
    return o;
  }, {});
  return Object.keys(allVarsObj).map(x => allVarsObj[x]);
}

//const toString = (eq, withZeroes = false) => (withZeroes ? eq.left.map(e => `${e.n}${e.v || ""}`).join('+').replace(/\+\-/g, '-') : eq.left.filter(e => e.n !== 0).map(e => `${e.n}${e.v || ""}`).join('').replace(/\+\-/g, '-')) + ' = ' + eq.right[0].n;

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function solve(data) {
  let equations = [];
  let vars = [];
  for (let equation of data) {
    let [leftExpr, rightExpr] = equation.split('=').map(parseEpression);
    // move all variables to left side
    let tmp = rightExpr.filter(e => e.v !== null);
    for (let t of tmp) {
      leftExpr.push({ n: -1 * t.n, v: t.v });
    }
    rightExpr = rightExpr.filter(e => e.v === null);
    // move constants to right
    tmp = leftExpr.filter(e => e.v == null);
    for (let t of tmp) {
      rightExpr.push({ n: -1 * t.n, v: null });
    }
    leftExpr = joinVars(leftExpr.filter(e => e.v !== null));
    let rValue = rightExpr.reduce((sum, e) => sum + e.n, 0);
    if (leftExpr.length > 0) {
      // find GCD and divide all numbers by GCD
      let g = [...leftExpr.map(e => e.n), rValue].reduce((gc, v) => gcd(gc, v));
      if (Math.abs(g) > 1) {
        leftExpr.forEach(e => {
          e.n /= g;
        });
        rValue /= g;
      }
      equations.push({ left: leftExpr, right: rValue });
      for (let v of leftExpr) {
        if (!vars.includes(v.v)) vars.push(v.v);
      }
    }
  }
  vars.sort((a, b) => a.localeCompare(b));

  // insert missing variables
  for (let i = 0; i < equations.length; i++) {
    let varsInExpression = equations[i].left.map(e => e.v);
    let missingVars = vars.filter(v => !varsInExpression.includes(v));
    for (let v of missingVars) {
      equations[i].left.push({ n: 0, v: v });
    }
    equations[i].left.sort((a, b) => a.v.localeCompare(b.v));
  }

  let n = vars.length;

  if (equations.length !== n) {
    console.log('remove equal equations...');
    // 1. remove same equations
    let uniqExpr = new Map();
    for (let e of equations) {
      let eKey = JSON.stringify(e.left);
      let negExpr = e.left.map(e => ({ n: e.n ? -1 * e.n : 0, v: e.v })), negR = -e.right;
      let eNegKey = JSON.stringify(negExpr);
      if (!uniqExpr.has(eKey) && !uniqExpr.has(eNegKey)) {
        uniqExpr.set(eKey, e.right);
      }
    }
    equations = [];
    for (let e of uniqExpr.keys()) {
      equations.push({ left: JSON.parse(e), right: uniqExpr.get(e) });
    }
  }
  // solve with Gauss
  let a = equations.map(e => [...e.left.map(e => e.n)]);
  let y = equations.map(e => e.right);
  if (n > a.length) return null;
  let x = Array(n);
  let k = 0, accuracy = 1e-6;
  while (k < n) {
    let max = Math.abs(a[k][k]);
    let index = k;
    for (let i = k + 1; i < n; i++) {
      if (Math.abs(a[i][k]) > max) {
        max = Math.abs(a[i][k]);
        index = i;
      }
    }
    if (max < accuracy) {
      //console.log(' (no solution) ');
      return null; // solution impossible
    }
    for (let j = 0; j < n; j++) {
      let temp = a[k][j];
      a[k][j] = a[index][j];
      a[index][j] = temp;
    }
    [y[index], y[k]] = [y[k], y[index]];
    // normalize
    for (let i = k; i < n; i++) {
      let tmp = a[i][k];
      if (Math.abs(tmp) < accuracy) continue;
      for (let j = 0; j < n; j++) a[i][j] /= tmp;
      y[i] /= tmp;
      if (i == k) continue;
      for (let j = 0; j < n; j++) a[i][j] -= a[k][j];
      y[i] -= y[k];
    }
    k++;
  }
  for (let k = n - 1; k >= 0; k--) {
    x[k] = y[k];
    for (let i = 0; i < k; i++)  y[i] -= a[i][k] * x[k];
  }
  let result = new Map();
  for (let i = 0; i < n; i++) {
    if (x[i] !== 0) result.set(vars[i], x[i]);
  }
  return result;
}




// console.log(solve(["2x=4"]), { x: 2 }); // OK
// console.log(solve(["2x+8y=4", "-x+4y=14"]), { x: -6, y: 2 }); // OK
// console.log(solve(["x=4y", "2x=8y", "x+y=5"]), { x: 4, y: 1 }); // OK
// console.log(solve(["x+y=7z-1", "6x+z=-3y", "4y+10z=-8x"]), { x: 1, y: -2 }); // OK
// console.log(solve(["2alpha+8beta=4", "-alpha+4beta=14"]), { alpha: -6, beta: 2 }); // OK
// console.log(solve(["2x=8y", "x+y=5"]), { x: 4, y: 1 }); // OK
// console.log(solve(["2x-y+3x=-2y+3x+9y", "-y+x+2y=5"]), { x: 4, y: 1 }); // OK
// console.log('unsolvables:');
console.log(solve(["x+y=0"]), null);
// console.log(solve(["x+2y=1", "2x=2-4y"]), null);
// console.log(solve(["x+y=1", "2x+2y=2"]), null);
// console.log('yet another solvables:');
// console.log(solve(["2x + 4y + 6z = 18", "3y + 3z = 6", "x + 2y = z - 3"]), { x: 2, y: -1, z: 3 })

// где-то fail: (testRandomSolvableReleated):
let e = ['-89t+85r-12700-52v+11s-48z+15s-x-66z+22w-37s+23z+83q+64u-34s-75y=-16y+36x+30r+44v',
  '-11z-178u-28t-144z+30v+168w+107w+119r-425x+80p-39088+306p-72t+400q+400y-284s-12967-36s=-26r-84p+52u',
  '-7z-68s-50v+68x+2q-32u+3p-39x+6z-93y-4w-5r-39u-44p+18t+4126=-10z-43q+42v',
  '8801-74z+59v+46s+7x+30t-8r+4v-44w-18t-21q+3p-82u-11y=34s-2961-9s-5z',
  '-187y+21w-264v+72t+16504+180q-73s-123s+81x-40u-137y-244u-164p+36z-20r=104v-35x+37w+17s+59s+48y',
  '-50s+52t-18x+72u-119y+16u+48z+25y-17p+28w+21t+57w+4q+78v-43r+15495=37s',
  '-84z+176r-94q-27833+329w-9260+170r+245y-71p+138s+609u+105s+161w+24q-14v-349t+223r+417x=-59s-115x-125s-131r+106t+69p',
  '-472y+142w+94u-360s-101600-712t+315r+418u+516q+125r-768v-176x+148q+44p-550z=44p+178z+120x-34w',
  '87t-3050-14s-9u+67q+39s+11x-27v+26u-23r+37y-28y-29z-44w+4z+35r+34p+22q-100x=-56p',
  '-6y+77u+35v-25w-25y+49x+4977-110z-90r+14928-78p-34w+45s+12q-13y=-45z+25y-43z',
  '-28y-76s+4q-27z-100t-18v+47r-78x+16u-71z+42w-40q+56p-20721=38q-26x-28t+15q-18s+43w-11y',
  '34u-72s+29r-80u+87q-7798+42w+13w-21x+11v-65t+80y-31z+50p=64x+2613-30s-44p+5v+22s+7q-45t',
  '38w-13950+86z+25v+93q+57y-33s-70t+57v+97p+10r-70w-93x+14u-39u+u-40r=15z-u',
  '-30p-12z+3s+76x+42r-75t+94w+87u-5299+48q+55r+51y-2v+3r-24w-58q=-10t-58s+16y-10p',
  '32r+38s+36q-8y-30t-6v-36s-95r-76x+91t+32z+4837+22u-55u-54w-55v-95p=64y-1566+15t-22t+42q',
  '226z+74z-110r-245y-181r+34885+765w+192u+600u+74q-131x+702v+104570-38q-378y-153p-223y-783s+395t=96r-138t+31x-124t-132z',
  '-32s+204t-31y-151v+5w+96z-185y-99u+59s+14417-18q-32v-6r-21s-228x-183r-251p-167w=34p-4792'
];
//console.log(solve(e)); // OK
//console.log(parseEquation('27x+3895-55u-97w+58q-52r+6q+23u+48r-41z+23v+35t-102x+20p+98s-40t+42t+10y=-1286-29r+17u-3y-15w-5u+z-52v-46y', [])); // верно

let e1 = ['-8w+31x-29v-12y+2w+26r-91z-2w+1994-58q+42s-52t-48u+90p+40t+3v=-27y',
  '-25y-39t-36q+21x-46q-38v-27r+100y+7589+100p-20v+35s+88w-75z+19u+37t=-2522-10w-62s',
  '95s+4362-17u-31p+84p+48t+30x+17u+23q-79y+57r+2t+78z+61w-45v-36v=53q+15r-16x-27x-1412',
  '-38y+56v-48r-75w-25z+22v-291-33q+11s-79x-6q-q-59p-t-8u-48u=-34r',
  '-20z+18y-1525-28q-27x-12s+72t-4508-64x-3t+16u+93z-19p+67r+2w+54v=-36r+3q+17r-42p-69y',
  '-100y+32y+67q+5926+21z-8v-67r-24r-8u-26t+6w-29s+53r+49p-43x-18z=-45x-52r-46s+21t+53z',
  '81y-10u+3070+56t-65x-61u+1589-24v-12q+67s+56v+23z+11p+1598-14p+5w-76r=-27r+23r-20z+4q+31s',
  '76y+67z+48p+68w+24t-8665-76s-36q+28z-x-59v-2841+55u+32r=12r+19u+24z-16u-21s+19q-37u+8r',
  '35s+44w+49s+43y+21u+14r-49w+14z+7187+71q-86s+24z+85x+12v-2q+77t-2p-96z=29u-32v-17u-21q-7t-8z-2379',
  '78r-78z+51p+74q-68u-69p-19w-19r+17088-95v-56s-15x+36t-16w+84y=-27p-54w+17s',
  '-40q+71w-92x+5r-40s+84v-t+43z+85p-8079+18y-32y=-19s+36z+53s+6p+2662+51t-14v'];
//console.log(solve(e1));

let e2 = ['-122r+97p+100v+485w-126s+380u-89s+348x+5y-180t+223p+44914-243r+309z+22394+225q=-92x-22412-136z-120p',
  '-71y-25t+27x-87p+66x+1832-33q+96z-69u-17r+54s-72w+50v+1828-24s+3478-11w=3t-20s',
  '-16t+11u-26x+38p+62r-43r+2917-27y+147x+76y+6z+5s-79w+77v+8726-23x-46u-65q=12x+15y-29u',
  '-548w+233x-57u+66z+45s+306y+78569+342p-585q+55r+168x+61r-144t+373x+693v+55r=163w-26218-3u+24z-12z',
  '13421+49w+4523+28y+20v-73r+61u+2t+88x+113z+18u+45q-38t+88p-27y-46s-3u-24z=-48w-3s',
  '-196t+342x+672z+127x-483u-187q-119r+350v+350s-465p+49966-581w-497y=44q+144p-182x',
  '-23t-49z-5s-64w-76u-28q-9v-2s+27p-23x-3210-20r-66y+104r=34s-11z+26x+31y-34q-33z+1027',
  '-67u-1524+z-24v+27z-66t-17q-23q+87p+18q-29y-60s-34w-34r+24p+68x-8t=446+24p+20u+21w+55r',
  '-64u+71z+14t+61q-62x+70w+92v-6s-27t+58p+64y-29r-36x-2320+21u=714-33x',
  '71y+7v-111y-4876+8u+51p+25v+75t+10r-34q-5x+59y-86r-13w-94z+51v-76s=-26u-41q-68y',
  '268p-536v-142w-320r+240t+132p+493x+62110+280u+343q-88w+203x+73u-264y+55u+215s=-79s-31061-154s-210q-207q-30997+98w',
  '-2318-52t-195x-18s+210w-100r-129u+192y+276v+6q+91q+213z-6784+13r+135p+13t=-39p-86q',
  '126x+392q-70851-376y-231s+54v+882z-405t-65y-648u-351p-305s-468r=-76q+211s+23676-63v',
  '34x-18p-57v+42p+2851-16z-61t+68y+22x-42v+63w+25v-37q+38s-34z+18r=-30w-1376-1416',
  '90x-5z-43w-33y+5t+51u+15521+18s+50p-56r-47r+2w+63r-100v+95q=-8s-5z+3x-33v-25t-30s',
  '-27z-9p+22w+55v-40y-75t-38x+4048+12219-3q+44p+24r-21w-48s+69u-5y=5x',
  '-46r-44t+16w-68s-t-125q-10503-72u-49y-16w+17p+30z-15s+59q+13v+30q-6x=56p-20x+6r-56q-68z-32q'];
//console.log(solve(e2));

let e3 = ['-68v+80p-62t+68r-19s+25q-86u-59q+29y+9r-11z-44x+21z+35u+9w+15x+7076-62y=-10y',
  '459p+42483+35z+72w-232x+260r-152s-408u+45z-162t+187r-447v-272q-184y-334t=-169r+97v-181p-14125',
  '-29p+50s-40p-58t-31v+18y-69r+15u+10u+63w+80z-80x+60q-1770-47v=2p-45s-39y-22t+35z+640',
  '-22p-33r-357+16u+54w-47u+33w+11x-90q-67s-62t-9t+35r+20v-8y-3p-33z-832=-24v-18v+2x+17z+358-29s+53u',
  '156v-195p+36r-11728-90q+148x-27w-120s+60u-232y-20t-104p-20w-211z-49p-w=57z-84v-30q-40t',
  '37x+5t-2932-52z-15z-58y+7v+46u-30s-26q-87p+9r-56w=-53v+31u-11q-44w',
  '-31y+104x+28r+34q-48r-14z-18w-16w+6289-22y+16z+30s+21p-41t+36u-67v-17s+30q=8x-16u',
  '-6x-253p-69r-123w-69w-180z+159s-25t-13x+72q-121v-7u+2835+19x+36s-72y=-4t+23p+21z+65v+63z-13u',
  '12w-2p-23r-258q+66x+273u-291s+11025+246y-58p-170z+33v-165t=-18w+118z-11r',
  '90x+5p-9u+44y-37y-7t+115r-39z+4s-2q-585-54w-19r-287+28u-19y-18r-17z=-50t-19t+8y+315-23w+33v-51v',
  '35x-50t-77s+14r+97y-3u+42x-22z+99p-97q-84w+33v-17u+10528=-11x+16r+30v',
  '-7r-385s-420w+495p+15v-318q+485y-110z-100u+39507-150t+344x-100t=167q-13133+3r-96x',
  '-28z-t-9t+96v+75u-3433-71p-23s+45w+15q+70x-32r+75y=-23u+50r+9q+12w',
  '41q-44p-20v-60s+96t+76x-74r+16y+76z-21u-9p-10684-9u-20z+43w-57w=-43r-22v',
  '56q-180s+288t-16u-93r+228x-14u+6v-32052-42w-97p+71z+46y+97z-60u=8q+62p-77q+27y+28y+2q-57y',
  '81u-70z+11v+3675+21r-97s-25p-33w-25r+82y-t+22x-91q+2t+43w+5q=56t-5p-10u+26z',
  '-64w+731+25u-69v-30u-10t+7v+8s-88z+214+6t-22p-24y-23r-60p-21q=3t-57s-45q-7u+10p'];
//console.log(solve(e3));

// best

/* 
//user3537505
function solve(equations) {
  const names = {};
  const m = [];
  const b = [];
  const result = new Map();
  let size = 0;

  const gcd = (a, b) => (b ? gcd(b, a % b) : a);

  const simplify = (i) => {
    let g = 0;
    const currentRow = m[i];
    for (const x of currentRow) {
      g = x ? (g ? gcd(g, Math.abs(x)) : x) : g;
    }
    if (g && g > 1) {
      for (let j = 0; j <= size; ++j) {
        currentRow[j] /= g;
      }
    }
  };

  for (const eq of equations) {
    const line = [];
    let r = 0;
    const sides = eq.split('=');

    for (let i = 0; i < 2; i++) {
      const side = sides[i] || '0';
      side.match(/[+\-]?[a-z0-9]+/gi).forEach((part) => {
        const coef = (part[0] === '-' ? -1 : 1) * (1 - i * 2) * (part.match(/\d+/g) || [1])[0];
        const name = (part.match(/[a-z]+/g) || [])[0];

        if (name) {
          if (names[name] === undefined) names[name] = size++;
          line[names[name]] = (line[names[name]] || 0) + coef;
        } else {
          r -= coef;
        }
      });
    }

    m.push(line);
    b.push(r);
  }

  for (const s of m) {
    for (let j = 0; j < size; ++j) {
      if (!s[j]) {
        s[j] = 0;
      }
    }
    s[size] = b[m.indexOf(s)];
  }

  simplify(0);
  for (let i = 0; i < m.length; ++i) {
    const currentRow = m[i];
    const v = currentRow.findIndex((x) => x);
    if (v === -1) continue;

    for (let j = i + 1; j < m.length; ++j) {
      if (m[j][v]) {
        const g = gcd(Math.abs(currentRow[v]), Math.abs(m[j][v]));
        const a = currentRow[v] / g;
        const b = m[j][v] / g;
        for (let k = 0; k <= size; ++k) {
          m[j][k] = m[j][k] * a - currentRow[k] * b;
        }
        simplify(j);
      }
    }
  }

  for (let i = m.length - 1; i >= 0; --i) {
    if (!m[i].some((x) => x)) {
      m.splice(i, 1);
    } else if (!m[i].some((x, j) => x && j !== size)) {
      return null;
    }
  }

  if (m.length !== size) {
    return null;
  }

  for (let i = m.length - 1; i >= 0; --i) {
    let sum = 0;
    let nextName;

    for (const name in names) {
      if (m[i][names[name]]) {
        if (result.has(name)) {
          sum += result.get(name) * m[i][names[name]];
        } else {
          nextName = name;
        }
      }
    }

    result.set(nextName, (m[i][size] - sum) / m[i][names[nextName]]);
  }

  return result;
}
*/