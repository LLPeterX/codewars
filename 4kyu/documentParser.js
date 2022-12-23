/* 
4kyu - Word, char and line count
https://www.codewars.com/kata/5286a298f8fc1b7667000c1c/train/javascript

*/

function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function () {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function () {
  let inSpaces = false;
  while (true) {
    let text = this.reader.getChunk();
    if (!text) break;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        inSpaces = true;
        this.charCount++;
        while (text[i + 1] === ' ' && i < text.length) {
          i++;
          this.charCount++;
        }
      } else if (text[i] === '\n') {
        this.lineCount++;
        inSpaces = true;
      } else {
        if (inSpaces) this.wordCount++;
        if (this.wordCount === 0) this.wordCount = 1;
        inSpaces = false;
        this.charCount++;
      }
      if (this.lineCount === 0) this.lineCount = 1;
    }
  }
};


// ------------ test ---------------
function FileReaderSimulator(text) {
  // var index = -1;
  // this.getChunk = function () {
  //   index++;
  //   return index == text.length ? "" : text.charAt(index);
  // };

  let len = 8, index = 0;
  this.getChunk = function () {
    if (index >= text.length) {
      return "";
    }
    let newText = text.slice(index, index + len);
    index += len;
    len -= 2;
    if (len < 2) len = 1;
    return newText;
    //return index == text.length ? "" : text.charAt(index);
  };

}

var fileContent = "Once upon a time.\n\n",
  //var fileContent = "Hello\nworld",
  //var fileContent = "You can try, but you'll never catch me.\nBazinga!",
  reader = new FileReaderSimulator(fileContent),
  parser = new DocumentParser(reader);

parser.parse();

console.log('char count=', parser.charCount, fileContent.trim().length);
console.log('word count=', parser.wordCount, 4);
console.log('lines=', parser.lineCount, 1);

// best

/* 
DocumentParser.prototype.parse = function()
{
  this.reset();
  var prevChar = ' ';
  var chunk = this.reader.getChunk();

  while (chunk !== '') {

    for (var i = 0; i < chunk.length; i++) {
      if (chunk[i] === '\n') {
        this.lineCount++;
        prevChar = ' ';
      } else {
        this.charCount++;
        if (this.lineCount === 0) this.lineCount = 1;
        if (chunk[i] !== ' ' && prevChar === ' ') {
          this.wordCount++;
        }
        prevChar = chunk[i];
      }
    }
    chunk = this.reader.getChunk();
  }
};
*/

/* 
DocumentParser.prototype.parse = function () {
  'use strict';
  
  let lastChar = null;
  let chunk = null;
  
  while (chunk = this.reader.getChunk()) {
    for (let i = 0; i < chunk.length; i++) {
      let currentChar = chunk[i];
      
      if (currentChar === '\n') {
        this.lineCount++;
      }
      else {
        this.charCount++;
        
        if (currentChar !== ' ') {
          if (!this.wordCount || lastChar === ' ' || lastChar === '\n') {
            this.wordCount++;
          }
        }
      }
      
      lastChar = currentChar;
    }
  }
  
  if (lastChar) {
    this.lineCount++;
  }
*/