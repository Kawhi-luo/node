var fs = require('fs');
var data = '写入流wa';
//createWriteStream:创建可写流
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();
//finish - 所有数据已被写入到底层系统时触发。
writerStream.on('finish',function(){
	console.log('成了');
});

writerStream.on('error',function(){
	console.log('err.stack');
});

console.log('完事儿了');

//输出文件名相同会覆盖
//output.txt