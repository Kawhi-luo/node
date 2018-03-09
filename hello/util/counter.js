var i = 0;
function count(){
	return ++i;
}
exports.count = count;
/*exports对象是当前模块的导出对象，用于导出模块公有方法和属性*/