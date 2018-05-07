// 1.原型继承
// function A(){
// 	this.x = 'test';
// }

// A.prototype.getX = function() {
// 	console.log(this.x);
// };

// function B(){
// 	this.y = 'test2';
// 	this.x = 'test3';
// }

// B.prototype = new A;
// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
// fn.getX();//test
//只是改变了prototype的指向导致constructor都指向了A，且都变成了自己的公有属性

// 2.call继承
// function A() {
//     this.x = 'test';
// }

// A.prototype.getX = function () {
//     console.log(this.x);
// };

// function B() {
//     this.y = 'test2';
//     A.call(this);
// }

// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
//把A的私有有属性继承到了B的私有属性中。
// fn.getX();报错,这是A的公有属性，B没有继承


//3.冒充对象继承
// function A() {
//     this.x = 'test';
// }

// A.prototype.getX = function () {
//     console.log(this.x);
// };

// function B() {
//     this.y = 'test2';
//     var temp = new A;
//     for (key in temp) {
//         // this=>实例fn
//         this[key] = temp[key];
//     }
//     temp = null;
// }
// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
// 是把A的私有有属性继承到了B的私有属性中。没有继承父类的私有属性
// 讲真这种方法笑到我了，过河拆桥

//4.混合模式继承
// function A() {
//     this.x = 'test';
// }

// A.prototype.getX = function () {
//     console.log(this.x);
// };

// function B() {
//     this.y = 'test2';
//     A.call(this);
// }

// B.prototype = new A;
// B.prototype.constructor = B;//手动改变constructor
// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
// fn.getX();//=>test
//把父类（A）的公有属性和私有属性都继承到了子类（B）的公有属性中
//并且把父类的私有属性继承到了子类的私有属性中。
//复制了两份父类的私有属性

//5.Create模式继承
// function A() {
//     this.x = 'test';
// }

// A.prototype.getX = function () {
//     console.log(this.x);
// };

// function B() {
//     this.y = 'test2';
//     A.call(this);
// }

// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;//手动改变constructor
// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
// fn.getX();//=>test
//公对公 私对私 ie678不支持

//6.Create模式继承  兼容
// function A() {
//     this.x = 'test';
// }

// A.prototype.getX = function () {
//     console.log(this.x);
// };

// function B() {
//     this.y = 'test2';
//     A.call(this);
// }

// B.prototype = myCreate(A.prototype);
// B.prototype.constructor = B;//手动改变constructor
// var fn = new B;
// console.log(fn.x);//=>test
// console.log(fn.y);//=>test2
// fn.getX();//=>test

// function myCreate (o) {
//     function fn () {}
//     fn.prototype = o ;
//     return new fn;
// }