/* 
6kyu - extract file name
https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript

You have to extract a portion of the file name as follows:

- Assume it will start with date represented as long number
- Followed by an underscore
- You'll have then a filename with an extension
- it will always have an extra extension at the end
*/

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.match(/\d+_(.+)\.(.+)$/)[1];
  }
}

