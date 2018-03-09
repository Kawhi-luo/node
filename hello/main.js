var counter1 = require('./util/counter');
// 有出口就有进口
var counter2 = require('./util/counter');
/*用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象*/
console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());
//counter.js并没有因为被require了两次而初始化两次。