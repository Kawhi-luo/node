var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('pipe.txt');
//pipe:管道读取input,写入pipe;
readerStream.pipe(writerStream);

console.log('成了');