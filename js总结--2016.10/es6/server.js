const koa=require('koa');//用const 不会被改变
const server = koa();

server.use(function*(next){
	//yield next;  如果在这里，页面显示abc。因为交给下一个之后又回到当前use
	this.body = 'abc';
	
	yield next;//暂停并交给下一个
});

server.use(function*(){
	
	this.body += 'dddd';
		
});
//body中为abcdddd

//
server.use(function*(){
	this.throw(300,"cuole");//向前台抛出错误
});



server.listen(8080);


//koa与express区别：
//依赖es6