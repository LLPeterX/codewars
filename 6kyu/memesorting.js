/* 
6kyu - Memesorting
https://www.codewars.com/kata/5b6183066d0db7bfac0000bb/train/javascript

Roma is programmer and he likes memes about IT,
Maxim is chemist and he likes memes about chemistry,
Danik is designer and he likes memes about design,
and Vlad likes all other memes.

You will be given a meme (string), and your task is to identify its category, and send it to the right receiver: IT - 'Roma', chemistry - 'Maxim', design - 'Danik', or other - 'Vlad'.

IT meme has letters b, u, g.
Chemistry meme has letters b, o, o, m.
Design meme has letters e, d, i, t, s.
If there is more than 1 possible answer, the earliest match should be chosen.

Note: letters are case-insensetive and should come in the order specified above.

*/

const memesorting = meme => {
    const match = [
        {
            person: "Roma",
            letters: "bug",
            index: 0
        },
        {
            person: "Maxim",
            letters: "boom",
            index: 0
        },
        {
            person: "Danik",
            letters: "edits",
            index: 0
        },
    ];
    for(let char of meme) {
        for(let i=0; i<match.length; i++) {
            if(char.toLowerCase() === match[i].letters[match[i].index]) {
                match[i].index++;
                if(match[i].index === match[i].letters.length) return match[i].person;
            }
        }
    }
    return "Vlad";
}

console.log(memesorting('This is programmer meme ecause it has bug'), 'Roma');
console.log(memesorting('This is also programbur meme gecause it has needed key word'), 'Roma');
console.log(memesorting('This is edsigner meme cause it has key word'), 'Danik');
console.log(memesorting('This could be chemistry meme but our gey word boom is too late'), 'Roma');
console.log(memesorting('This is mem'), 'Vlad');

// best

/* 
function memesorting(meme) {
  switch ([...meme].reverse().join('').match(/.*(g.*u.*b|m.*o.*o.*b|s.*t.*i.*d.*e|^)/i)[1].charAt(0).toLowerCase()) {
    case 's': return 'Danik';
    case 'g': return 'Roma';
    case 'm': return 'Maxim';
    default: return 'Vlad';
  }
}

*/