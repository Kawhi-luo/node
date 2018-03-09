var fs = require("fs");
var data = '';
//fs.createReadStream:创建可读流
var readerStream = fs.createReadStream('input.txt');
//setEncoding:设置编码
readerStream.setEncoding('UTF8');
//data:有数据可读时触发
readerStream.on('data',function(chunk){
	data += chunk;
});
//end:没有更多数据可读时触发
readerStream.on('end',function(){
	console.log(data);
})
//error:接收和写入过程中错误时触发
readerStream.on('error',function(err){
	console.log(err.stack);
})

console.log('雷电招来');