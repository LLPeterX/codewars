/* 
6kyu - Take a picture !
https://www.codewars.com/kata/56c9f47b0844d85f81000fc2/train/javascript

Given a gallery of photos, write a function to sort through your pictures. 
You get a random hard disk drive full of pics, you must return an array 
with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN
*/
const getPhotoInfo = (photo) => photo.match(/(\d+)\D+(\d+)/).slice(1).map(Number);
const getPhotoId = (photo, [y, n] = getPhotoInfo(photo)) => y * 10000 + n;
function sortPhotos(pics) {
  pics.sort((a, b) => getPhotoId(a) - getPhotoId(b));
  const lastPhoto = getPhotoInfo(pics.at(-1));
  return [...pics.slice(-5), `${lastPhoto[0]}.img${lastPhoto[1] + 1}`];
};

console.log(sortPhotos(["2016.img1", "2016.img2", "2016.img3", "2016.img4", "2016.img5"]), '\n=>\n', ["2016.img1", "2016.img2", "2016.img3", "2016.img4", "2016.img5", "2016.img6"]);
console.log(sortPhotos(["2016.img4", "2016.img5", "2016.img1", "2016.img3", "2016.img2"]), '\n=>\n', ["2016.img1", "2016.img2", "2016.img3", "2016.img4", "2016.img5", "2016.img6"]);
console.log(sortPhotos(["2012.img2", "2016.img1", "2016.img3", "2016.img4", "2016.img5"]), '\n=>\n', ["2012.img2", "2016.img1", "2016.img3", "2016.img4", "2016.img5", "2016.img6"]);
console.log(sortPhotos(["2016.img1", "2013.img3", "2016.img2", "2015.img3", "2012.img7", "2016.img4", "2013.img5"]), ["2013.img5", "2015.img3", "2016.img1", "2016.img2", "2016.img4", "2016.img5"]);
console.log(sortPhotos(["2016.img7", "2016.img2", "2016.img3", "2015.img3", "2012.img8", "2016.img4", "2016.img5"]), ["2016.img2", "2016.img3", "2016.img4", "2016.img5", "2016.img7", "2016.img8"]);


// best

/* 
const reg = /(\d*)\.img(\d*)/;

function sortPhotos(pics){
  const sorted = pics.sort(compare).splice(-5);
  const last = sorted[sorted.length -1];
  sorted.push(last.replace(reg, (match, p1, p2) => `${p1}.img${(parseInt(p2) + 1)}`));
  return sorted;
}

function compare(a, b) {
  const regA = reg.exec(a);
  const regB = reg.exec(b);
  const year = parseInt(regA[1]) - parseInt(regB[1]);
  if (year == 0) {
    return parseInt(regA[2]) - parseInt(regB[2]);
  }
  return year;
}
*/

/* 
function sortPhotos(arr){
  arr = arr.map(s=>s.split('.img'))
           .sort((a,b)=>+a[0]-b[0]||+a[1]-b[1])
           .slice(-5)
  let [last,n] = arr[arr.length-1]
  arr.push([last,+n+1])
  return arr.map(([a,b])=>`${a}.img${b}`)
}
*/