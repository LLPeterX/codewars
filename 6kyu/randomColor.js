/* 
https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript
*/

var generateColor = function () {
  const randomColor = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  }
  return `#${randomColor()}${randomColor()}${randomColor()}`
};

//best
/*
function generateColor() {
  return `#${(0 | Math.random() * 0xEEEEEE + 0x111111).toString(16)}`
}
*/

/*
const generateColor=(r=()=>(~~(Math.random()*236+20)).toString(16))=>"#"+r()+r()+r()
*/