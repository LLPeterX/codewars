/* 
4kyu - Photoshop like - Magic Wand (select pixels by threshold)
https://www.codewars.com/kata/5912950fe5bc241f9b0000af
*/

const calcThreshold = (px1, px2) => Math.abs(px1[0] - px2[0]) + Math.abs(px1[1] - px2[1]) + Math.abs(px1[2] - px2[2]);

function magicWand(image, origin, threshold) {
  const visited = Array.from(image).map((row) => Array.from(row).fill(false));
  let sampleColor = image[origin.y][origin.x];
  const result = [];

  function flood(point) {
    if (point.x < 0 || point.x >= image[0].length || point.y < 0 || point.y >= image.length || visited[point.y][point.x]) return;
    visited[point.y][point.x] = true;
    if (calcThreshold(image[point.y][point.x], sampleColor) <= threshold) {
      result.push(point);
      //sampleColor = image[point.y][point.x];
      flood({ x: point.x - 1, y: point.y });
      flood({ x: point.x + 1, y: point.y });
      flood({ x: point.x, y: point.y - 1 });
      flood({ x: point.x, y: point.y + 1 });
    }
  }

  flood(origin);

  return result;
}

var image = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [2, 2, 2],
    [0, 0, 0],
    [2, 2, 2]
  ],
  [
    [2, 2, 2],
    [2, 2, 2],
    [0, 0, 0]
  ]
];
//console.log(magicWand(image, { x: 0, y: 0 }, 0));

const image1 = [
  [
    [0, 0, 0],
    [5, 5, 5],
    [255, 255, 255],
    [255, 255, 255],
    [70, 50, 30],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [5, 5, 5],
    [255, 255, 255],
    [255, 255, 255],
    [70, 50, 30],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [5, 5, 5],
    [255, 255, 255],
    [255, 255, 255],
    [70, 50, 30],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [5, 5, 5],
    [0, 0, 0],
    [0, 0, 0],
    [70, 50, 30],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [5, 5, 5],
    [0, 15, 5],
    [0, 15, 5],
    [70, 50, 30],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [4, 2, 0],
    [255, 255, 255],
    [255, 255, 255],
    [0, 15, 5],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [4, 2, 0],
    [255, 255, 255],
    [255, 255, 255],
    [0, 15, 5],
    [240, 0, 120]
  ],
  [
    [0, 0, 0],
    [4, 2, 0],
    [255, 255, 255],
    [255, 255, 255],
    [0, 15, 5],
    [240, 0, 120]
  ]
];

const expected = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 0, y: 6 },
  { x: 0, y: 7 }
];

//console.log(magicWand(image1, { x: 0, y: 0 }, 1));
//console.log(expected);

// FAIL
let res2 = magicWand(
  [
    [
      [172, 20, 92],
      [246, 151, 196],
      [100, 101, 172],
      [117, 197, 147],
      [8, 83, 193]
    ],
    [
      [133, 27, 203],
      [81, 172, 103],
      [183, 32, 157],
      [173, 153, 8],
      [147, 70, 100]
    ],
    [
      [31, 61, 232],
      [202, 101, 212],
      [122, 32, 87],
      [100, 152, 160],
      [38, 166, 74]
    ],
    [
      [187, 91, 86],
      [19, 103, 37],
      [204, 80, 8],
      [228, 192, 71],
      [142, 190, 30]
    ],
    [
      [165, 45, 108],
      [225, 94, 209],
      [42, 138, 100],
      [72, 181, 193],
      [33, 228, 208]
    ],
    [
      [206, 240, 78],
      [206, 127, 86],
      [131, 98, 178],
      [202, 74, 186],
      [126, 186, 14]
    ],
    [
      [86, 70, 65],
      [107, 193, 136],
      [127, 128, 129],
      [106, 237, 37],
      [118, 158, 90]
    ],
    [
      [157, 219, 244],
      [43, 185, 204],
      [7, 208, 38],
      [45, 11, 61],
      [115, 134, 105]
    ],
    [
      [219, 232, 20],
      [242, 62, 188],
      [155, 76, 86],
      [35, 45, 36],
      [218, 135, 32]
    ],
    [
      [247, 45, 25],
      [21, 175, 115],
      [154, 249, 244],
      [220, 228, 159],
      [112, 240, 149]
    ],
    [
      [181, 122, 217],
      [107, 215, 210],
      [198, 2, 246],
      [226, 132, 225],
      [132, 80, 58]
    ],
    [
      [83, 53, 49],
      [201, 185, 173],
      [183, 218, 132],
      [52, 8, 106],
      [46, 181, 195]
    ],
    [
      [138, 146, 68],
      [150, 58, 197],
      [125, 10, 117],
      [164, 121, 138],
      [247, 47, 114]
    ]
  ],
  { x: 0, y: 12 },
  210
);
let expected2 = [
  { x: +0, y: 10 },
  { x: +0, y: 11 },
  { x: +0, y: 12 },
  { x: 1, y: 10 },
  { x: 1, y: 11 },
  { x: 1, y: 12 },
  { x: 2, y: 9 },
  { x: 2, y: 10 },
  { x: 2, y: 11 },
  { x: 2, y: 12 },
  { x: 3, y: 9 },
  { x: 3, y: 10 },
  { x: 3, y: 11 },
  { x: 3, y: 12 },
  { x: 4, y: 9 },
  { x: 4, y: 10 },
  { x: 4, y: 12 }
];

console.log(res2);