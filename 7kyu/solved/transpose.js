/* 
7kyu - Transposing a song
https://www.codewars.com/kata/55b6a3a3c776ce185c000021/train/javascript

Transpose song in sharp notation
*/

function transpose(song, interval) {
  const sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const flat2sharp = {
    'Ab': 'G#',
    'Bb': 'A#',
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#'
  };
  return song.map(s => sharp[((sharp.indexOf(flat2sharp[s] || s) + interval) % 12 + 12) % 12]);
}

[
  [['A'], 1, ['A#']],
  [['E'], 5, ['A']],
  [['D#'], 8, ['B']],
  [['Ab', 'Gb'], 2, ['A#', 'G#']],
  [['Bb', 'C#', 'E'], -4, ['F#', 'A', 'C']],
  [['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'], -6, ['E', 'G', 'G#', 'A', 'E', 'C', 'A']],
  [['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'], 4, ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E']]
].forEach(function (tst) {
  let inp = tst[0], int = tst[1], exp = tst[2], msg = `Input: [${inp}], ${int}`;
  console.log(transpose(inp, int), exp, msg);
});